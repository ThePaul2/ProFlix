import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SeatImage from '../assets/chair.png';

const Tickets = () => {
  let { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState('');
  const [ticketInfo, setTicketInfo] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [message, setMessage] = useState('');
  const [numTickets, setNumTickets] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [childTicketCount, setChildTicketCount] = useState(0);
  const [adultTicketCount, setAdultTicketCount] = useState(0);
  const [seniorTicketCount, setSeniorTicketCount] = useState(0);
  const [totalTicketCount, setTotalTicketCount] = useState(0);
  const fees = ticketInfo.fees;
  const taxes = ticketInfo.taxes;
  const childTicketPrice = ticketInfo.child;
  const adultTicketPrice = ticketInfo.adult;
  const seniorTicketPrice = ticketInfo.senior;
  const updatedSeats = [];

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/movie/${id}`);
        setMovie(response.data);
        const searchParams = new URLSearchParams(location.search);
        const showtimeId = searchParams.get('showtimeId');
        setSelectedShowtime(searchParams.get('selectedShowtime') || '');
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

  const handleIncrement = (type) => {
    switch (type) {
      case 'child':
        setChildTicketCount(childTicketCount + 1);
        setTotalTicketCount(totalTicketCount + 1);
        break;
      case 'adult':
        setAdultTicketCount(adultTicketCount + 1);
        setTotalTicketCount(totalTicketCount + 1);
        break;
      case 'senior':
        setSeniorTicketCount(seniorTicketCount + 1);
        setTotalTicketCount(totalTicketCount + 1);
        break;
      default:
        break;
    }
    setNumTickets(numTickets + 1);
  };

  const handleDecrement = (type) => {
    switch (type) {
      case 'child':
        setChildTicketCount(childTicketCount > 0 ? childTicketCount - 1 : 0);
        setTotalTicketCount(totalTicketCount > 0 ? totalTicketCount - 1 : 0);
        break;
      case 'adult':
        setAdultTicketCount(adultTicketCount > 0 ? adultTicketCount - 1 : 0);
        setTotalTicketCount(totalTicketCount > 0 ? totalTicketCount - 1 : 0);
        break;
      case 'senior':
        setSeniorTicketCount(seniorTicketCount > 0 ? seniorTicketCount - 1 : 0);
        setTotalTicketCount(totalTicketCount > 0 ? totalTicketCount - 1 : 0);
        break;
      default:
        break;
    }
    setNumTickets(numTickets > 0 ? numTickets - 1 : 0);
  };

  const handleSeatSelection = (seatId) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        setNumTickets((prevNumTickets) => prevNumTickets - 1);
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        setNumTickets((prevNumTickets) => prevNumTickets + 1);
        const updatedSeats = [...prevSelectedSeats, seatId]; // Add the seatId to the array
        console.log('Updated seats:', updatedSeats); // For debugging
        return updatedSeats;
      }
    });
  };
  

  const totalTicketPrice =
  childTicketCount * childTicketPrice +
  adultTicketCount * adultTicketPrice +
  seniorTicketCount * seniorTicketPrice;

  const checkPromoCode = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/promo`);
      const promoCodes = response.data;
      console.log("Promo codes from server:", promoCodes); // Debugging statement
      console.log("Entered promo code:", promoCode); // Debugging statement
      const promo = promoCodes.find((promo) => promo.code === promoCode); // Compare with 'code' property
      console.log("Found promo code:", promo); // Debugging statement
      if (promo && promoDiscount === 0) {
        // Set promoDiscount to the discount value from the promo code object
        setPromoDiscount(promo.discount);
        console.log('Promo code applied! Discount:', promo.discount);
        setMessage('Promo code applied!');
      } else {
        if (promoDiscount !==  0) {
          setMessage('Promo Code already applied');
        } else {
          setMessage('Invalid promo code');
        }
      }
    } catch (error) {
      console.error('Error checking promo code:', error);
    }
  };
  
  

// Function to handle applying promo code
const applyPromoCode = () => {
  checkPromoCode();
};
let finalPriceCalc;
if (promoDiscount % 1 === 0) {
  finalPriceCalc = totalTicketPrice + fees + (taxes * totalTicketPrice) - promoDiscount;
} else {
 finalPriceCalc = totalTicketPrice + fees + (taxes * totalTicketPrice) + (promoDiscount * totalTicketPrice);
}

