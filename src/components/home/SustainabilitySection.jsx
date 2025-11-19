import React from 'react';

const SustainabilitySection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-4 fade-in">Sustainable Development</h2>
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
        Building responsibly for a better tomorrow
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="fade-in">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment to Nature</h3>
          <p className="text-gray-600 mb-6">
            At Anand Infra, we believe that true legacy extends beyond structures to the impact we have on our environment and communities. 
            We focus on integrating greenery and natural elements into our projects to protect and preserve nature.
          </p>
          
          <div className="space-y-4">
            {[
              { icon: 'leaf', title: 'Green Building Integration', desc: 'We prioritize incorporating green spaces, vertical gardens, and natural elements into our designs' },
              { icon: 'tree', title: 'Preservation of Natural Landscape', desc: 'Our projects are designed to work with the natural topography, preserving existing trees and green cover' },
              { icon: 'recycle', title: 'Eco-Friendly Materials', desc: 'We use sustainable, locally-sourced materials and implement waste management systems' }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-green-500 rounded-full object-cover object-center p-2 mr-4 mt-2">
                  <i className={`fas fa-${item.icon} text-white text-sm`}></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="fade-in">
          <div className="bg-gray-100 rounded-xl p-8 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 pulse-slow">
                <i className="fas fa-seedling text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nature-Inspired Design</h3>
              <p className="text-gray-600">
                Our projects incorporate extensive greenery, natural ventilation, and daylight optimization to create healthier living environments while reducing environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SustainabilitySection;