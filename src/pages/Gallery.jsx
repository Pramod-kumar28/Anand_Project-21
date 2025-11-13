import React, { useState } from 'react'
import {useAnimation} from '../hooks/useAnimation'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  useAnimation()
  
  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      category: 'residential',
      categoryName: 'Residential',
      title: 'Greenwood Enclave',
      description: 'A self-sufficient township that offers a balanced lifestyle with parks, schools, and community centers built with timeless design.',
      details: `
        <p>Greenwood Enclave is a master-planned residential community spanning 50 acres, designed to provide residents with a holistic living experience. The project features:</p>
        <ul class="list-disc ml-5 mt-3 space-y-2">
          <li>Vastu-compliant residential units ranging from apartments to villas</li>
          <li>Dedicated green spaces and parks covering 40% of the area</li>
          <li>Modern amenities including clubhouse, swimming pool, and sports facilities</li>
          <li>On-site educational and healthcare facilities</li>
          <li>24/7 security and smart home features</li>
        </ul>
        <p>The project was completed in 2022 and now houses over 500 families in a harmonious, sustainable environment.</p>
      `,
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      category: 'commercial',
      categoryName: 'Commercial',
      title: 'The Harmony Business Park',
      description: 'A state-of-the-art commercial complex designed for productivity and well-being, featuring Vastu-aligned offices and modern amenities.',
      details: `
        <p>The Harmony Business Park is a 20-story commercial complex located in the heart of the business district. This LEED-certified building offers:</p>
        <ul class="list-disc ml-5 mt-3 space-y-2">
          <li>Flexible office spaces from 500 sq. ft. to entire floors</li>
          <li>Energy-efficient design with ample natural lighting</li>
          <li>Vastu-compliant layout promoting positive energy flow</li>
          <li>Premium amenities including conference facilities, food court, and fitness center</li>
          <li>Underground parking for 500+ vehicles</li>
        </ul>
        <p>Since its completion in 2021, the business park has become home to over 50 companies ranging from startups to multinational corporations.</p>
      `,
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      category: 'industrial',
      categoryName: 'Industrial',
      title: 'LogiFast Hub',
      description: 'A highly efficient and scalable warehousing solution, built with robust materials and precision planning to optimize operations.',
      details: `
        <p>LogiFast Hub represents our commitment to industrial excellence with state-of-the-art warehousing facilities designed for modern supply chain needs.</p>
        <ul class="list-disc ml-5 mt-3 space-y-2">
          <li>Modular design allowing for flexible space configuration</li>
          <li>Advanced inventory management systems integration</li>
          <li>Climate-controlled storage areas</li>
          <li>Efficient loading dock design for rapid turnaround</li>
          <li>Sustainable features including solar panels and rainwater harvesting</li>
        </ul>
        <p>The facility serves major logistics companies and has improved operational efficiency by 40% for our clients.</p>
      `,
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      category: 'residential',
      categoryName: 'Residential',
      title: 'Riverside Towers',
      description: 'Luxury high-rise apartments offering panoramic river views with premium amenities and sustainable design features.',
      details: `
        <p>Riverside Towers is a premium residential development comprising three 25-story towers overlooking the scenic riverfront. The project showcases:</p>
        <ul class="list-disc ml-5 mt-3 space-y-2">
          <li>Spacious 2-4 BHK apartments with river views</li>
          <li>Double-height lobbies with premium finishes</li>
          <li>Infinity pool, spa, and wellness center</li>
          <li>Sky gardens and terraced landscaping</li>
          <li>Smart home automation systems</li>
          <li>EV charging stations and sustainable waste management</li>
        </ul>
        <p>Completed in 2023, Riverside Towers has set new benchmarks for luxury living in the region.</p>
      `,
      images: [
        'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      category: 'commercial',
      categoryName: 'Commercial',
      title: 'TechNova Corporate Campus',
      description: 'A sprawling corporate campus designed for technology companies, featuring collaborative spaces and cutting-edge infrastructure.',
      details: `
        <p>TechNova Corporate Campus spans across 15 acres, specifically designed to foster innovation and collaboration among technology companies.</p>
        <ul class="list-disc ml-5 mt-3 space-y-2">
          <li>Multiple office buildings with flexible floor plates</li>
          <li>Central innovation hub and R&D centers</li>
          <li>Collaborative workspaces and breakout areas</li>
          <li>Advanced IT infrastructure and fiber connectivity</li>
          <li>Recreational facilities including sports complex and food courts</li>
          <li>Dedicated power backup and security systems</li>
        </ul>
        <p>The campus currently hosts 12 technology companies and employs over 3,000 professionals.</p>
      `,
      images: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      category: 'public',
      categoryName: 'Public Infrastructure',
      title: 'City Central Hospital',
      description: 'A multi-specialty healthcare facility built to serve the community with advanced medical infrastructure and patient-centric design.',
      details: `
        <p>City Central Hospital is a 500-bed multi-specialty healthcare facility developed as part of the government's healthcare infrastructure initiative.</p>
        <ul class="list-disc ml-5 mt-3 space-y-2">
          <li>500-bed capacity with ICU and critical care units</li>
          <li>Advanced diagnostic and surgical facilities</li>
          <li>Modular operation theaters with HEPA filtration</li>
          <li>Separate outpatient and inpatient wings</li>
          <li>Emergency services with trauma center</li>
          <li>Medical research and teaching facilities</li>
          <li>Helipad for emergency air ambulance services</li>
        </ul>
        <p>The hospital serves over 1,000 patients daily and has significantly improved healthcare access in the region.</p>
      `,
      images: [
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600'
      ]
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      category: 'industrial',
      categoryName: 'Industrial',
      title: 'AutoParts Manufacturing Unit',
      description: 'A specialized manufacturing facility designed for automotive components with precision engineering and quality control systems.',
      details: `
        <p>The AutoParts Manufacturing Unit is a state-of-the-art production facility spanning 100,000 sq. ft., designed for high-precision automotive component manufacturing.</p>
        <ul class="list-disc ml-5 mt-3 space-y-2">
          <li>Dedicated production lines for different components</li>
          <li>Quality control laboratories and testing facilities</li>
          <li>Raw material storage and finished goods warehouse</li>
          <li>Employee amenities and training centers</li>
          <li>Environmental compliance and waste treatment plant</li>
          <li>Robotic automation in critical production processes</li>
        </ul>
        <p>The facility produces over 2 million components annually and exports to 15 countries worldwide.</p>
      `,
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      category: 'public',
      categoryName: 'Public Infrastructure',
      title: 'Metro Rail Station Complex',
      description: 'A modern transportation hub integrating metro rail services with commercial spaces and public amenities.',
      details: `
        <p>The Metro Rail Station Complex is a multi-modal transportation hub that serves as a key interchange station in the city's metro network.</p>
        <ul class="list-disc ml-5 mt-3 space-y-2">
          <li>Four-level station with platform and concourse areas</li>
          <li>Integrated commercial complex with retail spaces</li>
          <li>Multi-level parking for 800 vehicles</li>
          <li>Bus terminal and taxi stand integration</li>
          <li>Accessibility features for differently-abled passengers</li>
          <li>Advanced security and surveillance systems</li>
          <li>Green building certification with energy-efficient design</li>
        </ul>
        <p>The station handles over 100,000 commuters daily and has revolutionized public transportation in the city.</p>
      `,
      images: [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
      ]
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      category: 'commercial',
      categoryName: 'Commercial',
      title: 'Financial District Tower',
      description: 'An iconic skyscraper in the financial district, featuring premium office spaces and banking facilities.',
      details: `
        <p>The Financial District Tower stands as a landmark 35-story skyscraper in the city's central business district, housing major financial institutions.</p>
        <ul class="list-disc ml-5 mt-3 space-y-2">
          <li>Premium Grade A office spaces</li>
          <li>Dedicated banking hall and financial services floor</li>
          <li>High-speed elevators and intelligent building management</li>
          <li>Executive lounges and conference facilities</li>
          <li>Advanced fire safety and security systems</li>
          <li>Underground vaults and secure storage</li>
          <li>Helipad on rooftop for executive transport</li>
        </ul>
        <p>The tower is home to 8 major banks and 20 financial services companies, making it the financial nerve center of the region.</p>
      `,
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
      ]
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'public', label: 'Public Infrastructure' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="gallery-hero bg-light-navy text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio of Excellence</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Discover how we transform visions into enduring structures across diverse sectors
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              From residential communities to industrial complexes and public infrastructure, each project reflects our commitment to quality, innovation, and sustainable development. Explore our diverse portfolio that showcases four decades of construction excellence.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-navy-blue">{projects.length}+</div>
                <div className="text-gray-600">Featured Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-navy-blue">4</div>
                <div className="text-gray-600">Sectors</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-navy-blue">15+</div>
                <div className="text-gray-600">Cities</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-navy-blue">40+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-navy-blue text-white shadow-lg'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:shadow-md'
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift group">
                <div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="p-6">
                  <span className={`inline-block bg-${
                    project.category === 'residential' ? 'blue' : 
                    project.category === 'commercial' ? 'amber' : 
                    project.category === 'industrial' ? 'green' : 'purple'
                  }-100 text-${
                    project.category === 'residential' ? 'blue' : 
                    project.category === 'commercial' ? 'amber' : 
                    project.category === 'industrial' ? 'green' : 'purple'
                  }-800 text-sm font-medium px-3 py-1 rounded-full mb-3`}>
                    {project.categoryName}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <button 
                    className="text-navy-blue font-semibold hover:underline flex items-center group-hover:text-blue-700 transition-colors duration-300"
                    onClick={() => openProjectModal(project)}
                  >
                    View Details <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-gray-400 text-6xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category to view more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
                <button 
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  onClick={closeProjectModal}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="mb-4">
                <span className={`inline-block bg-${
                  selectedProject.category === 'residential' ? 'blue' : 
                  selectedProject.category === 'commercial' ? 'amber' : 
                  selectedProject.category === 'industrial' ? 'green' : 'purple'
                }-100 text-${
                  selectedProject.category === 'residential' ? 'blue' : 
                  selectedProject.category === 'commercial' ? 'amber' : 
                  selectedProject.category === 'industrial' ? 'green' : 'purple'
                }-800 text-sm font-medium px-3 py-1 rounded-full`}>
                  {selectedProject.categoryName}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedProject.images.map((image, index) => (
                  <div 
                    key={index}
                    className="h-64 bg-cover bg-center rounded-lg shadow-md" 
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                ))}
              </div>
              <div 
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: selectedProject.details }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery



















