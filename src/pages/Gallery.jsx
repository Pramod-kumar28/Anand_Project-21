// import React, { useState } from 'react'
// import {useAnimation} from '../hooks/useAnimation'

// const Gallery = () => {
//   const [activeFilter, setActiveFilter] = useState('all')
//   const [selectedProject, setSelectedProject] = useState(null)
//   useAnimation()
  
//   const projects = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'residential',
//       categoryName: 'Residential',
//       title: 'Greenwood Enclave',
//       description: 'A self-sufficient township that offers a balanced lifestyle with parks, schools, and community centers built with timeless design.',
//       details: `
//         <p>Greenwood Enclave is a master-planned residential community spanning 50 acres, designed to provide residents with a holistic living experience. The project features:</p>
//         <ul class="list-disc ml-5 mt-3 space-y-2">
//           <li>Vastu-compliant residential units ranging from apartments to villas</li>
//           <li>Dedicated green spaces and parks covering 40% of the area</li>
//           <li>Modern amenities including clubhouse, swimming pool, and sports facilities</li>
//           <li>On-site educational and healthcare facilities</li>
//           <li>24/7 security and smart home features</li>
//         </ul>
//         <p>The project was completed in 2022 and now houses over 500 families in a harmonious, sustainable environment.</p>
//       `,
//       images: [
//         'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ]
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'commercial',
//       categoryName: 'Commercial',
//       title: 'The Harmony Business Park',
//       description: 'A state-of-the-art commercial complex designed for productivity and well-being, featuring Vastu-aligned offices and modern amenities.',
//       details: `
//         <p>The Harmony Business Park is a 20-story commercial complex located in the heart of the business district. This LEED-certified building offers:</p>
//         <ul class="list-disc ml-5 mt-3 space-y-2">
//           <li>Flexible office spaces from 500 sq. ft. to entire floors</li>
//           <li>Energy-efficient design with ample natural lighting</li>
//           <li>Vastu-compliant layout promoting positive energy flow</li>
//           <li>Premium amenities including conference facilities, food court, and fitness center</li>
//           <li>Underground parking for 500+ vehicles</li>
//         </ul>
//         <p>Since its completion in 2021, the business park has become home to over 50 companies ranging from startups to multinational corporations.</p>
//       `,
//       images: [
//         'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ]
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'industrial',
//       categoryName: 'Industrial',
//       title: 'LogiFast Hub',
//       description: 'A highly efficient and scalable warehousing solution, built with robust materials and precision planning to optimize operations.',
//       details: `
//         <p>LogiFast Hub represents our commitment to industrial excellence with state-of-the-art warehousing facilities designed for modern supply chain needs.</p>
//         <ul class="list-disc ml-5 mt-3 space-y-2">
//           <li>Modular design allowing for flexible space configuration</li>
//           <li>Advanced inventory management systems integration</li>
//           <li>Climate-controlled storage areas</li>
//           <li>Efficient loading dock design for rapid turnaround</li>
//           <li>Sustainable features including solar panels and rainwater harvesting</li>
//         </ul>
//         <p>The facility serves major logistics companies and has improved operational efficiency by 40% for our clients.</p>
//       `,
//       images: [
//         'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ]
//     },
//     {
//       id: 4,
//       image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'residential',
//       categoryName: 'Residential',
//       title: 'Riverside Towers',
//       description: 'Luxury high-rise apartments offering panoramic river views with premium amenities and sustainable design features.',
//       details: `
//         <p>Riverside Towers is a premium residential development comprising three 25-story towers overlooking the scenic riverfront. The project showcases:</p>
//         <ul class="list-disc ml-5 mt-3 space-y-2">
//           <li>Spacious 2-4 BHK apartments with river views</li>
//           <li>Double-height lobbies with premium finishes</li>
//           <li>Infinity pool, spa, and wellness center</li>
//           <li>Sky gardens and terraced landscaping</li>
//           <li>Smart home automation systems</li>
//           <li>EV charging stations and sustainable waste management</li>
//         </ul>
//         <p>Completed in 2023, Riverside Towers has set new benchmarks for luxury living in the region.</p>
//       `,
//       images: [
//         'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ]
//     },
//     {
//       id: 5,
//       image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'commercial',
//       categoryName: 'Commercial',
//       title: 'TechNova Corporate Campus',
//       description: 'A sprawling corporate campus designed for technology companies, featuring collaborative spaces and cutting-edge infrastructure.',
//       details: `
//         <p>TechNova Corporate Campus spans across 15 acres, specifically designed to foster innovation and collaboration among technology companies.</p>
//         <ul class="list-disc ml-5 mt-3 space-y-2">
//           <li>Multiple office buildings with flexible floor plates</li>
//           <li>Central innovation hub and R&D centers</li>
//           <li>Collaborative workspaces and breakout areas</li>
//           <li>Advanced IT infrastructure and fiber connectivity</li>
//           <li>Recreational facilities including sports complex and food courts</li>
//           <li>Dedicated power backup and security systems</li>
//         </ul>
//         <p>The campus currently hosts 12 technology companies and employs over 3,000 professionals.</p>
//       `,
//       images: [
//         'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ]
//     },
//     {
//       id: 6,
//       image: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
//       category: 'public',
//       categoryName: 'Public Infrastructure',
//       title: 'City Central Hospital',
//       description: 'A multi-specialty healthcare facility built to serve the community with advanced medical infrastructure and patient-centric design.',
//       details: `
//         <p>City Central Hospital is a 500-bed multi-specialty healthcare facility developed as part of the government's healthcare infrastructure initiative.</p>
//         <ul class="list-disc ml-5 mt-3 space-y-2">
//           <li>500-bed capacity with ICU and critical care units</li>
//           <li>Advanced diagnostic and surgical facilities</li>
//           <li>Modular operation theaters with HEPA filtration</li>
//           <li>Separate outpatient and inpatient wings</li>
//           <li>Emergency services with trauma center</li>
//           <li>Medical research and teaching facilities</li>
//           <li>Helipad for emergency air ambulance services</li>
//         </ul>
//         <p>The hospital serves over 1,000 patients daily and has significantly improved healthcare access in the region.</p>
//       `,
//       images: [
//         'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
//         'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600'
//       ]
//     },
//     {
//       id: 7,
//       image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'industrial',
//       categoryName: 'Industrial',
//       title: 'AutoParts Manufacturing Unit',
//       description: 'A specialized manufacturing facility designed for automotive components with precision engineering and quality control systems.',
//       details: `
//         <p>The AutoParts Manufacturing Unit is a state-of-the-art production facility spanning 100,000 sq. ft., designed for high-precision automotive component manufacturing.</p>
//         <ul class="list-disc ml-5 mt-3 space-y-2">
//           <li>Dedicated production lines for different components</li>
//           <li>Quality control laboratories and testing facilities</li>
//           <li>Raw material storage and finished goods warehouse</li>
//           <li>Employee amenities and training centers</li>
//           <li>Environmental compliance and waste treatment plant</li>
//           <li>Robotic automation in critical production processes</li>
//         </ul>
//         <p>The facility produces over 2 million components annually and exports to 15 countries worldwide.</p>
//       `,
//       images: [
//         'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ]
//     },
//     {
//       id: 8,
//       image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'public',
//       categoryName: 'Public Infrastructure',
//       title: 'Metro Rail Station Complex',
//       description: 'A modern transportation hub integrating metro rail services with commercial spaces and public amenities.',
//       details: `
//         <p>The Metro Rail Station Complex is a multi-modal transportation hub that serves as a key interchange station in the city's metro network.</p>
//         <ul class="list-disc ml-5 mt-3 space-y-2">
//           <li>Four-level station with platform and concourse areas</li>
//           <li>Integrated commercial complex with retail spaces</li>
//           <li>Multi-level parking for 800 vehicles</li>
//           <li>Bus terminal and taxi stand integration</li>
//           <li>Accessibility features for differently-abled passengers</li>
//           <li>Advanced security and surveillance systems</li>
//           <li>Green building certification with energy-efficient design</li>
//         </ul>
//         <p>The station handles over 100,000 commuters daily and has revolutionized public transportation in the city.</p>
//       `,
//       images: [
//         'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ]
//     },
//     {
//       id: 9,
//       image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//       category: 'commercial',
//       categoryName: 'Commercial',
//       title: 'Financial District Tower',
//       description: 'An iconic skyscraper in the financial district, featuring premium office spaces and banking facilities.',
//       details: `
//         <p>The Financial District Tower stands as a landmark 35-story skyscraper in the city's central business district, housing major financial institutions.</p>
//         <ul class="list-disc ml-5 mt-3 space-y-2">
//           <li>Premium Grade A office spaces</li>
//           <li>Dedicated banking hall and financial services floor</li>
//           <li>High-speed elevators and intelligent building management</li>
//           <li>Executive lounges and conference facilities</li>
//           <li>Advanced fire safety and security systems</li>
//           <li>Underground vaults and secure storage</li>
//           <li>Helipad on rooftop for executive transport</li>
//         </ul>
//         <p>The tower is home to 8 major banks and 20 financial services companies, making it the financial nerve center of the region.</p>
//       `,
//       images: [
//         'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//         'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
//       ]
//     }
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
//   }

