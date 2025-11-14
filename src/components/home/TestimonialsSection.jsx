import React from 'react';

const TestimonialsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">What Our Clients Say</h2>
      <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
        Hear from those who have experienced the Anand Infra difference firsthand.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            quote: '"Living in an Anand Infra home is different. There\'s a palpable sense of peace and solidity. They truly delivered on their promise of quality and Vastu."',
            name: 'Mr. & Mrs. Iyer',
            position: 'Greenwood Enclave Residents'
          },
          { 
            quote: '"Our corporate office by Anand Infra has been a catalyst for our growth. The design is both innovative and timeless, impressing every client who walks in."',
            name: 'CEO, TechNova Solutions',
            position: 'Harmony Business Park Tenant'
          },
          { 
            quote: '"The public infrastructure project was completed with exceptional quality and adherence to timelines. Their team understood the unique requirements perfectly."',
            name: 'Government Official',
            position: 'Public Works Department'
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover-lift">
            <div className="flex items-center mb-4">
              <div className="text-amber-500 text-2xl mr-2">
                {'★'.repeat(5)}
              </div>
            </div>
            <p className="text-gray-600 mb-6">{testimonial.quote}</p>
            <div className="flex items-center">
              <div className="h-9 w-9 mt-1 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
                <i className="fas fa-user text-gray-600"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;