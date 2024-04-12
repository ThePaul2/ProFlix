import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Info = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);
   
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/booking/${id}`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();

    // Cleanup function to abort the fetch request if the component unmounts
    return () => {
      // Abort fetch or any cleanup needed
    };
  }, [id]); // Dependency array, will trigger effect on movieID change
  
  if (!movie) {
    return <div>No movie found with the title "{movie.title}"</div>;
  }
  
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto flex flex-col lg:flex-row py-16">
        <div className="lg:w-1/2 relative">
          <div className="p-6 text-white">
            <h1 className="font-bold text-4xl mb-4">{movie.title}</h1>
            <div className="flex flex-wrap mb-4">
              <p className="mr-4 hover:bg-red-500">Genre: {movie.genre}</p>
              <p className="mr-4">MPAA-US film rating: {movie.rating}</p>
              <p className="mr-4">Release Date: {movie.releaseDate}</p>
            </div>
            <p className="mb-4">{movie.description}</p>
            <h2 className="font-bold text-2xl mb-4">Trailer</h2>
            <iframe
              width={700}
              height={400}
              src={movie.trailer}
              title="Trailer"
              className="mb-4"
            />
            <div className="text-white">
              <p>Cast: {movie.cast}</p>
              <p>Director: {movie.director}</p>
              <p>Producer: {movie.producer}</p>
              <ul className="mb-4">
                <li>Reviews: {movie.reviews}</li>
              </ul>
            </div>
            {/* Button to link to Tickets page */}
            <Link to={`/tickets/${id}`} className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-600 mt-4">Buy Tickets</Link>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="p-6 bg-black text-white flex text-center items-center justify-center">
            <div className="text-center ">
              <h2 className="text-3xl font-bold mb-4 ">Showtimes</h2>
              <ul>
                {bookings.map((booking) => (
                  <li key={booking._id}>
                    <div>
                      <ul>
                        {booking.showTimes.map((time, index) => (
                          <li key={index}>{time} - {booking.showTimeDate[index]}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 1024px) {
              .lg:flex-row {
                  flex-direction: column;
              }
              .lg:absolute {
                  position: static;
              }
              .lg:block {
                  display: block;
              }
              .lg:hidden {
                  display: none;
              }
          }
        `}
      </style>
    </div>
  );
};

export default Info;
