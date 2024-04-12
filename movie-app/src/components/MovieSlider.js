import React, { useRef, useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MovieCard from './MovieCard'; 

const MovieSlider = ({ header, movies }) => {
  const sliderRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
  const numVisibleCards = 5;

  useEffect(() => {
    const updateCardWidth = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.offsetWidth;
        const newCardWidth = sliderWidth / numVisibleCards;
        setCardWidth(newCardWidth);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  const slideLeft = () => {
    // Calculate the index for sliding left
    const newIndex = (firstVisibleIndex - 1 + movies.length) % movies.length;
    setFirstVisibleIndex(newIndex);
  };

  const slideRight = () => {
    // Calculate the index for sliding right
    const newIndex = (firstVisibleIndex + 1) % movies.length;
    setFirstVisibleIndex(newIndex);
  };
  return (
    <div className='my-14'>
      <h2 className="text-3xl font-bold text-white mb-4">{header}</h2>
      <div className='relative overflow-hidden'>
        <div ref={sliderRef} className='flex ml-6' style={{ transform: `translateX(-${firstVisibleIndex * cardWidth}px)`, transition: 'transform 0.5s ease' }}>
          {/* Render each movie card */}
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id} // Ensure each card has a unique key
              movie={movie} // Pass movie data to MovieCard component
              style={{ width: `${cardWidth}px`, marginRight: '1rem' }}
            />
          ))}
        </div>
        <button onClick={slideLeft} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-red-500 focus:outline-none">
          <MdChevronLeft size={30} />
        </button>
        <button onClick={slideRight} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-red-500 focus:outline-none">
          <MdChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default MovieSlider;
