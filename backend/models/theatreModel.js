import mongoose from 'mongoose';

const theatreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    rooms: {
        type: Number,
        required: true,
    }
});

export const Theatre = mongoose.model('Theatre', theatreSchema);

