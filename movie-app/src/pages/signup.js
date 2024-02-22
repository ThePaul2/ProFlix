import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import TextInput from "../components/TextInput";

const SignUp = () => {
	return (
		<div
			className="relative h-screen bg-cover bg-center"
			style={{ backgroundImage: 'url("/static/media/hero.jpg")' }}
		>
			<Navbar />
			<div className="h-screen flex flex-col items-center justify-center">
				<img src={logo} className="mb-4 ml-4 h-20"></img>
				<div className="w-1/3 justify-center rounded-3xl border-neutral-200 border-4 backdrop-blur text-white px-16 py-16 leading-loose">
					<div>
						<h1 className="text-4xl font-bold mb-4 text-center">REGISTER</h1>

						<TextInput name="USERNAME/EMAIL" placeholder="username@gmail.com" />
						<br />
                        <TextInput name="PHONE NUMBER" placeholder="505-842-5662" />
						<br />
						<TextInput name="PASSWORD" placeholder="Password" />
                        <br />
                        <TextInput name="RETYPE PASSWORD" placeholder="Password" />
						<br />
                        <button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Sign up</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
