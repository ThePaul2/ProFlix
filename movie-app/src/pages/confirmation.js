import React from "react";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Confirmation = () => {
	return (
		<div className="h-screen bg-cover bg-center">
			<div
				className="w-screen h-screen bg-cover bg-center fixed z-0"
				style={{ backgroundImage: 'url("/static/media/hero.jpg")' }}
			></div>
			<Navbar />
			<div className="h-max flex flex-col items-center justify-center py-16 z-10">
                <div className="z-0 m-32 p-10 rounded-3xl border-neutral-200 border-4 bg-zinc-300 text-zinc-900 text-center">
                    <h1 className="font-bold text-7xl">Account Created</h1>
                    <br />
                    <p className="text-3xl">You can now book movies.</p>
                </div>
			</div>
		</div>
	);
};

export default Confirmation;