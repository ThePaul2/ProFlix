import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavbarAdmin';
import PromoList from '../components/PromoList'; // Import the PromoList component

const Promo = () => {
  // State to hold the promo list
  const [promoList, setPromoList] = useState([]);

  // Dummy data for promo list (replace with actual data fetched from backend)
  useEffect(() => {
    // Fetch promo list from backend or any other data source
    const fetchPromoList = async () => {
      try {
        // Example fetch request
        const response = await fetch('/promos');
        const data = await response.json();
        setPromoList(data);
      } catch (error) {
        console.error('Error fetching promo list:', error);
      }
    };

    fetchPromoList();
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div className="bg-gray-800 min-h-screen pt-20"> {/* Gray background */}
      <Navbar />
      {/* Render promo list */}
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 py-10">Promo List</h2>
          <PromoList promos={promoList} />
        </div>
      </div>
    </div>
  );
};

export default Promo;
