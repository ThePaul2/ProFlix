import React from 'react';

const PromoList = ({ promos }) => {
  return (
    <div className="promo-list">
      <h2>Promo List</h2>
      <ul>
        {promos.map(promo => (
          <li key={promo.id}>
            <div>
              <strong>Title:</strong> {promo.title}
            </div>
            <div>
              <strong>Description:</strong> {promo.description}
            </div>
            {/* Add more promo information here as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromoList;
