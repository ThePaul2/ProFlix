import React, { useState, useEffect } from 'react';
import Navbar from "../components/NavbarUser";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const EditProfile = () => {
    let { email } = useParams();
    const [userId, setUserId] = useState(null);
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
        fetchUserId();
		   // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchUserId = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/users/get-userid/${email}`);
            setUserId(response.data.userId);
        } catch (error) {
            console.error('Error fetching user ID:', error);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchUserData();
        }
		   // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/users/${userId}`);
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
            await axios.put(`http://localhost:8080/users/${userId}`, userData);
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
				<div className='flex justify-between items-center'>
   					 <h1>Edit Payments</h1>
    				<Link to='../users/:userId' className='bg-gray-500 hover:bg-red-500 px-2 rounded'>Back</Link>
				</div>
					<form onSubmit={handleSubmit}>
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