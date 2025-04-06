import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Email: <a href="mailto:editor@example.com">bandaripavanbabu@gmail.com</a></p>
            <p>Phone: +91 9110596821</p> {/* Replace with your actual number */}
            <p>Available for projects starting Immediately</p>
            <div className="social-links">
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://www.instagram.com/bandaripavanbabu/?__pwa=1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://www.linkedin.com/in/pavan-babu-bandari-96aa04257/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;