import React from 'react';
import { motion } from 'framer-motion';

const SocialChannels = () => {
  const channels = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@vayuvuofficial/featured', // Replace with your actual YouTube URL
      image: 'https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/Screenshot%202025-04-06%20141320.png', // Placeholder for channel screenshot
      alt: 'YouTube Channel Overview',
      description: 'Successfully built an educational infotainment channel in Telugu from scratch.'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/varna.08/', // Replace with your actual Instagram URL
      image: 'https://raw.githubusercontent.com/VarshithGaddam/gifs/refs/heads/main/Screenshot%202025-04-06%20075845.png', // Placeholder for channel screenshot
      alt: 'Instagram Channel Overview',
      
      description: 'Grown organically from 0 to 10K+ followers in just 5 months, establishing a powerful presence in the anime editing community.'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(247, 148, 30, 0.5)' },
  };

  return (
    <section id="social-channels" className="social-channels">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        My Social Channels
      </motion.h2>
      <div className="channels-grid">
        {channels.map((channel) => (
          <motion.div
            key={channel.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="channel-card"
          >
            <img src={channel.image} alt={channel.alt} className="channel-image" />
            <h3>{channel.name}</h3>
            <a href={channel.url} target="_blank" rel="noopener noreferrer" className="channel-link">
              Visit {channel.name}
            </a>
            <p className="channel-description">{channel.description}</p> {/* Added description */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialChannels;