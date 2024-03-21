import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MovieGallery from '../components/MovieGallery'; 
import SearchBar from '../components/SearchBar'; // Import the SearchBar component
import data from "../assets/sampleData.json";

const Movies = () => {
  const [movies, setMovies] = useState(data.movies); // Initialize movies state with all movies
  const [filteredMovies, setFilteredMovies] = useState(data.movies); // Initialize filteredMovies state with all movies

  const handleSearch = (searchTerm) => {
    const filtered = movies.filter(movie =>
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-16">
        <SearchBar onSearch={handleSearch} />
        <p className="text-white mt-4">Number of results: {filteredMovies.length}</p>
        <div className="mt-8">
          <MovieGallery movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
