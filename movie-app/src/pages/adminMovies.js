import React from 'react';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../components/NavbarAdmin';
import data from "../assets/sampleData.json";

const AdminMovies = () => {
  return (
    <div className="bg-black min-h-screen">
      <NavbarAdmin />
      <div className="bg-black p-6 rounded-lg shadow-md font-sans max-w-screen-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h2>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-100">Edit Movies</h3>
          {data.movies.map(movie => (
            <div key={movie.id} className="mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300">
              <p className="flex-1 mr-4">{`id: ${movie.id} - ${movie.name}`}</p>
              <Link to={`/edit-movie`} className="px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out">Edit</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMovies;
