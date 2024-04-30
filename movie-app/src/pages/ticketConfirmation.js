import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';

export default function TicketConfirmation(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const adultTickets = queryParams.get('adultTickets');
    const childTickets = queryParams.get('childTickets');
    const seniorTickets = queryParams.get('seniorTickets');
    const totalTicketCount = adultTickets+childTickets+seniorTickets;
    const showtimeId = queryParams.get('showtimeId');
    const fees = queryParams.get('fees');
    const discount = queryParams.get('discount');
    const totalPrice = queryParams.get('totalPrice');
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${month}/${day}`;
    const [payments, setPayments] = useState([]);
    const [userId, setUserId] = useState('66293243587298b67b6f7755');
    const [selectedPaymentId, setSelectedPaymentId] = useState('');
    const updatedSeats = queryParams.get('updatedSeats');
    const [bookingNumber, setBookingNumber] = useState(null);
    const [formData, setFormData] = useState({
        cardNumber: '',
        exp: '',
        CVN: '',
        cardFirst: '',
        cardLast: '',
    });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [bookingData, setBookingData] = useState({
        userID: '',
        showtimeID: '',
        bookingDate: '',
        numTickets: '',
        price: ''
    });
    useEffect(() => {
        setBookingData({
            userID: userId,
            showtimeID: showtimeId,
            bookingDate: formattedDate,
            numTickets: totalTicketCount,
            price: totalPrice,
        });
    }, [userId, showtimeId, formattedDate, totalTicketCount, totalPrice]);
    // Gets the user's payment info
    useEffect(() => {
        const fetchPayments = async () => {
            try {
                console.log('Fetching payments for user:', userId);
                const response = await axios.get(`http://localhost:8080/users/${userId}/payments`);
                console.log('Fetched payments:', response.data.payments);
                setPayments(response.data.payments);
                setSelectedPaymentId(response.data.payments[0]._id);
                console.log('Selected default payment:', response.data.payments[0]);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };
        fetchPayments();
    }, [userId]);

    const handlePaymentSelect = (e) => {
        const { value } = e.target;
        setSelectedPaymentId(value);
        const selectedPayment = payments.find(payment => payment._id === value);
        console.log('Selected payment:', selectedPayment);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        console.log('Form data changed:', { ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting form with data:', formData);
            await axios.post(`http://localhost:8080/users/${userId}/payments`, formData);
            console.log('New payment created successfully');
            alert('New payment created successfully!');
            window.location.reload();
        } catch (error) {
          console.error('Error updating payment:', error);
        }
      };
    
    
    const togglePopup = () => {
        setIsPopupOpen(prevState => !prevState);
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/booking', bookingData);
            console.log('Booking API Response:', response.data);
            const { _id: bookingId } = response.data;
            navigate(`/purchased?id=${bookingId}`);
        } catch (error) {
            console.error(error);
        }
    };

    console.log('Updated Seats:', updatedSeats);
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
                    <p className="text-white">Showtime: {showtimeId}</p>
                    {/* <p className="text-white">Selected Seats: {updatedSeats}</p> */}
                    <p className="text-white">Adult Tickets: {adultTickets}</p>
                    <p className="text-white">Child Tickets: {childTickets}</p>
                    <p className="text-white">Senior Tickets: {seniorTickets}</p>
                    <p className="text-white">Fees + Taxes: ${fees}</p>
                    <p className="text-white">Discount: -${discount}</p>
                    <p className="text-white">Total Price: ${totalPrice}</p>
                    <br />
                    <p className="text-white">Choose Your Payment Method:</p>
                    <div className='mt-4'>
                        <select
                            value={selectedPaymentId}
                            onChange={handlePaymentSelect}
                            className="block w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500">
                            {payments.map(payment => (
                                <option key={payment._id} value={payment._id}>
                                    {payment.cardFirst} {payment.cardLast} - {payment.cardNumber.slice(-4)}
                                </option>
                            ))}
                            {payments.length < 3 && (
                                <option value="new" onClick={togglePopup}>Add New Payment Method</option>
                            )}
                        </select>
                    </div>
                    <div className="w-40 mx-auto">
                        <button type='button' className="bg-gray-600 hover:bg-red-700 text-white py-3 rounded-md mt-4 block" onClick={handleBooking}>Confirm Purchase</button>
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-6 rounded-md shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Add New Payment Method</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Card Number"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                required
                                className="block w-full bg-gray-200 text-gray-900 border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-gray-500"
                            />
                            <input
                                type="text"
                                name="exp"
                                placeholder="Expiration Date"
                                value={formData.exp}
                                onChange={handleInputChange}
                                required
                                className="block w-full bg-gray-200 text-gray-900 border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-gray-500"
                            />
                            <input
                                type="text"
                                name="CVN"
                                placeholder="CVN"
                                value={formData.CVN}
                                onChange={handleInputChange}
                                required
                                className="block w-full bg-gray-200 text-gray-900 border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-gray-500"
                            />
                            <input
                                type="text"
                                name="cardFirst"
                                placeholder="First Name"
                                value={formData.cardFirst}
                                onChange={handleInputChange}
                                required
                                className="block w-full bg-gray-200 text-gray-900 border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-gray-500"
                            />
                            <input
                                type="text"
                                name="cardLast"
                                placeholder="Last Name"
                                value={formData.cardLast}
                                onChange={handleInputChange}
                                required
                                className="block w-full bg-gray-200 text-gray-900 border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-gray-500"
                            />
                            <div className="flex justify-end">
                                <button type="button" className="mr-2 px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-200" onClick={togglePopup}>
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600">
                                    Add Payment Method
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
}
