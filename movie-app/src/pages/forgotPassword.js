import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleForgotPassword = async () => {
        try {
          const response = await axios.post('http://localhost:8080/users/forgot-password', { email });
          setMessage(response.data.message);
        } catch (error) {
          setMessage('Failed to reset password. Please try again later.');
          console.error(error);
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
                <h1 className="text-3xl font-bold text-white mb-6">Forgot Password</h1>
                <div className="text-center md:text-left">
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" value={email} onChange={handleChange} placeholder="Email Address" />
                </div>
                <div className="mt-4 text-sm text-slate-500 text-center md:text-left">
                    Enter your email address below and we'll send you instructions on how to reset your password.
                </div>
                <div className="text-center mt-4 md:text-left">
                    <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" onClick={handleForgotPassword}>Submit</button>
                    <p className="mt-4 text-sm text-slate-500 text-center md:text-left">{message}</p>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Remember your password? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">Login</Link>
                </div>
            </div>
        </section>
    );
}
