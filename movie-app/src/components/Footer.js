import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 relative">
            <div className="container mx-auto flex justify-center">
                {/* About Us */}
                <div className="mx-4">
                    <h3 className="text-xl font-bold mb-4">About Us</h3>
                    <ul className="list-none">
                        <li><button className="text-white font-semibold hover:text-red-500 transition duration-500 cursor-pointer">Who are we?</button></li>
                        <li><button className="text-white font-semibold hover:text-red-500 transition duration-500 cursor-pointer">Partners</button></li>
                        <li><button className="text-white font-semibold hover:text-red-500 transition duration-500 cursor-pointer">Privacy Policy</button></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="mx-4">
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <ul className="list-none">
                        <li><button className="text-white font-semibold hover:text-red-500 transition duration-500 cursor-pointer">Get in touch</button></li>
                        <li><button className="text-white font-semibold hover:text-red-500 transition duration-500 cursor-pointer">Help</button></li>
                        <li><button className="text-white font-semibold hover:text-red-500 transition duration-500 cursor-pointer">Community Services</button></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="mx-4">
                    <h3 className="text-xl font-bold mb-4">Services</h3>
                    <ul className="list-none">
                        <li><button className="text-white font-semibold hover:text-red-500 transition duration-500 cursor-pointer">Download the App</button></li>
                        <li><button className="text-white font-semibold hover:text-red-500 transition duration-500 cursor-pointer">Become a Pro</button></li>
                    </ul>
                </div>

                {/* More */}
                <div className="mx-4">
                    <h3 className="text-xl font-bold mb-4">More</h3>
                    <ul className="list-none">
                        <li><button className="text-white font-semibold hover:text-red-500 transition duration-500 cursor-pointer">Food and Drinks</button></li>
                    </ul>
                </div>
            </div>
            {/* Logo */}
            <img src={logo} alt="Logo" className="absolute bottom-0 left-0 mb-4 ml-4 h-12" />
        </footer>
    );
};

export default Footer;