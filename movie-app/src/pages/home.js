import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieSlider from "../components/MovieSlider";
import HeroImage from "../components/HeroImage";

const Home = () => {
  // Example movie data
  const nowPlayingMovies = [
    { 
      imageUrl: "movie1.jpg", 
      title: "Movie 1", 
      rating: "4.5", 
      releaseDate: "2024-02-17", // Example release date
      description: "This is the description of Movie 1." // Example description
    },
    { 
      imageUrl: "movie2.jpg", 
      title: "Movie 2", 
      rating: "3.8", 
      releaseDate: "2024-02-18", // Example release date
      description: "This is the description of Movie 2." // Example description
    },
    { 
      imageUrl: "movie3.jpg", 
      title: "Movie 3", 
      rating: "4.2", 
      releaseDate: "2024-02-19", // Example release date
      description: "This is the description of Movie 3." // Example description
    },
    { 
      imageUrl: "movie4.jpg", 
      title: "Movie 4", 
      rating: "4.0", 
      releaseDate: "2024-02-20", // Example release date
      description: "This is the description of Movie 4." // Example description
    }
  ];
  

  const comingSoonMovies = [
    { imageUrl: "movie3.jpg", title: "Movie 3", rating: "4.2" },
    { imageUrl: "movie4.jpg", title: "Movie 4", rating: "4.0" },
  ];

  return (
    <div className="bg-gray-800 min-h-screen"> {/* Changed h-screen to min-h-screen */}
      <Navbar />
      <HeroImage />
      <div className="bg-black flex flex-col items-center justify-center rounded-3xl py-16"> {/* Adjusted styles */}
        <MovieSlider header="Now Playing" movies={nowPlayingMovies} />
        <MovieSlider header="Coming Soon" movies={comingSoonMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
