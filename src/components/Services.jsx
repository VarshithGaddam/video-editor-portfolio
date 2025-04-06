import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(247, 148, 30, 0.5)' },
  };

  return (
    <section id="services" className="services">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>
      <div className="services-grid">
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true }}>
          <h3>Video Editing</h3>
          <p>Professional editing for all types of videos</p>
          <ul>
            <li>4K Cinematic Editing</li>
            <li>Motion Graphics Integration</li>
            <li>Sound Design & Mixing</li>
          </ul>
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true }}>
          <h3>Workflow</h3>
          <ol>
            <li>Project Consultation</li>
            <li>Footage Review</li>
            <li>Editing Process</li>
            <li>Revisions</li>
            <li>Final Delivery</li>
          </ol>
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true }}>
          <h3>Pricing</h3>
          <p>For Basic video – <i>499/-</i></p>
          <p>Standard Video - <i>1499/-</i></p>
          <p>Professional Video - <i>2999/-</i></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;