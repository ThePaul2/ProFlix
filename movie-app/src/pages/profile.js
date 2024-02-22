import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import TextInput from "../components/TextInput";

const Profile = () => {
	return (
		<div>
			<Navbar />
			<div
				className="h-screen pt-16 flex flex-row"
			>
				<div className="bg-zinc-900 text-white font-bold leading-10 p-10 w-1/6">
					<p>Name</p>
					<p>Email</p>
                    <Link to='/edit-profile'>
    					<p>ACCOUNT INFO</p>
                    </Link>
				</div>
				<div className="bg-zinc-800 w-5/6">
					<p>Hi</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;