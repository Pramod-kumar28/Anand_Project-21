import React from 'react';

const IntroductionSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 fade-in">Welcome to Anand Infra</h2>
        <p className="text-lg text-gray-600 fade-in">
          We are dedicated creators of enduring infrastructure, blending scientific planning with timeless design. 
          From visionary townships to robust industrial complexes and public infrastructure projects, 
          we build with a commitment to quality, harmony, and a future-ready approach.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {[
          { icon: 'city', title: 'Commercial Complexes', desc: 'Dynamic spaces for business to thrive.' },
          { icon: 'home', title: 'Residential Townships', desc: 'Creating communities, not just houses.' },
          { icon: 'industry', title: 'Industrial & Warehousing', desc: 'Engineered for efficiency and scale.' },
          { icon: 'landmark', title: 'Public Infrastructure', desc: 'Building the foundations of society.' }
        ].map((item, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 text-center hover-lift">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 floating">
              <i className={`fas fa-${item.icon} text-amber-600 text-2xl`}></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntroductionSection;