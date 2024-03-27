import React, { useState } from 'react';
import Navbar from '../components/NavbarUser';
import MovieSlider from '../components/MovieSlider';
import data from "../assets/sampleData.json";
import { Link, useParams } from 'react-router-dom';
import defaultIcon from '../assets/userPhoto.jpg';

const User = () => {
  let movies = data.movies;
  let { email } = useParams();
  console.log(email);

  const { userEmail } = useParams();
  console.log(userEmail);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomUniqueMovie = () => {
    const randomIndex = Math.floor(Math.random() * 1);
    const randomMovie = movies[randomIndex];
    movies = movies.filter(movie => movie.id !== randomMovie.id); // Remove the selected movie from the list
    return randomMovie;
  };

  let myMovies = [];
  for (let i = 0; i < 4; i++) {
    const randomMovie = getRandomUniqueMovie();
    myMovies.push(randomMovie);
  }

  const [userPhotoUrl, setUserPhotoUrl] = useState(defaultIcon); // Default placeholder URL

  const handlePhotoChange = () => {
    const newPhotoUrl = prompt('Enter the URL of the new photo:');
    if (newPhotoUrl) {
      setUserPhotoUrl(newPhotoUrl);
    }
  };

  return (
    <div className="flex flex-wrap justify-center h-screen">
      <Navbar />
      <div className="w-full md:w-1/3 p-4 bg-black flex flex-col">
        <div className="flex flex-col items-center mb-32">
            <img src={userPhotoUrl} alt="User" className="w-48 h-48 rounded-full mb-4 mt-32" />
            <button onClick={handlePhotoChange} className="bg-gray-500 hover:bg-red-500 p-2 rounded">Change Photo</button>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-white mb-32 text-4xl'>Hello, {email}!</p>
        </div>
        <div className="text-white">
            <Link to={`/edit-profile/${email}`} className="block mb-2 font-bold hover:text-red-500">Edit Profile</Link>
            <Link to="/my-tickets" className="block mb-2 font-bold hover:text-red-500">My Tickets</Link>
            <Link to="/past-tickets" className="block mb-2 font-bold hover:text-red-500">Past Tickets</Link>
            <Link to="/events" className="block mb-2 font-bold hover:text-red-500">Events</Link>
            <Link to="/newsletter" className="block mb-2 font-bold hover:text-red-500">Newsletter</Link>
            <hr className="border-white my-4" />
            <Link to="/contact-faqs" className="block font-bold hover:text-red-500">Contact - FAQs</Link>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-4 bg-gray-800 flex flex-col">
          <div className="text-center flex-grow">
            <h2 className="text-2xl font-bold text-white mb-4">Metrics</h2>
            <div className="mb-6">
              <MovieSlider header="My Movie List" movies={myMovies} />
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Rewards Points</h3>
              <p className="text-lg text-white">{getRandomNumber(100, 1000)} pts</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Total Movies</h3>
              <p className="text-lg text-white">{getRandomNumber(10, 50)}</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default User;
