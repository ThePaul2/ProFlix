import express from 'express';
import { Movie } from '../models/movieModel.js';

const router = express.Router();

// Route for creating a new movie
router.post('/', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting a single movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for updating a movie by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(updatedMovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for deleting a movie by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to get all movies in a specific genre
router.get('/movies/:genre', async (req, res) => {
    try {
      const { genre } = req.params;
  
      // Find all movies with the specified genre
      const movies = await Movie.find({ genre });
  
      // Check if any movies are found
      if (movies.length === 0) {
        return res.status(404).json({ message: 'No movies found in this genre.' });
      }
  
      // If movies are found, return them
      res.status(200).json(movies);
    } catch (error) {
      console.error('Error retrieving movies by genre:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
export default router;
