import express from 'express';
import { Theatre } from '../models/theatreModel.js';

const router = express.Router();

// Route for creating a new theatre
router.post('/', async (req, res) => {
    try {
        const newTheatre = await Theatre.create(req.body);
        res.status(201).json(newTheatre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting all theatres
router.get('/', async (req, res) => {
    try {
        const theatres = await Theatre.find({});
        res.status(200).json(theatres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting a single theatre by ID
router.get('/:id', async (req, res) => {
    try {
        const theatre = await Theatre.findById(req.params.id);
        if (!theatre) {
            return res.status(404).json({ message: 'Theatre not found' });
        }
        res.status(200).json(theatre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for updating a theatre by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedTheatre = await Theatre.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTheatre) {
            return res.status(404).json({ message: 'Theatre not found' });
        }
        res.status(200).json(updatedTheatre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for deleting a theatre by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedTheatre = await Theatre.findByIdAndDelete(req.params.id);
        if (!deletedTheatre) {
            return res.status(404).json({ message: 'Theatre not found' });
        }
        res.status(200).json({ message: 'Theatre deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
