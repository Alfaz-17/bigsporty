import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, role, text, rating }) => (
  <div className="bg-dark-navy border border-white/5 p-6 rounded-xl relative">
    <div className="flex text-neon-green mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-gray-700'}`} />
      ))}
    </div>
    <p className="text-gray-300 italic mb-6">"{text}"</p>
    <div>
        <h4 className="font-bebas text-xl text-white">{name}</h4>
        <span className="text-xs text-gray-500 uppercase tracking-widest">{role}</span>
    </div>
  </div>
);

const Reviews = () => {
    const reviews = [
        { name: "Rahul Sharma", role: "Team Captain", text: "Best turf in the city! The bounce is consistent and the lighting is just perfect for night matches.", rating: 5 },
        { name: "Amit Patel", role: "Regular Player", text: "Love the vibe here. The dugout is super comfy and the amenities are top notch. Highly recommended.", rating: 5 },
        { name: "Suresh Raina", role: "Corporate League", text: "We organized our office tournament here. Great support from the staff and excellent facilities.", rating: 4 },
    ];

  return (
    <section className="py-20 bg-dark-navy-light border-y border-white/5">
      <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-center md:text-left">
                <h2 className="text-5xl font-bebas text-white mb-4">Player <span className="text-neon-green">Vibes</span></h2>
                <p className="text-gray-400 mb-8">Don't just take our word for it. Here is what the community has to say about our arena.</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="text-center">
                        <span className="block text-3xl font-bold text-white">4.8</span>
                        <span className="text-xs text-gray-500">AVG RATING</span>
                    </div>
                    <div className="h-8 w-px bg-white/10" />
                    <div className="text-center">
                        <span className="block text-3xl font-bold text-white">500+</span>
                        <span className="text-xs text-gray-500">HAPPY PLAYERS</span>
                    </div>
                </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((rev, i) => (
                    <ReviewCard key={i} {...rev} />
                ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default Reviews;
