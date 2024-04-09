import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from "../components/NavbarAdmin";
import TextInput from "../components/TextInput";
import axios from "axios";

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
		setPromo(prevPromo => ({
			...prevPromo,
			[name]: value
		}));
	};
	

    const handleSubmit = async () => {
		try {
			let response;
			if (id === "new-movie") {
				// Handle new promo creation
				response = await axios.post(`http://localhost:8080/promo`, promo);
			} else {
				// Handle promo update
				response = await axios.put(`http://localhost:8080/promo/${id}`, promo);
			}
	
			if (response.status >= 200 && response.status < 300) {
				// Successful submission
				navigate(`/adminPromo`);
				console.log('Changes submitted successfully');
			} else {
				throw new Error('Failed to submit changes');
			}
		} catch (error) {
			console.error('Error submitting changes:', error);
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
                            <TextInput name="name" placeholder={promo.name} onChange={handleInputChange} />
                            <br />
                            <TextInput name="description" placeholder={promo.description} onChange={handleInputChange} />
                            <br />
                            <TextInput name="discount" placeholder={promo.discount} onChange={handleInputChange} />
                            <br />
                            <hr />
                            <br />
                            <button onClick={handleSubmit} className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditPromo;

