import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import './hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    image1,
    image2,
    image3,
    image4,
    // Add more image URLs here
  ];

  const handleBeforeChange = (oldIndex, newIndex) => {
    const totalImages = images.length;

    if (oldIndex === 0 && newIndex === totalImages - 1) {
      setCurrentSlide(totalImages);
    } else if (oldIndex === totalImages - 1 && newIndex === 0) {
      setCurrentSlide(-1);
    }
  };

  return (
    <div className="hero">
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        transitionTime={1000}
        selectedItem={currentSlide}
        beforeChange={handleBeforeChange}
        className="custom-carousel" // Add a class to the Carousel component
      >
        {images.map((image, index) => (
          <div key={index} className="custom-slide"> {/* Add a class to the slide */}
            <img src={image} alt={`Slide ${index + 1}`} className="custom-image" /> {/* Add a class to the image */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};


export default Hero;