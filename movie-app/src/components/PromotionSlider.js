import React, { useState } from 'react';
import one from '../assets/hero.jpg';
import two from '../assets/im2.jpg';
import three from '../assets/im3.jpg';

const PromotionSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div id="default-carousel" className="relative w-full mt-50" data-carousel="slide">
      <div className="relative h-72 mb-96 mt-60 rounded-lg md:h-96">
        <div className="duration-700 ease-in-out" data-carousel-item style={{ display: activeSlide === 0 ? 'block' : 'none' }}>
          <img src={one} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="first promo" />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item style={{ display: activeSlide === 1 ? 'block' : 'none' }}>
          <img src={two} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="second promo" />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item style={{ display: activeSlide === 2 ? 'block' : 'none' }}>
          <img src={three} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="third promo" />
        </div>
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current={activeSlide === 0} aria-label="Slide 1" data-carousel-slide-to="0" onClick={() => handleSlideChange(0)}></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current={activeSlide === 1} aria-label="Slide 2" data-carousel-slide-to="1" onClick={() => handleSlideChange(1)}></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current={activeSlide === 2} aria-label="Slide 3" data-carousel-slide-to="2" onClick={() => handleSlideChange(2)}></button>
      </div>
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={() => handleSlideChange((activeSlide - 1 + 3) % 3)}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={() => handleSlideChange((activeSlide + 1) % 3)}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default PromotionSlider;
