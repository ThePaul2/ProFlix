import { useState, useEffect } from 'react';
import movieServices from '../services/movieServices';

const useMovieInfo = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const moviesData = await movieServices.getAll();
      setMovies(moviesData);
      setFilteredMovies(moviesData); 
    } catch (error) {
      console.error('Error fetching movies:', error);
      // You might want to show an error message to the user
    }
  };

  // Handler for searching movies
  const handleSearch = (searchTerm) => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
    console.log('Searching for:', searchTerm);
  };

  // Handler for filtering movies
  const handleFilter = (filter) => {
    // Logic for filtering movies based on selected filter
    console.log('Filtering by:', filter);
  };

  // Return movies and functions to fetch, search, and filter movies
  return { movies, fetchMovies, handleSearch, handleFilter };
};

export default useMovieInfo;
