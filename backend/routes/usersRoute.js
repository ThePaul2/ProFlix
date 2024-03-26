import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

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

    // Check if optional fields exist and hash them if they do
    const hashedCardNumber = cardNumber ? await bcrypt.hash(cardNumber.toString(), 10) : undefined;
    const hashedCVN = CVN ? await bcrypt.hash(CVN.toString(), 10) : undefined;

    // Create a new user with hashed sensitive fields
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