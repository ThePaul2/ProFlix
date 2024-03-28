import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    movieTitle: {
        type: String,
        required: true, 
    },
    category: {
        type: String,
        required: true, 
    },
    cast:{
        type: String,
        required: true,
    },
    director:{
        type: String,
        required: true,
    },
    producer:{
        type: String,
        required: true,
    },
    synopsis:{
        type: String,
        required: true,
    },
    review:{
        type: String,
        trim: true,
    },
    trailer:{
        type: String,
        required: true,
    },
    poster:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        trim: true,
    },
    date:{
        type: Number,
        required: true,
    },
    time:{
        type: Number,
        required: true,
    }

});

export const Movie = mongoose.model('Movie', movieSchema);
