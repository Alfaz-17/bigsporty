import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Facilities from './sections/Facilities';
import Gallery from './sections/Gallery';
import Pricing from './sections/Pricing';
import Reviews from './sections/Reviews';
import Footer from './sections/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-dark-navy text-white font-inter selection:bg-neon-green selection:text-dark-navy overflow-x-hidden">
      <Hero />
      <About />
      <Gallery />
      <Facilities />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
};

export default LandingPage;
