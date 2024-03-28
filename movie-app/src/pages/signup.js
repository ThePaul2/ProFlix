import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';

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
        street1: '',
        street2: '',
        status: '1'
    });

    const navigate = useNavigate(); 
    const [message, setMessage] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleNext = () => {
        if (accountCreated) {
            navigate('/card-info');
        } else {
            alert('Please create an account first.');
        }
    };
    const handleSubmit = async () => {
        if (formData.firstName.trim() === '' || formData.lastName.trim() === '' || formData.email.trim() === '' || formData.password.trim() === '') {
            // If empty, display a pop-up or an error message
            alert('Please enter all required fields.');
            return; 
        }
    
        try {
            // Check if the email already exists in the database
            const emailExistsResponse = await axios.get(`http://localhost:8080/users/check-email/${formData.email}`);
            const { exists } = emailExistsResponse.data;
    
            if (exists) {
                alert('Email already exists.');
                return;
            }
    
            // If email does not exist, proceed with signup
            try {
                const response = await axios.post('http://localhost:8080/users', formData);
                const data = response.data;
                console.log('Signup successful:', data);
                localStorage.setItem('userId', data._id);
                console.log(data._id);
                try {
                    const confirmationResponse = await axios.post('http://localhost:8080/users/confirmation', { email: formData.email });
                    console.log('Confirmation email sent:', confirmationResponse.data);
                } catch (error) {
                    console.error('Failed to send confirmation email:', error);
                }
                setMessage('Press Next to add Payment Info. Check your email for account verification.');
                setAccountCreated(true);
            } catch (error) {
                console.error('Signup error:', error.message);
            }
    
        } catch (error) {
            console.error('Error checking email existence:', error.message);
            alert('Error checking email existence. Please try again.');
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
                    
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="street1" value={formData.street1} onChange={handleChange} placeholder="Street Address" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="street2" value={formData.street2} onChange={handleChange} placeholder="Apartment, suite, etc..." />
                    <div className="flex">
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4 mr-2" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
                        <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
                    </div>
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    <label className="text-red-600">* Required</label>
                </div>
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Register for Promotion</span>
                    </label>
                    <Link className="text-red-600 hover:text-red-700 hover:underline hover:underline-offset-4" to="/forgot-password">Need Help?</Link>
                </div>
                <div className="text-center md:text-left my-1">
                    <button className="mt-6 mr-4 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" onClick={handleSubmit}>Create Account</button>
                    <button className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" onClick={handleNext}>Next</button>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">Login</Link>
                </div>
                {message && <p className="font-semibold text-red-600">{message}</p>}
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