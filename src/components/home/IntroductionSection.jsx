import React from 'react';

const IntroductionSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 fade-in">Welcome to Anand Infra</h2>
        
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 fade-in">
          At Anand Infra, we are dedicated to creating infrastructure that endures for generations strong,
          precise, and timeless. We handle a wide spectrum of development including commercial
          complexes, residential townships, industrial structures, warehouses, layout
          development, public utilities, community infrastructure, and large-scale construction
          projects. Every creation is built with scientific planning, strict quality control, and Vastu-aligned
          design to ensure balance, longevity, and well-being. We build not just for today, but for the
          future delivering iconic, reliable, and innovative infrastructure that strengthens communities
          and becomes a lasting legacy.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 zoom-in">
        {[
            { 
              icon: 'city', 
              title: 'Commercial Complexes', 
              desc: 'Dynamic spaces for business to thrive. We create state of the art commercial environments that combine innovative design with functional efficiency, offering businesses the perfect platform for growth and success.',
              
            },
            { 
              icon: 'home', 
              title: 'Residential Townships', 
              desc: 'Creating communities, not just houses. We design and build integrated residential ecosystems that offer balanced living with modern amenities, green spaces, and community infrastructure for holistic well-being.',
              
            },
            { 
              icon: 'industry', 
              title: 'Industrial & Warehousing', 
              desc: 'Engineered for efficiency and scale. Our industrial structures are designed with precision engineering to optimize workflow, maximize productivity, and provide scalable solutions for manufacturing and logistics needs.',
              
            },
            { 
              icon: 'landmark', 
              title: 'Public Infrastructure', 
              desc: 'Building the foundations of society. We develop essential public utilities and community infrastructure that serve as pillars of societal development, enhancing quality of life and supporting community growth.',
              
            }
          ].map((item, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 text-center hover-lift">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 floating">
              <i className={`fas fa-${item.icon} text-amber-600 text-2xl`}></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntroductionSection;