import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    bookingNumber: {
        type: String,
        required: true, 
    },
    totalSeats: {
        type: Number,
        required: true,
    },
    showTime:{
        type: Number,
        required: true,
    }
});

export const Booking = mongoose.model('Booking', bookingSchema);

