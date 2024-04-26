import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Info = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [showTime, setshowTime] = useState([]);
  const [movieTitle, setmovieTitle] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/movie/${id}`);
        setMovie(response.data);
        setmovieTitle(response.data.movieTitle);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);
   
  useEffect(() => {
    const fetchshowTime = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/showtime/${movieTitle}`);
        setshowTime(response.data);
      } catch (error) {
        console.error('Error fetching showtime:', error);
      }
    };

    fetchshowTime();

    // Cleanup function to abort the fetch request if the component unmounts
    return () => {
      // Abort fetch or any cleanup needed
    };
  }, [movieTitle]); // Dependency array, will trigger effect on movieID change
  
  if (!movie) {
    return <div>No showtimes found for "{movie.title}"</div>;
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
            {/* <Link to={`/tickets/${id}`} className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-600 mt-4">Buy Tickets</Link> */}
          </div>
        </div>
        <div className="lg:w-1/2 relative" >
          <div className="p-6 text-white flex text-center items-center justify-end" >
            <div className="text-center ">
              <h2 className="text-3xl font-bold mb-4">Showtimes</h2>
              <ul className="text-left">
                {/* Showtime list */}
                {showTime.map((showTime, index) => (
                  <li key={index} className="mb-4">
                    <button
                      className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                      onClick={() => {
                        // Redirect to Tickets page with showtime data
                        window.location.href = `/tickets/${id}?showtimeId=${showTime.id}&selectedShowtime=${showTime.time}-${showTime.date}-${showTime.theaterName}`;
                      }}
                    >
                      {showTime.time} - {showTime.date} - {showTime.theaterName}
                    </button>
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
