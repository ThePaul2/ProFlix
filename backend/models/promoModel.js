import mongoose from 'mongoose';

const promoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        trim: true,
    },
    discount:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        trim: true,
    },
    code:{
        type: String,
        trim: true,
    }
});

export const Promo = mongoose.model('Promo', promoSchema);

