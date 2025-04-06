import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EditThumbnails from './components/EditThumbnails';
import About from './components/About';
import SampleReel from './components/SampleReel';
import SocialChannels from './components/SocialChannels';
import GraphicsDesigning from './components/GraphicsDesigning'; // Replace Portfolio with GraphicsDesigning
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ParallaxProvider>
      <div className={`app ${theme}`}>
        <Navigation toggleTheme={toggleTheme} theme={theme} />
        <Hero />
        <EditThumbnails />
        <About />
        <SampleReel />
        <SocialChannels />
        <GraphicsDesigning /> {/* Replace Portfolio with GraphicsDesigning */}
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;