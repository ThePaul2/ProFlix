import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendResetPasswordEmail from '../utils/emailService.js';

const router = express.Router();

// Route for saving a new User
router.post('/', async (request, response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      country,
      street1,
      street2,
      city,
      state,
      cardNumber,
      exp,
      status,
      CVN,
      cardFirst,
      cardLast
    } = request.body;

    // Log the received request body
    console.log('Received request body:', request.body);

    // Hash sensitive fields
    const hashedPassword = await bcrypt.hash(password, 10);

    const hashedCardNumber = cardNumber ? await bcrypt.hash(cardNumber.toString(), 10) : undefined;
    const hashedCVN = CVN ? await bcrypt.hash(CVN.toString(), 10) : undefined;

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      country,
      street1,
      street2,
      city,
      state,
      cardNumber: hashedCardNumber,
      exp,
      status,
      CVN: hashedCVN,
      cardFirst,
      cardLast
    });

    return response.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

// Route for getting all users
router.get('/', async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).json({ count: users.length, data: users });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

// Route for getting one user by id
router.get('/:id', async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json(user);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

// Route for updating a user
router.put('/:id', async (request, response) => {
  try {
    const { firstName, lastName, email } = request.body;
    if (!firstName || !lastName || !email) {
      return response.status(400).json({
        message: 'Please provide all required fields: firstName, lastName, email',
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      request.params.id,
      { firstName, lastName, email },
      { new: true } // Return the updated document
    );
    if (!updatedUser) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

// Route for deleting a user
router.delete('/:id', async (request, response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(request.params.id);
    if (!deletedUser) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

// Route for handling forgot password request
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const jwtSecret = process.env.JWT_SECRET;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate reset token
    const resetToken = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

    // Update user with reset token and expiration time
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
    await user.save();

    // Send email with reset link
    await sendResetPasswordEmail(user.email, resetToken);
    
    res.json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route for handling password reset request
router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await User.findOne({ 
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/login/:email', async (request, response) => {
  try {
    const email = request.params.email;

    // Search for the user by email in the database and specify the fields to include
    const user = await User.findOne({ email }, { password: 1, email: 1, status: 1 });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    // Return user data including the password, email, and status fields
    return response.status(200).json(user);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});





export default router;


























/*






import { User } from '../models/userModel.js';

const router = express.Router();

// Route for saving a new User
router.post('/', async (request, response) => {
  try {
    const { firstName, lastName, email } = request.body;
    if (!firstName || !lastName || !email) {
      return response.status(400).send({
        message: 'Please provide all required fields: firstName, lastName, email',
      });
    }

    // Additional validation for email could be added here

    const newUser = await User.create({ firstName, lastName, email });
    return response.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

// Route for getting all users
router.get('/', async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).json({ count: users.length, data: users });
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

// Route for getting one user by id
router.get('/:id', async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json(user);
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

// Route for updating a user
router.put('/:id', async (request, response) => {
  try {
    const { firstName, lastName, email } = request.body;
    if (!firstName || !lastName || !email) {
      return response.status(400).send({
        message: 'Please provide all required fields: firstName, lastName, email',
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      request.params.id,
      { firstName, lastName, email },
      { new: true } // Return the updated document
    );
    if (!updatedUser) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

// Route for deleting a user
router.delete('/:id', async (request, response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(request.params.id);
    if (!deletedUser) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: 'Internal server error' });
  }
});

export default router;
 */