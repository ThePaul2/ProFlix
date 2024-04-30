import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function EditPayment() {
    let { email } = useParams();
    const [payments, setPayments] = useState([]);
    const [userId, setUserId] = useState(null);
    const [selectedPaymentId, setSelectedPaymentId] = useState('');
    const [formData, setFormData] = useState({
      cardNumber: '',
      exp: '',
      CVN: '',
      cardFirst: '',
      cardLast: ''
    });

  useEffect(() => {
    fetchUserId();
  }, []);

  const fetchUserId = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/get-userid/${email}`);
      setUserId(response.data.userId);
    } catch (error) {
      console.error('Error fetching user ID:', error);
    }
  };

  // Gets the user's payment info
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        console.log('Fetching payments for user:', userId);
        const response = await axios.get(`http://localhost:8080/users/${userId}/payments`);
        console.log('Fetched payments:', response.data.payments);
        setPayments(response.data.payments);
        if (response.data.payments.length > 0) {
          setSelectedPaymentId(response.data.payments[0]._id);
          setFormData(response.data.payments[0]);
          console.log('Selected default payment:', response.data.payments[0]);
        }
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, [userId]);

  // If the user has no payment 
  const handlePaymentChange = (e) => {
    const { value } = e.target;
    if (value === "new") {
      setFormData({
        cardNumber: '',
      exp: '',
      CVN: '',
      cardFirst: '',
      cardLast: ''
      });
      console.log("User selected to add a new payment");
    } else {
      setSelectedPaymentId(value);
      const selectedPayment = payments.find(payment => payment._id === value);
      setFormData(selectedPayment);
      console.log('Selected payment:', selectedPayment);
    }
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
      if (payments.length = 0) {
        // If user has no payment methods, create a new payment
        console.log(userId);
        const response = await axios.post(`http://localhost:8080/users/${userId}/payments`, formData);
        const data = response.data;
        console.log('Payment added successfully:', data);
        alert('New payment created successfully!');
      } else if (payments.length > 0){
        console.log(userId);
        await axios.put(`http://localhost:8080/users/payments/${selectedPaymentId}`, formData);
        console.log('Payment updated successfully');
        alert('Payment updated successfully!');
      } else {
        console.log(userId);
        await axios.post(`http://localhost:8080/users/${userId}/payments`, formData);
        console.log('New payment created successfully');
        alert('New payment created successfully!');
      }
      window.location.reload();
    } catch (error) {
      console.error('Error updating payment:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen pt-16">
        <div className="bg-zinc-900 text-white font-bold leading-10 py-10 px-60 w-full h-fit">
          <div className='flex justify-between items-center'>
            <h1>Edit Payment</h1>
            <Link to={`/users/${email}`} className='bg-gray-500 hover:bg-red-500 px-2 rounded'>Back</Link> 
          </div>

          {payments.length >= 0 && (
            <form onSubmit={handleSubmit}>
              <label>
                Select Payment:
                <select value={selectedPaymentId} onChange={handlePaymentChange} className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full" style={{color: 'black'}}>
                  {payments.map(payment => (
                    <option key={payment._id} value={payment._id}>
                      {`**** **** **** ${payment.cardNumber.slice(-4)}`} - {payment.cardFirst} {payment.cardLast}
                    </option>
                  ))}
  {payments.length < 3 && <option value="new">Add New Payment</option>}                </select>
              </label>
              <label>
                Card Number:
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  style={{color: 'black'}}
                  className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
                />
              </label>
              <label>
                Expiry Date:
                <input
                  type="text"
                  name="exp"
                  value={formData.exp}
                  placeholder="12/12"
                  onChange={handleInputChange}
                  style={{color: 'black'}}
                  className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
                />
              </label>
              <label>
                CVN:
                <input
                  type="text"
                  name="CVN"
                  onChange={handleInputChange}
                  placeholder="123"
                  style={{color: 'black'}}
                  className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
                />
              </label>
              <label>
                First Name:
                <input
                  type="text"
                  name="cardFirst"
                  value={formData.cardFirst}
                  onChange={handleInputChange}
                  placeholder="John"
                  style={{color: 'black'}}
                  className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="cardLast"
                  value={formData.cardLast}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  style={{color: 'black'}}
                  className="border-2 border-neutral-200 rounded-xl px-4 py-2 w-full"
                />
              </label>
              <br />
              <br />
              <button className="text-center rounded-xl border-neutral-200 border-2 px-4 py-4 w-full bg-red-400 text-xl font-semibold">Submit Changes</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditPayment;