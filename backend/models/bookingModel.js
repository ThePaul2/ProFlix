import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    showtimeID: {
        type: String,
        required: true,
    },
    bookingDate: {
        type: String,
        required: true,
    },
    numTickets: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    } 
});

export const Booking = mongoose.model('Booking', bookingSchema);