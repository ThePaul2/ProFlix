import mongoose from 'mongoose';

const showtimeSchema = mongoose.Schema({
    movieTitle: {
        type: String,
        required: true, 
    },
    roomName: {
        type: String,
        trim: true,
    },
    theaterName:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
        trim: true,
    },
    time:{
        type: String,
        required: true,
        trim: true,
    }
});

export const Showtime = mongoose.model('Showtime', showtimeSchema);

