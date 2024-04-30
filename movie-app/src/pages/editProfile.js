import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditProfile = () => {
    let { email } = useParams();
    const navigate = useNavigate();
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
        password: '',
        promo: ''
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
            const { firstName, lastName, email, country, street1, street2, city, state, cardNumber, exp, CVN, cardFirst, cardLast, promo } = response.data;
            console.log('User Data:', response.data); // Add this line to log user data
            setUserData({ firstName, lastName, email, country, street1, street2, city, state, cardNumber, exp, CVN, cardFirst, cardLast, promo });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        // If the input type is checkbox, update the value based on whether it's checked or not
        const newValue = type === 'checkbox' ? checked : value;
    
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: newValue
        }));
    };
    
    
    /*
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    */

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/users/${userId}`, userData);
            navigate(`/users/${email}`);
        } catch (error) {
            console.error('Error updating user data:', error);
            alert('Failed to update user data');
        }
    };

    const handlePasswordChange = async () => {
        try {
            const currentPassword = window.prompt('Enter your current password:');
            if (!currentPassword) return; // If the user cancels, exit
            
            const response = await axios.post('http://localhost:8080/users/verify-password', {
                userId,
                password: currentPassword
            });
            
            if (response.data.success) {
                const newPassword = window.prompt('Enter your new password:');
                if (!newPassword) return; // If the user cancels, exit
                
                // Call your password update API with the new password
                await axios.put(`http://localhost:8080/users/update-password/${userId}`, {
                    newPassword
                });

                alert('Password updated successfully!');
            } else {
                alert('Incorrect current password. Please try again.');
            }
        } catch (error) {
            console.error('Error updating password:', error);
            alert('Failed to update password');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="h-screen pt-16">
                <div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
                    <div className='flex justify-between items-center'>
                        <h1>Edit Profile</h1>
                        <Link to={`../users/${email}`} className='bg-gray-500 hover:bg-red-500 px-2 rounded'>Back</Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={userData.firstName}
								placeholder={userData.firstName}
                                onChange={handleChange}
                                style={{ color: 'black' }}
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
                                style={{ color: 'black' }}
                                className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                style={{ color: 'black' }}
                                className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
                                disabled
                            />
                        </label>
                        <button type="button" onClick={handlePasswordChange} className="text-center rounded-xl border-neutral-200 my-6 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Change Password</button>
                        <br />
                        <br />
                        <hr />
						<h1>Billing Address</h1>
                        <label>
                            Street:
                            <input
                                type="text"
                                name="street1" 
                                value={userData.street1}
                                onChange={handleChange}
                                style={{ color: 'black' }}
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
                                style={{ color: 'black' }}
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
                                style={{ color: 'black' }}
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
                                style={{ color: 'black' }}
                                className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
                            />
                        </label>
                        <label>
                            <input
                                className='mr-1'
                                type="checkbox"
                                name="promo"
                                checked={userData.promo} // Set the checked attribute based on userData.promo
                                onChange={handleChange}
                            />
                            <span>Register for Promotion</span>
                        </label>


                        <br />
                        <br />
                        <button type="submit" className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
