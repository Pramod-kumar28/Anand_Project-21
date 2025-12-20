import React from 'react';

const PromiseSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-8 fade-in">The Anand Infra Difference</h2>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {[
          { icon: 'flask', title: 'Scientific Planning', desc: 'Data driven and technologically advanced project execution for optimal efficiency and sustainability.' },
          { icon: 'award', title: 'Uncompromising Quality', desc: 'Rigorous, multi stage quality control protocols that leave no room for error.' },
          { icon: 'yin-yang', title: 'Vastu-Aligned Design', desc: 'Harmonious layouts that promote balance, prosperity, and well being for occupants.' },
          { icon: 'eye', title: 'Future-Ready Vision', desc: 'Building not just for today, but for the generations to come with timeless designs.' }
        ].map((item, index) => (
          <div key={index} className="flex fade-in">
            <div className="bg-amber-100 p-4 rounded-full h-14 w-14 flex items-center justify-center mt-2 mr-6 flex-shrink-0">
              <i className={`fas fa-${item.icon} text-amber-600 text-xl`}></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;