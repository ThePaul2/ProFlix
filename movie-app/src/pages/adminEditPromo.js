import React from "react";
import Navbar from "../components/NavbarAdmin";
import TextInput from "../components/TextInput";

const editPromo = () => {
	return (
		<div>
			<Navbar />
			<div
				className="h-screen pt-16 bg-zinc-900"
			>
				<div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
					<h1>Edit Promo</h1>
					<p>Promo Info</p>
					
					<br />
					<TextInput name="Name" placeholder="Free Popcorn" />
					<br />
					<TextInput name="Time" placeholder="2023" />
					<hr />
					<br />
				
					<br />
					
					<button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
				</div>
			</div>
		</div>
	);
};

export default editPromo;