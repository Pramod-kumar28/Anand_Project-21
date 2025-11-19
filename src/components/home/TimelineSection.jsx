import React from 'react';

const TimelineSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-4 fade-in">Our Project Journey</h2>
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
        From concept to completion, we follow a meticulous process
      </p>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {[
              { title: 'Consultation & Planning', desc: 'We begin by understanding your vision, requirements, and conducting detailed site analysis to create a comprehensive project plan.' },
              { title: 'Design & Engineering', desc: 'Our architects and engineers create detailed designs that blend aesthetic appeal with structural integrity and Vastu principles.' },
              { title: 'Approvals & Permits', desc: 'We handle all necessary regulatory approvals and permits, ensuring compliance with local building codes and regulations.' }
            ].map((item, index) => (
              <div key={index} className="timeline-item fade-in">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {[
              { title: 'Construction', desc: 'Using premium materials and advanced techniques, our skilled workforce brings the design to life with precision and care.' },
              { title: 'Quality Assurance', desc: 'Multiple quality checks at every stage ensure that the final construction meets our exacting standards and your expectations.' },
              { title: 'Handover & Support', desc: 'We deliver your completed project with comprehensive documentation and provide ongoing support for maintenance.' }
            ].map((item, index) => (
              <div key={index} className="timeline-item fade-in">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;