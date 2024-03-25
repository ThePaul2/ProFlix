import React, { useState, useEffect } from 'react';
import movieServices from '../services/MovieServices';

const MovieInfo = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await movieServices.getAll();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies(); 
  }, []);
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} - {movie.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieInfo;
