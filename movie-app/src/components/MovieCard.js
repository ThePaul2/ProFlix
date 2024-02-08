import React from 'react';

const MovieCard = ({ imageUrl, title }) => {
    return (
        <div className="bg-gray-900 w-64 p-4 rounded-lg shadow-md mb-4">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
    );
};

export default MovieCard;
