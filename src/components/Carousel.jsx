import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./carousel.css";


function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
 

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (

    <div className={`carousel-container relative w-fit  h-screen overflow-hidden`}>
      
      <div
        className="carousel-slides h-screen flex transition ease-in-out duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img src={s} key={index} alt={`slide-${index}`} className="carousel-image" />
        ))}
      </div>
      <div className="carousel-controls absolute flex w-full h-full top-0 justify-between items-center text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <FaArrowAltCircleLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowAltCircleRight />
        </button>
      </div>
      <div className="carousel-indicators absolute bottom-0 flex py-4 justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`indicator rounded-full w-3 h-3 cursor-pointer ${i === current ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;