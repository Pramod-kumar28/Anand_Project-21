// import React, { useEffect } from 'react'

// const About = () => {
//   // Counter animation for About page
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

//     // Fade in on scroll for About page
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
//     const timer = setTimeout(() => {
//       animateCounters();
//       checkFadeIn();
//     }, 100);

//     window.addEventListener('scroll', checkFadeIn);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('scroll', checkFadeIn);
//     };
//   }, []);

//   const companyInfo = {
//     foundingYear: "2025",
//     projectsCompleted: "250+",
//     citiesPresent: "15+",
//     teamMembers: "150+"
//   }

//   const philosophy = [
//     {
//       icon: 'fas fa-shield-alt',
//       title: 'Strong',
//       description: 'We guarantee structural integrity and resilience, using superior materials and proven engineering techniques that withstand the test of time.',
//       color: 'blue'
//     },
//     {
//       icon: 'fas fa-ruler-combined',
//       title: 'Precise',
//       description: 'We execute with meticulous attention to detail, ensuring every project reflects flawless planning and workmanship from concept to completion.',
//       color: 'green'
//     },
//     {
//       icon: 'fas fa-infinity',
//       title: 'Timeless',
//       description: 'We design spaces that remain functional, valuable, and beautiful, transcending fleeting trends to become enduring legacies for future generations.',
//       color: 'amber'
//     }
//   ]

//   // Stats Section Component for About Page
//   const StatsSection = () => (
//     <section className="py-16 text-black">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">Our Stats</h2>
          
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {[
//             { count: 40, label: 'Years of Trust' },
//             { count: 250, label: 'Projects Completed' },
//             { count: 10, label: 'Million+ Sq. Ft. Developed' },
//             { count: 98, label: 'Client Satisfaction %' }
//           ].map((stat, index) => (
//             <div key={index} className="p-4 fade-in">
//               <div className="text-4xl md:text-5xl text-navy-blue font-bold mb-2 counter" data-count={stat.count}>0</div>
//               <div className="text-lg text-black">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="about-hero text-white py-20 md:py-28">
//         <div className="container mx-auto px-4 text-center">
//           <div className="text-2xl md:text-3xl text-amber-300 mb-4 font-sans">
//             Dharmo Rakshati Rakshitah
//           </div>
//           <h1 className="text-3xl md:text-5xl font-bold mb-4">
//             Building with Purpose
//           </h1>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto">
//             Guided by dharma, driven by excellence in every project we undertake.
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 fade-in">Our Story</h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
//             <div className="md:flex">
//               <div className="md:w-1/2 p-8 md:p-12">
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 fade-in">From Humble Beginnings to Industry Leadership</h3>
//                 <p className="text-gray-600 mb-6 fade-in">
//                   Founded in {companyInfo.foundingYear} by Mr. Rajesh Anand, our company began as a small contracting firm with a big vision. What started with a single residential project has grown into one of the most trusted names in infrastructure development.
//                 </p>
//                 <p className="text-gray-600 mb-6 fade-in">
//                   Over the years, we've evolved from building homes to creating integrated townships, commercial complexes, and institutional buildings. Our journey is marked by milestones of trust, innovation, and unwavering commitment to quality.
//                 </p>
//                 <p className="text-gray-600 fade-in">
//                   Today, while we've grown in scale and capability, we remain true to our founding principles: integrity in every brick, excellence in every design, and commitment in every relationship.
//                 </p>
//               </div>
//               <div 
//                 className="md:w-1/2 bg-cover bg-center min-h-64 md:min-h-full fade-in" 
//                 style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)' }}
//               ></div>
//             </div>
//           </div>

//           {/* Our Philosophy Section */}
//           <div className="mb-16">
//             <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 fade-in">Our Building Philosophy</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {philosophy.map((item, index) => (
//                 <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300 fade-in">
//                   <div className={`bg-${item.color}-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
//                     <i className={`${item.icon} text-${item.color}-600 text-3xl`}></i>
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mission & Vision Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//             <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500 fade-in">
//               <div className="flex items-center mb-6">
//                 <div className="bg-amber-500 p-3 rounded-lg mr-4">
//                   <i className="fas fa-bullseye text-white text-xl"></i>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 To create iconic, reliable, and innovative infrastructure that strengthens communities and meets the highest standards of quality, sustainability, and holistic living.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-2">
//                 <li>Deliver exceptional value to our stakeholders</li>
//                 <li>Innovate continuously in construction methodologies</li>
//                 <li>Maintain uncompromising quality standards</li>
//                 <li>Foster sustainable development practices</li>
//               </ul>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 fade-in">
//               <div className="flex items-center mb-6">
//                 <div className="bg-blue-500 p-3 rounded-lg mr-4">
//                   <i className="fas fa-eye text-white text-xl"></i>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 To be the most trusted and innovative name in infrastructure development, renowned for building timeless structures that inspire future generations and transform urban landscapes.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-2">
//                 <li>Pioneer sustainable urban development</li>
//                 <li>Expand our footprint across India</li>
//                 <li>Set new benchmarks in construction excellence</li>
//                 <li>Create communities, not just buildings</li>
//               </ul>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <StatsSection />
//         </div>
//       </section>
//     </div>
//   )
// }

// export default About

















// import React, { useEffect } from 'react'

// const About = () => {
//   // Counter animation for About page
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

//     // Fade in on scroll for About page
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
//     const timer = setTimeout(() => {
//       animateCounters();
//       checkFadeIn();
//     }, 100);

//     window.addEventListener('scroll', checkFadeIn);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('scroll', checkFadeIn);
//     };
//   }, []);

//   const founderInfo = {
//     name: "Anand",
//     position: "Founder & Chairman",
//     tagline: "Building Dreams, Creating Legacies",
//     description: "A visionary leader with an unwavering commitment to excellence, Anand founded Anand Group in 1995 with a simple yet powerful vision: to create sustainable businesses that transform communities and inspire generations.",
//     background: "With a background in engineering and an innate understanding of market dynamics, Mr. Anand has successfully steered the group through economic cycles, expanding from a single real estate venture to a diversified conglomerate with global presence.",
//     quote: "\"We don't just build structures; we build dreams. Every project is a commitment to excellence, every development a step towards a better tomorrow.\"",
//     image: "./images/CEO.png",
//     stats: [
//       { count: 100, label: 'Projects', suffix: '+' },
//       { count: 1, label: 'Assets', suffix: 'B+' },
//       { count: 7, label: 'Countries', suffix: '' },
//       { count: 500, label: 'Team', suffix: '+' }
//     ]
//   }

//   const philosophy = [
//     {
//       icon: 'fas fa-shield-alt',
//       title: 'Strong',
//       description: 'We guarantee structural integrity and resilience, using superior materials and proven engineering techniques that withstand the test of time.',
//       color: 'blue'
//     },
//     {
//       icon: 'fas fa-ruler-combined',
//       title: 'Precise',
//       description: 'We execute with meticulous attention to detail, ensuring every project reflects flawless planning and workmanship from concept to completion.',
//       color: 'green'
//     },
//     {
//       icon: 'fas fa-infinity',
//       title: 'Timeless',
//       description: 'We design spaces that remain functional, valuable, and beautiful, transcending fleeting trends to become enduring legacies for future generations.',
//       color: 'amber'
//     }
//   ]

//   // Stats Section Component for About Page
//   const StatsSection = () => (
//     <section className="py-12 md:py-16 text-black w-full bg-blue-50 mb-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4 fade-in">Our Stats</h2>
//           <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto"></div>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
//           {[
//             { count: 40, label: 'Years of Trust' },
//             { count: 250, label: 'Projects Completed' },
//             { count: 10, label: 'Million+ Sq. Ft. Developed' },
//             { count: 98, label: 'Client Satisfaction %' }
//           ].map((stat, index) => (
//             <div key={index} className="p-3 md:p-4 fade-in">
//               <div className="text-2xl md:text-4xl lg:text-5xl text-navy-blue font-bold mb-1 md:mb-2 counter" data-count={stat.count}>0</div>
//               <div className="text-sm md:text-lg text-black">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="about-hero text-white py-16 md:py-28">
//         <div className="container mx-auto px-4 text-center">
//           <div className="text-xl md:text-3xl text-amber-300 mb-4 font-sans">
//             Dharmo Rakshati Rakshitah
//           </div>
//           <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
//             Building with Purpose
//           </h1>
//           <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
//             Guided by dharma, driven by excellence in every project we undertake.
//           </p>
//         </div>
//       </section>

//       {/* Founder & Chairman Section */}
//       <section className="py-12 md:py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8 md:mb-12">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6 fade-in">Our Leadership</h2>
//             <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto"></div>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-6xl mx-auto">
//             {/* Image Card - Completely Separate */}
//             <div className="fade-in w-full lg:w-1/2">
//               <div className="bg-white relative rounded-2xl md:rounded-3xl m-2 md:m-6 shadow-lg border border-gray-200 overflow-hidden ">
//                 <img
//                   src="./images/CEO.png"
//                   alt="Anand - Founder & Chairman"
//                   className="w-full h-86 md:h-full lg:h-full object-cover object-top"
//                 />
                
//                 <div className='absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white p-3 md:p-4 shadow-lg rounded-lg md:rounded-xl text-center'>
//                   <span className="text-orange-500 font-bold text-xl md:text-2xl lg:text-3xl mr-2 block">Anand</span>
//                   <span className="text-gray-600 font-bold text-sm md:text-base lg:text-xl">Founder & Chairman</span>
//                 </div>
//               </div>
//             </div>

//             {/* Content Card - Completely Separate */}
//             <div className="fade-in w-full lg:w-1/2">
//               <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-6 m-2 md:m-6 h-full">
//                 <div className='mb-4 md:mb-6'>
//                   <span className="text-navy-blue font-bold text-2xl md:text-3xl mr-2 block">Anand</span>
//                   <span className="text-gray-600 font-bold text-base md:text-xl">Founder & Chairman</span>
//                 </div>

//                 {/* Description */}
//                 <div className="mb-4 md:mb-6 space-y-3 md:space-y-4">
//                   <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                     Under the visionary leadership of our Founder, Mr. Anand, the Anand Group was established on the principle of <span className='font-bold'>“Dharmo Rakshati Rakshitah”</span>—that one who upholds righteousness is protected by it. 
//                     This ethos guides our mission to build transformative and sustainable infrastructure, driven by his engineering expertise and a commitment to ethical development.
//                   </p>
//                   <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                     This foundational belief has been the bedrock of our resilience and growth. 
//                     It has enabled us to expand from a single venture into a diversified global conglomerate, consistently navigating economic cycles to deliver projects that set a benchmark for quality and trust.
//                   </p>
//                 </div>

//                 {/* Stats Grid */}
//                 <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
//                   <div className="text-center p-2 md:p-3 bg-gray-50 rounded-lg">
//                     <div className="text-lg md:text-xl font-bold text-navy-blue">100+</div>
//                     <div className="text-gray-600 text-xs md:text-sm">Projects</div>
//                   </div>
//                   <div className="text-center p-2 md:p-3 bg-gray-50 rounded-lg">
//                     <div className="text-lg md:text-xl font-bold text-navy-blue">1B+</div>
//                     <div className="text-gray-600 text-xs md:text-sm">Assets</div>
//                   </div>
//                   <div className="text-center p-2 md:p-3 bg-gray-50 rounded-lg">
//                     <div className="text-lg md:text-xl font-bold text-navy-blue">7</div>
//                     <div className="text-gray-600 text-xs md:text-sm">Countries</div>
//                   </div>
//                   <div className="text-center p-2 md:p-3 bg-gray-50 rounded-lg">
//                     <div className="text-lg md:text-xl font-bold text-navy-blue">500+</div>
//                     <div className="text-gray-600 text-xs md:text-sm">Team</div>
//                   </div>
//                 </div>

//                 {/* Quote Section */}
//                 <div className="bg-amber-50 rounded-lg p-3 md:p-4 border-l-4 border-amber-500">
//                   <p className="text-gray-800 italic text-xs md:text-sm leading-relaxed">
//                     "We don't just build structures; we build dreams. Every project is a commitment to excellence, every development a step towards a better tomorrow."
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Philosophy Section */}
//       <section className="py-12 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3 md:mb-7 fade-in">Our Building Philosophy</h2>
//           <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto"></div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-5">
//             {philosophy.map((item, index) => (
//               <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300 fade-in">
//                 <div className={`bg-${item.color}-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}>
//                   <i className={`${item.icon} text-${item.color}-600 text-2xl md:text-3xl`}></i>
//                 </div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">{item.title}</h3>
//                 <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-12 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-amber-500 fade-in">
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="bg-amber-500 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
//                   <i className="fas fa-bullseye text-white text-lg md:text-xl"></i>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
//                 To create iconic, reliable, and innovative infrastructure that strengthens communities and meets the highest standards of quality, sustainability, and holistic living.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                 <li>Deliver exceptional value to our stakeholders</li>
//                 <li>Innovate continuously in construction methodologies</li>
//                 <li>Maintain uncompromising quality standards</li>
//                 <li>Foster sustainable development practices</li>
//               </ul>
//             </div>
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500 fade-in">
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="bg-blue-500 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
//                   <i className="fas fa-eye text-white text-lg md:text-xl"></i>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
//                 To be the most trusted and innovative name in infrastructure development, renowned for building timeless structures that inspire future generations and transform urban landscapes.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                 <li>Pioneer sustainable urban development</li>
//                 <li>Expand our footprint across India</li>
//                 <li>Set new benchmarks in construction excellence</li>
//                 <li>Create communities, not just buildings</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <StatsSection />
//     </div>
//   )
// }

// export default About












// import React, { useEffect } from 'react'

// const About = () => {
//   // Counter animation for About page
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

//     // Fade in on scroll for About page
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
//     const timer = setTimeout(() => {
//       animateCounters();
//       checkFadeIn();
//     }, 100);

//     window.addEventListener('scroll', checkFadeIn);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('scroll', checkFadeIn);
//     };
//   }, []);

//   // Founder Profile Component
//   const FounderProfile = () => (
//     <section className="max-w-6xl mx-auto px-6 py-12 fade-in">
//       <div className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 items-start">
//         {/* Left: Image card */}
//         <div className="relative">
//           <div className="rounded-xl overflow-hidden shadow-lg ring-3 ring-gray-100">
//             <img
//               src="./images/CEO.png"
//               alt="Founder"
//               className="w-full h-[560px] object-cover md:object-top"
//               style={{ borderRadius: 12 }}
//             />
//           </div>
          
//           {/* Small floating badge */}
//           <div className="absolute right-6 bottom-6 transform translate-y-3">
//             <div className="bg-white px-5 py-3 rounded-lg shadow-md text-sm font-semibold text-gray-700 border border-gray-100">
//               <div className="uppercase text-md tracking-wide text-center text-orange-500">ANAND</div>
//               <div className="text-xs text-gray-500">Founder & Chairman</div>
//             </div>
//           </div>
//           {/* Quote */}
//           <blockquote className="mt-8 border-l-2 border-amber-700 pl-6 italic text-gray-500 max-w-xl bg-amber-100 rounded-lg p-3 md:p-4">
//             "We don't just build structures; we build dreams. Every project is a commitment to excellence, every development a step towards a better tomorrow."
//           </blockquote>
          
//         </div>
        

//         {/* Right: Content */}
//         <div className="pt-6">
//           <h2 className="text-4xl font-extrabold text-slate-900">Anand</h2>
//           <p className="text-sm text-indigo-900 font-medium mt-1">Founder & Chairman</p>

//           {/* Description */}
//           <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 mt-5">
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               Under the visionary leadership of our Founder, Mr. Anand, the Anand Group was established on the principle of <span className='font-bold'>“Dharmo Rakshati Rakshitah”</span>—that one who upholds righteousness is protected by it.
//               This ethos guides our mission to build transformative and sustainable infrastructure, driven by his engineering expertise and a commitment to ethical development.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               This foundational belief has been the bedrock of our resilience and growth.
//               It has enabled us to expand from a single venture into a diversified global conglomerate, consistently navigating economic cycles to deliver projects that set a benchmark for quality and trust.
//             </p>
//           </div>

//           {/* Stats grid */}
//           <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
//             <StatCard title="100+" subtitle="Projects" />
//             <StatCard title="1B+" subtitle="Assets" />
//             <StatCard title="7" subtitle="Countries" />
//             <StatCard title="500+" subtitle="Team" />
//           </div>

          
//         </div>
//       </div>
//     </section>
//   );

//   // Stat Card Component
//   const StatCard = ({ title, subtitle }) => (
//     <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start justify-center ring-1 ring-gray-100">
//       <div className="text-2xl font-bold text-slate-900">{title}</div>
//       <div className="text-sm text-gray-400 mt-1">{subtitle}</div>
//     </div>
//   );

//   const philosophy = [
//     {
//       icon: 'fas fa-shield-alt',
//       title: 'Strong',
//       description: 'We guarantee structural integrity and resilience, using superior materials and proven engineering techniques that withstand the test of time.',
//       color: 'blue'
//     },
//     {
//       icon: 'fas fa-ruler-combined',
//       title: 'Precise',
//       description: 'We execute with meticulous attention to detail, ensuring every project reflects flawless planning and workmanship from concept to completion.',
//       color: 'green'
//     },
//     {
//       icon: 'fas fa-infinity',
//       title: 'Timeless',
//       description: 'We design spaces that remain functional, valuable, and beautiful, transcending fleeting trends to become enduring legacies for future generations.',
//       color: 'amber'
//     }
//   ]

//   // Stats Section Component for About Page
//   const StatsSection = () => (
//     <section className="py-12 md:py-16 text-black w-full bg-blue-50 mb-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4 fade-in">Our Stats</h2>
//           <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto"></div>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
//           {[
//             { count: 40, label: 'Years of Trust' },
//             { count: 250, label: 'Projects Completed' },
//             { count: 10, label: 'Million+ Sq. Ft. Developed' },
//             { count: 98, label: 'Client Satisfaction %' }
//           ].map((stat, index) => (
//             <div key={index} className="p-3 md:p-4 fade-in">
//               <div className="text-2xl md:text-4xl lg:text-5xl text-navy-blue font-bold mb-1 md:mb-2 counter" data-count={stat.count}>0</div>
//               <div className="text-sm md:text-lg text-black">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="about-hero text-white py-16 md:py-28">
//         <div className="container mx-auto px-4 text-center">
//           <div className="text-xl md:text-3xl text-amber-300 mb-4 font-sans">
//             Dharmo Rakshati Rakshitah
//           </div>
//           <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
//             Building with Purpose
//           </h1>
//           <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
//             Guided by dharma, driven by excellence in every project we undertake.
//           </p>
//         </div>
//       </section>

//       {/* Founder & Chairman Section - Using the merged component */}
//       <section className="py-12 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8 md:mb-12">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6 fade-in">Our Leadership</h2>
//             <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto"></div>
//           </div>
//           <FounderProfile />
//         </div>
//       </section>

//       {/* Our Philosophy Section */}
//       <section className="py-12 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3 md:mb-7 fade-in">Our Building Philosophy</h2>
//           <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto"></div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-5">
//             {philosophy.map((item, index) => (
//               <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300 fade-in">
//                 <div className={`bg-${item.color}-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}>
//                   <i className={`${item.icon} text-${item.color}-600 text-2xl md:text-3xl`}></i>
//                 </div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">{item.title}</h3>
//                 <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-12 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-amber-500 fade-in">
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="bg-amber-500 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
//                   <i className="fas fa-bullseye text-white text-lg md:text-xl"></i>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
//                 To create iconic, reliable, and innovative infrastructure that strengthens communities and meets the highest standards of quality, sustainability, and holistic living.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                 <li>Deliver exceptional value to our stakeholders</li>
//                 <li>Innovate continuously in construction methodologies</li>
//                 <li>Maintain uncompromising quality standards</li>
//                 <li>Foster sustainable development practices</li>
//               </ul>
//             </div>
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500 fade-in">
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="bg-blue-500 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
//                   <i className="fas fa-eye text-white text-lg md:text-xl"></i>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
//                 To be the most trusted and innovative name in infrastructure development, renowned for building timeless structures that inspire future generations and transform urban landscapes.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                 <li>Pioneer sustainable urban development</li>
//                 <li>Expand our footprint across India</li>
//                 <li>Set new benchmarks in construction excellence</li>
//                 <li>Create communities, not just buildings</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <StatsSection />
//     </div>
//   )
// }

// export default About


















// import React, { useEffect } from 'react'

// const About = () => {
//   // Counter animation for About page
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

//     // Fade in on scroll for About page
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
//     const timer = setTimeout(() => {
//       animateCounters();
//       checkFadeIn();
//     }, 100);

//     window.addEventListener('scroll', checkFadeIn);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('scroll', checkFadeIn);
//     };
//   }, []);

//   // Founder Profile Component
//   // Founder Profile Component
//   const FounderProfile = () => (
//     <section className="max-w-6xl mx-auto px-6 py-12 fade-in">
//       <div className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 items-start">
//         {/* Left: Image card with quote below */}
//         <div className="relative">
//           <div className="rounded-xl overflow-hidden shadow-lg ring-3 ring-gray-100 relative">
//             <img
//               src="./images/CEO.png"
//               alt="Founder"
//               className="w-full h-[480px] object-cover md:object-top"
//               style={{ borderRadius: 12 }}
//             />

//             {/* Small floating badge - Positioned at bottom inside the image */}
//             <div className="absolute bottom-4 right-4">
//               <div className="bg-white px-4 py-3 rounded-lg shadow-md font-semibold text-gray-700 border border-gray-100">
//                 <div className="uppercase text-lg tracking-wide text-center text-orange-500 font-bold">ANAND</div>
//                 <div className="text-xs text-gray-500 text-center">Founder & Chairman</div>
//               </div>
//             </div>
//           </div>

//           {/* Quote below image */}
//           <blockquote className="mt-6 border-l-4 border-amber-500 pl-4 italic text-gray-700 bg-amber-50 rounded-lg p-4 md:p-5">
//             "We don't just build structures; we build dreams. Every project is a commitment to excellence, every development a step towards a better tomorrow."
//           </blockquote>
//         </div>

//         {/* Right: Content */}
//         <div className="pt-6">
//           <h2 className="text-4xl font-extrabold text-slate-900">Anand</h2>
//           <p className="text-sm text-indigo-900 font-medium mt-1">Founder & Chairman</p>

//           {/* Description */}
//           <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 mt-5">
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               Under the visionary leadership of our Founder, Mr. Anand, the Anand Group was established on the principle of <span className='font-bold'>"Dharmo Rakshati Rakshitah"</span>—that one who upholds righteousness is protected by it.
//               This ethos guides our mission to build transformative and sustainable infrastructure, driven by his engineering expertise and a commitment to ethical development.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               This foundational belief has been the bedrock of our resilience and growth.
//               It has enabled us to expand from a single venture into a diversified global conglomerate, consistently navigating economic cycles to deliver projects that set a benchmark for quality and trust.
//             </p>
//           </div>

//           {/* Stats grid */}
//           <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
//             <StatCard title="100+" subtitle="Projects" />
//             <StatCard title="1B+" subtitle="Assets" />
//             <StatCard title="7" subtitle="Countries" />
//             <StatCard title="500+" subtitle="Team" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );

//   // Stat Card Component
//   const StatCard = ({ title, subtitle }) => (
//     <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start justify-center ring-1 ring-gray-100">
//       <div className="text-2xl font-bold text-slate-900">{title}</div>
//       <div className="text-sm text-gray-400 mt-1">{subtitle}</div>
//     </div>
//   );

//   const philosophy = [
//     {
//       icon: 'fas fa-shield-alt',
//       title: 'Strong',
//       description: 'We guarantee structural integrity and resilience, using superior materials and proven engineering techniques that withstand the test of time.',
//       color: 'blue'
//     },
//     {
//       icon: 'fas fa-ruler-combined',
//       title: 'Precise',
//       description: 'We execute with meticulous attention to detail, ensuring every project reflects flawless planning and workmanship from concept to completion.',
//       color: 'green'
//     },
//     {
//       icon: 'fas fa-infinity',
//       title: 'Timeless',
//       description: 'We design spaces that remain functional, valuable, and beautiful, transcending fleeting trends to become enduring legacies for future generations.',
//       color: 'amber'
//     }
//   ]

//   // Stats Section Component for About Page
//   const StatsSection = () => (
//     <section className="py-12 md:py-16 text-black w-full bg-blue-50 mb-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4 fade-in">Our Stats</h2>
//           <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto"></div>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
//           {[
//             { count: 40, label: 'Years of Trust' },
//             { count: 250, label: 'Projects Completed' },
//             { count: 10, label: 'Million+ Sq. Ft. Developed' },
//             { count: 98, label: 'Client Satisfaction %' }
//           ].map((stat, index) => (
//             <div key={index} className="p-3 md:p-4 fade-in">
//               <div className="text-2xl md:text-4xl lg:text-5xl text-navy-blue font-bold mb-1 md:mb-2 counter" data-count={stat.count}>0</div>
//               <div className="text-sm md:text-lg text-black">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="about-hero text-white py-16 md:py-28">
//         <div className="container mx-auto px-4 text-center">
//           <div className="text-xl md:text-3xl text-amber-300 mb-4 font-sans">
//             Dharmo Rakshati Rakshitah
//           </div>
//           <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
//             Building with Purpose
//           </h1>
//           <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
//             Guided by dharma, driven by excellence in every project we undertake.
//           </p>
//         </div>
//       </section>

//       {/* Founder & Chairman Section - Using the merged component */}
//       <section className="py-8 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8 md:mb-12">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6 fade-in">Our Leadership</h2>
//             <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto"></div>
//           </div>
//           <FounderProfile />
//         </div>
//       </section>

//       {/* Our Philosophy Section */}
//       <section className="py-12 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3 md:mb-7 fade-in">Our Building Philosophy</h2>
//           <div className="w-20 md:w-24 h-1 bg-amber-500 mx-auto"></div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-5">
//             {philosophy.map((item, index) => (
//               <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300 fade-in">
//                 <div className={`bg-${item.color}-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}>
//                   <i className={`${item.icon} text-${item.color}-600 text-2xl md:text-3xl`}></i>
//                 </div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">{item.title}</h3>
//                 <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-12 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-amber-500 fade-in">
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="bg-amber-500 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
//                   <i className="fas fa-bullseye text-white text-lg md:text-xl"></i>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
//                 To create iconic, reliable, and innovative infrastructure that strengthens communities and meets the highest standards of quality, sustainability, and holistic living.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                 <li>Deliver exceptional value to our stakeholders</li>
//                 <li>Innovate continuously in construction methodologies</li>
//                 <li>Maintain uncompromising quality standards</li>
//                 <li>Foster sustainable development practices</li>
//               </ul>
//             </div>
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500 fade-in">
//               <div className="flex items-center mb-4 md:mb-6">
//                 <div className="bg-blue-500 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
//                   <i className="fas fa-eye text-white text-lg md:text-xl"></i>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
//                 To be the most trusted and innovative name in infrastructure development, renowned for building timeless structures that inspire future generations and transform urban landscapes.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                 <li>Pioneer sustainable urban development</li>
//                 <li>Expand our footprint across India</li>
//                 <li>Set new benchmarks in construction excellence</li>
//                 <li>Create communities, not just buildings</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <StatsSection />
//     </div>
//   )
// }

// export default About




















import React, { useEffect } from 'react'

const About = () => {
  // Counter animation for About page
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

    // Fade in on scroll for About page
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
    const timer = setTimeout(() => {
      animateCounters();
      checkFadeIn();
    }, 100);

    window.addEventListener('scroll', checkFadeIn);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkFadeIn);
    };
  }, []);

  // Founder Profile Component
  const FounderProfile = () => (
    <section className="max-w-6xl mx-auto px-4 sm:px-2 py-2 md:py-12 fade-in">
      <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8 items-start">
        {/* Left: Image card with quote below */}
        <div className="space-y-4 md:space-y-6">
          <div className="relative rounded-xl overflow-hidden shadow-lg ring-2 md:ring-3 ring-gray-100">
            <img
              src="./images/CEO.png"
              alt="Founder"
              className="w-full h-64 sm:h-80 md:h-[480px] object-fit object-cover md:object-top"
              style={{ borderRadius: 12 }}
            />

            {/* Small floating badge - Positioned at bottom inside the image */}
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
              <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-md font-semibold text-gray-700 border border-gray-100">
                <div className="uppercase text-sm md:text-lg tracking-wide text-center text-orange-500 font-bold">ANAND</div>
                <div className="text-xs text-gray-500 text-center">Founder & Chairman</div>
              </div>
            </div>
          </div>

          {/* Quote below image */}
          <blockquote className="border-l-4 border-amber-500 pl-3 md:pl-4 italic text-gray-700 bg-amber-50 rounded-lg p-3 md:p-4 text-sm md:text-base">
            "We don't just build structures; we build dreams. Every project is a commitment to excellence, every development a step towards a better tomorrow."
          </blockquote>
        </div>

        {/* Right: Content */}
        <div className="pt-4 md:pt-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">Anand</h2>
          <p className="text-xs md:text-sm text-indigo-900 font-medium mt-1">Founder & Chairman</p>

          {/* Description */}
          <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 mt-4 md:mt-5">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Under the visionary leadership of our Founder, Mr. Anand, the Anand Group was established on the principle of <span className='font-bold'>"Dharmo Rakshati Rakshitah"</span>—that one who upholds righteousness is protected by it.
              This ethos guides our mission to build transformative and sustainable infrastructure, driven by his engineering expertise and a commitment to ethical development.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              This foundational belief has been the bedrock of our resilience and growth.
              It has enabled us to expand from a single venture into a diversified global conglomerate, consistently navigating economic cycles to deliver projects that set a benchmark for quality and trust.
            </p>
          </div>

          {/* Stats grid */}
          <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4 max-w-md">
            <StatCard title="100+" subtitle="Projects" />
            <StatCard title="1B+" subtitle="Assets" />
            <StatCard title="7" subtitle="Countries" />
            <StatCard title="500+" subtitle="Team" />
          </div>
        </div>
      </div>
    </section>
  );

  // Stat Card Component
  const StatCard = ({ title, subtitle }) => (
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 flex flex-col items-start justify-center ring-1 ring-gray-100">
      <div className="text-lg md:text-2xl font-bold text-slate-900">{title}</div>
      <div className="text-xs md:text-sm text-gray-400 mt-1">{subtitle}</div>
    </div>
  );

  const philosophy = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Strong',
      description: 'We guarantee structural integrity and resilience, using superior materials and proven engineering techniques that withstand the test of time.',
      color: 'blue'
    },
    {
      icon: 'fas fa-ruler-combined',
      title: 'Precise',
      description: 'We execute with meticulous attention to detail, ensuring every project reflects flawless planning and workmanship from concept to completion.',
      color: 'green'
    },
    {
      icon: 'fas fa-infinity',
      title: 'Timeless',
      description: 'We design spaces that remain functional, valuable, and beautiful, transcending fleeting trends to become enduring legacies for future generations.',
      color: 'amber'
    }
  ]

  // Stats Section Component for About Page
  const StatsSection = () => (
    <section className="py-8 md:py-16 text-black w-full bg-blue-50 mb-12 md:mb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-4xl font-bold mb-4 fade-in">Our Stats</h2>
          <div className="w-16 md:w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 text-center">
          {[
            { count: 40, label: 'Years of Trust' },
            { count: 250, label: 'Projects Completed' },
            { count: 10, label: 'Million+ Sq. Ft. Developed' },
            { count: 98, label: 'Client Satisfaction %' }
          ].map((stat, index) => (
            <div key={index} className="p-2 md:p-4 fade-in">
              <div className="text-xl md:text-4xl lg:text-5xl text-navy-blue font-bold mb-1 md:mb-2 counter" data-count={stat.count}>0</div>
              <div className="text-xs md:text-lg text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero text-white py-12 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="text-lg md:text-3xl text-amber-300 mb-4 font-sans">
            Dharmo Rakshati Rakshitah
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Building with Purpose
          </h1>
          <p className="text-sm md:text-lg lg:text-xl max-w-2xl mx-auto">
            Guided by dharma, driven by excellence in every project we undertake.
          </p>
        </div>
      </section>

      {/* Founder & Chairman Section - Using the merged component */}
      <section className="py-6 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-6 fade-in">Our Leadership</h2>
            <div className="w-16 md:w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <FounderProfile />
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-3 md:mb-7 fade-in">Our Building Philosophy</h2>
          <div className="w-16 md:w-24 h-1 bg-amber-500 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-5">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white p-4 md:p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300 fade-in">
                <div className={`bg-${item.color}-100 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6`}>
                  <i className={`${item.icon} text-${item.color}-600 text-lg md:text-3xl`}></i>
                </div>
                <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
            <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border-l-4 border-amber-500 fade-in">
              <div className="flex items-center mb-3 md:mb-6">
                <div className="bg-amber-500 p-2 md:p-3 rounded-lg mr-2 md:mr-4">
                  <i className="fas fa-bullseye text-white text-base md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-2 md:mb-4 text-sm md:text-base">
                To create iconic, reliable, and innovative infrastructure that strengthens communities and meets the highest standards of quality, sustainability, and holistic living.
              </p>
              <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-xs md:text-base">
                <li>Deliver exceptional value to our stakeholders</li>
                <li>Innovate continuously in construction methodologies</li>
                <li>Maintain uncompromising quality standards</li>
                <li>Foster sustainable development practices</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500 fade-in">
              <div className="flex items-center mb-3 md:mb-6">
                <div className="bg-blue-500 p-2 md:p-3 rounded-lg mr-2 md:mr-4">
                  <i className="fas fa-eye text-white text-base md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-2 md:mb-4 text-sm md:text-base">
                To be the most trusted and innovative name in infrastructure development, renowned for building timeless structures that inspire future generations and transform urban landscapes.
              </p>
              <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-xs md:text-base">
                <li>Pioneer sustainable urban development</li>
                <li>Expand our footprint across India</li>
                <li>Set new benchmarks in construction excellence</li>
                <li>Create communities, not just buildings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
    </div>
  )
}

export default About