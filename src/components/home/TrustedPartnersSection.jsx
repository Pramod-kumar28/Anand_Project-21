import React from 'react';

const TrustedPartnersSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 fade-in">Trusted Partners</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in">
          Collaborating with leading organizations across sectors to deliver exceptional results
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            name: 'Private Developers', 
            icon: 'building',
            projects: '150+ Projects',
            color: 'blue'
          },
          { 
            name: 'Corporate Houses', 
            icon: 'city',
            projects: '80+ Projects', 
            color: 'green'
          },
          { 
            name: 'Government Bodies', 
            icon: 'landmark',
            projects: '45+ Projects',
            color: 'blue'
          },
          { 
            name: 'Individual Clients', 
            icon: 'user-friends',
            projects: '500+ Clients',
            color: 'amber'
          }
        ].map((partner, index) => (
          <div 
            key={index} 
            className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:scale-105 fade-in p-6 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-50 to-transparent opacity-50 rounded-bl-full"></div>
            
            <div className="relative z-10">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${partner.color}-100 text-${partner.color}-600 mb-4 group-hover:bg-${partner.color} group-hover:text-${partner.color}-50 transition-all duration-300`}>
                <i className={`fas fa-${partner.icon} text-xl`}></i>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {partner.name}
              </h3>
              
              <p className={`text-${partner.color}-600 text-sm font-medium mb-3`}>
                {partner.projects}
              </p>
              
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <i className="fas fa-star text-amber-400 mr-1"></i>
                <i className="fas fa-star text-amber-400 mr-1"></i>
                <i className="fas fa-star text-amber-400 mr-1"></i>
                <i className="fas fa-star text-amber-400 mr-1"></i>
                <i className="fas fa-star text-amber-400 mr-1"></i>
                <span className="ml-2 text-gray-600">Rated 5.0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Trust Badge Footer */}
      <div className="mt-12 text-center fade-in">
        <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-gray-50 rounded-2xl px-8 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">100% On-Time Delivery</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Quality Certified</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Client Recommended</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrustedPartnersSection;