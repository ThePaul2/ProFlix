import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardInfoPage = () => {

    const navigate = useNavigate();

    const [paymentData, setPaymentData] = useState ({
        cardNumber: '',
        exp: '',
        CVN: '',
        cardFirst: '',
        cardLast: ''
    });

    const userId = localStorage.getItem('userId');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handlePaymentSubmit(userId, paymentData);
            navigate('/');
        } catch (error) {
            console.error('Error submitting payment:', error);
        }
    };

    const handlePaymentSubmit = async (userId, paymentData) => {
        try {
            // Send POST request to add payment
            const response = await axios.post(`http://localhost:8080/users/${userId}/payments`, paymentData);
            const data = response.data;
            console.log('Payment added successfully:', data);
        } catch (error) {
            console.error('Error adding payment:', error.response.data.message);
            throw new Error('Error adding payment');
        }
    };
    
    return (
        <section className="bg-black h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <Link to="/"> 
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="md:w-1/3 max-w-sm">
                <h1 className="text-3xl font-bold text-white mb-2">Enter Payment Information</h1>
                <form onSubmit={handleSubmit}>
                    <div className="text-center md:text-left">
                        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                            Payment Information (Optional) 
                        </div>
                        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} placeholder="Card Number" />
                        <div className="flex">
                            <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4 mr-2" type="text" name="exp" value={paymentData.exp} onChange={handleChange} placeholder="Expiration Date" required />
                            <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="CVN" value={paymentData.CVN} onChange={handleChange} placeholder="CVN" required />
                        </div>
                        <div className="flex">
                            <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4 mr-2" type="text" name="cardFirst" value={paymentData.cardFirst} onChange={handleChange} placeholder="First Name on Card" required />
                            <input className="text-sm w-1/2 px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" name="cardLast" value={paymentData.cardLast} onChange={handleChange} placeholder="Last Name on Card" required />
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between font-semibold text-sm">
                        <Link className="text-red-600 hover:text-red-700 hover:underline hover:underline-offset-4" to="/forgot-password">Need Help?</Link>
                        <button className="text-red-600 hover:text-red-700 hover:underline hover:underline-offset-4" onClick={() => navigate('/')}>Skip</button>
                    </div>
                    <div className="text-center md:text-left my-1">
                        <button className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Submit Payment</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CardInfoPage;
