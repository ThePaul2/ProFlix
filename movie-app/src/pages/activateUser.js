import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { activateUser } from '../components/activateUser';

export default function ActivateUser() {
    const [message, setMessage] = useState('');
    const { email } = useParams();
    const navigate = useNavigate();

    const handleActivate = async () => {
        try {
            const response = await activateUser({ status: 1 }, email);
            navigate('/login');
            setMessage(response.message);
        } catch (error) {
            console.error('Activation error:', error.message);
            let errorMessage = 'Failed to activate. Please try again later.';
            if (error.message.includes('Network')) {
                errorMessage = 'Network error. Please check your internet connection.';
            } else if (error.message.includes('404')) {
                errorMessage = 'User not found. Please check the email address.';
            } else if (error.message.includes('500')) {
                errorMessage = 'Server error. Please try again later.';
            }
            setMessage(errorMessage);
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
                <h1 className="text-3xl font-bold text-white mb-6">Activate Account</h1>
                <div className="text-center mt-4 md:text-left">
                    <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" onClick={handleActivate}>Activate</button>
                    <p className="mt-4 text-sm text-slate-500 text-center md:text-left">{message}</p>
                </div>
            </div>
        </section>
    );
}
