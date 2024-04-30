import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Purchased() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const bookingId = queryParams.get('id');

    return (
        <section className="bg-black h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="md:w-1/3 max-w-sm">
                <h1 className="text-3xl font-bold text-white mb-6">Tickets Purchased!</h1>
                <div className="text-white  my-6">
                    <p style={{ display: 'inline' }}>Booking ID: </p>
                    <p style={{ display: 'inline' }}>{bookingId}</p>
                </div>
                <div className="text-center md:text-left">
                    <Link to="/">
                        <button className="ml-14 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md mb-4">Go back Home</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
