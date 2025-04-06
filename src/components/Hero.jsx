import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const floatVariants = {
    animate: { y: [0, -10, 0], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } },
  };

  return (
    <section id="hero" className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: 'url(https://github.com/VarshithGaddam/gifs/blob/main/pavan.png?raw=true)' }} // Updated image link
      >
        <div className="hero-overlay"></div> {/* Dark overlay for text readability */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pavan Bandari
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Video Editor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting visual stories with precision and creativity
          </motion.p>
          <div className="hero-buttons">
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(247, 148, 30, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              View Portfolio
            </motion.button>
            <motion.button
              className="cta-button secondary"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Contact Me
            </motion.button>
          </div>
          <motion.div
            className="floating-icon"
            variants={floatVariants}
            animate="animate"
            style={{ top: '20%', left: '10%' }}
          >
            <i className="fas fa-video"></i>
          </motion.div>
          <motion.div
            className="floating-icon"
            variants={floatVariants}
            animate="animate"
            style={{ bottom: '20%', right: '10%' }}
          >
            <i className="fas fa-cut"></i>
          </motion.div>
        </motion.div>
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;