import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { signupUser } from '../components/signupUser'; // Import the signupUser function

export default function Signup({
    setUser,
    setAuthState
}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: '',
        state: '',
        country: '',
        streetAddress: '',
        apartment: '',
        cardNumber: '',
        expirationDate: '',
        cvn: '',
        cardFirstName: '',
        cardLastName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const data = await signupUser(formData);
            console.log('Signup successful:', data);
            // Handle successful signup
        } catch (error) {
            console.error('Signup error:', error.message);
            // Handle signup error
        }
    };

    return (
        <section className="bg-black h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <Link to="/"> 
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="md:w-1/3 max-w-sm">
                <h1 className="text-3xl font-bold text-white mb-2">Create an Account</h1>
                <div className="text-center md:text-left">
                    <div className="flex">
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4 mr-2" type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name *" required />
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name *" required />
                    </div>
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password *" required />

                    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Billing and Payment Information (Optional) 
                    </div>
                    
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} placeholder="Street Address" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="apartment" value={formData.apartment} onChange={handleChange} placeholder="Apartment, suite, etc..." />
                    <div className="flex">
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4 mr-2" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
                    </div>
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />

                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Card Number" />
                    <div className="flex">
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4 mr-2" type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} placeholder="Expiration Date" required />
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="cvn" value={formData.cvn} onChange={handleChange} placeholder="CVN" required />
                    </div>
                    <div className="flex">
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4 mr-2" type="text" name="cardFirstName" value={formData.cardFirstName} onChange={handleChange} placeholder="First Name on Card" required />
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="cardLastName" value={formData.cardLastName} onChange={handleChange} placeholder="Last Name on Card" required />
                    </div>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    <label className="text-red-600">* Required</label>
                </div>
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                    <Link className="text-red-600 hover:text-red-700 hover:underline hover:underline-offset-4" to="/forgot-password">Need Help?</Link>
                </div>
                <div className="text-center md:text-left my-1">
                    <button className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" onClick={handleSubmit}>Create Account</button>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">Login</Link>
                </div>
            </div>
        </section>
    )
}






/*
import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Signup({
    setUser,
    setAuthState
}) {
    return (
        <section className="bg-black h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
				<Link to="/"> 
					<img
					src={logo}
					alt="Logo" />
				</Link>
            </div>
            <div className="md:w-1/3 max-w-sm">
			<h1 className="text-3xl font-bold text-white mb-6">Create an Account</h1>
                <div className="text-center md:text-left">
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Username" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="email" placeholder="Email Address" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Retype Password" />
                    
                </div>
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                    <Link className="text-red-600 hover:text-red-700 hover:underline hover:underline-offset-4" to="/forgot-password">Need Help?</Link>
                </div>
                <div className="text-center md:text-left my-6">
                    <Link className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" to="/confirmation">Create Account</Link>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">Login</Link>
                </div>
            </div>
        </section>
    )
}
*/