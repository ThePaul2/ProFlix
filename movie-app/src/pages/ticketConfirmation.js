import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function TicketConfirmation() {
    const [searchParams] = useSearchParams();
    const totalPrice = searchParams.get('totalPrice') || 0;

    return (
        <section className="bg-black h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="text-center"> {/* Center align the content */}
                    <h1 className="text-3xl font-bold text-white mb-6">Order Summary</h1>
                    <p className="text-white">Total Price: ${totalPrice}</p>
                    <div className="w-40 mx-auto"> {/* Adjust width of the Link */}
                        <Link to="/purchased" className="bg-gray-600 hover:bg-red-700 text-white py-3 rounded-md mt-4 block">Confirm Purchase</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
