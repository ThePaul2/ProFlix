import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieSlider = ({ header, movies }) => {
  // Reference to the container element
  const containerRef = useRef(null);

  // Function to handle sliding left
  const slideLeft = () => {
    containerRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
  };

  // Function to handle sliding right
  const slideRight = () => {
    containerRef.current.scrollLeft += 200; // Adjust scroll amount as needed
  };

  return (
    <div className="overflow-x-auto whitespace-no-wrap relative">
      {/* Header */}
      <h2 className="text-3xl font-bold text-white absolute top-0 left-0 p-4">{header}</h2>

      {/* Left arrow button */}
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white py-2 px-4 rounded-full z-1" onClick={slideLeft}>
        &lt;
      </button>

      {/* Right arrow button */}
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white py-2 px-4 rounded-full z-1" onClick={slideRight}>
        &gt;
      </button>

      {/* Image container */}
      <div ref={containerRef} className="flex py-14 m-14">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            imageUrl={movie.imageUrl}
            title={movie.title}
            rating={movie.rating}
            releaseDate={movie.releaseDate} // Pass releaseDate as prop
            description={movie.description} // Pass description as prop
            style={{ marginRight: '1rem', marginBottom: '1rem' }}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSlider;
