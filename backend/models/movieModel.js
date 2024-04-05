import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    movieTitle: {
        type: String,
        required: true, 
    },
    genre: {
        type: String,
        required: true, 
    },
    cast:{
        type: [String],
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
    trailer:{
        type: String,
        required: true,
    },
    poster:{
        type: String,
        required: true,
    },
    rating:{
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R'],
    },
    releaseDate:{
        type: Date,
        required: true,
    },
    duration:{
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Now Playing', 'Coming Soon'],
        default: 'Coming Soon'
    }

});

export const Movie = mongoose.model('Movie', movieSchema);
