import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MovieGallery from '../components/MovieGallery';
import SearchBar from '../components/SearchBar';
import data from "../assets/sampleData.json";
import axios from 'axios';

const Movies = () => {
  const location = useLocation();
  let [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(data.movies);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const term = searchParams.get('search');
    if (term) {
      setSearchTerm(term);
      handleSearch(term);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const response = await axios.get('http://localhost:8080/movie');
            setMovies(response.data);
            movies = response.data;
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    fetchMovies().then(() => {
      handleSearch(searchTerm);
    });
}, []);

  const handleSearch = (searchTerm) => {
    console.log(movies)
    let filtered = [];
    for (let i = 0; i < movies.length; i++) {
      let movie = movies[i];
      let name = movie.name;
      if (name == null) {
        name = movie.title;
      }
      if (name == null) {
        name = movie.movieTitle;
      }
      if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
        filtered.push(movie);
      }
    }
    setFilteredMovies(filtered);
  };

  // console.log('onSearch function:', handleSearch); // Log the onSearch function

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <div className="mt-16 flex flex-col justify-center items-center pt-16">
        <SearchBar onSearch={handleSearch} initialSearchTerm={searchTerm} />
        <p className="text-white mt-4">Number of results: {movies.length}</p>
        <div className="mt-8">
          <MovieGallery movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
