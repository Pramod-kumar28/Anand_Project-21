// // import React, { useState, useEffect, useRef } from 'react';
// // import { Link } from 'react-router-dom';

// // const Home = () => {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const slideIntervalRef = useRef(null);

// //   const slides = [
// //     {
// //       id: 1,
// //       background: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
// //       title: 'Building Legacies',
// //       subtitle: 'Creating timeless infrastructure that stands strong for generations to come',
// //       buttons: [
// //         { text: 'Our Projects', link: '/gallery', type: 'primary' },
// //         { text: 'Get In Touch', link: '/contact', type: 'secondary' }
// //       ]
// //     },
// //     {
// //       id: 2,
// //       background: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
// //       title: 'Precision Engineering',
// //       subtitle: 'Scientific planning meets Vastu-aligned design for harmonious spaces',
// //       buttons: [
// //         { text: 'Our Process', link: '/about', type: 'primary' },
// //         { text: 'View Portfolio', link: '/gallery', type: 'secondary' }
// //       ]
// //     },
// //     {
// //       id: 3,
// //       background: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
// //       title: 'Future-Ready Infrastructure',
// //       subtitle: 'Building sustainable communities that thrive for generations',
// //       buttons: [
// //         { text: 'Start a Project', link: '/contact', type: 'primary' },
// //         { text: 'Learn More', link: '/about', type: 'secondary' }
// //       ]
// //     }
// //   ];

// //   // Hero slider functionality
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 5000);
    
// //     slideIntervalRef.current = interval;
    
// //     return () => clearInterval(interval);
// //   }, [slides.length]);

// //   const goToSlide = (index) => {
// //     clearInterval(slideIntervalRef.current);
// //     setCurrentSlide(index);
    
// //     // Restart interval
// //     slideIntervalRef.current = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 5000);
// //   };

// //   // Counter animation
// //   useEffect(() => {
// //     const animateCounters = () => {
// //       const counters = document.querySelectorAll('.counter');
// //       counters.forEach(counter => {
// //         const target = parseInt(counter.getAttribute('data-count'));
// //         const suffix = counter.textContent.includes('Million') ? 'M+' : '+';
// //         let count = 0;
// //         const duration = 2000;
// //         const increment = target / (duration / 16);
        
// //         const updateCount = () => {
// //           if (count < target) {
// //             count += increment;
// //             counter.textContent = Math.floor(count) + (suffix && count >= target ? suffix : '');
// //             setTimeout(updateCount, 16);
// //           } else {
// //             counter.textContent = target + (suffix ? suffix : '');
// //           }
// //         };
        
// //         updateCount();
// //       });
// //     };

// //     // Fade in on scroll
// //     const checkFadeIn = () => {
// //       const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
// //       fadeElements.forEach(element => {
// //         const elementTop = element.getBoundingClientRect().top;
// //         const elementVisible = 150;
        
// //         if (elementTop < window.innerHeight - elementVisible) {
// //           element.classList.add('visible');
// //         }
// //       });
// //     };

// //     // Initialize animations
// //     animateCounters();
// //     checkFadeIn();
// //     window.addEventListener('scroll', checkFadeIn);

// //     return () => {
// //       window.removeEventListener('scroll', checkFadeIn);
// //     };
// //   }, []);

// //   return (
// //     <div className="App">
      
// //       {/* Hero Slider */}
// //       <HeroSlider 
// //         slides={slides} 
// //         currentSlide={currentSlide} 
// //         goToSlide={goToSlide} 
// //       />
      
// //       {/* Introduction Section */}
// //       <IntroductionSection />
      
      
      
// //       {/* Our Values Section */}
// //       <ValuesSection />
      
// //       {/* Our Promise Section */}
// //       <PromiseSection />
      
// //       {/* Project Timeline Section */}
// //       <TimelineSection />
      
// //       {/* Featured Projects Section */}
// //       <FeaturedProjectsSection />

// //       <StatsSection />
      
// //       {/* Sustainability Section */}
// //       <SustainabilitySection />
      
// //       {/* Parallax Section */}
// //       <ParallaxSection />
      
// //       {/* Testimonials Section */}
// //       <TestimonialsSection />
      
// //       {/* CTA Section */}
// //       <CTASection />
      
// //     </div>
// //   );
// // };

// // // Header Component


// // // Hero Slider Component
// // const HeroSlider = ({ slides, currentSlide, goToSlide }) => (
// //   <section className="hero-slider">
// //     {slides.map((slide, index) => (
// //       <div 
// //         key={slide.id}
// //         className={`slide ${index === currentSlide ? 'active' : ''}`}
// //         style={{ backgroundImage: `url(${slide.background})` }}
// //       >
// //         <div className="slide-content">
// //           <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">{slide.title}</h1>
// //           <p className="text-xl md:text-2xl mb-10 fade-in">{slide.subtitle}</p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             {slide.buttons.map((button, btnIndex) => (
// //               <Link 
// //                 key={btnIndex}
// //                 to={button.link}
// //                 className={`${
// //                   button.type === 'primary' 
// //                     ? 'bg-amber-500 hover:bg-amber-600 text-white' 
// //                     : 'bg-transparent border-2 border-white hover:bg-white hover:text-navy-blue text-white'
// //                 } font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 fade-in`}
// //               >
// //                 {button.text}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     ))}
    
