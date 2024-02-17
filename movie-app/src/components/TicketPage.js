import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const TicketPage = () => {
  const location = useLocation();
  const { state } = location;

  const [showDescription, setShowDescription] = useState(false);

  if (!state) {
    return <div>No movie details found!</div>;
  }

  const { imageUrl, title, rating, date, description } = state;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <div>
          <h2 className="text-3xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">Rating: {rating}</p>
          <button className="text-blue-500 mb-4" onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? 'Hide Description' : 'Show Description'}
          </button>
          {showDescription && <p className="text-gray-700 mb-4">{description}</p>}
          <p className="text-gray-600">Release Date: {date}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
