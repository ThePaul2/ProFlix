import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MovieCard from './MovieCard'; // Import the MovieCard component

const MovieSlider = ({ header, movies }) => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className='relative my-14'>
      <h2 className="text-3xl font-bold text-white mb-4">{header}</h2>
      <div className='flex items-center space-x-4'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideLeft} size={40} />
        <div ref={sliderRef} className='flex flex-nowrap'>
          {movies.map((item, index) => (
            <MovieCard
              key={index}
              imageUrl={item.imageUrl}
              title={item.title} 
              rating={item.rating}
              date={item.date}
              description={item.description}
              style={{ marginRight: '1rem' }}
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-white' onClick={slideRight} size={40} />
      </div>
    </div>
  );
}

export default MovieSlider;
