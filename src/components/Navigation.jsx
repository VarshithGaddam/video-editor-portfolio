import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle smooth scrolling with offset
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80; // Approximate height of the navbar (adjust if different)
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setIsOpen(false); // Close menu on mobile after clicking
  };

  return (
    <motion.nav
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="nav-container">
        <div className="logo">Pavan Babu Bandari</div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <motion.ul
        className={`nav-menu ${isOpen ? 'active' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen || window.innerWidth > 768 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Home</a></li>
        <li><a href="#edit-thumbnails" onClick={(e) => handleScroll(e, 'edit-thumbnails')}>Edits</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
        <li><a href="#sample-reel" onClick={(e) => handleScroll(e, 'sample-reel')}>Reel</a></li>
        <li><a href="#social-channels" onClick={(e) => handleScroll(e, 'social-channels')}>Channels</a></li>
        <li><a href="#graphics-designing" onClick={(e) => handleScroll(e, 'graphics-designing')}>Graphics</a></li>
        <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
      </motion.ul>
      <div className="nav-controls">
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;