//   const closeProjectModal = () => {
//     setSelectedProject(null)
//   }

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="gallery-hero bg-light-navy text-white py-24 md:py-32 sm:h-">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Portfolio of Excellence</h1>
//           <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
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
//                     project.category === 'public' ? 'blue' :
//                     project.category === 'commercial' ? 'amber' : 
//                     project.category === 'industrial' ? 'green' : 'purple'
                    
//                   }-100 text-${
//                     project.category === 'residential' ? 'blue' : 
//                     project.category === 'public' ? 'blue' :
//                     project.category === 'commercial' ? 'amber' : 
//                     project.category === 'industrial' ? 'green' : 'purple'
//                   }-800 text-sm font-medium px-3 py-1 rounded-full mb-3`}>
//                     {project.categoryName}
//                   </span>
//                   <h3 className="text-xl font-bold text-blue-800 mb-2">{project.title}</h3>
//                   <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
//                   <button 
//                     className="font-semibold flex items-center transition-colors duration-300 text-white navy-blue py-2 px-4 rounded-lg"
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

//       {/* Project Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-blue-800">{selectedProject.title}</h2>
//                 <button 
//                   className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
//                   onClick={closeProjectModal}
//                 >
//                   <i className="fas fa-times text-xl"></i>
//                 </button>
//               </div>
//               <div className="mb-4">
//                 <span className={`inline-block bg-${
//                   selectedProject.category === 'residential' ? 'blue' : 
//                   selectedProject.category === 'commercial' ? 'amber' : 
//                   selectedProject.category === 'industrial' ? 'green' : 'purple'
//                 }-100 text-${
//                   selectedProject.category === 'residential' ? 'blue' : 
//                   selectedProject.category === 'commercial' ? 'amber' : 
//                   selectedProject.category === 'industrial' ? 'green' : 'purple'
//                 }-800 text-sm font-medium px-3 py-1 rounded-full`}>
//                   {selectedProject.categoryName}
//                 </span>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                 {selectedProject.images.map((image, index) => (
//                   <div 
//                     key={index}
//                     className="h-64 bg-cover bg-center rounded-lg shadow-md" 
//                     style={{ backgroundImage: `url(${image})` }}
//                   ></div>
//                 ))}
//               </div>
//               <div 
//                 className="prose max-w-none text-gray-700"
//                 dangerouslySetInnerHTML={{ __html: selectedProject.details }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Gallery






















