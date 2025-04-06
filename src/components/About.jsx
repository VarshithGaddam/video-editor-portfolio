import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="about-content">
        <div className="about-section">
          <h3>Specializations</h3>
          <div className="specialization-item">
            <img src='https://cdn-icons-png.flaticon.com/256/5242/5242368.png' alt="Video Editing" className="skill-icon" />
            <p>Video Editing</p>
          </div>
          <div className="specialization-item">
            <img src='https://cdn-icons-png.flaticon.com/256/5334/5334883.png' alt="Motion Graphics" className="skill-icon" />
            <p>Motion Graphics</p>
          </div>
          <div className="specialization-item">
            <img src='https://cdn-icons-png.flaticon.com/256/11585/11585736.png' alt="Graphic Designing" className="skill-icon" />
            <p>Graphic Designing</p>
          </div>
          <div className="specialization-item">
            <img src='https://cdn-icons-png.flaticon.com/256/10266/10266412.png' alt="Content Writing" className="skill-icon" />
            <p>Content Writing</p>
          </div>
          <div className="specialization-item">
            <img src='https://cdn-icons-png.flaticon.com/256/4104/4104723.png' alt="Social Media Management" className="skill-icon" />
            <p>Social Media Management</p>
          </div>
        </div>
        <div className="about-section">
          <h3>Technical Skills</h3>
          <div className="skill-item">
            <img src='https://cdn-icons-png.flaticon.com/256/5968/5968525.png' alt="Adobe Premiere Pro" className="skill-icon" />
            <p>Adobe Premiere Pro</p>
          </div>
          <div className="skill-item">
            <img src='https://cdn-icons-png.flaticon.com/256/5968/5968428.png' alt="After Effects" className="skill-icon" />
            <p>After Effects</p>
          </div>
          <div className="skill-item">
            <img src='https://cdn-icons-png.flaticon.com/256/5968/5968520.png' alt="Adobe Photoshop" className="skill-icon" />
            <p>Adobe Photoshop</p>
          </div>
          <div className="skill-item">
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png' alt="DaVinci Resolve" className="skill-icon" />
            <p>DaVinci Resolve</p>
          </div>
          <div className="skill-item">
            <img src='https://cdn-icons-png.flaticon.com/256/5968/5968705.png' alt="Figma" className="skill-icon" />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;