let discountAmount;
if (promoDiscount % 1 === 0) {
  discountAmount = promoDiscount;
} else {
  discountAmount = promoDiscount * (totalTicketPrice + fees + (taxes * totalTicketPrice));
}
  return (
    <div>
      <Navbar />
      <div className="flex bg-black pb-16">

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
            <div className="mb-4">
              <h2 className="font-bold text-white">Showtime:</h2>
              <p className="text-white">{selectedShowtime}</p>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2 text-white">
                Child (${childTicketPrice})
              </h2>
              <button
                onClick={() => handleDecrement('child')}
                className="bg-white text-red-500 px-4 py-2 rounded-md mr-2"
              >
                -
              </button>
              <span className="px-4 text-white">{childTicketCount}</span>
              <button
                onClick={() => handleIncrement('child')}
                className="bg-white text-red-500 px-4 py-2 rounded-md ml-2"
              >
                +
              </button>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2 text-white">
                Adult (${adultTicketPrice})
              </h2>
              <button
                onClick={() => handleDecrement('adult')}
                className="bg-white text-red-500 px-4 py-2 rounded-md mr-2"
              >
                -
              </button>
              <span className="px-4 text-white">{adultTicketCount}</span>
              <button
                onClick={() => handleIncrement('adult')}
                className="bg-white text-red-500 px-4 py-2 rounded-md ml-2"
              >
                +
              </button>
            </div>
            <div className="mb-4">
              <h2 className="font-bold mb-2 text-white">
                Senior (${seniorTicketPrice})
              </h2>
              <button
                onClick={() => handleDecrement('senior')}
                className="bg-white text-red-500 px-4 py-2 rounded-md mr-2"
              >
                -
              </button>
              <span className="px-4 text-white">{seniorTicketCount}</span>
              <button
                onClick={() => handleIncrement('senior')}
                className="bg-white text-red-500 px-4 py-2 rounded-md ml-2"
              >
                +
              </button>
            </div>
            <p className="text-white mb-2">Total Ticket Cost: ${totalTicketPrice}</p>
            <p className="text-white mb-2">Fees: ${fees}</p>
            <p className="text-white mb-2">
              Taxes: ${(taxes * totalTicketPrice).toFixed(2)}
            </p>
            <p className="text-white mb-8">
              {promoDiscount % 1 === 0
                ? `Discount: -$${(promoDiscount)}`
                : `Discount: -$${(promoDiscount * (totalTicketPrice + fees + (taxes * totalTicketPrice))).toFixed(2)}`}
            </p>
            
            <p className="font-bold text-white mb-5">
          
              {promoDiscount % 1 === 0
                ? `Total: $${(totalTicketPrice + fees + (taxes * totalTicketPrice) - promoDiscount).toFixed(2)}`
                : `Total: $${(totalTicketPrice + fees + (taxes * totalTicketPrice) + (promoDiscount * totalTicketPrice)).toFixed(2)}`}
            </p>
            <div className='text-white my-6'>
              Total Price: ${finalPriceCalc}
            </div>
            <div className="mb-4">
              <h2 className="font-bold text-white">Promo Code:</h2>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="bg-white text-black px-4 py-2 rounded-md"
              />
              <button
                onClick={applyPromoCode}
                className="bg-red-400 text-white px-4 py-2 rounded-md ml-2 hover:bg-red-600"
              >
                Apply
              </button>
              <p className="mt-2 text-sm text-slate-500 text-center md:text-left ">{message}</p>
            </div>
            {selectedSeats.length > 0 && (
            <Link
                to={`/ticketConfirmation?adultTickets=${adultTicketCount}&childTickets=${childTicketCount}&seniorTickets=${seniorTicketCount}&showtimeId=${selectedShowtime}&fees=${taxes + fees}&discount=${discountAmount}
                &updatedSeats=${updatedSeats}&totalPrice=${promoDiscount % 1 === 0
                  ? (totalTicketPrice + fees + (taxes * totalTicketPrice) - discountAmount).toFixed(2)
                  : (totalTicketPrice + fees + (discountAmount * totalTicketPrice)).toFixed(2)}&selectedSeats=${encodeURIComponent(JSON.stringify(updatedSeats))}`}
                className={`bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-600 mt-16 ${
                  selectedSeats.length === totalTicketCount ? '' : 'opacity-50 pointer-events-none'
                }`}>
                Purchase Tickets
            </Link>
            )}
          </div>
        </div>
        <div className="w-px bg-gray-400"></div>
        {/* Right Side - Movie Screen and Seat Selection */}
        <div className="w-1/2">
          <div className="container mx-auto mt-8">
            <div className="flex justify-center mb-4">
              <div className="w-96 bg-white p-4 mt-16 text-black text-center">
                Movie Screen
              </div>
            </div>
            <div className="seat-container grid grid-cols-6 gap-2">
              {/* Call the generateSeats function to render seats */}
              {generateSeats()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  function generateSeats() {
    const seats = [];

    for (let row = 1; row <= 8; row++) {
      for (let col = 1; col <= 6; col++) {
        const seatId = `${row}-${col}`;
        seats.push(
          <div
            key={seatId}
            className="seat relative flex items-center justify-center"
            onClick={() => handleSeatSelection(seatId)}
          >
            <img
              src={SeatImage}
              alt={`Seat ${seatId}`}
              className={`w-20 h-20 ${
                selectedSeats.includes(seatId)
                  ? 'bg-red-600'
                  : 'bg-black hover:bg-gray-100 cursor-pointer'
              }`}
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs">
              {seatId}
            </span>
          </div>
        );
      }
    }

    return seats;
  }
};

export default Tickets;
