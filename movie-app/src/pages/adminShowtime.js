import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const AdminShowtime = () => {
  const [showtimes, setShowtimes] = useState([]);
  const { movieTitle } = useParams();

  useEffect(() => {
    console.log("Movie Title:", movieTitle); // Log the movieTitle whenever it changes
    fetchShowtimes();
  }, [movieTitle]);

  const fetchShowtimes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/showtime/${movieTitle}`);
      setShowtimes(response.data);
    } catch (error) {
      console.error('Error fetching showtimes:', error);
    }
  };

  const handleDeleteShowtime = async (showtimeId) => {
    try {
      await axios.delete(`http://localhost:8080/showtime/${showtimeId}`);
      console.log(`Showtime with ID ${showtimeId} deleted successfully.`);
      fetchShowtimes();
    } catch (error) {
      console.error(`Error deleting showtime with ID ${showtimeId}:`, error);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <NavbarAdmin />
      <div className="bg-black p-6 rounded-lg shadow-md font-sans max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h2>
        <div>
          <div className="flex flex-row w-full">
            <h1 className="text-3xl font-bold mb-2 text-gray-100">Showtimes for {movieTitle}</h1>
          </div>

          <ul className="list-none ">
            {showtimes.map((showtime, index) => (
              <li key={showtime._id} className="mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300">
                <div className="flex-1">
                  <span>{`${showtime._id}`}</span>
                  <br />
                  <span>Room: {showtime.roomName}</span>
                  <br />
                  <span>Theater: {showtime.theaterName}</span>
                  <br />
                  <span>Date: {showtime.date}</span>
                  <br />
                  <span>Time: {showtime.time}</span>
                  <br />
                </div>
                <div>
                  <Link to={`/edit-showtime/${encodeURIComponent(showtime._id)}`} className="px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out ml-3">Edit</Link>
                  <button onClick={() => handleDeleteShowtime(showtime._id)} className="px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out ml-3">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminShowtime;
