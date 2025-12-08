import React from 'react';

const PricingCard = ({ title, price, features, recommended }) => (
  <div className={`relative p-8 rounded-2xl border ${recommended ? 'border-neon-green bg-white/5' : 'border-white/10 bg-dark-navy-light'} flex flex-col h-full hover:-translate-y-2 transition-transform duration-300`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-green text-dark-navy font-bold px-4 py-1 rounded-full text-sm">
        MOST POPULAR
      </div>
    )}
    <h3 className="text-3xl font-bebas text-white mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold text-neon-green">₹{price}</span>
      <span className="text-gray-400">/hour</span>
    </div>
    <ul className="flex-1 space-y-4 mb-8">
      {features.map((feat, idx) => (
        <li key={idx} className="flex items-center text-gray-300">
          <div className="w-2 h-2 rounded-full bg-neon-green mr-3" />
          {feat}
        </li>
      ))}
    </ul>
    <div className="text-center text-sm text-gray-400 mt-auto">
      * Advance booking required
    </div>
  </div>
);

const Pricing = () => {
  return (
    <section className="py-20 bg-dark-navy relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bebas text-white mb-2">Turf <span className="text-neon-green">Box Rates</span></h2>
          <p className="text-gray-400">Simple, transparent pricing for everyone.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            title="Weekday Morning" 
            price="800" 
            features={["6:00 AM - 4:00 PM", "Mon - Fri", "Standard Equipment", "Water Included"]}
          />
          <PricingCard 
            title="Prime Time / Weekend" 
            price="1200" 
            features={["4:00 PM - 12:00 AM (Daily)", "All Day (Sat - Sun)", "Premium Equipment", "Priority Support"]}
            recommended={true}
          />
          <PricingCard 
            title="Bulk Booking" 
            price="1000" 
            features={["Min 10 Hours", "Valid for 1 Month", "Flexible Slots", "Tournament Support"]}
          />
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Ready to play? Call us now to reserve your slot.</p>
            <a href="#footer" className="inline-block border border-neon-green text-neon-green px-8 py-3 font-bold hover:bg-neon-green hover:text-dark-navy transition-colors">
                CONTACT TO BOOK
            </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
