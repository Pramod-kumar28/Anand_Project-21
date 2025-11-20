import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProjectsSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-4 fade-in">Featured Projects</h2>
      <p className="text-base md:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
        A glimpse of our recent work that showcases our commitment to excellence
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 zoom-in">
        {[
          { 
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
            category: 'Commercial',
            categoryColor: 'amber',
            title: 'The Harmony Business Park',
            desc: 'A state-of-the-art commercial complex designed for productivity and well-being.'
          },
          { 
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
            category: 'Residential',
            categoryColor: 'blue',
            title: 'Greenwood Enclave',
            desc: 'A self-sufficient township offering a balanced lifestyle with modern amenities.'
          },
          { 
            image: 'https://images.unsplash.com/photo-1630061712710-2539eb457c55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
            category: 'Public Infrastructure',
            categoryColor: 'green',
            title: 'Community Health Center',
            desc: 'A modern healthcare facility serving the community with advanced medical services.'
          }
        ].map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover-lift">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className="p-6">
              <span className={`inline-block bg-${project.categoryColor}-100 text-${project.categoryColor}-800 text-sm font-medium px-3 py-1 rounded-full mb-3`}>
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <Link to="/projects" className="text-navy-blue font-semibold flex items-center">
                View Project <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 fade-in">
        <Link to="/projects" className="bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
          View All Projects
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedProjectsSection;