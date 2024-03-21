import React, { useRef, useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MovieCard from './MovieCard'; // Import the MovieCard component

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
    if (firstVisibleIndex === 0) {
      setFirstVisibleIndex(movies.length - numVisibleCards);
    } else {
      setFirstVisibleIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }
  };

  const slideRight = () => {
    if (firstVisibleIndex === movies.length - numVisibleCards) {
      setFirstVisibleIndex(0);
    } else {
      setFirstVisibleIndex(prevIndex => Math.min(prevIndex + 1, movies.length - numVisibleCards));
    }
  };

  return (
    <div className='my-14'>
      <h2 className="text-3xl font-bold text-white mb-4">{header}</h2>
      <div className='relative overflow-hidden'>
        <div ref={sliderRef} className='flex flex-nowrap ml-6'>
          {[...movies.slice(firstVisibleIndex), ...movies.slice(0, firstVisibleIndex)].map((item, index) => (
            <MovieCard
              key={index}
              movie={item}
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
