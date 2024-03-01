import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import data from '../assets/sampleData.json';
import Seats from '../components/Seats.js';
import { Link } from 'react-router-dom';

const Tickets = () => {
    let { id } = useParams();
    let movies = data.movies;

    let movie;
    for (let i = 0; i < movies.length; i++) {
        if (id == movies[i].id) {
            movie = movies[i];
        }
    }

    const [childTickets, setChildTickets] = useState(0);
    const [adultTickets, setAdultTickets] = useState(0);
    const [seniorTickets, setSeniorTickets] = useState(0);

    const handleIncrement = (type) => {
        switch (type) {
            case 'child':
                setChildTickets(childTickets + 1);
                break;
            case 'adult':
                setAdultTickets(adultTickets + 1);
                break;
            case 'senior':
                setSeniorTickets(seniorTickets + 1);
                break;
            default:
                break;
        }
    };

    const handleDecrement = (type) => {
        switch (type) {
            case 'child':
                setChildTickets(childTickets > 0 ? childTickets - 1 : 0);
                break;
            case 'adult':
                setAdultTickets(adultTickets > 0 ? adultTickets - 1 : 0);
                break;
            case 'senior':
                setSeniorTickets(seniorTickets > 0 ? seniorTickets - 1 : 0);
                break;
            default:
                break;
        }
    };

    const totalTickets = childTickets * 8 + adultTickets * 11 + seniorTickets * 9;

    return (
        <div>
            <Navbar />
            <div className="flex">
                {/* Left Side */}
                <div className="w-1/2 flex flex-col p-6">
                    <div className="mb-8">
                        <h2 className="font-bold text-xl mb-2">Movie Details</h2>
                        <img src={movie.image} alt={movie.name} className="mb-2" />
                        <p className="text-gray-700">{movie.name}</p>
                        <p className="text-gray-700">{movie.genre}</p>
                        <p className="text-gray-700">{movie.rating}</p>
                        <p className="text-gray-700">{movie.date}</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-4xl mb-4">Tickets</h1>
                        <div className="mb-4">
                            <h2 className="font-bold mb-2">Child</h2>
                            <button onClick={() => handleDecrement('child')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2">-</button>
                            <span className="px-4">{childTickets}</span>
                            <button onClick={() => handleIncrement('child')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2">+</button>
                        </div>
                        <div className="mb-4">
                            <h2 className="font-bold mb-2">Adult</h2>
                            <button onClick={() => handleDecrement('adult')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2">-</button>
                            <span className="px-4">{adultTickets}</span>
                            <button onClick={() => handleIncrement('adult')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2">+</button>
                        </div>
                        <div className="mb-4">
                            <h2 className="font-bold mb-2">Senior</h2>
                            <button onClick={() => handleDecrement('senior')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2">-</button>
                            <span className="px-4">{seniorTickets}</span>
                            <button onClick={() => handleIncrement('senior')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2">+</button>
                        </div>
                        <p className="font-bold">Total: ${totalTickets}</p>
                    </div>
                    <Link className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-600 mt-8" to="/ticketconfirmation">Purchase Tickets</Link>
                </div>
                {/* Vertical Bar */}
                <div className="w-px bg-gray-400"></div>
                {/* Right Side */}
                <div className="w-1/2">
                  <Seats />
                </div>
            </div>
        </div>
    );
};

export default Tickets;
