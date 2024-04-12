import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    movieID: {
        type: String,
        required: true,
    },
    bookingNumber: {
        type: String,
        required: true, 
    },
    totalSeats: {
        type: Number,
        required: true,
    },
    showTimes:{
        type: [String],
        required: true,
    },
    showTimeDate: {
        type: [String],
        required: true,
    }    
});

export const Booking = mongoose.model('Booking', bookingSchema);

