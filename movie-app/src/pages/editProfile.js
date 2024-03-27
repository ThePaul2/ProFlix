import React from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";

const EditProfile = () => {
	return (
		<div>
			<Navbar />
			<div
				className="h-screen pt-16"
			>
				<div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
					<h1>Edit Profile</h1>
					<p>Email</p>
					<TextInput name="PASSWORD" placeholder="Password" />
					<br />
					<hr />
					<br />
					<h1>Personal Information</h1>
					<br />
					<TextInput name="NAME" placeholder="John Doe" />
					<br />
					<TextInput name="PHONE NUMBER" placeholder="505-842-5662" />
					<br />
					<hr />
					<br />
					<h1>Shipping Information</h1>
					<br />
					<TextInput name="Street" placeholder="123 GoDawgs Lane" />
					<br />
					<TextInput name="City" placeholder="Athens" />
					<br />
					<TextInput name="State" placeholder="GA" />
					<br />
					<TextInput name="Zip Code" placeholder="12345" />
					<br />
					<hr />
					<br />
					<h1>Payment Information</h1>
					<br />
					<br />
					<button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;