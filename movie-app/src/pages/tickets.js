import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useLocation } from 'react-router-dom';
import Seats from '../components/Seats';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Tickets = () => {
  let { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState('');
  const [ticketInfo, setTicketInfo] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [message, setMessage] = useState('');

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
        const response = await axios.get(
          `http://localhost:8080/ticket/662bf2adca314a9cd524be8e`
        );
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

  const childTicketPrice = ticketInfo.child;
  const adultTicketPrice = ticketInfo.adult;
  const seniorTicketPrice = ticketInfo.senior;
  const fees = ticketInfo.fees;
  const taxes = ticketInfo.taxes;

  const handleIncrement = (type) => {
    switch (type) {
      case 'child':
        setChildTicketCount(childTicketCount + 1);
        break;
      case 'adult':
        setAdultTicketCount(adultTicketCount + 1);
        break;
      case 'senior':
        setSeniorTicketCount(
          seniorTicketCount + 1
        );
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
        break;
      case 'adult':
        setAdultTicketCount(adultTicketCount > 0 ? adultTicketCount - 1 : 0);
        break;
      case 'senior':
        setSeniorTicketCount(
          seniorTicketCount > 0 ? seniorTicketCount - 1 : 0
        );
        break;
      default:
        break;
    }
    setNumTickets(numTickets > 0 ? numTickets - 1 : 0);
  };

  const handleSeatSelection = (seatId) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        setNumTickets(numTickets - 1);
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        setNumTickets(numTickets + 1);
        return [...prevSelectedSeats, seatId];
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
            <p className="font-bold text-white mb-5">
            </p>
            <div className="mb-4">
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
            
            <Link
            to={`/ticketConfirmation?adultTickets=${adultTicketCount}&childTickets=${childTicketCount}&seniorTickets=${seniorTicketCount}&showtimeId=${selectedShowtime}&totalPrice=${totalTicketPrice}&bookingNumber=${fees}&taxes=${(taxes*totalTicketPrice) + fees}&discount=${discountAmount}&seatPrice=${totalTicketPrice}&numTickets=${numTickets}&finalPrice=${finalPriceCalc}`}
            className={`bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-600 mt-16 ${
              selectedSeats.length === numTickets ? '' : 'opacity-50 pointer-events-none'}`}
              >
            Purchase Tickets
          </Link>

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

