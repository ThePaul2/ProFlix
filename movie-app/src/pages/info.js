import React from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import data from "../assets/sampleData.json";

const Info = () => {
    let { id } = useParams();
    let movies = data.movies;

    let movie;
    for (let i = 0; i < movies.length; i++) {
        if (id == movies[i].id) {
            movie = movies[i];
        }
    }

    const containerStyle = {
        backgroundImage: `url(${movie.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div style={containerStyle} className="relative overflow-hidden">
            <Navbar />
            <div className="h-max flex flex-col py-16 z-10 bg-black bg-opacity-50">
                <div className="container mx-auto p-6 text-white">
                    <h1 className="font-bold text-4xl mb-4">{movie.name}</h1>
                    <div className="flex flex-wrap mb-4">
                        <p className="mr-4">Genre: {movie.genre}</p>
                        <p className="mr-4">MPAA-US film rating: {movie.rating}</p>
                        <p className="mr-4">Release Date: {movie.date}</p>
                        <p className="mr-4">Rating: {movie.rating}</p>
                    </div>
                    <p className="mb-4">{movie.description}</p>
                    <h2 className="font-bold text-2xl mb-4">Trailer</h2>
                    <iframe width={700} height={400} src={movie.trailer} title="Trailer" className="mb-4" />
                    <Link className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-600 inline-block mb-4" 
                    to={{pathname: `/tickets/${encodeURIComponent(movie.id)}`, state: { movieData: movie}}}>Buy Tickets!</Link>
                    <div className="text-white">
                        <ul className="mb-4">
                            <li>Cast</li>
                        </ul>
                        <p>Director</p>
                        <p>Producer</p>
                        <ul className="mb-4">
                            <li>Reviews</li>
                        </ul>
                        <p>SHOW DATES AND TIMES</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
