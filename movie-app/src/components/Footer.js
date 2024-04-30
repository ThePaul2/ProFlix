import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 relative">
            <div className="container mx-auto flex justify-center">
                {/* About Us */}
                <div className="mx-4">
                    <h3 className="text-xl font-bold mb-4">About Us</h3>
                    <ul className="list-none">
                        <li><Link to="/fourOfour" className="text-white font-semibold hover:text-red-500 transition duration-500">Who are we?</Link></li>
                        <li><Link to="/fourOfour" className="text-white font-semibold hover:text-red-500 transition duration-500">Partners</Link></li>
                        <li><Link to="/fourOfour" className="text-white font-semibold hover:text-red-500 transition duration-500">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="mx-4">
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <ul className="list-none">
                        <li><Link to="/fourOfour" className="text-white font-semibold hover:text-red-500 transition duration-500">Get in touch</Link></li>
                        <li><Link to="/fourOfour" className="text-white font-semibold hover:text-red-500 transition duration-500">Help</Link></li>
                        <li><Link to="/fourOfour" className="text-white font-semibold hover:text-red-500 transition duration-500">Community Services</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="mx-4">
                    <h3 className="text-xl font-bold mb-4">Services</h3>
                    <ul className="list-none">
                        <li><Link to="/fourOfour" className="text-white font-semibold hover:text-red-500 transition duration-500">Download the App</Link></li>
                        <li><Link to="/fourOfour" className="text-white font-semibold hover:text-red-500 transition duration-500">Become a Pro</Link></li>
                    </ul>
                </div>

                {/* More */}
                <div className="mx-4">
                    <h3 className="text-xl font-bold mb-4">More</h3>
                    <ul className="list-none">
                        <li><Link to="/fourOfour" className="text-white font-semibold hover:text-red-500 transition duration-500">Food and Drinks</Link></li>
                    </ul>
                </div>
            </div>
            {/* Logo */}
            <img src={logo} alt="Logo" className="absolute bottom-0 left-0 mb-4 ml-4 h-12" />
        </footer>
    );
};

export default Footer;
