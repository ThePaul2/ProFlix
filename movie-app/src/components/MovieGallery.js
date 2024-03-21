import React from 'react';
import MovieCard from './MovieCard'; // Import the MovieCard component

const MovieGallery = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie, index) => (
        <div key={index} className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4">
          <div className="min-w-0"> {/* Fixing the width of the movie card */}
            <MovieCard movie={movie} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieGallery;
