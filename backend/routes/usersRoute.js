import express from 'express';
import { User } from '../models/userModel.js';
import { Payment } from '../models/paymentModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendResetPasswordEmail, sendRegistrationConfirmationEmail } from '../utils/emailService.js';

const router = express.Router();

// Route for creating a new user
router.post('/', async (req, res) => {
  try {
      // Extract user data from request body
      const { firstName, lastName, email, password, country, street1, street2, city, state, status,promo } = req.body;

      // Create a new user instance
      const newUser = new User({
          firstName,
          lastName,
          email,
          password,
          country,
          street1,
          street2,
          city,
          state,
          status,
          promo
      });

      // Save the user to the database
      const savedUser = await newUser.save();

      res.status(201).json(savedUser); // Respond with the saved user object
  } catch (error) {
      res.status(400).json({ message: error.message }); // Handle error if any
  }
});

// Route for creating a new payment for a user
router.post('/:userId/payments', async (req, res) => {
  try {
      const { userId } = req.params; // Extract user ID from request params
      const user = await User.findById(userId); // Find the user by ID

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Extract payment data from request body
      const { cardNumber, exp, CVN, cardFirst, cardLast } = req.body;

      // Create a new payment instance
      const newPayment = new Payment({
          cardNumber,
          exp,
          CVN,
          cardFirst,
          cardLast,
          userEmail: user.email // Assuming user's email is associated with the payment
      });

      // Save the new payment to the database
      const savedPayment = await newPayment.save();

      // Add the payment to the user's payments array
      user.payments.push(savedPayment);

      // Save the updated user to the database
      await user.save();

      res.status(201).json(savedPayment); // Respond with the created payment object
  } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Error adding payment" });
  }
});

// Route for getting a user's payments
router.get('/:userId/payments', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find all payments associated with the user
    const payments = await Payment.find({ userEmail: user.email });

    // Construct an array of payment objects with IDs included
    
    console.log(payments);
    return res.status(200).json({ payments: payments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Update payment information
router.put('/payments/:paymentId', async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    const updatedPaymentData = req.body; // Assuming request body contains updated payment data
    console.log('Updating payment with ID:', paymentId);
    console.log('Updated payment data:', updatedPaymentData);

    // Find the payment by ID and update it
    const updatedPayment = await Payment.findByIdAndUpdate(paymentId, updatedPaymentData, { new: true });

    if (!updatedPayment) {
      console.log('Payment not found');
      return res.status(404).json({ message: 'Payment not found' });
    }

    console.log('Payment updated successfully:', updatedPayment);
    return res.status(200).json({ message: 'Payment updated successfully', payment: updatedPayment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
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
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user fields
    for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        user[key] = req.body[key];
      }
    }

    // Save updated user
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
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

router.post('/reset-password/:email', async (req, res) => {
  const { email } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/confirmation', async (req, res) => {
  const { email } = req.body;

  try {
    // Send email with registration confirmation link
    await sendRegistrationConfirmationEmail(email);
    
    res.json({ message: 'Confirmation email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route for getting user ID by email
router.get('/get-userid/:email', async (request, response) => {
  try {
    const { email } = request.params;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    // Return the user ID
    return response.status(200).json({ userId: user._id });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/check-email/:email', async (request, response) => {
  try {
    const { email } = request.params;

    // Search for the user by email in the database
    const user = await User.findOne({ email });

    if (user) {
      // Email exists in the database
      return response.status(200).json({ exists: true });
    } else {
      // Email does not exist in the database
      return response.status(200).json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/activate/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's status to 1
    user.status = 0;
    await user.save();

    res.json({ message: 'Activated successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.put('/status/:id', async (req, res) => {
  try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
          return res.status(404).json({ message: 'Promo not found' });
      }
      res.status(200).json(updatedUser);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for getting user ID by email
router.get('/get-userid/:email', async (request, response) => {
  try {
    const { email } = request.params;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    // Return the user ID
    return response.status(200).json({ userId: user._id });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});




export default router;