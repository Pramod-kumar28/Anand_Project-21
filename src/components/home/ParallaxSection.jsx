import React from 'react';
import { Link } from 'react-router-dom';

const ParallaxSection = () => (
  <section className="py-24 parallax-section text-white relative">
    <div 
      className="absolute inset-0 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)' }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>
    </div>
    
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 fade-in">Building for Future Generations</h2>
      <p className="text-lg mb-10 max-w-2xl mx-auto fade-in">
        Our commitment extends beyond construction to creating sustainable, enduring infrastructure that serves communities for decades to come.
      </p>
      <Link to="/about" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
        Learn More About Our Vision
      </Link>
    </div>
  </section>
);

export default ParallaxSection;