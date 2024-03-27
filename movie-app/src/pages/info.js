import React from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import data from "../assets/sampleData.json";

const Info = () => {
  let { id } = useParams();
  let movies = data.movies;

  let movie;
  for (let i = 0; i < movies.length; i++) {
    if (id === movies[i].id) {
      movie = movies[i];
    }
  }

  // Sort showtimes chronologically based on date and time
  const sortedShowtimes = movie.showtimes.sort((a, b) => {
    const dateA = new Date(a.date + "T" + a.time);
    const dateB = new Date(b.date + "T" + b.time);
    return dateA - dateB;
  });

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto flex flex-col lg:flex-row py-16">
        <div className="lg:w-1/2 relative">
          <div className="p-6 text-white">
            <h1 className="font-bold text-4xl mb-4">{movie.name}</h1>
            <div className="flex flex-wrap mb-4">
              <p className="mr-4 hover:bg-red-500">Genre: {movie.genre}</p>
              <p className="mr-4">MPAA-US film rating: {movie.rating}</p>
              <p className="mr-4">Release Date: {movie.date}</p>
              <p className="mr-4">Rating: {movie.rating}</p>
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
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="p-6 bg-black text-white flex text-center items-center justify-center">
            <div className="text-center ">
              <h2 className="text-3xl font-bold mb-4 ">Showtimes</h2>
              <ul>
                  {sortedShowtimes.map((showtime, index) => (
                      <li key={index} className="mb-2">
                          <Link
                              to={{
                                pathname: `/tickets/${encodeURIComponent(movie.id)}`
                            }}
                              className="block w-full hover:bg-red-500 transition duration-300 rounded-lg p-4"
                          >
                              <p className="text-lg font-semibold">{showtime.date} - {showtime.time}</p>
                              <p>Theater {showtime.theaterNumber}</p>
                          </Link>
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
