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
    }
});

export const Promo = mongoose.model('Promo', promoSchema);

