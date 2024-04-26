import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MovieGallery from '../components/MovieGallery';
import SearchBar from '../components/SearchBar';
import data from "../assets/sampleData.json";
import axios from 'axios';
import Footer from '../components/Footer';

const Movies = () => {
  const location = useLocation();
  let [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(data.movies);
  const [searchTerm, setSearchTerm] = useState('');
  const [genres, setGenres] = useState(["None"]);

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
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    let updatedGenres = ["None"]; // Initialize with "None" option
    movies.forEach(movie => {
      movie.genre.split(", ").forEach(genre => {
        if (!updatedGenres.includes(genre)) {
          updatedGenres.push(genre);
        }
      });
    });
    setGenres(updatedGenres);
  }, [movies]);

  const handleSearch = (searchTerm) => {
    let genreFilter = document.getElementById("genre-filter").value;
    let filtered = movies.filter(movie => {
      let name = movie.name || movie.title || movie.movieTitle || '';
      return name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (genreFilter === "None" || movie.genre.includes(genreFilter));
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <div className="mt-16 flex flex-col justify-center items-center pt-16">
        <div className="flex gap-4">
          <SearchBar onSearch={handleSearch} initialSearchTerm={searchTerm} />
          <select id="genre-filter" className="bg-gray-200 border border-gray-300 rounded-md py-4 pl-4 pr-16 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
            {genres.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        {filteredMovies.length > 0 ? (
          <p className="text-white mt-4">Number of Movies: {filteredMovies.length}</p>
        ) : (
          <p className="text-white mt-4 text-xl">Sorry, no movies found. Please try again.</p>
        )}
        <div className="mt-8 w-full">
          <MovieGallery movies={filteredMovies} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