import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAnimation } from '../hooks/useAnimation'

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const filterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div>
      {/* Enhanced Hero Section */}
      <motion.section 
        className="relative py-20 md:py-22 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl mb-8"
          >
            <motion.h1
              className="text-2xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Vision, <span className="text-orange-300">Our Craftsmanship</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Transforming dreams into concrete reality with precision engineering and innovative design
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Introduction Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 mb-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-6">
                Building Tomorrow's Landmarks Today
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full mb-6"></div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                From visionary residential communities to cutting-edge industrial complexes and transformative public infrastructure, 
                each project in our portfolio represents our unwavering commitment to quality, innovation, and sustainable development.
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Explore four decades of construction excellence that has shaped skylines, empowered communities, 
                and set new benchmarks in architectural and engineering marvels across diverse sectors.
              </p>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { icon: '🏗️', title: 'Expert Craftsmanship', desc: 'Four decades of construction excellence' },
                { icon: '🌱', title: 'Sustainable Focus', desc: 'Eco-friendly and innovative designs' },
                { icon: '⚡', title: 'Timely Delivery', desc: 'Projects completed on schedule' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-bold text-blue-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Stats Bar - Updated */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-12 text-white shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: `${projects.length}+`, label: 'Featured Projects' },
                { number: '4', label: 'Specialized Sectors' },
                { number: '15+', label: 'Cities Covered' },
                { number: '40+', label: 'Years Excellence' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filters.map(filter => (
              <motion.button
                key={filter.key}
                className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 hover:shadow-md'
                }`}
                onClick={() => setActiveFilter(filter.key)}
                variants={filterVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift group border border-gray-100"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                layout
              >
                <motion.div 
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 relative overflow-hidden" 
                  style={{ backgroundImage: `url(${project.image})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <div className="p-6">
                  <span className={`inline-block bg-${
                    project.category === 'residential' ? 'blue' : 
                    project.category === 'public' ? 'blue' :
                    project.category === 'commercial' ? 'amber' : 
                    project.category === 'industrial' ? 'green' : 'purple'
                  }-100 text-${
                    project.category === 'residential' ? 'blue' : 
                    project.category === 'public' ? 'blue' :
                    project.category === 'commercial' ? 'amber' : 
                    project.category === 'industrial' ? 'green' : 'purple'
                  }-800 text-sm font-medium px-3 py-1 rounded-full mb-3`}>
                    {project.categoryName}
                  </span>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <motion.button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center transition-colors duration-300 py-2 px-4 rounded-lg w-full justify-center"
                    onClick={() => openProjectModal(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details 
                    <motion.i 
                      className="fas fa-arrow-right ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    ></motion.i>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          <AnimatePresence>
            {filteredProjects.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-search text-gray-400 text-6xl mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
                <p className="text-gray-500">Try selecting a different category to view more projects.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Start Your Infrastructure Project?
            </h2>
            <p className="text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Join numerous satisfied clients who have trusted Anand Infra with their construction needs. 
              Let's build your vision with our expertise and commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Schedule Free Consultation
              </Link>
              <Link 
                to="/projects" 
                className="border border-white text-white hover:bg-white hover:text-blue-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all duration-300 text-sm md:text-base"
              >
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-800">{selectedProject.title}</h2>
                  <motion.button 
                    className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    onClick={closeProjectModal}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-times text-xl"></i>
                  </motion.button>
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
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.images.map((image, index) => (
                    <motion.div 
                      key={index}
                      className="h-64 bg-cover bg-center rounded-lg shadow-md" 
                      style={{ backgroundImage: `url(${image})` }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  ))}
                </motion.div>
                <motion.div 
                  className="prose max-w-none text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  dangerouslySetInnerHTML={{ __html: selectedProject.details }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  )
}

export default Gallery