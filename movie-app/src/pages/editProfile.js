import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import axios from "axios";

const EditProfile = () => {
	const [userInfo, setUserInfo] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axios.get("http://localhost:8080/users/660326e8a037c7884cea4359");
				console.log("User data:", response.data); // Log the response data
				setUserInfo(response.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching user data:", error);
				setLoading(false);
			}
		};
		
	
		fetchUserData();
	  }, []);

	  if (loading) {
		return <div>Loading...</div>;
	  }

	  return (
		<div>
			<Navbar />
			<div className="h-screen pt-16">
				{loading ? (
					<div>Loading...</div>
				) : (
					<div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
						<h1>Edit Profile</h1>
						<br />
						<TextInput name="Password" placeholder="Password" value={userInfo.password || ''} />
						<br />
						<hr />
						<br />
						<h1>Personal Information</h1>
						<br />
						<TextInput name="First Name" value={userInfo.firstName || ''} />
						<br />
						<TextInput name="Last Name" placeholder="John Doe" value={userInfo.lastName || ''} />
						<br />
						<TextInput name="Phone Number" placeholder="505-842-5662" value={userInfo.phoneNumber || ''} />
						<br />
						<hr />
						<br />
						<h1>Shipping Information</h1>
						<br />
						<TextInput name="Street" placeholder="123 GoDawgs Lane" value={userInfo.street1 || ''} />
						<br />
						<TextInput name="City" placeholder="Athens" value={userInfo.city || ''} />
						<br />
						<TextInput name="State" placeholder="GA" value={userInfo.state || ''} />
						<br />
						<TextInput name="Country" placeholder="USA" value={userInfo.country || ''} />
						<br />
						<hr />
						<br />
						<h1>Payment Information</h1>
						<br />
						<TextInput name="Card Number" placeholder="12345" value={userInfo.cardNumber || ''} />
						<br />
						<TextInput name="Expiration Date" placeholder="12345" value={userInfo.exp || ''} />
						<br />
						<TextInput name="Card Holder First Name" placeholder="12345" value={userInfo.cardFirst || ''} />
						<br />
						<TextInput name="Card Holder Last Name" placeholder="12345" value={userInfo.cardLast || ''} />
						<br />
						<TextInput name="CVC Code" placeholder="12345" value={userInfo.CVN || ''} />
						<br />
						<button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
					</div>
				)}
			</div>
		</div>
	);
	
};

export default EditProfile;