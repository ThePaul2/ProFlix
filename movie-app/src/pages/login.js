import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login({ setUser, setAuthState }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const passwordFromForm = formData.get('password');

    try {
      // Fetch user data from the server based on the entered email
      const response = await fetch(`http://localhost:8080/users/login/${email}`);
      const userData = await response.json();

      // Extract password and status from user data
      const { password, status } = userData;

      // Compare the entered password with the password retrieved from the server
      if (passwordFromForm === password && status === 0) {
        // Password and status match, navigate to /users/login/:email
        navigate(`/users/${email}`);
      } else if (status === 1) {
        // Account is inactive, show pop-up message
        setError('Your account is inactive. Please contact support.');
      } else if (passwordFromForm === password && status === 2) {
        // Account is inactive, show pop-up message
        navigate(`/admin`);
      } else {
        // Password or status don't match, handle the error (e.g., show a message to the user)
        setError('Incorrect password or Email is Wrong');
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error fetching user data:', error);
      setError('Error fetching user data. Please try again later.');
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
        <h1 className="text-3xl font-bold text-white mb-6">Login here</h1>
        <form onSubmit={handleSubmit}>
          <div className="text-center md:text-left">
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" name="email" placeholder="Email Address" />
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" name="password" placeholder="Password" />
          </div>
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <Link className="text-red-600 hover:text-red-700 hover:underline hover:underline-offset-4" to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="text-center mt-4 md:text-left">
            <button type="submit" className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">Login</button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/signup">Register</Link>
        </div>
        {error && <div className="mt-4 text-red-500">{error}</div>}
      </div>
    </section>
  );
}










/*
import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login({
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
      <h1 className="text-3xl font-bold text-white mb-6">Login here</h1>
        <div className="text-center md:text-left">
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <Link className="text-red-600 hover:text-red-700 hover:underline hover:underline-offset-4" to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="text-center mt-4 md:text-left">
          <Link className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" to="/user">Login</Link>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/signup">Register</Link>
        </div>
      </div>
    </section>
    )
}
*/