import React from 'react';
import { Phone, Mail, Instagram, MapPin, Clock, ChartNoAxesColumnIncreasing } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        
        {/* Location Section */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-4xl font-bebas text-white mb-6">Find <span className="text-neon-green">Us</span></h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/5 p-3 rounded-lg text-neon-green">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold mb-1">Address</h4>
                            <p className="text-gray-400">Bhilwada circle ,<br/>Bhavnagar -364001</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white/5 p-3 rounded-lg text-neon-green">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold mb-1">Opening Hours</h4>
                            <p className="text-gray-400">Monday - Sunday: 6:00 AM - 12:00 AM</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8">
                     <h4 className="font-bold mb-4">Contact Info</h4>
                     <div className="flex gap-4">
                         <a href="tel:+918160989597" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded hover:bg-neon-green hover:text-dark-navy transition-colors">
                             <Phone className="w-4 h-4" /> <span>+91 81609 89597</span>
                         </a>
                           <a href="tel:+918160989597" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded hover:bg-neon-green hover:text-dark-navy transition-colors">
                             <ChartNoAxesColumnIncreasing className="w-4 h-4" /> <span>Name : Talha Sheikh</span>
                         </a>
                         <a href="mailto:hello@booksporty.com" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded hover:bg-neon-green hover:text-dark-navy transition-colors">
                             <Mail className="w-4 h-4" /> <span>Email Us</span>
                         </a>
                     </div>
                </div>
            </div>
            
            <div className="h-80 w-full rounded-xl overflow-hidden bg-white/5 grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 relative">
                {/* Embedded Map Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 font-bebas text-2xl">MAP INTEGRATION</span>
                </div>
                <iframe 
                    src="https://maps.google.com/maps?q=Bhavnagar,%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                    className="opacity-50 hover:opacity-100 transition-opacity"
                ></iframe>
            </div>
        </div>
        
        {/* Simple Footer Bottom */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 BookSporty. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-neon-green transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-neon-green transition-colors">Instagram</a>
                <a href="#" className="hover:text-neon-green transition-colors">Facebook</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
