// Filename - components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      
      {/* Filter select */}
      <select
        value={selectedFilter}
        onChange={handleFilterChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      >
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        {/* Add more filter options as needed */}
      </select>
    </div>
  );
};

export default SearchBar;
