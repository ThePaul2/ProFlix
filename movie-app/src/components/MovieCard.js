import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Import the arrow icons

const MovieCard = ({ imageUrl, title, rating, date, trailer, description }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether the dropdown is expanded

  // Function to toggle the dropdown
  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Link
        to={`/info/${encodeURIComponent(imageUrl)}/${encodeURIComponent(title)}/${rating}/${encodeURIComponent(date)}/${encodeURIComponent(trailer)}/${encodeURIComponent(description)}`}
      >
        <div className="relative w-64 bg-gray-900 rounded-lg shadow-md m-4 cursor-pointer transition-transform duration-300 hover:scale-105">
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg font-semibold">{title}</h3>
              {/* Render the appropriate arrow icon based on the dropdown state */}
              {isExpanded ? (
                <FaAngleUp className="text-gray-300 cursor-pointer" onClick={toggleDropdown} />
              ) : (
                <FaAngleDown className="text-gray-300 cursor-pointer" onClick={toggleDropdown} />
              )}
            </div>
            <p className="text-gray-300 mb-2">{rating}</p>
            {/* Render the release date and description if the dropdown is expanded */}
            {isExpanded && (
              <>
                <p className="text-gray-300 mb-2">Release Date: {date}</p>
                <p className="text-gray-300 mb-2">Description: {description}</p>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
