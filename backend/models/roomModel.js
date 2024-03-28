import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    seats:{
        type: Number,
        required: true,
    }
});

export const Room = mongoose.model('Room', roomSchema);

