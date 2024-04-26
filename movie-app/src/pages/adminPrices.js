import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


const AdminPrices = () => {
  
  const [prices, setPrices] = useState([]); 

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/ticket/`);
      const prices = response.data; // Accessing the response data directly
      console.log('Prices:', prices); 
      setPrices(prices); 
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };
  


  return (
    <div className="bg-black min-h-screen">
      <NavbarAdmin />
      <div className="bg-black p-4 rounded-lg shadow-md font-sans max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h1>
        <div>
        <div className="flex flex-row w-full">
              <h1 className="text-3xl font-bold mb-2 text-gray-100">Current Prices</h1>
              <div className="ml-auto">
                <Link to={`/edit-price`} className={myStyles.greenButton}>Edit Prices</Link>
              </div>
            </div>
          <ul className="list-none ">
            {prices.map((price) => (
              <li key={price._id} className={myStyles.container}>
                <div className="flex-1">
                  <span>Child: ${price.child}</span>
                  <br />
                  <span>Senior: ${price.senior}</span>
                  <br />
                  <span>Adult: ${price.adult}</span>
                  <br />
                  <span>Fees: ${price.fees}</span>
                  <br />
                  <span>Taxes: {price.taxes} (in decimal so 8% is .08)</span>
                  
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default AdminPrices;

const myStyles = {
  greenButton: "px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out ml-3",
  redButton: "px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out ml-3",
  container: "mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300",
};



