import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema({
    cardNumber: {
        type: String,
        trim: true,
        minlength: 16,
    },
    exp: {
        type: Number,
        trim: true,
    },
    CVN: {
        type: String,
        trim: true,
    }, 
    cardFirst: {
        type: String,
        trim: true,
    },
    cardLast: {
        type: String,
        trim: true,
    },
});

export const Payment = mongoose.model('Payment', paymentSchema);
