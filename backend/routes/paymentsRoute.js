import express from 'express';
import { Payment } from '../models/paymentModel.js';

const router = express.Router();

// Create a new payment
router.post('/', async (req, res) => {
    try {
        const newPayment = await Payment.create(req.body);
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all payments
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single payment
router.get('/:id', getPayment, (req, res) => {
    res.json(res.payment);
});

// Update a payment
router.patch('/:id', getPayment, async (req, res) => {
    if (req.body.CVN != null) {
        res.payment.CVN = req.body.CVN;
    }
    try {
        const updatedPayment = await res.payment.save();
        res.json(updatedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a payment
router.delete('/:id', getPayment, async (req, res) => {
    try {
        await res.payment.remove();
        res.json({ message: 'Payment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getPayment(req, res, next) {
    try {
        const payment = await Payment.findById(req.params.id);
        if (payment == null) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.payment = payment;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export default router;