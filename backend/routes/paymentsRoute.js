import express from 'express';
import { Payment } from '../models/paymentModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendResetPasswordEmail, sendRegistrationConfirmationEmail } from '../utils/emailService.js';

const router = express.Router();

// Route for saving a new Payment
router.post('/', async (request, response) => {
  try {
    const {
      cardNumber,
      exp,
      CVN,
      cardFirst,
      cardLast
    } = request.body;

    // Log the received request body
    console.log('Received request body:', request.body);

    const hashedCardNumber = cardNumber ? await bcrypt.hash(cardNumber.toString(), 10) : undefined;
    const hashedCVN = CVN ? await bcrypt.hash(CVN.toString(), 10) : undefined;

    const newPayment = await Payment.create({

      cardNumber: hashedCardNumber,
      exp,
      CVN: hashedCVN,
      cardFirst,
      cardLast
    });

    return response.status(201).json(newPayment);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

// Route for getting all payment
router.get('/', async (request, response) => {
  try {
    const payments = await Payment.find({});
    return response.status(200).json({ count: payments.length, data: payments });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

// Route for getting one payment by id
router.get('/:id', async (request, response) => {
  try {
    const payment = await Payment.findById(request.params.id);
    if (!payment) {
      return response.status(404).json({ message: 'Payment not found' });
    }
    return response.status(200).json(payment);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

// Route for updating a payment
router.put('/:id', async (request, response) => {
  try {
    const { firstName, lastName, email } = request.body;
    if (!firstName || !lastName || !email) {
      return response.status(400).json({
        message: 'Please provide all required fields: firstName, lastName, email',
      });
    }

    const updatedPayment = await Payment.findByIdAndUpdate(
      request.params.id,
      { firstName, lastName, email },
      { new: true } // Return the updated document
    );
    if (!updatedPayment) {
      return response.status(404).json({ message: 'Payment not found' });
    }
    return response.status(200).json(updatedPayment);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

// Route for deleting a payment
router.delete('/:id', async (request, response) => {
  try {
    const deletedPayment = await Payment.findByIdAndDelete(request.params.id);
    if (!deletedPayment) {
      return response.status(404).json({ message: 'Payment not found' });
    }
    return response.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
});

export default router;