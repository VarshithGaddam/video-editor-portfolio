import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const ShortVideoSection = () => {
  // YouTube Shorts URL
  const videoUrl = 'https://youtube.com/shorts/IFGSnr2Trj8?si=X06_wCxSlBM_FByH';

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
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="auto"
            className="vertical-video"
            controls
            playing={true} // Autoplay (muted by default due to policy)
            muted={true} // Required for autoplay
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1, // Hide YouTube logo
                  rel: 0, // Disable related videos
                },
              },
            }}
          />
          <p className="video-note">Check out this vertical video showcase!</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ShortVideoSection;