import React, { useState, useRef, useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef(null);

  const videos = [
    {
      src: '/videos/itMovie.mp4',
      poster: '/images/carrousel/itPoster.jpg',
      title: 'IT'
    },
    {
      src: '/videos/largaMarchaMovie.mp4',
      poster: '/images/carrousel/longWalkPoster.jpg',
      title: 'La Larga Marcha'
    }
  ];

  const handlePrevious = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? videos.length - 1 : prevIndex - 1
      );
      setOpacity(1);
    }, 1000);
  };

  const handleNext = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
      setOpacity(1);
    }, 1000);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [currentIndex]);

  return (
    <section id="bannerStephenKing">
      <div id="carrusel">
        <video
          ref={videoRef}
          id="video"
          poster={videos[currentIndex].poster}
          controls
          style={{ opacity }}
        >
          <source src={videos[currentIndex].src} type="video/mp4" />
          Tu navegador no soporta video.
        </video>
        <button id="buttonPrev" className="buttonControlSlide" onClick={handlePrevious}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <button id="buttonNext" className="buttonControlSlide" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </section>
  );
};

export default Carousel;