import axios from "axios";
import Footer from "../components/Footer"; 
import MovieSlider from "../components/MovieSlider"; 
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/HomeSearchbar"; 
import VideoPlayer from "../components/VideoPlayer"; 

const Home = () => {
  // Define state variables for now playing and coming soon movies
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);

  useEffect(() => {
    // Fetch now playing movies from the server
    axios.get('http://localhost:8080/movie/now-playing')
      .then(response => {
        setNowPlayingMovies(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching now playing movies:', error); // Log error if fetching fails
      });

    // Fetch coming soon movies from the server
    axios.get('http://localhost:8080/movie/coming-soon')
      .then(response => {
        setComingSoonMovies(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching coming soon movies:', error); // Log error if fetching fails
      });
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="bg-gray-800 min-h-screen"> {/* Main container with background color */}
      <Navbar/> {/* Render Navbar component */}
      <VideoPlayer /> {/* Render VideoPlayer component */}
      <div className="bg-black flex flex-col items-center justify-center py-16"> {/* Container for SearchBar and MovieSliders */}
        <SearchBar /> {/* Render SearchBar component */}
        <div className="max-w-8xl w-full px-4">
          {/* Render MovieSlider components for now playing and coming soon movies */}
          <MovieSlider header="Now Playing" movies={nowPlayingMovies} marginWidth={180}/>
          <MovieSlider header="Coming Soon" movies={comingSoonMovies} marginWidth={10}/>
        </div>
      </div> 
      <Footer /> {/* Render Footer component */}
    </div>
  );
};

export default Home; // Export the Home component as default
