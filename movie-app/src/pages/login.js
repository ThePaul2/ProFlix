import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import TextInput from "../components/TextInput";

const Login = () => {
	return (
		<div className="h-screen bg-cover bg-center">
			<div
				className="w-screen h-screen bg-cover bg-center fixed z-0"
				style={{ backgroundImage: 'url("/static/media/hero.jpg")' }}
			></div>
			<Navbar />
			<div className="h-max flex flex-col items-center justify-center py-16 z-10">
				<img src={logo} className="mb-4 ml-4 h-20 z-0"></img>
				<div className="w-1/3 justify-center rounded-3xl border-neutral-200 border-4 backdrop-blur text-white px-16 py-16 leading-loose">
					<div>
						<h1 className="text-4xl font-bold mb-4 text-center">LOGIN</h1>

						<TextInput name="USERNAME" placeholder="username@gmail.com" />
						<br />
						<TextInput name="PASSWORD" placeholder="Password" />
						<Link to='/'>
							<p className="text-xs text-slate-300">Forgot password?</p>
						</Link>
						<br />
						<button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Sign in</button>
						<br />
						<br />
						<div className="text-center text-l">
							<text>Don't have an account yet? </text>
							<Link to='/signup' className="text-center text-xl font-semibold">Register for free</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
