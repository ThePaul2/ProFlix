import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieSlider from "../components/MovieSlider";
import HeroImage from "../components/HeroImage";

const Home = () => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <HeroImage />
      <div className="bg-black h-screen flex flex-col items-center justify-center rounded-3xl">
        <MovieSlider header="Now Playing"/>
        <MovieSlider header="Coming Soon"/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
