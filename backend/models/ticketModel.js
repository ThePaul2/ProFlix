import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema({
    child: {
        type: Number,
        required: true, 
    },
    adult: {
        type: Number,
        required: true,
    },
    senior: {
        type: Number,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    taxes: {
        type: Number,
        required: true,
    },
    
});

export const Ticket = mongoose.model('Ticket', ticketSchema);
