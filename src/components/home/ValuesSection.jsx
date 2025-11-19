import React from 'react';

const ValuesSection = () => (
  <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-4 fade-in">Our Core Values</h2>
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in mt-4">
        The principles that guide every project we undertake
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: 'handshake', title: 'Integrity', desc: 'We believe in transparent communication and ethical practices in all our dealings, building trust that lasts generations.' },
          { icon: 'star', title: 'Excellence', desc: 'From material selection to final finishing, we never compromise on quality, ensuring every project exceeds expectations.' },
          { icon: 'users', title: 'Community Focus', desc: 'We build not just structures, but communities that thrive, creating spaces that bring people together.' }
        ].map((value, index) => (
          <div 
            key={index} 
            className="value-card group relative bg-gray-50 p-8 rounded-xl border border-gray-100 text-center overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-navy-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
            
            <div className="relative z-10">
              <div className="bg-cyan-500 group-hover:bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 pulse-slow transition-colors duration-500">
                <i className={`fas fa-${value.icon} text-white group-hover:text-navy-blue text-3xl transition-colors duration-500`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-4 transition-colors duration-500">{value.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-center transition-colors duration-500">{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;