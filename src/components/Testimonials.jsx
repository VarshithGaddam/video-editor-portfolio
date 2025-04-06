import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player'; // Import ReactPlayer

const testimonials = [
  {
    id: 1,
    name: "Chainsaw Man Edit",
    text: "Anime 4k edited video",
    video: "https://youtu.be/bb5CXmFkMUU?si=yQpnakcHM40SyPZU"
  },
  {
    id: 2,
    name: "Show Reel",
    text: "What can I do?",
    video: "https://youtu.be/Sf4w3T-xJtU?si=7MMyrAJLsuop0rte"
  },
  // Add more as needed
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Control mute state

  const toggleMute = () => {
    setIsMuted((prev) => !prev); // Toggle mute on button click
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="testimonial-carousel"
      >
        <div className="testimonial-content">
          <p>"{testimonials[current].text}"</p>
          <h4>- {testimonials[current].name}</h4>
          {testimonials[current].video && (
            <>
              <ReactPlayer
                url={testimonials[current].video}
                width="100%" // Responsive width
                height="400px" // Adjusted height for better visibility
                playing={true} // Auto-play the video
                muted={isMuted} // Muted by default to allow autoplay
                controls={true} // Allow manual control
                loop={true} // Loop the video
              />
              {isMuted && (
                <button
                  onClick={toggleMute}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '1rem 2rem',
                    background: '#F7940E',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    zIndex: 10,
                  }}
                >
                  Unmute Video
                </button>
              )}
            </>
          )}
        </div>
        <div className="carousel-controls">
          <button onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}>
            Previous
          </button>
          <button onClick={() => setCurrent((prev) => Math.min(testimonials.length - 1, prev + 1))}>
            Next
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;