import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieSlider from "../components/MovieSlider";
import HeroImage from "../components/HeroImage";
import data from "../assets/sampleData.json";
import PromotionSlider from "../components/PromotionSlider";

const Home = () => {
  let movies = data.movies;
  // Example movie data
  let nowPlayingMovies = [];
  let comingSoonMovies = [];

  console.log(movies)
  for (let i = 0; i < 5; i++) {
    nowPlayingMovies.push(movies[Math.floor(movies.length*Math.random())])
  }
  for (let i = 0; i < 5; i++) {
    comingSoonMovies.push(movies[Math.floor(movies.length*Math.random())])
  }

  return (
    <div className="bg-gray-800 min-h-screen"> 
      <Navbar />
      <PromotionSlider />
      <div className="bg-black flex flex-col items-center justify-center rounded-3xl py-16"> {/* Adjusted styles */}
        <MovieSlider header="Now Playing" movies={nowPlayingMovies} />
        <MovieSlider header="Coming Soon" movies={comingSoonMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;