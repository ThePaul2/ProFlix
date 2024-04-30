import React, { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Footer from '../components/Footer';

const Showtimes = () => {
  const location = useLocation();
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    const fetchShowtimes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/showtime');
        setShowtimes(response.data);
      } catch (error) {
        console.error('Error fetching showtimes:', error);
      }
    };

    fetchShowtimes();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <VideoPlayer classname="mt-16"/>
      <div className="mt-16 flex flex-col justify-center items-center pt-16">
        <h1 className="text-3xl font-bold text-white mb-4">Showtimes</h1>
        <div className="grid grid-cols-4 gap-4 text-white">
          <div className="font-bold">Theater</div>
          <div className="font-bold">Movie</div>
          <div className="font-bold">Date</div>
          <div className="font-bold">Time</div>
          {showtimes.map((showtime, index) => (
            <React.Fragment key={index}>
              <div>{showtime.theaterName}</div>
              <div>{showtime.movieTitle}</div>
              <div>{showtime.date}</div>
              <div>{showtime.time}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Showtimes;
