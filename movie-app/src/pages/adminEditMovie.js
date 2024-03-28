import React from "react";
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/NavbarAdmin";
import TextInput from "../components/TextInput";
import data from "../assets/sampleData.json";

const EditMovie = () => {
	// Get Defaults
	let { id } = useParams();
    let movies = data.movies;

	// Set default for new movie
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

	// New input for cast or reviews
	const NewInput = ({name, text, show}) => {
		function deleteSelf(event) {
			let parent = event.target.parentElement;
			parent.remove();

			let castI = movie.cast.indexOf(text);
			let reviewI = movie.reviews.indexOf(text);
			if (castI != -1) {
				movie.cast.splice(castI, 1);
			}
			if (reviewI != -1) {
				movie.reviews.splice(reviewI, 1);
			}
		}
		return (
			<div className="flex mb-2">
				<TextInput name={name} placeholder={text} show={show} />
				<button onClick={deleteSelf} className={myStyles.redButton}>Delete</button>
			</div>
		);
	}

	// Add new input for cast or reviews
	function addItemTo(type) {
		let parent;
		let newName;
		let list;
		if (type == "cast") {
			newName = "New Cast Member";
			parent = "cast-container";

			movie.cast.push(newName);
			list = movie.cast;
		} else if (type == "reviews") {
			newName = "New Review";
			parent = "review-container";

			movie.reviews.push(newName);
			list = movie.reviews;
		}
		let base = document.getElementById(parent);
		let root = createRoot(base);

		let elements = [];
		for (let i = 0; i < list.length; i++) {
			let show = true;
			if (list[i] == newName) {
				show = false;
			}
			elements.push(<NewInput name="" text={list[i]} show={show} />);
		}
		let newParent = React.createElement('div', {}, elements);
		root.render(newParent);
	}

	function update() {
		//
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
					<TextInput name="MPAA Rating" placeholder={movie.mpaa} show={show} />
					<br />
					<TextInput name="Release Date" placeholder={movie.date} show={show} />
					<br />
					<TextInput name="Rating" placeholder={movie.rating} show={show} />
					<br />
					<TextInput name="Description" placeholder={movie.description} show={show} />
					<br />
					<TextInput name="Image" placeholder={movie.image} show={show} />
					<br />
					<TextInput name="Trailer Link" placeholder={movie.trailer} show={show} />
					<br />
					<TextInput name="Director" placeholder={movie.director} show={show} />
					<br />
					<TextInput name="Producer" placeholder={movie.producer} show={show} />
					<br />
					<h1 className="font-semibold">Cast Members</h1>
					<div id="cast-container">
						<div>
							{movie.cast.map(person => (
								<NewInput name="" text={person} show={true} />
							))}
						</div>
					</div>
					<button onClick={() => addItemTo("cast")} className={myStyles.greenButton}>Add Cast Member</button>
					<br /><br />
					<h1 className="font-semibold">Reviews</h1>
					<div id="review-container">
						<div>
							{movie.reviews.map(review => (
								<NewInput name="" text={review} show={true} />
							))}
						</div>
					</div>
					<button onClick={() => addItemTo("reviews")} className={myStyles.greenButton}>Add Review</button>
					<br /><br />
					<br />
					<hr />
					<br />
					
					<button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
				</div>
			</div>
		</div>
	);
};

export default EditMovie;

const myStyles = {
	greenButton: "px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out ml-3",
	redButton: "px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out ml-3",
	container: "mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300",
}