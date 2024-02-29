import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieSlider from "../components/MovieSlider";
import HeroImage from "../components/HeroImage";

const Home = () => {
  // Example movie data
  const nowPlayingMovies = [
    { 
      imageUrl: "https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=900x900", 
      title: "Oppenheimer", 
      rating: "8.4", 
      date: "2023-10-17", // Example release date
      trailer: "https://www.youtube.com/embed/uYPbbksJxIg?si=bjHVkyT8jc4R--hb&amp;controls=0",
      description: "Based on the 2005 biography American Prometheus by Kai Bird and Martin J. Sherwin, the film chronicles the career of J. Robert Oppenheimer, with the story predominantly focusing on his studies, his direction of the Manhattan Project during World War II, and his eventual fall from grace due to his 1954 security hearing." // Example description
    },
    { 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg", 
      title: "Frozen", 
      rating: "7.4", 
      date: "2013-05-11", // Example release date
      trailer: "https://www.youtube.com/embed/TbQm5doF_Uc?si=0KgeBWHpckwe6ebJ",
      description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition." // Example description
    },
    { 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      title: "Barbie", 
      rating: "6.9", 
      date: "2023-07-19", // Example release date
      trailer: "https://www.youtube.com/embed/pBk4NYhWNMM?si=f1qL7D86loLBc-3H",
      description: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans." // Example description
    },
    { 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      title: "Wonka", 
      rating: "4.0", 
      date: "2023-12-20", // Example release date
      trailer: "https://www.youtube.com/embed/otNh9bTjXWg?si=JrhLyg0TPKZhtlKI",
      description: "Armed with nothing but a hatful of dreams, young chocolatier Willy Wonka manages to change the world, one delectable bite at a time." // Example description
    },
    { 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZDkwOTIyZGQtYWNkOS00YzAxLTkwZWUtMzU3YjU4ZDIyYzdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      title: "The Beekeeper", 
      rating: "9.2", 
      date: "2024-07-19", // Example release date
      trailer: "https://www.youtube.com/embed/SzINZZ6iqxY?si=AI2wrBwYLLEdRTci",
      description: "One man's brutal campaign for vengeance takes on national stakes after it's revealed he's a former operative of a powerful and clandestine organization known as Beekeepers."
    }

  ];
  

  const comingSoonMovies = [
    { 
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg", 
      title: "Kung Fu Panda 4", 
      rating: "-", 
      date: "2024-03-8", // Example release date
      trailer: "https://www.youtube.com/embed/tgbNymZ7vqY",
      description: "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes he's going to need some help. Teaming up with a quick-witted corsac fox, Po soon discovers that heroes can be found in the most unexpected places." // Example description
    },
    { 
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUMviMiC0orG2repIiIe5ZcyWmBRaENR4MQqtxu1Le5NIonmv4", 
      title: "Deadpool & Wolverine", 
      rating: "-", 
      date: "2024-07-20", // Example release date
      trailer: "https://www.youtube.com/embed/tgbNymZ7vqY",
      description: "Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy." // Example description
    }
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