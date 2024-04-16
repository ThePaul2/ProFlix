import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  // console.log(movie.title);
  // console.log(movie._id);
  return (
    <div className="w-64 m-4 relative">
      <Link to={`/info/${encodeURIComponent(movie._id)}`}>
        <div className="relative">
          <img src={movie.poster} alt={movie.name} className="w-full h-70 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
            <h3 className="text-white text-lg font-semibold text-center">{movie.name}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
