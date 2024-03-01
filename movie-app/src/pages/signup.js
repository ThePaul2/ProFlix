import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Signup({
    setUser,
    setAuthState
}) {
    return (
        <section className="bg-black h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
				<Link to="/"> 
					<img
					src={logo}
					alt="Logo" />
				</Link>
            </div>
            <div className="md:w-1/3 max-w-sm">
			<h1 className="text-3xl font-bold text-white mb-6">Create an Account</h1>
                <div className="text-center md:text-left">
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Username" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="email" placeholder="Email Address" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Retype Password" />
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="tel" placeholder="Phone Number" />
                </div>
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                    <Link className="text-red-600 hover:text-red-700 hover:underline hover:underline-offset-4" to="/forgot-password">Need Help?</Link>
                </div>
                <div className="text-center md:text-left my-6">
                    <Link className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" to="/confirmation">Create Account</Link>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">Login</Link>
                </div>
            </div>
        </section>
    )
}
