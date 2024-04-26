import express from 'express';
import { Ticket } from '../models/ticketModel.js';

const router = express.Router();

// Route for creating a new ticket
router.post('/', async (req, res) => {
    try {
        const newTicket = await Ticket.create(req.body);
        res.status(201).json(newTicket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting all tickets
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find({});
        res.status(200).json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting a single ticket by ID
router.get('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
        if (!deletedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTicket = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json(updatedTicket);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
