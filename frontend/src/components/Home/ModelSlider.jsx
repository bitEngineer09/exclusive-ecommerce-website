import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { models } from "../../helpers/modelSlider.js";
import "react-lazy-load-image-component/src/effects/blur.css";

const ModelSlider = () => {

  // USE STATES
  const [currentIndex, setCurrentIndex] = useState(0);


  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? models.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === models.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="
        relative 
        w-full 
        max-w-[1600px]  /* slider ka max width */
        h-[19rem] sm:h-[22rem] md:h-[28rem] lg:h-[40rem] 2xl:h-[43rem] 
        max-h-[56rem] 
        overflow-hidden 
        2xl:rounded-[1rem]
        mx-auto
      "
    >
      {/* Images */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {models.map((model, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
          >
            <LazyLoadImage
              src={model.url}
              effect="blur"
              alt=""
              className="
                w-full h-full
                min-h-[22rem] max-h-[70rem] 
                object-cover 
                2xl:rounded-[1rem]
              "
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="
          hidden md:block 
          absolute 
          text-[2rem] lg:text-[3rem] 
          top-1/2 left-2 -translate-y-1/2  
          text-(--text-secondary) 
          p-2 rounded-full cursor-pointer
        "
      >
        <IoIosArrowBack />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="
          hidden md:block 
          absolute 
          text-[2rem] lg:text-[3rem] 
          top-1/2 right-2 -translate-y-1/2  
          text-(--text-secondary) 
          p-2 rounded-full cursor-pointer
        "
      >
        <IoIosArrowForward />
      </button>

      {/* Dots */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2">
        {models.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              size-[0.6rem] lg:size-[1rem] 
              rounded-full cursor-pointer 
              ${currentIndex === index ? "bg-white" : "bg-gray-400"}
            `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ModelSlider;
