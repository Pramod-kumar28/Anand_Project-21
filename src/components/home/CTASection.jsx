import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className="py-16 light-navy text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">Ready to Build Your Legacy?</h2>
      <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
      <p className="text-xl mb-10 max-w-2xl mx-auto fade-in">
        Let's discuss how we can bring your vision to life with strength, precision, and timelessness.
      </p>
      <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
        Contact Us Today
      </Link>
    </div>
  </section>
);

export default CTASection;