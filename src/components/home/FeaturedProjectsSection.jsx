import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedServicesSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-4 fade-in">Our Key Services</h2>
      <p className="text-base md:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
        A selection of our core infrastructure development services that showcase our expertise
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 zoom-in">
        {[
          { 
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
            icon: 'fas fa-building',
            category: 'Commercial Complexes',
            categoryColor: 'bg-amber-100 text-amber-800',
            title: 'Business & Office Spaces',
            desc: 'State-of-the-art commercial complexes designed for productivity and business success.',
            link: '/services'
          },
          { 
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
            icon: 'fas fa-home',
            category: 'Residential Townships',
            categoryColor: 'bg-blue-100 text-blue-800',
            title: 'Modern Living Communities',
            desc: 'Self-sufficient townships offering balanced lifestyle with parks, schools, and amenities.',
            link: '/services'
          },
          { 
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
            icon: 'fas fa-industry',
            category: 'Industrial Structures',
            categoryColor: 'bg-green-100 text-green-800',
            title: 'Manufacturing & Warehousing',
            desc: 'Robust industrial facilities built for optimal operations and maximum productivity.',
            link: '/services'
          }
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover-lift hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 bg-cover bg-center group" style={{ backgroundImage: `url(${service.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
            </div>
            <div className="p-6">
              <span className={`inline-block ${service.categoryColor} text-sm font-medium px-3 py-1 rounded-full mb-3`}>
                {service.category}
              </span>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <Link to={service.link} className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors duration-300">
                Learn More <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 fade-in">
        <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-md hover:shadow-lg">
          <i className="fas fa-list-alt mr-2"></i>
          View All Services
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedServicesSection;