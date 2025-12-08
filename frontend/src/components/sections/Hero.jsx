import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Navbar overlay */}
      <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-3xl font-bebas text-white tracking-wider cursor-pointer">
            BIG<span className="text-neon-green">SPORTY</span>
        </div>
        <div className="hidden md:block">
            <a href="tel:+918160989597" className="text-white hover:text-neon-green font-bold transition-colors tracking-wide">
                +91 81609 89597
            </a>
        </div>
      </nav>
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop)' }}></div>
      
      <div className="relative z-20 text-center text-white p-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bebas text-neon-green mb-4 drop-shadow-lg"
        >
          PREMIUM BOX CRICKET ARENA
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto text-gray-200"
        >
          Experience cricket like never before under the lights. Professional turf, premium amenities, and pure adrenaline.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <button className="bg-neon-green text-dark-navy px-8 py-3 font-bold text-lg rounded-none hover:bg-white transition-colors duration-300 transform skew-x-[-10deg]">
            <span className="block skew-x-[10deg]">VIEW BOX</span>
          </button>
          <button className="border-2 border-neon-green text-neon-green px-8 py-3 font-bold text-lg rounded-none hover:bg-neon-green hover:text-dark-navy transition-colors duration-300 transform skew-x-[-10deg]">
             <span className="block skew-x-[10deg]">GALLERY</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
