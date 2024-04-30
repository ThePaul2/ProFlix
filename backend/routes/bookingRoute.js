import express from 'express';
import { Booking } from '../models/bookingModel.js';
import { orderConfirmation } from '../utils/emailService.js';

const router = express.Router();

// Route for creating a new booking
router.post('/', async (req, res) => {
    try {
        const { userID, showtimeID, bookingDate, numTickets, price, selectedSeats } = req.body;
        const newBooking = await Booking.create({ userID, showtimeID, bookingDate, numTickets, price, selectedSeats });
        res.status(201).json(newBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find({});
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/showtime/:showtimeID', async (req, res) => {
    try {
        const { showtimeID } = req.params;
        const bookings = await Booking.find({ showtimeID });
        if (bookings.length === 0) {
            return res.status(404).json({ message: 'Bookings for this showtime not found' });
        }
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
/*
// Route for getting bookings by movieID
router.get('/:movieID', async (req, res) => {
    try {
        const { movieID } = req.params;
        const bookings = await Booking.find({ movieID });
        if (bookings.length === 0) {
            return res.status(404).json({ message: 'Bookings for this movie not found' });
        }
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
*/

// Route for getting a single booking by ID
router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for updating a booking by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(updatedBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for deleting a booking by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.post('/email', async (req, res) => {
    try {
      const { email, orderID, date, showtime } = req.body;

      
      await orderConfirmation(email, orderID, date, showtime);
    
      res.json({ message: 'Emails sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  



export default router;
