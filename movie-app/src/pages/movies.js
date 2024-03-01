import React from 'react';
import Navbar from '../components/Navbar';
import MovieSlider from '../components/MovieSlider';
import SearchBar from '../components/SearchBar'; // Import the SearchBar component
import data from "../assets/sampleData.json";

const Catalog = () => {
  let movies = data.movies;
  // Example movie data
  let moviesItem = [];
  // Dummy data for movie lists
  const movieLists = [
    { title: 'Action Movies', moviesItem },
    { title: 'Comedy Movies', moviesItem},
    { title: 'Drama Movies', moviesItem },
    { title: 'Horror Movies', moviesItem },
    { title: 'Sci-Fi Movies', moviesItem },
    { title: 'Thriller Movies', moviesItem},
    { title: 'Animated Movies', moviesItem },
  ];


  console.log(movies)
  for (let i = 0; i < 5; i++) {
    moviesItem.push(movies[Math.floor(movies.length*Math.random())])
  }



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
            <MovieSlider movies={list.moviesItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
