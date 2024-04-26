import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams, useLocation } from "react-router-dom";
import Seats from "../components/Seats.js";
import { Link } from "react-router-dom";
import axios from "axios";

const Tickets = () => {
  let { id } = useParams();
  const location = useLocation(); // Use useLocation hook to access location object
  const [movie, setMovie] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState("");
  const [ticketInfo, setTicketInfo] = useState([]);



  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/movie/${id}`);
        setMovie(response.data);
        
        // Extract the showtime from the URL query parameter if available
        const searchParams = new URLSearchParams(location.search);
        const showtimeId = searchParams.get('showtimeId');
        setSelectedShowtime(searchParams.get('selectedShowtime') || ""); // Set selected showtime
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id, location.search]);


  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/ticket/662bf2adca314a9cd524be8e`);
        setTicketInfo(response.data);
      
      } catch (error) {
        console.log(error);
      }
    };

    fetchTicket();
  }, [id, location.search]);
  
  
  const [numTickets, setNumTickets] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [childTicketCount, setChildTicketCount] = useState(0);
  const [adultTicketCount, setAdultTicketCount] = useState(0);
  const [seniorTicketCount, setSeniorTicketCount] = useState(0);

  console.log("hi");
  console.log(movie);
  console.log(ticketInfo);

  const childTicketPrice = ticketInfo.child;
  const adultTicketPrice = ticketInfo.adult;
  const seniorTicketPrice = ticketInfo.senior;
  const fees = ticketInfo.fees;
  const taxes = ticketInfo.taxes;
  

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
              src={movie.poster}
              alt={movie.movieTitle}
              className="w-64 h-auto mr-6"
            />
            <div>
              <h2 className="font-bold text-xl mb-2 text-white">
                {movie.name}
              </h2>
              <p className="text-white">{movie.movieTitle}</p>
              <p className="text-white">{movie.genre}</p>
              <p className="text-white">Rating: {movie.rating}</p>
              <p className="text-white">Release: {movie.releaseDate}</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-4xl mb-4 text-white">Tickets</h1>
            <div className="mb-4">
              <h2 className="font-bold text-white">Showtime:</h2>
              <p className="text-white">{selectedShowtime}</p>
            </div>
            {/* Ticket quantity */}
            <div className="mb-4">
              <h2 className="font-bold mb-2 text-white">Child (${childTicketPrice})</h2>
              <button onClick={() => handleDecrement("child")} className="bg-white text-red-500 px-4 py-2 rounded-md mr-2">-</button>
              <span className="px-4 text-white">{childTicketCount}</span>
              <button onClick={() => handleIncrement("child")} className="bg-white text-red-500 px-4 py-2 rounded-md ml-2">+</button>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2 text-white">Adult (${adultTicketPrice})</h2>
              <button onClick={() => handleDecrement("adult")} className="bg-white text-red-500 px-4 py-2 rounded-md mr-2">-</button>
              <span className="px-4 text-white">{adultTicketCount}</span>
              <button onClick={() => handleIncrement("adult")} className="bg-white text-red-500 px-4 py-2 rounded-md ml-2">+</button>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2 text-white">Senior (${seniorTicketPrice})</h2>
              <button onClick={() => handleDecrement("senior")} className="bg-white text-red-500 px-4 py-2 rounded-md mr-2">-</button>
              <span className="px-4 text-white">{seniorTicketCount}</span>
              <button onClick={() => handleIncrement("senior")} className="bg-white text-red-500 px-4 py-2 rounded-md ml-2">+</button>
            </div>
            {/* fees */}
            <p className="text-white mb-2">Fees: ${fees}</p>
            {/* taxes */}
            <p className="text-white mb-2">Taxes: ${taxes*totalPrice}</p>
            {/* Total price */}
            <p className="font-bold text-white mb-2">Total: ${totalPrice + taxes*totalPrice}</p>
            {/* <p className="text-white">Selected Seats: {selectedSeats.length}</p> */}
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
