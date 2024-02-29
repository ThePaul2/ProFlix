import React from "react";
import Navbar from "../components/Navbar";
import { Route, useParams } from "react-router-dom";
import data from "../assets/sampleData.json";

const Info = () => {
	let movies = data.movies;

	let { id } = useParams();

	let movie;
	for (let i = 0; i < movies.length; i++) {
		if (id == movies[i].id) {
			movie = movies[i];
		}
	}

	return (
		<div>
			<Navbar />
			<div className="h-max flex flex-col py-16 z-10">
				<div className="p-6">
					<div className="flex flex-row">
						<img className="w-28 h-60 bg-cover mr-4"
							src={movie.image} alt={movie.name}
							style={{backgroundImage: "url('/static/media/poster.jpg')"}}
						/>
						<div>
							<h1 className="p-1 font-bold text-3xl">{movie.name}</h1>
							<div className="flex flex-row p-1">
								<p className="mr-4">Genre: GENRE</p>
								<p className="mr-4">MPAA-US film rating: MPAA RATING</p>
								<p className="mr-4">Release Date: {movie.date}</p>
								<p className="mr-4">Rating: {movie.rating}</p>
							</div>
							<p className="p-1">{movie.description}</p>
						</div>
					</div>
					<div>
						<h1>Trailer</h1>
						<iframe width={700} height={400}
							src={movie.trailer}
						/>
					</div>
					<div>
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

