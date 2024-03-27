import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import data from "../assets/sampleData.json";
import Seats from "../components/Seats.js";
import { Link } from "react-router-dom";

const Tickets = ({ location }) => {
  let { id } = useParams();
  let movies = data.movies;

  let movie;
  for (let i = 0; i < movies.length; i++) {
    if (id === movies[i].id) {
      movie = movies[i];
    }
  }

  const [numTickets, setNumTickets] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [childTicketCount, setChildTicketCount] = useState(0);
  const [adultTicketCount, setAdultTicketCount] = useState(0);
  const [seniorTicketCount, setSeniorTicketCount] = useState(0);

  const childTicketPrice = 7;
  const adultTicketPrice = 11;
  const seniorTicketPrice = 9;

  const handleIncrement = (type) => {
    switch (type) {
      case "child":
        setChildTicketCount(childTicketCount + 1);
        break;
      case "adult":
        setAdultTicketCount(adultTicketCount + 1);
        break;
      case "senior":
        setSeniorTicketCount(seniorTicketCount + 1);
        break;
      default:
        break;
    }
    setNumTickets(numTickets + 1);
  };

  const handleDecrement = (type) => {
    switch (type) {
      case "child":
        setChildTicketCount(childTicketCount > 0 ? childTicketCount - 1 : 0);
        break;
      case "adult":
        setAdultTicketCount(adultTicketCount > 0 ? adultTicketCount - 1 : 0);
        break;
      case "senior":
        setSeniorTicketCount(seniorTicketCount > 0 ? seniorTicketCount - 1 : 0);
        break;
      default:
        break;
    }
    setNumTickets(numTickets > 0 ? numTickets - 1 : 0);
  };

  const handleSeatSelection = (seatId) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        setNumTickets(numTickets - 1); // Decrement numTickets when seat is deselected
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        setNumTickets(numTickets + 1); // Increment numTickets when seat is selected
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  const totalPrice =
    childTicketCount * childTicketPrice +
    adultTicketCount * adultTicketPrice +
    seniorTicketCount * seniorTicketPrice;

  return (
    <div>
      <Navbar />
      <div className="flex bg-black pb-16">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col p-6">
          <div className="mb-8 flex items-center justify-start">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-64 h-auto mr-6"
            />
            <div>
              <h2 className="font-bold text-xl mb-2 text-white">
                {movie.name}
              </h2>
              <p className="text-white">{movie.genre}</p>
              <p className="text-white">Rating: {movie.rating}</p>
              <p className="text-white">Release: {movie.date}</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-4xl mb-4 text-white">Tickets</h1>
            <div className="mb-4">
              <h2 className="font-bold mb-2 text-white">Child</h2>
              <button
                onClick={() => handleDecrement("child")}
                className="bg-white text-red-500 px-4 py-2 rounded-md mr-2"
              >
                -
              </button>
              <span className="px-4 text-white">{childTicketCount}</span>
              <button
                onClick={() => handleIncrement("child")}
                className="bg-white text-red-500 px-4 py-2 rounded-md ml-2"
              >
                +
              </button>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2 text-white">Adult</h2>
              <button
                onClick={() => handleDecrement("adult")}
                className="bg-white text-red-500 px-4 py-2 rounded-md mr-2"
              >
                -
              </button>
              <span className="px-4 text-white">{adultTicketCount}</span>
              <button
                onClick={() => handleIncrement("adult")}
                className="bg-white text-red-500 px-4 py-2 rounded-md ml-2"
              >
                +
              </button>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2 text-white">Senior</h2>
              <button
                onClick={() => handleDecrement("senior")}
                className="bg-white text-red-500 px-4 py-2 rounded-md mr-2"
              >
                -
              </button>
              <span className="px-4 text-white">{seniorTicketCount}</span>
              <button
                onClick={() => handleIncrement("senior")}
                className="bg-white text-red-500 px-4 py-2 rounded-md ml-2"
              >
                +
              </button>
            </div>
            <p className="font-bold text-white mb-8">Total: ${totalPrice}</p>
            <Link to={`/ticketConfirmation?totalPrice=${totalPrice}`} className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-600 mt-16">Purchase Tickets</Link>
          </div>
        </div>
        <div className="w-px bg-gray-400"></div>
        <div className="w-1/2">
          <Seats
            selectedSeats={selectedSeats}
            handleSeatSelection={handleSeatSelection}
          />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
