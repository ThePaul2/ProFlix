import React from "react";
import Navbar from "../components/NavbarAdmin";
import TextInput from "../components/TextInput";

const editMovie = () => {
	return (
		<div>
			<Navbar />
			<div
				className="h-screen pt-16"
			>
				<div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
					<h1>Edit Movie</h1>
					<p>Movie Info</p>
					
					<br />
					<TextInput name="Title" placeholder="Oppenheimer" />
					<br />
					<TextInput name="Genre" placeholder="Comedy" />
					<br />
					<TextInput name="Rating" placeholder="9.8" />
					<br />
					<TextInput name="Release Date" placeholder="2023" />
					<br />
					<TextInput name="Trailer Link"  />
					<br />
					<TextInput name="Image"  />
					<hr />
					<br />
				
					<br />
					
					<button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
				</div>
			</div>
		</div>
	);
};

export default editMovie;