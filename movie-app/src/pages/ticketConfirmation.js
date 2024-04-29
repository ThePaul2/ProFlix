import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const TicketConfirmation = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract data from query parameters
  const totalPrice = searchParams.get('totalPrice') || 0;
  const bookingNumber = searchParams.get('bookingNumber') || 'N/A';
  const taxes = searchParams.get('taxes') || 0;
  const discount = searchParams.get('discount') || 0;
  const seatPrice = searchParams.get('seatPrice') || 0;
  const numTickets = searchParams.get('numTickets') || 0;
  const finalPrice = searchParams.get('finalPrice') || 0;

  return (
    <section className="bg-black h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-6">Order Summary</h1>
          <p className="text-white">Booking Number: {bookingNumber}</p>
          <p className="text-white">Total Number of Tickets: {numTickets}</p>
          <p className="text-white">Seat Price: ${seatPrice}</p>
          <p className="text-white">Taxes: ${taxes}</p>
          <p className="text-white">Discount: ${discount}</p>
          <p className="text-white">Final Price: ${finalPrice}</p>
          <div className="w-40 mx-auto">
            <Link to="/purchased" className="bg-gray-600 hover:bg-red-700 text-white py-3 rounded-md mt-4 block">Confirm Purchase</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketConfirmation;