// import React, { useState } from 'react'
// import {useAnimation} from '../hooks/useAnimation'

// const Gallery = () => {
//   const [activeFilter, setActiveFilter] = useState('all')
//   const [selectedProject, setSelectedProject] = useState(null)
//   const [activeTab, setActiveTab] = useState('overview')
//   useAnimation()
  
//   const projects = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'residential',
//       categoryName: 'Residential',
//       title: 'Greenwood Enclave',
//       description: 'A self-sufficient township that offers a balanced lifestyle with parks, schools, and community centers built with timeless design.',
//       details: {
//         overview: `
//           <p>Greenwood Enclave is a master-planned residential community spanning 50 acres, designed to provide residents with a holistic living experience. The project features:</p>
//           <ul class="list-disc ml-5 mt-3 space-y-2">
//             <li>Vastu-compliant residential units ranging from apartments to villas</li>
//             <li>Dedicated green spaces and parks covering 40% of the area</li>
//             <li>Modern amenities including clubhouse, swimming pool, and sports facilities</li>
//             <li>On-site educational and healthcare facilities</li>
//             <li>24/7 security and smart home features</li>
//           </ul>
//           <p>The project was completed in 2022 and now houses over 500 families in a harmonious, sustainable environment.</p>
//         `,
//         amenities: [
//           'Swimming Pool & Kids Pool',
//           'Clubhouse with Gym & Spa',
//           'Tennis & Basketball Courts',
//           'Jogging & Cycling Tracks',
//           'Children\'s Play Area',
//           'Meditation & Yoga Center',
//           'Community Hall',
//           '24/7 Security & CCTV',
//           'Power Backup',
//           'Rainwater Harvesting'
//         ],
//         surroundings: [
//           'International School - 0.5 km',
//           'Supermarket - 1.2 km',
//           'Hospital - 2 km',
//           'Shopping Mall - 3 km',
//           'Metro Station - 1.5 km',
//           'Park - Adjacent',
//           'Bank & ATM - 0.8 km'
//         ],
//         features: [
//           'Earthquake-resistant structure',
//           'Solar water heating',
//           'Smart home automation',
//           'Waste management system',
//           'Landscaped gardens',
//           'Adequate ventilation',
//           'Premium flooring',
//           'Modular kitchens'
//         ]
//       },
//       images: [
//         'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ],
//       specs: {
//         area: '50 Acres',
//         units: '500+',
//         status: 'Completed (2022)',
//         parking: '2-3 cars per unit'
//       }
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'commercial',
//       categoryName: 'Commercial',
//       title: 'The Harmony Business Park',
//       description: 'A state-of-the-art commercial complex designed for productivity and well-being, featuring Vastu-aligned offices and modern amenities.',
//       details: {
//         overview: `
//           <p>The Harmony Business Park is a 20-story commercial complex located in the heart of the business district. This LEED-certified building offers:</p>
//           <ul class="list-disc ml-5 mt-3 space-y-2">
//             <li>Flexible office spaces from 500 sq. ft. to entire floors</li>
//             <li>Energy-efficient design with ample natural lighting</li>
//             <li>Vastu-compliant layout promoting positive energy flow</li>
//             <li>Premium amenities including conference facilities, food court, and fitness center</li>
//             <li>Underground parking for 500+ vehicles</li>
//           </ul>
//           <p>Since its completion in 2021, the business park has become home to over 50 companies ranging from startups to multinational corporations.</p>
//         `,
//         amenities: [
//           'High-speed Elevators',
//           'Central Air Conditioning',
//           'Fiber Optic Connectivity',
//           'Conference Rooms',
//           'Cafeteria & Food Court',
//           'Fitness Center',
//           'Visitor Parking',
//           '24/7 Security',
//           'Power Backup',
//           'Fire Safety Systems'
//         ],
//         surroundings: [
//           'Business District - Central',
//           'Airport - 15 km',
//           'Hotel - 0.5 km',
//           'Restaurants - Walking distance',
//           'Bank - Adjacent',
//           'Public Transport - 200m',
//           'Shopping Center - 1 km'
//         ],
//         features: [
//           'LEED Platinum Certified',
//           'Double-glazed windows',
//           'Intelligent building management',
//           'Energy-efficient lighting',
//           'Water conservation systems',
//           'Advanced security systems',
//           'Dedicated server rooms',
//           'Modular office spaces'
//         ]
//       },
//       images: [
//         'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ],
//       specs: {
//         area: '5 Acres',
//         floors: '20',
//         status: 'Completed (2021)',
//         parking: '500+ cars'
//       }
//     },
//     // Add similar enhanced details for other projects...
//   ]

//   const filters = [
//     { key: 'all', label: 'All Projects' },
//     { key: 'residential', label: 'Residential' },
//     { key: 'commercial', label: 'Commercial' },
//     { key: 'industrial', label: 'Industrial' },
//     { key: 'public', label: 'Public Infrastructure' }
//   ]

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter)

//   const openProjectModal = (project) => {
//     setSelectedProject(project)
//     setActiveTab('overview')
//   }

//   const closeProjectModal = () => {
//     setSelectedProject(null)
//     setActiveTab('overview')
//   }

//   const renderTabContent = () => {
//     if (!selectedProject) return null

//     switch (activeTab) {
//       case 'overview':
//         return (
//           <div className="space-y-6">
//             <div 
//               className="prose max-w-none text-gray-700"
//               dangerouslySetInnerHTML={{ __html: selectedProject.details.overview }}
//             ></div>
            
//             {/* Specifications */}
//             <div className="bg-gray-50 rounded-lg p-6">
//               <h4 className="text-lg font-semibold mb-4 text-gray-800">Project Specifications</h4>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {Object.entries(selectedProject.specs).map(([key, value]) => (
//                   <div key={key} className="text-center">
//                     <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
//                     <div className="font-semibold text-gray-800">{value}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )
      
//       case 'amenities':
//         return (
//           <div className="space-y-6">
//             <h4 className="text-lg font-semibold text-gray-800">Amenities & Facilities</h4>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {selectedProject.details.amenities.map((amenity, index) => (
//                 <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                   <i className="fas fa-check text-green-500"></i>
//                   <span className="text-gray-700">{amenity}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )
      
//       case 'surroundings':
//         return (
//           <div className="space-y-6">
//             <h4 className="text-lg font-semibold text-gray-800">Neighborhood & Connectivity</h4>
//             <div className="space-y-4">
//               {selectedProject.details.surroundings.map((place, index) => (
//                 <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <i className="fas fa-map-marker-alt text-red-500"></i>
//                     <span className="text-gray-700">{place.split(' - ')[0]}</span>
//                   </div>
//                   <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
//                     {place.split(' - ')[1]}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )
      
//       case 'features':
//         return (
//           <div className="space-y-6">
//             <h4 className="text-lg font-semibold text-gray-800">Key Features</h4>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {selectedProject.details.features.map((feature, index) => (
//                 <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
//                   <i className="fas fa-star text-yellow-500"></i>
//                   <span className="text-gray-700">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )
      
//       default:
//         return null
//     }
//   }

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="gallery-hero bg-light-navy text-white py-24 md:py-32">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio of Excellence</h1>
//           <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
//             Discover how we transform visions into enduring structures across diverse sectors
//           </p>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <p className="text-lg text-gray-600 max-w-4xl mx-auto">
//               From residential communities to industrial complexes and public infrastructure, each project reflects our commitment to quality, innovation, and sustainable development. Explore our diverse portfolio that showcases four decades of construction excellence.
//             </p>
//           </div>

//           {/* Stats Bar */}
//           <div className="bg-gray-50 rounded-xl p-6 mb-12">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//               <div>
//                 <div className="text-2xl md:text-3xl font-bold text-navy-blue">{projects.length}+</div>
//                 <div className="text-gray-600">Featured Projects</div>
//               </div>
//               <div>
//                 <div className="text-2xl md:text-3xl font-bold text-navy-blue">4</div>
//                 <div className="text-gray-600">Sectors</div>
//               </div>
//               <div>
//                 <div className="text-2xl md:text-3xl font-bold text-navy-blue">15+</div>
//                 <div className="text-gray-600">Cities</div>
//               </div>
//               <div>
//                 <div className="text-2xl md:text-3xl font-bold text-navy-blue">40+</div>
//                 <div className="text-gray-600">Years Experience</div>
//               </div>
//             </div>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {filters.map(filter => (
//               <button
//                 key={filter.key}
//                 className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
//                   activeFilter === filter.key
//                     ? 'bg-navy-blue text-white shadow-lg'
//                     : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:shadow-md'
//                 }`}
//                 onClick={() => setActiveFilter(filter.key)}
//               >
//                 {filter.label}
//               </button>
//             ))}
//           </div>

//           {/* Gallery Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map(project => (
//               <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift group">
//                 <div 
//                   className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
//                   style={{ backgroundImage: `url(${project.image})` }}
//                 ></div>
//                 <div className="p-6">
//                   <span className={`inline-block bg-${
//                     project.category === 'residential' ? 'blue' : 
//                     project.category === 'commercial' ? 'amber' : 
//                     project.category === 'industrial' ? 'green' : 'purple'
//                   }-100 text-${
//                     project.category === 'residential' ? 'blue' : 
//                     project.category === 'commercial' ? 'amber' : 
//                     project.category === 'industrial' ? 'green' : 'purple'
//                   }-800 text-sm font-medium px-3 py-1 rounded-full mb-3`}>
//                     {project.categoryName}
//                   </span>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
//                   <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
//                   <button 
//                     className="text-navy-blue font-semibold hover:underline flex items-center group-hover:text-blue-700 transition-colors duration-300"
//                     onClick={() => openProjectModal(project)}
//                   >
//                     View Details <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Empty State */}
//           {filteredProjects.length === 0 && (
//             <div className="text-center py-12">
//               <i className="fas fa-search text-gray-400 text-6xl mb-4"></i>
//               <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
//               <p className="text-gray-500">Try selecting a different category to view more projects.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Enhanced Project Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               {/* Header */}
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
//                   <div className="flex items-center space-x-4 mt-2">
//                     <span className={`inline-block bg-${
//                       selectedProject.category === 'residential' ? 'blue' : 
//                       selectedProject.category === 'commercial' ? 'amber' : 
//                       selectedProject.category === 'industrial' ? 'green' : 'purple'
//                     }-100 text-${
//                       selectedProject.category === 'residential' ? 'blue' : 
//                       selectedProject.category === 'commercial' ? 'amber' : 
//                       selectedProject.category === 'industrial' ? 'green' : 'purple'
//                     }-800 text-sm font-medium px-3 py-1 rounded-full`}>
//                       {selectedProject.categoryName}
//                     </span>
//                     <span className="text-sm text-gray-500">
//                       <i className="fas fa-calendar-alt mr-1"></i>
//                       {selectedProject.specs.status}
//                     </span>
//                   </div>
//                 </div>
//                 <button 
//                   className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
//                   onClick={closeProjectModal}
//                 >
//                   <i className="fas fa-times text-xl"></i>
//                 </button>
//               </div>

//               {/* Image Gallery */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                 {selectedProject.images.map((image, index) => (
//                   <div 
//                     key={index}
//                     className="h-64 bg-cover bg-center rounded-lg shadow-md" 
//                     style={{ backgroundImage: `url(${image})` }}
//                   ></div>
//                 ))}
//               </div>

//               {/* Navigation Tabs */}
//               <div className="border-b border-gray-200 mb-6">
//                 <nav className="flex space-x-8">
//                   {['overview', 'amenities', 'surroundings', 'features'].map((tab) => (
//                     <button
//                       key={tab}
//                       className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-300 ${
//                         activeTab === tab
//                           ? 'border-navy-blue text-navy-blue'
//                           : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                       }`}
//                       onClick={() => setActiveTab(tab)}
//                     >
//                       {tab === 'surroundings' ? 'Location' : tab}
//                     </button>
//                   ))}
//                 </nav>
//               </div>

//               {/* Tab Content */}
//               <div className="min-h-[300px]">
//                 {renderTabContent()}
//               </div>

//               {/* Call to Action */}
//               <div className="mt-8 pt-6 border-t border-gray-200">
//                 <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
//                   <div className="text-gray-600">
//                     <i className="fas fa-info-circle mr-2"></i>
//                     Interested in this project? Contact us for more details.
//                   </div>
//                   <div className="flex space-x-3">
//                     <button className="bg-navy-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
//                       <i className="fas fa-download mr-2"></i>
//                       Download Brochure
//                     </button>
//                     <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
//                       <i className="fas fa-phone mr-2"></i>
//                       Contact Sales
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Gallery