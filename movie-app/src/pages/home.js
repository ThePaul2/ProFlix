import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieSlider from "../components/MovieSlider";
import data from "../assets/sampleData.json";
import VideoPlayer from "../components/VideoPlayer";
import SearchBar from "../components/SearchBar";

const Home = () => {
  let movies = data.movies;

  // Filter movies based on "nowPlaying" and "comingSoon" properties
  const nowPlayingMovies = movies.filter(movie => movie.nowPlaying);
  const comingSoonMovies = movies.filter(movie => movie.comingSoon);

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
