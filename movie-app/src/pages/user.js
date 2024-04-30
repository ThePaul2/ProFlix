import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MovieSlider from '../components/MovieSlider';
import { Link, useParams } from 'react-router-dom';
import defaultIcon from '../assets/userPhoto.jpg';
import four from './fourOfour';
import axios from 'axios';

const User = () => {
  const [bookedMovies, setBookedMovies] = useState([]);
  const [userPhotoUrl, setUserPhotoUrl] = useState(defaultIcon);
  const { email } = useParams();
  const [comingSoonMovies, setComingSoonMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/movie/coming-soon')
      .then(response => {
        setComingSoonMovies(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching coming soon movies:', error); // Log error if fetching fails
      });
  }, []);

  const [bookings, setBookings] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserId = async () => {
      const email = localStorage.getItem('email');
      try {
        const response = await axios.get(`http://localhost:8080/users/get-userid/${email}`);
        const { userId } = response.data;
        if (userId) {
          setUserId(userId);
          fetchBookingData(userId);
        } else {
          console.log('User not found.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    fetchUserId();
  }, []);

  const fetchBookingData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/booking`);
      const bookingData = response.data;
      const userBookings = bookingData.filter(booking => booking.userID === userId);
      setBookings(userBookings);
      fetchBookedMovies(userBookings);
    } catch (error) {
      console.error('Error fetching booking data:', error);
    }
  };

  const fetchBookedMovies = async (bookings) => {
    try {
      const showtimeIds = bookings.map(booking => booking.showtimeID);
      const response = await axios.get('http://localhost:8080/showtime');
      const showtimes = response.data;
      const movieTitles = showtimeIds.map(showtimeID => {
        const showtime = showtimes.find(st => st._id === showtimeID);
        return showtime ? showtime.movieTitle : null;
      });
      const movieDetails = movieTitles.map(title => {
        return movies.find(movie => movie.movieTitle === title);
      });
      setBookedMovies(movieDetails.filter(movie => movie)); // Filter out null values
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  // Function to handle photo change
  const handlePhotoChange = () => {
    const newPhotoUrl = prompt('Enter the URL of the new photo:');
    if (newPhotoUrl) {
      setUserPhotoUrl(newPhotoUrl);
    }
  };

  const [showtimes, setShowtimes] = useState([]);
  const [movies, setMovies] = useState([]);

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
      } catch (error) {
        console.error('Error fetching movies:', error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-wrap justify-center h-screen">
      <Navbar />
      {/* Left Panel */}
      <div className="w-full md:w-1/3 p-4 bg-black flex flex-col">
        {/* User Info Section */}
        <div className="flex flex-col items-center mb-32">
          <img src={userPhotoUrl} alt="User" className="w-48 h-48 rounded-full mb-4 mt-16" />
          <button onClick={handlePhotoChange} className="bg-gray-500 hover:bg-red-500 p-2 rounded">Change Photo</button>
        </div>
        {/* User Options Section */}
        <div className='flex justify-center items-center'>
          <p className='text-white mb-24 text-4xl'>Hello, {email}!</p>
        </div>
        <div className="text-white">
          <Link to={`/edit-profile/${email}`} className="block mb-2 font-bold hover:text-red-500">Edit Profile</Link>
          <Link to={`/edit-payments/${email}`} className="block mb-2 font-bold hover:text-red-500">Edit Payments</Link>
          <Link to="/past-tickets" className="block mb-2 font-bold hover:text-red-500">My Tickets</Link>
          <hr className="border-white my-4" />
          <Link to={`/fourOfour`} className="block font-bold hover:text-red-500">Contact - FAQs</Link>
        </div>
      </div>
      {/* Right Panel */}
      <div className="w-full md:w-2/3 p-4 bg-gray-800 flex flex-col">
        <div className="text-center flex-grow">
          <h2 className="text-2xl font-bold text-white mb-4">Metrics</h2>
          <div className="mb-6">
            {/* Display Booked Movies */}
            <MovieSlider header="My Past Showings" movies={bookedMovies} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Total Movies</h3>
            <p className="text-lg text-white">{bookedMovies.length}</p>
          </div>
          <MovieSlider header="Recommended For You" movies={comingSoonMovies} marginWidth={100}/>
        </div>
      </div>
    </div>
  );
}

export default User;
