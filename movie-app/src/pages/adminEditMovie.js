import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/NavbarAdmin";
import TextInput from "../components/TextInput";
import data from "../assets/sampleData.json";

const EditMovie = () => {
	let { id } = useParams();
	console.log(id);
    let movies = data.movies;

    let movie = {};
	let show;
	if (id == "new-movie") {
		movie.id = "NEW_RANDOM_ID";
		movie.name = "Openheimer";
		movie.genre = "Drama";
		movie.mpaa = "R";
		movie.date = "2023";
		movie.rating = 8.4;
		movie.description = "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.";
		movie.image = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg";
		movie.trailer = "https://www.youtube.com/embed/uYPbbksJxIg";
		movie.director = "Christopher Nolan";
		movie.producer = "Mr Producer";
		movie.cast = [];
		movie.reviews = [];
		movie.nowPlaying = false;
		movie.comingSoon = false;

		show = false;
	} else {
		for (let i = 0; i < movies.length; i++) {
			if (id === movies[i].id) {
				movie = movies[i];
			}
		}

		show = true;
	}

	return (
		<div>
			<Navbar />
			<div className="h-screen pt-16 bg-zinc-900">
				<div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
					<div className="flex flex-row w-full">
						<div>
							<h1>Edit Movie</h1>
							<p>Movie Info</p>
						</div>
						<div className="ml-auto">
							<Link to={`/adminMovies`} className="mr-2 px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out">Quit Without Saving</Link>
						</div>
					</div>
					
					<br />
					<TextInput name="Title" placeholder={movie.name} show={show} />
					<br />
					<TextInput name="Genre" placeholder={movie.genre} show={show} />
					<br />
					<TextInput name="Rating" placeholder={movie.rating} show={show} />
					<br />
					<TextInput name="Release Date" placeholder={movie.date} show={show} />
					<br />
					<TextInput name="Trailer Link" placeholder={movie.trailer} show={show} />
					<br />
					<TextInput name="Image" placeholder={movie.image} show={show} />
					<hr />
					<br />
				
					<br />
					
					<button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
				</div>
			</div>
		</div>
	);
};

export default EditMovie;