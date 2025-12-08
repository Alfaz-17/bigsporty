import React from 'react';
import { Lightbulb, ShieldCheck, Gamepad2, MapPin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
    <div className="bg-neon-green/20 p-4 rounded-full mb-4">
      <Icon className="w-8 h-8 text-neon-green" />
    </div>
    <h3 className="text-2xl font-bebas text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

const About = () => {
  return (
    <section className="py-20 bg-dark-navy relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bebas text-white mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-neon-green mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We provide the ultimate cricketing experience with international standard styling, smart lighting, and a youth-centric vibe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Lightbulb} 
            title="Pro Lighting" 
            desc="Shadow-less LED lighting for the perfect night match experience." 
          />
          <FeatureCard 
            icon={ShieldCheck} 
            title="Premium Turf" 
            desc="FIFA-approved artificial grass for injury-free gameplay." 
          />
          <FeatureCard 
            icon={Gamepad2} 
            title="Sleek Dugout" 
            desc="Comfortable seating area for teams to strategize and relax." 
          />
          <FeatureCard 
            icon={MapPin} 
            title="Prime Location" 
            desc="Easily accessible center of the city with ample parking." 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
