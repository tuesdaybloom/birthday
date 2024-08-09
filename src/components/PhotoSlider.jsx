import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './fire.css'; // Add your custom CSS here

const PhotoSlider = ({ photos }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const letters = headingRef.current.querySelectorAll('.dancing-letter');
      letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`;
        letter.style.opacity = 1;
      });
    }
  }, []);

  const createSpans = (text) => {
    const words = text.split(' ');
    const mid = Math.floor(words.join('').length / 2);

    let charCount = 0;
    return words.map((word, wordIndex) => (
      <React.Fragment key={wordIndex}>
        {word.split('').map((char, charIndex) => {
          const spanClass = charCount < mid ? 'left' : 'right';
          charCount++;
          return (
            <span key={charIndex} className={`dancing-letter ${spanClass}`}>
              {char}
            </span>
          );
        })}
        {wordIndex < words.length - 1 && <span className="dancing-letter">&nbsp;</span>}
      </React.Fragment>
    ));
  };

  return (
    <div className="w-full relative mt-5">
      <h1 ref={headingRef} className="font-medium mb-1 text-gray-800 lg:text-8xl text-4xl sm:text-5xl md:text-6xl sm:whitespace-nowrap break-normal text-center font-serif">
        {createSpans('Your Memory Lane')}
      </h1>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="relative h-full my-20">
            <img
              src={photo.url}
              alt={`Memory ${index}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-150 rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoSlider;
