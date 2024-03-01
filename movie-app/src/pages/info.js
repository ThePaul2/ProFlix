import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
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
    };

    return (
        <div style={containerStyle}>
            <Navbar />
            <div className="h-max flex flex-col py-16 z-10 bg-black bg-opacity-50">
                <div className="p-6">
                    <div className="flex flex-row">
                        <div>
                            <h1 className="p-1 font-bold text-3xl text-white">{movie.name}</h1>
                            <div className="flex flex-row p-1">
                                <p className="mr-4 text-white">Genre: {movie.genre}</p>
                                <p className="mr-4 text-white">MPAA-US film rating: {movie.rating}</p>
                                <p className="mr-4 text-white">Release Date: {movie.date}</p>
                                <p className="mr-4 text-white">Rating: {movie.rating}</p>
                            </div>
                            <p className="p-1 text-white">{movie.description}</p>
                        </div>
                    </div>
                    {/* Add more space between description and trailer */}
                    <div style={{ height: '40px' }}></div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">Trailer</h1>
                        <iframe width={700} height={400} src={movie.trailer} title="Trailer" />
                    </div>
                    <div className="text-white">
                        <ul>
                            <li>Cast</li>
                        </ul>
                        <p>Director</p>
                        <p>Producer</p>
                        <ul>
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
