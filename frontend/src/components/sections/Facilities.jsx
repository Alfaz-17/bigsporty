import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Zap, Armchair, Coffee, Wifi, Car } from 'lucide-react';

const FacilityCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
    className="group relative bg-dark-navy-light border border-white/10 p-6 rounded-xl hover:border-neon-green/50 transition-colors duration-300"
  >
    <div className="absolute inset-0 bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    <div className="relative z-10 flex flex-col items-start">
      <div className="p-3 bg-dark-navy rounded-lg mb-4 group-hover:bg-neon-green group-hover:text-dark-navy transition-colors duration-300 text-neon-green">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bebas text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  </motion.div>
);

const Facilities = () => {
  const facilities = [
    { icon: Ruler, title: "Pro Dimensions", desc: "100x60 ft spacious turf for 8v8 matches." },
    { icon: Zap, title: "Floodlights", desc: "Professional grade lighting for clear night visibility." },
    { icon: Armchair, title: "Dugout Seating", desc: "Premium seating for home and away teams." },
    { icon: Coffee, title: "Cafeteria", desc: "Snacks and refreshments available court-side." },
    { icon: Wifi, title: "Free WiFi", desc: "High-speed internet for live streaming matches." },
    { icon: Car, title: "Ample Parking", desc: "Secure parking space for bikes and cars." },
  ];

  return (
    <section className="py-20 bg-dark-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-bebas mb-2 text-white">Arena <span className="text-neon-green">Facilities</span></h2>
            <p className="text-gray-400 max-w-md">Everything you need for a world-class cricketing experience.</p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-white/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-neon-green w-1/2 animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => (
            <FacilityCard key={idx} {...fac} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
