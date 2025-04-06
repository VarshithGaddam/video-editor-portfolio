import React from 'react';
import { motion } from 'framer-motion';

const GraphicsDesigning = () => {
  const designs = [
    {
      id: 1,
      src: 'https://github.com/VarshithGaddam/gifs/blob/main/metrum(2024).png?raw=true', // Replace with your graphic design image URL
      alt: 'Graphic Design 1',
    },
    {
      id: 2,
      src: 'https://github.com/VarshithGaddam/gifs/blob/main/1.png?raw=true', // Replace with your graphic design image URL
      alt: 'Graphic Design 2',
    },
    {
      id: 3,
      src: 'https://github.com/VarshithGaddam/gifs/blob/main/parthi%20edited%20(boxing).png?raw=true', // Replace with your graphic design image URL
      alt: 'Graphic Design 3',
    },
    {
      id: 4,
      src: 'https://github.com/VarshithGaddam/gifs/blob/main/lokesh.total.edited.png?raw=true', // Replace with your graphic design image URL
      alt: 'Graphic Design 4',
    },
    {
        id: 5,
        src: 'https://github.com/VarshithGaddam/gifs/blob/main/ugadi%20poster_5.png?raw=true', // Replace with your graphic design image URL
        alt: 'Graphic Design 5',
      },
      {
        id: 6,
        src: 'https://github.com/VarshithGaddam/gifs/blob/main/hyb.fav.hero.loki(brown).png?raw=true', // Replace with your graphic design image URL
        alt: 'Graphic Design 6',
      },
      {
        id: 7,
        src: 'https://github.com/VarshithGaddam/gifs/blob/main/red%20notebook%20front%20page(final)@2x(lite).jpg?raw=true', // Replace with your graphic design image URL
        alt: 'Graphic Design 7',
      },
      {
        id: 7,
        src: 'https://github.com/VarshithGaddam/gifs/blob/main/red%20notebook%20front%20page(bg)@2x.png?raw=true', // Replace with your graphic design image URL
        alt: 'Graphic Design 7',
      },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0 0 20px rgba(247, 148, 30, 0.7)' },
  };

  return (
    <section id="graphics-designing" className="graphics-designing">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Graphic Designing
      </motion.h2>
      <div className="design-grid">
        {designs.map((design) => (
          <motion.div
            key={design.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="design-card"
          >
            <img src={design.src} alt={design.alt} className="design-image" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GraphicsDesigning;