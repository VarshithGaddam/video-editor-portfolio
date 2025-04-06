import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const SampleReel = () => {
  return (
    <section id="sample-reel" className="sample-reel">
      <Parallax speed={-5} className="parallax-bg" style={{ backgroundImage: 'url(/assets/images/reel-bg.jpg)' }} />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Sample Editing Reel
      </motion.h2>
      <motion.div
        className="sample-reel-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="reel-box">
          <div className="reel-video">
            <ReactPlayer
              url="https://youtu.be/Sf4w3T-xJtU?si=7MMyrAJLsuop0rte"
              width="100%"
              height="100%"
              controls
              playing={true} // Auto-play the video
              muted={true} // Muted by default to allow autoplay
              loop={true} // Loop the video
            />
          </div>
          <div className="reel-details">
            <h3>My Signature Style</h3>
            <p>
              This reel highlights my editing skills with dynamic transitions, vibrant color grading, and seamless audio integration. Originally shared on Instagram, it showcases my ability to create engaging short-form content.
            </p>
            <ul>
              <li><strong>Duration:</strong> ~15-30s (Instagram Reel)</li>
              <li><strong>Software:</strong> Adobe Premiere Pro, After Effects, Davinci Resolve</li>
              <li><strong>Techniques:</strong> Color Correction, Motion Graphics, Sound Design</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SampleReel;