import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Pressing Enter doesn't work for search. Please use the search button.");
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          className="bg-gray-200 border border-gray-300 rounded-md py-4 pl-4 pr-16 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <Link
          to={`/movies?search=${encodeURIComponent(searchTerm)}`}
          className="absolute inset-y-0 right-0 flex items-center px-4 text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l5-5m0 0l-5-5m5 5h-13"
            />
          </svg>
        </Link>
      </div>
    </form>
  );
};

export default HomeSearchBar;
