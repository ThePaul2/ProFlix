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

  let [genres, setGenres] = useState(["None"]);

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
      for (let i = 0; i < movies.length; i++) {
        let genre = movies[i].genre;
        let subg = genre.split(", ");
        for (let j = 0; j < subg.length; j++) {
          if (!genres.includes(subg[j])) {
            genres.push(subg[j]);
          }
        }
      }
    });
}, []);

  const handleSearch = (searchTerm) => {
    let genreFilter = document.getElementById("genre-filter").value;

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
        let movieGenres = movies[i].genre.split(", ");
        if (movieGenres.includes(genreFilter) || genreFilter == "None") {
          filtered.push(movie);
        }
      }
    }
    setFilteredMovies(filtered);
  };

  // console.log('onSearch function:', handleSearch); // Log the onSearch function

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <div className="mt-16 flex flex-col justify-center items-center pt-16">
        <div className="flex gap-4">
          <SearchBar onSearch={handleSearch} initialSearchTerm={searchTerm} />
          <select id="genre-filter" className="bg-gray-200 border border-gray-300 rounded-md py-4 pl-4 pr-16 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
            {genres.map((genre) => (
              <option value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        <p className="text-white mt-4">Number of Movies: {movies.length}</p>
        <div className="mt-8 w-full">
          <MovieGallery movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
