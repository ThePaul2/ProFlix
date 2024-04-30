import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserId = async () => {
      const email = localStorage.getItem('email');
      try {
        const response = await axios.get(`http://localhost:8080/users/get-userid/${email}`);
        const { userId } = response.data;
        if (userId) {
          setUserId(userId);
          console.log(userId);
          fetchBookingData(userId);
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
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Navbar />
      <h2 style={{ marginBottom: '20px', fontSize: '36px', fontWeight: 'bold' }}>Current Bookings</h2>

      {bookings.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {bookings.map(booking => (
            <div key={booking._id} style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px', padding: '20px', margin: '10px' }}>
              <p><strong>Showtime and Theatre:</strong> {booking.showtimeID}</p>
              <p><strong>Date:</strong> {booking.bookingDate}</p>
              <p><strong>Number of  Tickets:</strong> {booking.numTickets}</p>
              <p><strong>Total Price:</strong> {booking.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: '24px' }}>
          <p>No Booking found</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
