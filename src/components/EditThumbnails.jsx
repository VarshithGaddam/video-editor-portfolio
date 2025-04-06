import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EditThumbnails = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { 
      id: 1, 
      src: 'https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/maxresdefault%20(1).jpg', 
      caption: 'Revealing the Dark Truth of Social Media', 
      youtube: 'https://youtu.be/1VNAYpPFi1Y?si=s1jUnuHtbhgM0EPx' // Replace with actual YouTube video ID
    },
    { 
      id: 2, 
      src: 'https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/maxresdefault.jpg', 
      caption: 'Eduaction System failing us', 
      youtube: 'https://youtu.be/GWGuaz5O32Y?si=LmbjOaX2jQ5pihxh' // Replace with actual YouTube video ID
    },
    { 
      id: 3, 
      src: 'https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/maxresdefault%20(2).jpg', 
      caption: 'Revolutionary Scientists who altered History', 
      youtube: 'https://youtu.be/GWGuaz5O32Y?si=LmbjOaX2jQ5pihxh' // Replace with actual YouTube video ID
    },
  ];

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleImageClick = (youtubeLink) => {
    window.open(youtubeLink, '_blank'); // Open YouTube link in new tab
  };

  return (
    <section id="edit-thumbnails" className="edit-thumbnails">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Edit Highlights
      </motion.h2>
      <div className="thumbnail-slider">
        <div
          className="slider-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="thumbnail-slide">
              <img 
                src={slide.src} 
                alt={`Edit ${slide.id}`} 
                onClick={() => handleImageClick(slide.youtube)} 
                style={{ cursor: 'pointer' }} // Indicate clickable
              />
              <p>{slide.caption}</p> {/* Display caption instead of link */}
            </div>
          ))}
        </div>
        <button className="slider-prev" onClick={prevSlide}>
          ←
        </button>
        <button className="slider-next" onClick={nextSlide}>
          →
        </button>
      </div>
    </section>
  );
};

export default EditThumbnails;