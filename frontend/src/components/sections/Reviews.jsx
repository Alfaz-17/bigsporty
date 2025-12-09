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
        { name: "Vikram Singh", role: "Tournament Organizer", text: "The best turf we've played on! Perfect bounce and great grip.", rating: 5 },
        { name: "Rohan Mehta", role: "Weekend Warrior", text: "Amazing atmosphere for night matches. The floodlights are pro-level.", rating: 5 },
        { name: "Priya Desai", role: "Regular Player", text: "Clean facilities and safe environment. Love playing here with my team.", rating: 5 },
        { name: "Aditya Jadeja", role: "Team Captain", text: "Great management and seamless booking experience. Our go-to spot.", rating: 5 },
        { name: "Karan Vaghela", role: "Cricket Enthusiast", text: "The dugout seating is a nice touch. innovative and comfortable.", rating: 4 },
        { name: "Arjun Odedra", role: "Coach", text: "High quality turf that is easy on the knees. Highly recommended.", rating: 5 },
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
