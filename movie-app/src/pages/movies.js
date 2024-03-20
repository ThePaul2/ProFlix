import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MovieSlider from '../components/MovieSlider';
import SearchBar from '../components/SearchBar';
import movieServices from '../services/movieServices';

const Catalog = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const moviesData = await movieServices.getAll();
      setMovies(moviesData);
      setFilteredMovies(moviesData); // Initialize filteredMovies with all movies
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

  return (
    <div className="bg-gray-800 min-h-screen pt-20">
      {/* Gray background */}
      <Navbar />
      {/* Search bar and filters */}
      <div className="container mx-auto px-4 py-10">
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
        {/* Render each movie list */}
        {filteredMovies.map(movie => (
          <div key={movie.id} className="movie">
            <img src={movie.poster} alt={movie.title} style={{ width: '200px', height: '300px' }} />
            <div>
              <h2>{movie.title}</h2>
              <p>MPAA Rating: {movie.mpaaRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
