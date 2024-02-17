// Filename - pages/Catalog.js

import React from 'react';
import Navbar from '../components/Navbar';
import MovieSlider from '../components/MovieSlider';
import SearchBar from '../components/SearchBar'; // Import the SearchBar component

const Catalog = () => {
  // Dummy data for movie lists
  const movieLists = [
    { title: 'Action Movies', movies: [/* Add movie objects here */] },
    { title: 'Comedy Movies', movies: [/* Add movie objects here */] },
    { title: 'Drama Movies', movies: [/* Add movie objects here */] },
    { title: 'Horror Movies', movies: [/* Add movie objects here */] },
    { title: 'Sci-Fi Movies', movies: [/* Add movie objects here */] },
    { title: 'Thriller Movies', movies: [/* Add movie objects here */] },
    { title: 'Animated Movies', movies: [/* Add movie objects here */] },
  ];

  // Handler for searching movies
  const handleSearch = (searchTerm) => {
    // Logic for searching movies based on searchTerm
    console.log('Searching for:', searchTerm);
  };

  // Handler for filtering movies
  const handleFilter = (filter) => {
    // Logic for filtering movies based on selected filter
    console.log('Filtering by:', filter);
  };

  return (
    <div className="bg-gray-800 min-h-screen pt-20"> {/* Gray background */}
      <Navbar />
      {/* Search bar and filters */}
      <div className="container mx-auto px-4 py-10">
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
        {/* Render each movie list */}
        {movieLists.map((list, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 py-10">{list.title}</h2>
            <MovieSlider movies={list.movies} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
