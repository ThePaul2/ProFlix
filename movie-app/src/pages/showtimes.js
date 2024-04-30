import React, { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Footer from '../components/Footer';

const Showtimes = () => {
  const location = useLocation();
  const [showtimes, setShowtimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date('2024-04-12'));
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/movie');
        setMovies(response.data);
        console.log('Movies:', response.data); // Print out the movies fetched
      } catch (error) {
        console.error('Error fetching movies:', error.message);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const filtered = showtimes
      .filter((showtime) => new Date(showtime.date).toDateString() === selectedDate.toDateString());
    setFilteredMovies(filtered);
  }, [showtimes, selectedDate]);

  console.log('Filtered Movies:', filteredMovies); // Log filteredMovies for debugging

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <VideoPlayer classname="mt-16"/>
      <div className="mt-16 flex flex-col justify-center items-center pt-16">
        <h1 className="text-3xl font-bold text-white mb-4">Showtimes</h1>
        <div className="flex items-center mb-4">
          <button onClick={() => setSelectedDate(new Date(selectedDate.getTime() - 86400000))}>{'<'}</button>
          <h2 className="text-xl font-bold text-white mx-4">{selectedDate.toDateString()}</h2>
          <button onClick={() => setSelectedDate(new Date(selectedDate.getTime() + 86400000))}>{'>'}</button>
        </div>
        <div className="grid grid-cols-2 gap-4 text-white">
          {filteredMovies.map((showtime, index) => {
            // Find the corresponding movie object from movies array based on movieTitle
            const movie = movies.find((m) => m.movieTitle === showtime.movieTitle);

            console.log('m.movie:', movies); // Log showtime for debugging
            console.log('Showtime:', showtime); // Log showtime for debugging
            console.log('Movie:', movie); // Log movie for debugging

            return (
              <React.Fragment key={index}>
                <Link to={movie ? `/info/${encodeURIComponent(movie._id)}` : '#'}>
                  <div className="bg-gray-500 rounded-md hover:bg-red-500 transition-colors duration-300 p-4">
                    {movie && (
                      <>
                        <img src={movie.poster} alt={movie.title} className="w-80 h-auto mb-2" />
                        <div className="font-bold text-center">{movie.title}</div>
                      </>
                    )}
                    <div>{showtime.time}</div>
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Showtimes;
