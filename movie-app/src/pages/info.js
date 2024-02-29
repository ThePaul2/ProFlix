import React from "react";
import Navbar from "../components/Navbar";
import { Route, useParams } from "react-router-dom";

const Info = () => {
    let { imageUrl, title, rating, date, trailer, description } = useParams();
    // console.log('Params:', imageUrl, title, rating, date, description);

    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
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
                            <h1 className="p-1 font-bold text-3xl text-white">{title}</h1>
                            <div className="flex flex-row p-1">
                                <p className="mr-4 text-white">Genre: GENRE</p>
                                <p className="mr-4 text-white">MPAA-US film rating: MPAA RATING</p>
                                <p className="mr-4 text-white">Release Date: {date}</p>
                                <p className="mr-4 text-white">Rating: {rating}</p>
                            </div>
                            <p className="p-1 text-white">{description}</p>
                        </div>
                    </div>
                    {/* Add more space between description and trailer */}
                    <div style={{ height: '40px' }}></div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">Trailer</h1>
                        <iframe width={700} height={400} src={trailer} title="Trailer" />
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

