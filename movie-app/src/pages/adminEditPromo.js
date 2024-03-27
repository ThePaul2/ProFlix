import React from "react";
import { Link, useParams } from 'react-router-dom';
import Navbar from "../components/NavbarAdmin";
import TextInput from "../components/TextInput";
import data from "../assets/sampleData.json";

const EditPromo = () => {
	let { id } = useParams();
	console.log(id);
    let promos = data.promos;

    let promo = {};
	let show;
	if (id == "new-movie") {
		promo.id = "NEW_RANDOM_ID";
		promo.image = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-theatre-poster-template-5c872c5ff28ad75b461b35f268379459_screen.jpg?ts=1636968444";
		promo.title = "Special Day";
		promo.description = "A special day";
		promo.start_date = "3/20/2024";
		promo.end_date = "5/5/2025";

		show = false;
	} else {
		for (let i = 0; i < promos.length; i++) {
			if (id == promos[i].id) {
				promo = promos[i];
			}
		}

		show = true;
	}

	return (
		<div>
			<Navbar />
			<div
				className="h-screen pt-16 bg-zinc-900"
			>
				<div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
				<div className="flex flex-row w-full">
						<div>
							<h1>Edit Promo</h1>
							<p>Promo Info</p>
						</div>
						<div className="ml-auto">
							<Link to={`/adminPromo`} className="mr-2 px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out">Quit Without Saving</Link>
						</div>
					</div>
					
					<br />
					<TextInput name="Title" placeholder={promo.title} show={show} />
					<br />
					<TextInput name="Image" placeholder={promo.image} show={show} />
					<br />
					<TextInput name="Description" placeholder={promo.description} show={show} />
					<br />
					<TextInput name="Start Date" placeholder={promo.start_date} show={show} />
					<br />
					<TextInput name="End Date" placeholder={promo.end_date} show={show} />
					<hr />
					<br />
				
					<br />
					
					<button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
				</div>
			</div>
		</div>
	);
};

export default EditPromo;