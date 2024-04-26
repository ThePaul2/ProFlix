import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from "../components/NavbarAdmin";

const EditTicket = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTicket();
    }, []);

    const fetchTicket = async () => {
        try {
            const response = await fetch(`http://localhost:8080/ticket/662bf2adca314a9cd524be8e`);
            if (!response.ok) {
                throw new Error('Failed to fetch ticket');
            }
            const data = await response.json();
            setTicket(data);
        } catch (error) {
            console.error('Error fetching ticket:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTicket(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:8080/ticket/662bf2adca314a9cd524be8e`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ticket)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            navigate(`/adminPrices`);
        } catch (error) {
            console.error('Error occurred during ticket update:', error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="h-screen pt-16 bg-zinc-900">
                <div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
                    <div className="flex flex-row w-full">
                        <div>
                            <h1>Edit Ticket</h1>
                            <p>Ticket Info</p>
                
                        </div>
                        <div className="ml-auto">
                            <Link to={`/adminPrices`} className="mr-2 px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out">Quit Without Saving</Link>
                        </div>
                    </div>
                    <br />
                    {ticket && (
                        <>
                            <div>
                                <label className="font-semibold">Child</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="number"
                                    name="child"
                                    value={ticket.child}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                            <div>
                                <label className="font-semibold">Adult</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="number"
                                    name="adult"
                                    value={ticket.adult}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Senior</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="number"
                                    name="senior"
                                    value={ticket.senior}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Fees</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="number"
                                    name="fees"
                                    value={ticket.fees}
                                    className="w-full px-4 py-4 rounded-lg text-black"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Taxes</label>
                                <br />
                            </div>
                            <div className="w-full leading-loose">
                                <input
                                    type="number"
                                    name="taxes"
                                    value={ticket.taxes}
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

export default EditTicket;
