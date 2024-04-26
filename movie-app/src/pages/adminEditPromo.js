import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from "../components/NavbarAdmin";

const EditPromo = () => {
    const { id } = useParams();
    const [promo, setPromo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== "new-promo") {
            fetchPromo();
        } else {
            setPromo({ name: "", description: "", discount: "", image: "", code: "" });
        }
    }, [id]);

    const fetchPromo = async () => {
        try {
            const response = await fetch(`http://localhost:8080/promo/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch promo');
            }
            const data = await response.json();
            setPromo(data);
        } catch (error) {
            console.error('Error fetching promo:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPromo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const url = id === "new-promo" ? 'http://localhost:8080/promo' : `http://localhost:8080/promo/${id}`;
            console.log('Request URL:', url);
            console.log('Request Body:', promo); // Logging the request body
    
            const response = await fetch(url, {
                method: id === "new-promo" ? 'POST' : 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(promo)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            navigate(`/adminPromo`);
            return await response.json();
        } catch (error) {
            console.error('Error occurred during promo update:', error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="h-screen pt-16 bg-zinc-900">
                <div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
                    <div className="flex flex-row w-full">
                        <div>
                            <h1>Edit Promo</h1>
                            <p>Promo Info</p>
                        </div>
                        <div className="ml-auto">
                            <Link to={`/adminPromo`} className="mr-2 px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out">Quit Without Saving</Link>
                        </div>
                    </div>
                    <br />
                    {promo && (
                        <>
                            <div>
                                <label className="font-semibold">Name</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="text"
                                    placeholder={id === "new-promo" ? "Title" : promo.name}
                                    name="name"
                                    value={promo.name}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                            <div>
                                <label className="font-semibold">Description</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="text"
                                    placeholder={id === "new-promo" ? "Promotion Description" : promo.description}
                                    name="description"
                                    value={promo.description}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Code</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="text"
                                    placeholder={id === "new-promo" ? "Promotion Code" : promo.code}
                                    name="code"
                                    value={promo.code}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Discount</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="text"
                                    placeholder={id === "new-promo" ? "Enter Discount Amount" : promo.discount}
                                    name="discount"
                                    value={promo.discount}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Image</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="text"
                                    placeholder={id === "new-promo" ? "Image URL" : promo.image}
                                    name="image"
                                    value={promo.image}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                            <br />
                            <hr />
                            <button onClick={handleSubmit} className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditPromo;






















/*
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from "../components/NavbarAdmin";

const EditPromo = () => {
    const { id } = useParams();
    const [promo, setPromo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPromo() {
            try {
                const response = await fetch(`http://localhost:8080/promo/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch promo');
                }
                const data = await response.json();
                setPromo(data);
            } catch (error) {
                console.error('Error fetching promo:', error);
            }
        }

        if (id !== "new-movie") {
            fetchPromo();
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPromo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const url = `http://localhost:8080/promo/${id}`;
            console.log('Request URL:', url);
            console.log('Request Body:', promo); // Logging the request body
    
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(promo)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            navigate(`/adminPromo`);
            return await response.json();
        } catch (error) {
            console.error('Error occurred during promo update:', error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="h-screen pt-16 bg-zinc-900">
                <div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
                    <div className="flex flex-row w-full">
                        <div>
                            <h1>Edit Promo</h1>
                            <p>Promo Info</p>
                        </div>
                        <div className="ml-auto">
                            <Link to={`/adminPromo`} className="mr-2 px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out">Quit Without Saving</Link>
                        </div>
                    </div>
                    <br />
                    {promo && (
                        <>
                            <div>
                                <label className="font-semibold">Name</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="text"
                                    placeholder={promo.name}
                                    name="name"
                                    //value={promo.name || ''}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                            <div>
                                <label className="font-semibold">Description</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="text"
                                    placeholder={promo.description}
                                    name="description"
                                    //value={promo.description || ''}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Discount</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="text"
                                    placeholder={promo.discount}
                                    name="discount"
                                    //value={promo.discount || ''}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Image</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="text"
                                    placeholder={promo.image}
                                    name="image"
                                    //value={promo.discount || ''}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                            <br />
                            <hr />
                            <button onClick={handleSubmit} className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditPromo;
*/