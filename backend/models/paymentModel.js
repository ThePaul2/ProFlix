import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const paymentSchema = mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
        trim: true,
        minlength: 16,
    },
    exp: {
        type: Number,
        required: true,
        trim: true,
    },
    CVN: {
        type: String,
        trim: true,
        required: true,
    }, 
    cardFirst: {
        type: String,
        trim: true,
        required: true,
    },
    cardLast: {
        type: String,
        required: true,
        trim: true,
    },
    userEmail: {
        type: String,
        trim: true,
        required: true,
    }
});

// Encrypt CVN before saving
paymentSchema.pre('save', async function(next) {
    const payment = this;
    if (!payment.isModified('CVN')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(payment.CVN, salt);
        payment.CVN = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

export const Payment = mongoose.model('Payment', paymentSchema);
