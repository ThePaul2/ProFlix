import React, { useState } from 'react';

const Seats = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);


    const handleSeatSelection = (seatId) => {
        setSelectedSeats((prevSelectedSeats) => {
            if (prevSelectedSeats.includes(seatId)) {
                return prevSelectedSeats.filter((seat) => seat !== seatId);
            } else {
                return [...prevSelectedSeats, seatId];
            }
        });
    };

    const generateSeats = () => {
        const seats = [];

        for (let row = 1; row <= 8; row++) {
            for (let col = 1; col <= 6; col++) { 
                const seatId = `${row}-${col}`;
                seats.push(
                    <div
                        key={seatId}
                        className={`seat bg-gray-300 hover:bg-gray-400 cursor-pointer m-1 ${selectedSeats.includes(seatId) ? 'bg-red-600' : ''}`}
                        onClick={() => handleSeatSelection(seatId)}
                    >
                        {seatId}
                    </div>
                );
            }
        }

        return seats;
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-center mb-4">
                <div className="w-96 bg-black p-4 mt-16 text-white text-center">Movie Screen</div>
            </div>
            <div className="seat-container grid grid-cols-6 gap-4"> 
                {generateSeats()}
            </div>
        </div>
    );
};

export default Seats;
