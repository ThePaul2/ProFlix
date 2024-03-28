import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { Payment } from './paymentModel.js';

const userSchema = mongoose.Schema({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
    country: {
        type: String,
        trim: true,
    },
    street1: {
        type: String,
        trim: true,
    },
    street2: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    resetPasswordToken: {
        type: String,
        default: null,
    },
    resetPasswordExpires: {
        type: Date,
        default: null,
    },
    status: {
        type: Number,
        trim: true,
    },
    payments: {
        type: [Payment.Schema],
        validate: [paymentsLimit, '{PATH} exceeds the limit of 3']
    },
    promo: {
        type: Boolean,
        default: false 
    },
});

function paymentsLimit(val) {
    return val.length <= 3;
}

// Encrypt password before saving
userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

export const User = mongoose.model('User', userSchema);