// //     {/* Slide Indicators */}
// //     <div className="slide-indicators">
// //       {slides.map((_, index) => (
// //         <div 
// //           key={index}
// //           className={`indicator ${index === currentSlide ? 'active' : ''}`}
// //           onClick={() => goToSlide(index)}
// //         ></div>
// //       ))}
// //     </div>
// //   </section>
// // );

// // // Introduction Section Component
// // const IntroductionSection = () => (
// //   <section className="py-16 bg-white">
// //     <div className="container mx-auto px-4">
// //       <div className="max-w-3xl mx-auto text-center mb-12">
// //         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 fade-in">Welcome to Anand Infra</h2>
// //         <p className="text-lg text-gray-600 fade-in">
// //           We are dedicated creators of enduring infrastructure, blending scientific planning with timeless design. 
// //           From visionary townships to robust industrial complexes, we build with a commitment to quality, harmony, and a future-ready approach.
// //         </p>
// //       </div>
      
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
// //         {[
// //           { icon: 'city', title: 'Commercial Complexes', desc: 'Dynamic spaces for business to thrive.' },
// //           { icon: 'home', title: 'Residential Townships', desc: 'Creating communities, not just houses.' },
// //           { icon: 'industry', title: 'Industrial & Warehousing', desc: 'Engineered for efficiency and scale.' },
// //           { icon: 'school', title: 'Public Infrastructure', desc: 'Building the foundations of society.' }
// //         ].map((item, index) => (
// //           <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 text-center hover-lift">
// //             <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 floating">
// //               <i className={`fas fa-${item.icon} text-amber-600 text-2xl`}></i>
// //             </div>
// //             <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
// //             <p className="text-gray-600">{item.desc}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Stats Section Component
// // const StatsSection = () => (
// //   <section className="py-16 navy-blue text-white">
// //     <div className="container mx-auto px-4">
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
// //         {[
// //           { count: 40, label: 'Years of Trust' },
// //           { count: 250, label: 'Projects Completed' },
// //           { count: 10, label: 'Million+ Sq. Ft. Developed' },
// //           { count: 98, label: 'Client Satisfaction' }
// //         ].map((stat, index) => (
// //           <div key={index} className="p-4">
// //             <div className="text-4xl md:text-5xl font-bold mb-2 counter" data-count={stat.count}>0</div>
// //             <div className="text-lg">{stat.label}</div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Values Section Component
// // const ValuesSection = () => (
// //   <section className="py-16 bg-white">
// //     <div className="container mx-auto px-4">
// //       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">Our Core Values</h2>
// //       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
// //         The principles that guide every project we undertake
// //       </p>
      
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {[
// //           { icon: 'handshake', title: 'Integrity', desc: 'We believe in transparent communication and ethical practices in all our dealings, building trust that lasts generations.' },
// //           { icon: 'star', title: 'Excellence', desc: 'From material selection to final finishing, we never compromise on quality, ensuring every project exceeds expectations.' },
// //           { icon: 'users', title: 'Community Focus', desc: 'We build not just structures, but communities that thrive, creating spaces that bring people together.' }
// //         ].map((value, index) => (
// //           <div key={index} className="value-card bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
// //             <div className="bg-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 pulse-slow">
// //               <i className={`fas fa-${value.icon} text-white text-3xl`}></i>
// //             </div>
// //             <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
// //             <p className="text-gray-600 text-justify ">{value.desc}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Promise Section Component
// // const PromiseSection = () => (
// //   <section className="py-16 bg-gray-50">
// //     <div className="container mx-auto px-4">
// //       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 fade-in">The Anand Infra Difference</h2>
      
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //         {[
// //           { icon: 'flask', title: 'Scientific Planning', desc: 'Data-driven and technologically advanced project execution for optimal efficiency and sustainability.' },
// //           { icon: 'award', title: 'Uncompromising Quality', desc: 'Rigorous, multi-stage quality control protocols that leave no room for error.' },
// //           { icon: 'yin-yang', title: 'Vastu-Aligned Design', desc: 'Harmonious layouts that promote balance, prosperity, and well-being for occupants.' },
// //           { icon: 'eye', title: 'Future-Ready Vision', desc: 'Building not just for today, but for the generations to come with timeless designs.' }
// //         ].map((item, index) => (
// //           <div key={index} className="flex fade-in">
// //             <div className="bg-amber-100 p-4 rounded-full h-14 w-14 flex items-center justify-center mr-6 flex-shrink-0">
// //               <i className={`fas fa-${item.icon} text-amber-600 text-xl`}></i>
// //             </div>
// //             <div>
// //               <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
// //               <p className="text-gray-600">{item.desc}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Timeline Section Component
// // const TimelineSection = () => (
// //   <section className="py-16 bg-white">
// //     <div className="container mx-auto px-4">
// //       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">Our Project Journey</h2>
// //       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
// //         From concept to completion, we follow a meticulous process
// //       </p>
      
// //       <div className="max-w-4xl mx-auto">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           <div className="space-y-8">
// //             {[
// //               { title: 'Consultation & Planning', desc: 'We begin by understanding your vision, requirements, and conducting detailed site analysis to create a comprehensive project plan.' },
// //               { title: 'Design & Engineering', desc: 'Our architects and engineers create detailed designs that blend aesthetic appeal with structural integrity and Vastu principles.' },
// //               { title: 'Approvals & Permits', desc: 'We handle all necessary regulatory approvals and permits, ensuring compliance with local building codes and regulations.' }
// //             ].map((item, index) => (
// //               <div key={index} className="timeline-item fade-in">
// //                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
// //                 <p className="text-gray-600">{item.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="space-y-8">
// //             {[
// //               { title: 'Construction', desc: 'Using premium materials and advanced techniques, our skilled workforce brings the design to life with precision and care.' },
// //               { title: 'Quality Assurance', desc: 'Multiple quality checks at every stage ensure that the final construction meets our exacting standards and your expectations.' },
// //               { title: 'Handover & Support', desc: 'We deliver your completed project with comprehensive documentation and provide ongoing support for maintenance.' }
// //             ].map((item, index) => (
// //               <div key={index} className="timeline-item fade-in">
// //                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
// //                 <p className="text-gray-600">{item.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Featured Projects Component
// // const FeaturedProjectsSection = () => (
// //   <section className="py-16 bg-gray-50">
// //     <div className="container mx-auto px-4">
// //       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">Featured Projects</h2>
// //       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
// //         A glimpse of our recent work that showcases our commitment to excellence
// //       </p>
      
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {[
// //           { 
// //             image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
// //             category: 'Commercial',
// //             categoryColor: 'amber',
// //             title: 'The Harmony Business Park',
// //             desc: 'A state-of-the-art commercial complex designed for productivity and well-being.'
// //           },
// //           { 
// //             image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
// //             category: 'Residential',
// //             categoryColor: 'blue',
// //             title: 'Greenwood Enclave',
// //             desc: 'A self-sufficient township offering a balanced lifestyle with modern amenities.'
// //           },
// //           { 
// //             image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
// //             category: 'Industrial',
// //             categoryColor: 'green',
// //             title: 'LogiFast Hub',
// //             desc: 'A highly efficient warehousing solution built with precision planning.'
// //           }
// //         ].map((project, index) => (
// //           <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover-lift">
// //             <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
// //             <div className="p-6">
// //               <span className={`inline-block bg-${project.categoryColor}-100 text-${project.categoryColor}-800 text-sm font-medium px-3 py-1 rounded-full mb-3`}>
// //                 {project.category}
// //               </span>
// //               <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
// //               <p className="text-gray-600 mb-4">{project.desc}</p>
// //               <Link to="/gallery" className="text-navy-blue font-semibold hover:underline flex items-center">
// //                 View Project <i className="fas fa-arrow-right ml-2"></i>
// //               </Link>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
      
// //       <div className="text-center mt-12">
// //         <Link to="/gallery" className=" hover:bg-blue-800 text-black hover:text-white text-lg font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
// //           View All Projects
// //         </Link>
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Sustainability Section Component
// // const SustainabilitySection = () => (
// //   <section className="py-16 bg-white">
// //     <div className="container mx-auto px-4">
// //       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">Sustainable Development</h2>
// //       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
// //         Building responsibly for a better tomorrow
// //       </p>
      
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
// //         <div className="fade-in">
// //           <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment to Nature</h3>
// //           <p className="text-gray-600 mb-6">
// //             At Anand Infra, we believe that true legacy extends beyond structures to the impact we have on our environment and communities. 
// //             We focus on integrating greenery and natural elements into our projects to protect and preserve nature.
// //           </p>
          
// //           <div className="space-y-4">
// //             {[
// //               { icon: 'leaf', title: 'Green Building Integration', desc: 'We prioritize incorporating green spaces, vertical gardens, and natural elements into our designs' },
// //               { icon: 'tree', title: 'Preservation of Natural Landscape', desc: 'Our projects are designed to work with the natural topography, preserving existing trees and green cover' },
// //               { icon: 'recycle', title: 'Eco-Friendly Materials', desc: 'We use sustainable, locally-sourced materials and implement waste management systems' }
// //             ].map((item, index) => (
// //               <div key={index} className="flex items-start">
// //                 <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
// //                   <i className={`fas fa-${item.icon} text-white text-sm`}></i>
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-gray-800">{item.title}</h4>
// //                   <p className="text-gray-600">{item.desc}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
        
// //         <div className="fade-in">
// //           <div className="bg-gray-100 rounded-xl p-8 h-full flex items-center justify-center">
// //             <div className="text-center">
// //               <div className="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 pulse-slow">
// //                 <i className="fas fa-seedling text-white text-4xl"></i>
// //               </div>
// //               <h3 className="text-2xl font-bold text-gray-800 mb-4">Nature-Inspired Design</h3>
// //               <p className="text-gray-600">
// //                 Our projects incorporate extensive greenery, natural ventilation, and daylight optimization to create healthier living environments while reducing environmental impact.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Parallax Section Component
// // const ParallaxSection = () => (
// //   <section className="py-24 parallax-section text-white" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)' }}>
// //     <div className="container mx-auto px-4 text-center">
// //       <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">Building for Future Generations</h2>
// //       <p className="text-xl mb-10 max-w-2xl mx-auto fade-in">
// //         Our commitment extends beyond construction to creating sustainable, enduring infrastructure that serves communities for decades to come.
// //       </p>
// //       <Link to="about.html" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
// //         Learn More About Our Vision
// //       </Link>
// //     </div>
// //   </section>
// // );

// // // Testimonials Section Component
// // const TestimonialsSection = () => (
// //   <section className="py-16 bg-gray-50">
// //     <div className="container mx-auto px-4">
// //       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">What Our Clients Say</h2>
// //       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
// //         Hear from those who have experienced the Anand Infra difference firsthand.
// //       </p>
      
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {[
// //           { 
// //             quote: '"Living in an Anand Infra home is different. There\'s a palpable sense of peace and solidity. They truly delivered on their promise of quality and Vastu."',
// //             name: 'Mr. & Mrs. Iyer',
// //             position: 'Greenwood Enclave Residents'
// //           },
// //           { 
// //             quote: '"Our corporate office by Anand Infra has been a catalyst for our growth. The design is both innovative and timeless, impressing every client who walks in."',
// //             name: 'CEO, TechNova Solutions',
// //             position: 'Harmony Business Park Tenant'
// //           },
// //           { 
// //             quote: '"The warehouse they built for us is a masterpiece of efficiency. The precision in planning has saved us countless hours and resources in our daily operations."',
// //             name: 'Director, LogiFast Supply Chain',
// //             position: 'LogiFast Hub Client'
// //           }
// //         ].map((testimonial, index) => (
// //           <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover-lift">
// //             <div className="flex items-center mb-4">
// //               <div className="text-amber-500 text-2xl mr-2">
// //                 {'★'.repeat(5)}
// //               </div>
// //             </div>
// //             <p className="text-gray-600 mb-6">{testimonial.quote}</p>
// //             <div className="flex items-center">
// //               <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center">
// //                 <i className="fas fa-user text-gray-600"></i>
// //               </div>
// //               <div>
// //                 <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
// //                 <p className="text-gray-500 text-sm">{testimonial.position}</p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // CTA Section Component
// // const CTASection = () => (
// //   <section className="py-16 light-navy text-white">
// //     <div className="container mx-auto px-4 text-center">
// //       <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">Ready to Build Your Legacy?</h2>
// //       <p className="text-xl mb-10 max-w-2xl mx-auto fade-in">
// //         Let's discuss how we can bring your vision to life with strength, precision, and timelessness.
// //       </p>
// //       <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
// //         Contact Us Today
// //       </Link>
// //     </div>
// //   </section>
// // );


// // export default Home;



















// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideIntervalRef = useRef(null);

//   const slides = [
//     {
//       id: 1,
//       background: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
//       title: 'Where Vision Meets Reality',
//       subtitle: 'Transforming dreams into enduring structures that stand as testaments to innovation and excellence',
//       buttons: [
//         { text: 'Explore Our Work', link: '/projects', type: 'primary' },
//         { text: 'Begin Your Journey', link: '/contact', type: 'secondary' }
//       ]
//     },
//     {
//       id: 2,
//       background: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
//       title: 'Architecting Tomorrow',
//       subtitle: 'Where cutting-edge engineering embraces timeless Vastu principles for spaces that inspire and prosper',
//       buttons: [
//         { text: 'Our Methodology', link: '/about', type: 'primary' },
//         { text: 'View Masterpieces', link: '/projects', type: 'secondary' }
//       ]
//     },
//     {
//       id: 3,
//       background: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
//       title: 'Excellence in Every Foundation',
//       subtitle: 'Crafting sustainable ecosystems that nurture communities and honor our planet for generations ahead',
//       buttons: [
//         { text: 'Start Your Project', link: '/contact', type: 'primary' },
//         { text: 'Our Philosophy', link: '/about', type: 'secondary' }
//       ]
//     }
//   ];

//   // Hero slider functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
    
//     slideIntervalRef.current = interval;
    
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const goToSlide = (index) => {
//     clearInterval(slideIntervalRef.current);
//     setCurrentSlide(index);
    
//     // Restart interval
//     slideIntervalRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//   };

//   // Counter animation
//   useEffect(() => {
//     const animateCounters = () => {
//       const counters = document.querySelectorAll('.counter');
//       counters.forEach(counter => {
//         const target = parseInt(counter.getAttribute('data-count'));
//         const suffix = counter.textContent.includes('Million') ? 'M+' : '+';
//         let count = 0;
//         const duration = 2000;
//         const increment = target / (duration / 16);
        
//         const updateCount = () => {
//           if (count < target) {
//             count += increment;
//             counter.textContent = Math.floor(count) + (suffix && count >= target ? suffix : '');
//             setTimeout(updateCount, 16);
//           } else {
//             counter.textContent = target + (suffix ? suffix : '');
//           }
//         };
        
//         updateCount();
//       });
//     };

//     // Fade in on scroll
//     const checkFadeIn = () => {
//       const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
//       fadeElements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         const elementVisible = 150;
        
//         if (elementTop < window.innerHeight - elementVisible) {
//           element.classList.add('visible');
//         }
//       });
//     };

//     // Initialize animations
//     animateCounters();
//     checkFadeIn();
//     window.addEventListener('scroll', checkFadeIn);

//     return () => {
//       window.removeEventListener('scroll', checkFadeIn);
//     };
//   }, []);

//   return (
//     <div className="App">
      
//       {/* Hero Slider */}
//       <HeroSlider 
//         slides={slides} 
//         currentSlide={currentSlide} 
//         goToSlide={goToSlide} 
//       />
      
//       {/* Introduction Section */}
//       <IntroductionSection />
      
      
//       {/* Our Values Section */}
//       <ValuesSection />
      
//       {/* Our Promise Section */}
//       <PromiseSection />
      
//       {/* Project Timeline Section */}
//       <TimelineSection />
      
//       {/* Featured Projects Section */}
//       <FeaturedProjectsSection />
      
//       {/* Trusted Partners Section */}
//       <TrustedPartnersSection />
      
//       {/* Sustainability Section */}
//       <SustainabilitySection />
      
//       {/* Parallax Section */}
//       <ParallaxSection />
      
//       {/* Testimonials Section */}
//       <TestimonialsSection />
      
//       {/* CTA Section */}
//       <CTASection />
      
//     </div>
//   );
// };

// // Hero Slider Component
// const HeroSlider = ({ slides, currentSlide, goToSlide }) => (
//   <section className="hero-slider">
//     {slides.map((slide, index) => (
//       <div 
//         key={slide.id}
//         className={`slide ${index === currentSlide ? 'active' : ''}`}
//         style={{ backgroundImage: `url(${slide.background})` }}
//       >
//         <div className="slide-content">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">{slide.title}</h1>
//           <p className="text-xl md:text-2xl mb-10 fade-in">{slide.subtitle}</p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             {slide.buttons.map((button, btnIndex) => (
//               <Link 
//                 key={btnIndex}
//                 to={button.link}
//                 className={`${
//                   button.type === 'primary' 
//                     ? 'bg-amber-500 hover:bg-amber-600 text-white' 
//                     : 'bg-transparent border-2 border-white hover:bg-white hover:text-navy-blue text-white'
//                 } font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 fade-in`}
//               >
//                 {button.text}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     ))}
    
//     {/* Slide Indicators */}
//     <div className="slide-indicators">
//       {slides.map((_, index) => (
//         <div 
//           key={index}
//           className={`indicator ${index === currentSlide ? 'active' : ''}`}
//           onClick={() => goToSlide(index)}
//         ></div>
//       ))}
//     </div>
//   </section>
// );

// // Introduction Section Component
// const IntroductionSection = () => (
//   <section className="py-16 bg-white">
//     <div className="container mx-auto px-4">
//       <div className="max-w-3xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 fade-in">Welcome to Anand Infra</h2>
//         <p className="text-lg text-gray-600 fade-in">
//           We are dedicated creators of enduring infrastructure, blending scientific planning with timeless design. 
//           From visionary townships to robust industrial complexes and public infrastructure projects, 
//           we build with a commitment to quality, harmony, and a future-ready approach.
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//         {[
//           { icon: 'city', title: 'Commercial Complexes', desc: 'Dynamic spaces for business to thrive.' },
//           { icon: 'home', title: 'Residential Townships', desc: 'Creating communities, not just houses.' },
//           { icon: 'industry', title: 'Industrial & Warehousing', desc: 'Engineered for efficiency and scale.' },
//           { icon: 'landmark', title: 'Public Infrastructure', desc: 'Building the foundations of society.' }
//         ].map((item, index) => (
//           <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 text-center hover-lift">
//             <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 floating">
//               <i className={`fas fa-${item.icon} text-amber-600 text-2xl`}></i>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//             <p className="text-gray-600">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Values Section Component
// const ValuesSection = () => (
//   <section className="py-16 bg-white">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">Our Core Values</h2>
//       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
//         The principles that guide every project we undertake
//       </p>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           { icon: 'handshake', title: 'Integrity', desc: 'We believe in transparent communication and ethical practices in all our dealings, building trust that lasts generations.' },
//           { icon: 'star', title: 'Excellence', desc: 'From material selection to final finishing, we never compromise on quality, ensuring every project exceeds expectations.' },
//           { icon: 'users', title: 'Community Focus', desc: 'We build not just structures, but communities that thrive, creating spaces that bring people together.' }
//         ].map((value, index) => (
//           <div 
//             key={index} 
//             className="value-card group relative bg-gray-50 p-8 rounded-xl border border-gray-100 text-center overflow-hidden transition-all duration-500 hover:scale-105"
//           >
//             {/* Background fill effect */}
//             <div className="absolute inset-0 bg-navy-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
            
//             {/* Content container */}
//             <div className="relative z-10">
//               <div className="bg-amber-500 group-hover:bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 pulse-slow transition-colors duration-500">
//                 <i className={`fas fa-${value.icon} text-white group-hover:text-navy-blue text-3xl transition-colors duration-500`}></i>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-4 transition-colors duration-500">{value.title}</h3>
//               <p className="text-gray-600 group-hover:text-gray-200 text-justify transition-colors duration-500">{value.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Promise Section Component
// const PromiseSection = () => (
//   <section className="py-16 bg-gray-50">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 fade-in">The Anand Infra Difference</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {[
//           { icon: 'flask', title: 'Scientific Planning', desc: 'Data-driven and technologically advanced project execution for optimal efficiency and sustainability.' },
//           { icon: 'award', title: 'Uncompromising Quality', desc: 'Rigorous, multi-stage quality control protocols that leave no room for error.' },
//           { icon: 'yin-yang', title: 'Vastu-Aligned Design', desc: 'Harmonious layouts that promote balance, prosperity, and well-being for occupants.' },
//           { icon: 'eye', title: 'Future-Ready Vision', desc: 'Building not just for today, but for the generations to come with timeless designs.' }
//         ].map((item, index) => (
//           <div key={index} className="flex fade-in">
//             <div className="bg-amber-100 p-4 rounded-full h-14 w-14 flex items-center justify-center mt-2 mr-6 flex-shrink-0">
//               <i className={`fas fa-${item.icon} text-amber-600 text-xl`}></i>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Timeline Section Component
// const TimelineSection = () => (
//   <section className="py-16 bg-white">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">Our Project Journey</h2>
//       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
//         From concept to completion, we follow a meticulous process
//       </p>
      
//       <div className="max-w-4xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="space-y-8">
//             {[
//               { title: 'Consultation & Planning', desc: 'We begin by understanding your vision, requirements, and conducting detailed site analysis to create a comprehensive project plan.' },
//               { title: 'Design & Engineering', desc: 'Our architects and engineers create detailed designs that blend aesthetic appeal with structural integrity and Vastu principles.' },
//               { title: 'Approvals & Permits', desc: 'We handle all necessary regulatory approvals and permits, ensuring compliance with local building codes and regulations.' }
//             ].map((item, index) => (
//               <div key={index} className="timeline-item fade-in">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="space-y-8">
//             {[
//               { title: 'Construction', desc: 'Using premium materials and advanced techniques, our skilled workforce brings the design to life with precision and care.' },
//               { title: 'Quality Assurance', desc: 'Multiple quality checks at every stage ensure that the final construction meets our exacting standards and your expectations.' },
//               { title: 'Handover & Support', desc: 'We deliver your completed project with comprehensive documentation and provide ongoing support for maintenance.' }
//             ].map((item, index) => (
//               <div key={index} className="timeline-item fade-in">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // Featured Projects Component
// const FeaturedProjectsSection = () => (
//   <section className="py-16 bg-gray-50">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">Featured Projects</h2>
//       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
//         A glimpse of our recent work that showcases our commitment to excellence
//       </p>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           { 
//             image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//             category: 'Commercial',
//             categoryColor: 'amber',
//             title: 'The Harmony Business Park',
//             desc: 'A state-of-the-art commercial complex designed for productivity and well-being.'
//           },
//           { 
//             image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
//             category: 'Residential',
//             categoryColor: 'blue',
//             title: 'Greenwood Enclave',
//             desc: 'A self-sufficient township offering a balanced lifestyle with modern amenities.'
//           },
//           { 
//             image: 'https://images.unsplash.com/photo-1630061712710-2539eb457c55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aWxkaW5nJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
//             category: 'Public Infrastructure',
//             categoryColor: 'green',
//             title: 'Community Health Center',
//             desc: 'A modern healthcare facility serving the community with advanced medical services.'
//           }
//         ].map((project, index) => (
//           <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover-lift">
//             <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
//             <div className="p-6">
//               <span className={`inline-block bg-${project.categoryColor}-100 text-${project.categoryColor}-800 text-sm font-medium px-3 py-1 rounded-full mb-3`}>
//                 {project.category}
//               </span>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.desc}</p>
//               <Link to="/projects" className="text-navy-blue font-semibold hover:underline flex items-center">
//                 View Project <i className="fas fa-arrow-right ml-2"></i>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="text-center mt-12">
//         <Link to="/projects" className="bg-navy-blue hover:bg-blue-800 text-white text-lg font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
//           View All Projects
//         </Link>
//       </div>
//     </div>
//   </section>
// );

// // Trusted Partners Section - Subtle indication of government work
// // Trusted Partners Section - Minimal Enhanced Styling
// const TrustedPartnersSection = () => (
//   <section className="py-20 bg-white">
//     <div className="container mx-auto px-4">
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 fade-in">Trusted Partners</h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in">
//           Collaborating with leading organizations across sectors to deliver exceptional results
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {[
//           { 
//             name: 'Private Developers', 
//             icon: 'building',
//             projects: '150+ Projects',
//             color: 'blue'
//           },
//           { 
//             name: 'Corporate Houses', 
//             icon: 'city',
//             projects: '80+ Projects', 
//             color: 'green'
//           },
//           { 
//             name: 'Government Bodies', 
//             icon: 'landmark',
//             projects: '45+ Projects',
//             color: 'blue'
//           },
//           { 
//             name: 'Individual Clients', 
//             icon: 'user-friends',
//             projects: '500+ Clients',
//             color: 'amber'
//           }
//         ].map((partner, index) => (
//           <div 
//             key={index} 
//             className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:scale-105 fade-in p-6 text-center relative overflow-hidden"
//           >
//             {/* Subtle Background Pattern */}
//             <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-50 to-transparent opacity-50 rounded-bl-full"></div>
            
//             <div className="relative z-10">
//               {/* Icon with Color Coding */}
//               <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${partner.color}-100 text-${partner.color}-600 mb-4 group-hover:bg-${partner.color} group-hover:text-${partner.color}-50 transition-all duration-300`}>
//                 <i className={`fas fa-${partner.icon} text-xl`}></i>
//               </div>
              
//               <h3 className="text-lg font-bold text-gray-800 mb-2">
//                 {partner.name}
//               </h3>
              
//               <p className={`text-${partner.color}-600 text-sm font-medium mb-3`}>
//                 {partner.projects}
//               </p>
              
//               <div className="flex items-center justify-center text-gray-500 text-sm">
//                 <i className="fas fa-star text-amber-400 mr-1"></i>
//                 <i className="fas fa-star text-amber-400 mr-1"></i>
//                 <i className="fas fa-star text-amber-400 mr-1"></i>
//                 <i className="fas fa-star text-amber-400 mr-1"></i>
//                 <i className="fas fa-star text-amber-400 mr-1"></i>
//                 <span className="ml-2 text-gray-600">Rated 5.0</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {/* Trust Badge Footer */}
//       <div className="mt-12 text-center fade-in">
//         <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-gray-50 rounded-2xl px-8 py-4">
//           <div className="flex items-center space-x-2">
//             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//             <span className="text-gray-700 font-medium">100% On-Time Delivery</span>
//           </div>
//           <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
//           <div className="flex items-center space-x-2">
//             <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
//             <span className="text-gray-700 font-medium">Quality Certified</span>
//           </div>
//           <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
//           <div className="flex items-center space-x-2">
//             <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
//             <span className="text-gray-700 font-medium">Client Recommended</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // Sustainability Section Component
// const SustainabilitySection = () => (
//   <section className="py-16 bg-gray-50">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">Sustainable Development</h2>
//       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
//         Building responsibly for a better tomorrow
//       </p>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div className="fade-in">
//           <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment to Nature</h3>
//           <p className="text-gray-600 mb-6">
//             At Anand Infra, we believe that true legacy extends beyond structures to the impact we have on our environment and communities. 
//             We focus on integrating greenery and natural elements into our projects to protect and preserve nature.
//           </p>
          
//           <div className="space-y-4">
//             {[
//               { icon: 'leaf', title: 'Green Building Integration', desc: 'We prioritize incorporating green spaces, vertical gardens, and natural elements into our designs' },
//               { icon: 'tree', title: 'Preservation of Natural Landscape', desc: 'Our projects are designed to work with the natural topography, preserving existing trees and green cover' },
//               { icon: 'recycle', title: 'Eco-Friendly Materials', desc: 'We use sustainable, locally-sourced materials and implement waste management systems' }
//             ].map((item, index) => (
//               <div key={index} className="flex items-start">
//                 <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
//                   <i className={`fas fa-${item.icon} text-white text-sm`}></i>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{item.title}</h4>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="fade-in">
//           <div className="bg-gray-100 rounded-xl p-8 h-full flex items-center justify-center">
//             <div className="text-center">
//               <div className="bg-green-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 pulse-slow">
//                 <i className="fas fa-seedling text-white text-4xl"></i>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">Nature-Inspired Design</h3>
//               <p className="text-gray-600">
//                 Our projects incorporate extensive greenery, natural ventilation, and daylight optimization to create healthier living environments while reducing environmental impact.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // Parallax Section Component
// // const ParallaxSection = () => (
// //   <section className="py-24 parallax-section text-white" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)' }}>
// //     <div className="container mx-auto px-4 text-center">
// //       <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">Building for Future Generations</h2>
// //       <p className="text-xl mb-10 max-w-2xl mx-auto fade-in">
// //         Our commitment extends beyond construction to creating sustainable, enduring infrastructure that serves communities for decades to come.
// //       </p>
// //       <Link to="/about" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
// //         Learn More About Our Vision
// //       </Link>
// //     </div>
// //   </section>
// // );

// const ParallaxSection = () => (
//   <section className="py-24 parallax-section text-white relative">
//     {/* Background with overlay */}
//     <div 
//       className="absolute inset-0 bg-cover bg-fixed bg-center"
//       style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)' }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-blue-900/70"></div>
//     </div>
    
//     {/* Content */}
//     <div className="container mx-auto px-4 text-center relative z-10">
//       <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">Building for Future Generations</h2>
//       <p className="text-xl mb-10 max-w-2xl mx-auto fade-in">
//         Our commitment extends beyond construction to creating sustainable, enduring infrastructure that serves communities for decades to come.
//       </p>
//       <Link to="/about" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
//         Learn More About Our Vision
//       </Link>
//     </div>
//   </section>
// );

// // Testimonials Section Component
// const TestimonialsSection = () => (
//   <section className="py-16 bg-white">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 fade-in">What Our Clients Say</h2>
//       <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 fade-in">
//         Hear from those who have experienced the Anand Infra difference firsthand.
//       </p>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           { 
//             quote: '"Living in an Anand Infra home is different. There\'s a palpable sense of peace and solidity. They truly delivered on their promise of quality and Vastu."',
//             name: 'Mr. & Mrs. Iyer',
//             position: 'Greenwood Enclave Residents'
//           },
//           { 
//             quote: '"Our corporate office by Anand Infra has been a catalyst for our growth. The design is both innovative and timeless, impressing every client who walks in."',
//             name: 'CEO, TechNova Solutions',
//             position: 'Harmony Business Park Tenant'
//           },
//           { 
//             quote: '"The public infrastructure project was completed with exceptional quality and adherence to timelines. Their team understood the unique requirements perfectly."',
//             name: 'Government Official',
//             position: 'Public Works Department'
//           }
//         ].map((testimonial, index) => (
//           <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover-lift">
//             <div className="flex items-center mb-4">
//               <div className="text-amber-500 text-2xl mr-2">
//                 {'★'.repeat(5)}
//               </div>
//             </div>
//             <p className="text-gray-600 mb-6">{testimonial.quote}</p>
//             <div className="flex items-center">
//               <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center">
//                 <i className="fas fa-user text-gray-600"></i>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
//                 <p className="text-gray-500 text-sm">{testimonial.position}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // CTA Section Component
// const CTASection = () => (
//   <section className="py-16 light-navy text-white">
//     <div className="container mx-auto px-4 text-center">
//       <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">Ready to Build Your Legacy?</h2>
//       <p className="text-xl mb-10 max-w-2xl mx-auto fade-in">
//         Let's discuss how we can bring your vision to life with strength, precision, and timelessness.
//       </p>
//       <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
//         Contact Us Today
//       </Link>
//     </div>
//   </section>
// );

// export default Home;

































  
import React, { useState, useEffect, useRef } from 'react';
import HeroSlider from '../components/home/HeroSlider';
import IntroductionSection from '../components/home/IntroductionSection';
import ValuesSection from '../components/home/ValuesSection';
import PromiseSection from '../components/home/PromiseSection';
import TimelineSection from '../components/home/TimelineSection';
import FeaturedProjectsSection from '../components/home/FeaturedProjectsSection';
import TrustedPartnersSection from '../components/home/TrustedPartnersSection';
import SustainabilitySection from '../components/home/SustainabilitySection';
import ParallaxSection from '../components/home/ParallaxSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      background: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      title: 'Where Vision Meets Reality',
      subtitle: 'Transforming dreams into enduring structures that stand as testaments to innovation and excellence',
      buttons: [
        { text: 'Explore Our Work', link: '/projects', type: 'primary' },
        { text: 'Begin Your Journey', link: '/contact', type: 'secondary' }
      ]
    },
    {
      id: 2,
      background: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      title: 'Architecting Tomorrow',
      subtitle: 'Where cutting-edge engineering embraces timeless Vastu principles for spaces that inspire and prosper',
      buttons: [
        { text: 'Our Methodology', link: '/about', type: 'primary' },
        { text: 'View Masterpieces', link: '/projects', type: 'secondary' }
      ]
    },
    {
      id: 3,
      background: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
      title: 'Excellence in Every Foundation',
      subtitle: 'Crafting sustainable ecosystems that nurture communities and honor our planet for generations ahead',
      buttons: [
        { text: 'Start Your Project', link: '/contact', type: 'primary' },
        { text: 'Our Philosophy', link: '/about', type: 'secondary' }
      ]
    }
  ];

  // Hero slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    slideIntervalRef.current = interval;
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    clearInterval(slideIntervalRef.current);
    setCurrentSlide(index);
    
    // Restart interval
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // Counter animation and scroll effects
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = counter.textContent.includes('Million') ? 'M+' : '+';
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.textContent = Math.floor(count) + (suffix && count >= target ? suffix : '');
            setTimeout(updateCount, 16);
          } else {
            counter.textContent = target + (suffix ? suffix : '');
          }
        };
        
        updateCount();
      });
    };

    // Fade in on scroll
    const checkFadeIn = () => {
      const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    // Initialize animations
    animateCounters();
    checkFadeIn();
    window.addEventListener('scroll', checkFadeIn);

    return () => {
      window.removeEventListener('scroll', checkFadeIn);
    };
  }, []);

  return (
    <div className="App">
      <HeroSlider 
        slides={slides} 
        currentSlide={currentSlide} 
        goToSlide={goToSlide} 
      />
      <IntroductionSection />
      <ValuesSection />
      <PromiseSection />
      <TimelineSection />
      <FeaturedProjectsSection />
      <TrustedPartnersSection />
      <SustainabilitySection />
      <ParallaxSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;