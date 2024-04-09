import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const AdminPromo = () => {

  
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    fetchPromos();
  }, []);

  const fetchPromos = async () => {
    try {
        const response = await axios.get('http://localhost:8080/promo');
        setPromos(response.data);
    } catch (error) {
        console.error('Error fetching promos:', error);
    }
  };
  

  
  const handleDeletePromo = async (userId) => {
    try {
        await axios.delete(`http://localhost:8080/promo/${userId}`);
        console.log(`Promo with ID ${userId} deleted successfully.`);
        // After successful deletion, fetch updated user data
        fetchPromos();
    } catch (error) {
        console.error(`Error deleting promo with ID ${userId}:`, error);
    }
  };


  
    return (
      <div className="bg-black min-h-screen">
        <NavbarAdmin />
        <div className="bg-black p-6 rounded-lg shadow-md font-sans max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to Admin Dashboard</h2>
          <div>
            <div className="flex flex-row w-full">
              <h1 className="text-3xl font-bold mb-2 text-gray-100">Promotions</h1>
              <div className="ml-auto">
                <Link to={`/edit-promo/new-promo`} className={myStyles.greenButton}>Add Promotion</Link>
              </div>
            </div>
  
            <ul className="list-none ">
                {promos.map((promo, index) => (
                  <li key={promo._id} className={myStyles.container}>
                    <div className="flex-1">
                      <span>{`${promo._id}`}</span>
                      <br />
                      <span>Name: {promo.name}</span>
                      <br />
                      <span>Description: {promo.description}</span>
                      <br />
                      <span>Discount: {promo.discount}</span>
                      <br />
                      
                    </div>
                    <div>
                      <Link to={`/edit-promo/${encodeURIComponent(promo._id)}`} className={myStyles.greenButton}>Edit</Link>
                      <button onClick={() => handleDeletePromo(promo._id)} className={myStyles.redButton}>Delete Promo</button>
                      
                    </div>
                
                  </li>
                ))}
            </ul>
            
            
          </div>
        </div>
      </div>
    );
  };
  

  export default AdminPromo;

  const myStyles = {
    greenButton: "px-4 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition duration-300 ease-in-out ml-3",
    redButton: "px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600 transition duration-300 ease-in-out ml-3",
    container: "mb-2 p-4 bg-white rounded-md shadow-md flex justify-between items-center hover:bg-red-300",
  }
  



