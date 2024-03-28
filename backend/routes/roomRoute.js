import express from 'express';
import { Room } from '../models/roomModel.js';

const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new room
router.post('/', async (req, res) => {
    const room = new Room({
        name: req.body.name,
        seats: req.body.seats
    });

    try {
        const newRoom = await room.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a room
router.put('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) return res.status(404).json({ message: 'Room not found' });

        room.name = req.body.name;
        room.seats = req.body.seats;

        const updatedRoom = await room.save();
        res.json(updatedRoom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a room
router.delete('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) return res.status(404).json({ message: 'Room not found' });

        await room.remove();
        res.json({ message: 'Room deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
