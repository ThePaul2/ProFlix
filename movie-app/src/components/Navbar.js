import React, { useState, useEffect } from 'react';
import { FilmIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Navbar = ({ setUserRole, setUserId }) => {
    const userLinks = [
        { name: "MOVIES", link: "/movies" },
        { name: "PROMOS", link: "/promos" },
        { name: "SHOWTIMES", link: "/showtimes" },
    ];

    const guestLinks = [
        { name: "MOVIES", link: "/movies?search=%20" },
        { name: "PROMOS", link: "/promos" },
        { name: "SHOWTIMES", link: "/showtimes" },
    ];

    const [userRole, setUserRoleLocal] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Get userRole from localStorage
        const storedUserRole = localStorage.getItem('userRole');
        setUserRoleLocal(storedUserRole);
    }, []);

    const handleLogout = () => {
        // Clear user-related data from local storage
        localStorage.removeItem('userRole');
        localStorage.removeItem('email');

        // Clear state
        setUserRoleLocal(null);
        setUserId(null);
    };

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='flex items-center gap-1'>
                    <Link to='/'>
                        <div className='font-bold text-2xl text-red-600 cursor-pointer flex items-center gap-1'>
                            <FilmIcon className='w-7 h-7 text-red-600'/>
                            <span>ProFlix</span>
                        </div>
                    </Link>
                
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon className="text-red-600"/> : <Bars3BottomRightIcon className="text-red-600"/>
                    }
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {userRole === "user" ? (
                        userLinks.map((link, index) => (
                            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <Link to={link.link} className='text-white hover:text-red-400 duration-500'>{link.name}</Link>
                            </li>
                        ))
                    ) : (
                        guestLinks.map((link, index) => (
                            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <Link to={link.link} className='text-white hover:text-red-400 duration-500'>{link.name}</Link>
                            </li>
                        ))
                    )}
                    {userRole === "user" && (
                        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <Link to={`/users/${localStorage.getItem('email')}`} className='text-white hover:text-red-400 duration-500'>User Home</Link>
                        </li>
                    )}
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to={userRole === "user" ? "/" : "/login"} onClick={handleLogout} className='btn bg-red-600 text-white font-semibold px-3 py-1 rounded hover:text-black-400 duration-500'>
                            {userRole === "user" ? "Logout" : "Login"}
                        </Link>
                    </li>
                </ul>
                {/* button */}
            </div>
        </div>
    );
};

export default Navbar;

