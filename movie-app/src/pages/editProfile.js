import React, { useState, useEffect } from 'react';
import Navbar from "../components/NavbarUser";
import TextInput from "../components/TextInput";
import axios from "axios";

const EditProfile = () => {
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		country: '',
		street1: '',
		street2: '',
		city: '',
		state: '',
		cardNumber: '',
		exp: '',
		CVN: '',
		cardFirst: '',
		cardLast: '',
		password: ''
	});
	useEffect(() => {
		// Fetch user data when the component mounts
		fetchUserData();
	  }, []);

	  const fetchUserData = async () => {
		try {
		  const response = await axios.get('http://localhost:8080/users/660326e8a037c7884cea4359'); // Adjust the endpoint based on your API
		  const { firstName, lastName, email, country, street1, street2, city, state, cardNumber, exp, CVN, cardFirst, cardLast } = response.data;
		  setUserData({ firstName, lastName, email, country, street1, street2, city, state, cardNumber, exp, CVN, cardFirst, cardLast });
		} catch (error) {
		  console.error('Error fetching user data:', error);
		}
	  };
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData(prevData => ({
		  ...prevData,
		  [name]: value,
		}));
	  };
	
	  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  await axios.put('http://localhost:8080/users/660326e8a037c7884cea4359', userData); // Adjust the endpoint based on your API
		  alert('User data updated successfully!');
		} catch (error) {
		  console.error('Error updating user data:', error);
		  alert('Failed to update user data');
		}
	  };
	return (
		<div>
			<Navbar />
			<div
				className="h-screen pt-16"
			>
				<div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
					<h1>Edit Profile</h1>
					<form onSubmit={handleSubmit}>
						<label>
							Password:
							<input
								type="password"
								name="password"
								value={userData.password}
								onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<label>
							First Name:
							<input
								type="text"
            					name="firstName"
            					value={userData.firstName}
            					onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<label>
							Last Name:
							<input
								type="text"
								name="lastName"
								value={userData.lastName}
								onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<br />
						<br />
						<hr />
						<h1>Billing Address</h1>
						<label>
							Street:
							<input
								type="text"
            					name="street"
            					value={userData.street1}
            					onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<label>
							City:
							<input
								type="text"
            					name="city"
            					value={userData.city}
            					onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<label>
							State:
							<input
								type="text"
            					name="state"
            					value={userData.state}
            					onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<label>
							Country:
							<input
								type="text"
            					name="country"
            					value={userData.country}
            					onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<br />
						<br />
						<hr />
						<h1>Card Info</h1>
						<label>
							First Name:
							<input
								type="text"
								name="cardFirst"
								value={userData.cardFirst}
								onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<label>
							Last Name:
							<input
								type="text"
								name="cardLast"
								value={userData.cardLast}
								onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<label>
							Card Number:
							<input
								type="password"
								name="cardNumber"
								value={userData.cardNumber}
								onChange={handleChange}
								style={{ color: 'black' }}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<label>
							Expiration Date:
							<input
								type="text"
								name="exp"
								value={userData.exp}
								onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<label>
							CVN:
							<input
								type="password"
								name="CVN"
								value={userData.CVN}
								onChange={handleChange}
								style={{color: 'black'}}
								className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
							/>
						</label>
						<br />
						<br />
						<button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;