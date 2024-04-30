import React, { useState, useEffect } from 'react';
import SeatImage from '../assets/chair.png';

const Seats = ({ updateSelectedSeatsCount }) => {
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

    // Update parent component with selected seats count
    useEffect(() => {
        updateSelectedSeatsCount(selectedSeats.length);
    }, [selectedSeats, updateSelectedSeatsCount]);

    const generateSeats = () => {
        const seats = [];

        for (let row = 1; row <= 8; row++) {
            for (let col = 1; col <= 6; col++) {
                const seatId = `${row}-${col}`;
                seats.push(
                    <div
                        key={seatId}
                        className="seat relative flex items-center justify-center"
                        onClick={() => handleSeatSelection(seatId)}
                    >
                        <img
                            src={SeatImage}
                            alt={`Seat ${seatId}`}
                            className={`w-20 h-20 ${
                                selectedSeats.includes(seatId)
                                    ? 'bg-red-600'
                                    : 'bg-black hover:bg-gray-100 cursor-pointer'
                            }`}
                        />
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs">
                            {seatId}
                        </span>
                    </div>
                );
            }
        }

        return seats;
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-center mb-4">
                <div className="w-96 bg-white p-4 mt-16 text-black text-center">
                    Movie Screen
                </div>
            </div>
            <div className="seat-container grid grid-cols-6 gap-2">
                {generateSeats()}
            </div>
            <p className="text-white mt-4">Selected Seats: {selectedSeats.length}</p>
        </div>
    );
};

export default Seats;
