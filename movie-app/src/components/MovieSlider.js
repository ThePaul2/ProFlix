import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import heroImage from '../assets/hero.jpg';

const MovieSlider = ({ header }) => {
    // Reference to the container element
    const containerRef = useRef(null);

    // Function to handle sliding left
    const slideLeft = () => {
        containerRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
    };

    // Function to handle sliding right
    const slideRight = () => {
        containerRef.current.scrollLeft += 200; // Adjust scroll amount as needed
    };

    return (
        <div className="overflow-x-auto whitespace-no-wrap relative">
            {/* Header */}
            <h2 className="text-3xl font-bold text-white absolute top-0 left-0 p-4">{header}</h2>

            {/* Left arrow button */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white py-2 px-4 rounded-full z-10" onClick={slideLeft}>
                &lt;
            </button>

            {/* Right arrow button */}
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white py-2 px-4 rounded-full z-10" onClick={slideRight}>
                &gt;
            </button>

            {/* Image container */}
            <div ref={containerRef} className="flex py-4 m-14">
                <MovieCard imageUrl={heroImage} title="Movie Title 1" />
                <MovieCard imageUrl={heroImage} title="Movie Title 2" />
                <MovieCard imageUrl={heroImage} title="Movie Title 3" />
                <MovieCard imageUrl={heroImage} title="Movie Title 4" />

            </div>
        </div>
    );
};

export default MovieSlider;