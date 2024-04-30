import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserId = async () => {
      const email = localStorage.getItem('email');
      try {
        const response = await axios.get(`http://localhost:8080/users`);
        const user = response.data.data.find(user => user.email === email);
        if (user) {
          setUserId(user._id);
          console.log(user._id);
          fetchBookingData(user._id);
        } else {
          console.log('User not found.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserId();
  }, []);

  const fetchBookingData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/booking`);
      const bookingData = response.data;
      console.log('Booking Data:', bookingData);
      const userBookings = bookingData.filter(booking => booking.userID === userId);
      console.log('User Bookings:', userBookings);
      setBookings(userBookings);
    } catch (error) {
      console.error('Error fetching booking data:', error);
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <h2>Admin Dashboard</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>
            Showtime ID: {booking.showtimeID}, Num Tickets: {booking.numTickets}, Price: {booking.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
