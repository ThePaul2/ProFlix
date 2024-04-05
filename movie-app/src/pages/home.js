import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieSlider from "../components/MovieSlider";
import VideoPlayer from "../components/VideoPlayer";
import SearchBar from "../components/HomeSearchbar";

const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);

  useEffect(() => {
    // Fetch now playing movies
    axios.get('http://localhost:8080/movie/now-playing')
      .then(response => {
        setNowPlayingMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching now playing movies:', error);
      });

    // Fetch coming soon movies
    axios.get('http://localhost:8080/movie/coming-soon')
      .then(response => {
        setComingSoonMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching coming soon movies:', error);
      });
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen"> 
      <Navbar/>
      <VideoPlayer />
      <div className="bg-black flex flex-col items-center justify-center py-16"> 
        <SearchBar />
        <div className="max-w-8xl w-full px-4">
          <MovieSlider header="Now Playing" movies={nowPlayingMovies} />
          <MovieSlider header="Coming Soon" movies={comingSoonMovies} />
        </div>
      </div> 
      <Footer />
    </div>
  );
};

export default Home;
