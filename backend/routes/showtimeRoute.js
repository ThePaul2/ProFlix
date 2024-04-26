import express from 'express';
import { Showtime } from '../models/showtimeModel.js';

const router = express.Router();

// Create a new showtime
router.post('/', async (req, res) => {
    try {
        const showtime = new Showtime(req.body);
        await showtime.save();
        res.status(201).send(showtime);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all showtimes
router.get('/', async (req, res) => {
    try {
        const showtimes = await Showtime.find();
        res.send(showtimes);
    } catch (error) {
        res.status(500).send(error);
    }
});
/*
// Get showtime by id
router.get('/:id', async (req, res) => {
    try {
        const showtime = await Showtime.findById(req.params.id);
        if (!showtime) {
            return res.status(404).send();
        }
        res.send(showtime);
    } catch (error) {
        res.status(500).send(error);
    }
});
*/
// Update showtime by id
router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['movie_id', 'room_id', 'theater_id', 'date', 'time'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const showtime = await Showtime.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!showtime) {
            return res.status(404).send();
        }
        res.send(showtime);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete showtime by id
router.delete('/:id', async (req, res) => {
    try {
        const showtime = await Showtime.findByIdAndDelete(req.params.id);
        if (!showtime) {
            return res.status(404).send();
        }
        res.send(showtime);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get showtime by movieTitle
router.get('/:movieTitle', async (req, res) => {
    try {
        const showtime = await Showtime.find({ movieTitle: req.params.movieTitle });
        if (!showtime) {
            return res.status(404).send('Showtime not found');
        }
        res.send(showtime);
    } catch (error) {
        console.error('Error fetching showtime:', error);
        res.status(500).send('Internal Server Error');
    }
});


export default router;
