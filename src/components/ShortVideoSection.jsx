import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const ShortVideoSection = () => {
  // Array of YouTube Shorts URLs
  const videoUrls = [
    'https://youtube.com/shorts/4uqlTKGNSuY?si=BXkgLxvmGnliyfpA',
    'https://youtube.com/shorts/_bKBVP5NNqY?si=33-APCnS7sBVHIup',
    'https://youtube.com/shorts/IFGSnr2Trj8?si=asZs7Hpfw4WSWggN',
  ];

  const [currentVideoIndices, setCurrentVideoIndices] = useState([0, 1, 2]); // Indices for three videos

  // Handle main video completion and rotate indices
  const handleVideoEnd = (index) => {
    setCurrentVideoIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = (newIndices[index] + 1) % videoUrls.length;
      return newIndices;
    });
  };

  return (
    <section id="short-video" className="short-video-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Featured Short Videos
      </motion.h2>
      <motion.div
        className="short-video-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="video-container">
          <div className="video-row">
            {currentVideoIndices.map((index, i) => (
              <div key={i} className="video-item">
                <ReactPlayer
                  url={videoUrls[index]}
                  width="100%"
                  height="auto"
                  className="vertical-video"
                  controls
                  playing={i === 0} // Only the first video autoplays
                  muted={i === 0} // Only the first video is muted for autoplay
                  onEnded={() => handleVideoEnd(i)} // Rotate on end
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1,
                        rel: 0,
                      },
                    },
                  }}
                />
              </div>
            ))}
          </div>
          <p className="video-note">Three vertical video showcases rotating automatically!</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ShortVideoSection;