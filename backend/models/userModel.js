import mongoose from 'mongoose';

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
    status: {
        type: Number,
        trim: true,
    },
    // New fields for password reset
    resetPasswordToken: {
        type: String,
        default: null,
    },
    resetPasswordExpires: {
        type: Date,
        default: null,
    },
    // Existing fields
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
    }
});

export const User = mongoose.model('User', userSchema);
