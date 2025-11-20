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
//     <section className="max-w-6xl mx-auto px-4 sm:px-2 py-2 md:py-12 fade-in">
//       <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8 items-start">
//         {/* Left: Image card with quote below */}
//         <div className="space-y-4 md:space-y-6">
//           <div className="relative rounded-xl overflow-hidden shadow-lg ring-2 md:ring-3 ring-gray-100">
//             <img
//               src="./images/CEO.png"
//               alt="Founder"
//               className="w-full lg:h-[550px] sm:h-full md:h-[480px] object-fit object-cover md:object-top sm:object-top lg:object-fit"
//               style={{ borderRadius: 12 }}
//             />

//             {/* Small floating badge - Positioned at bottom inside the image */}
//             <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
//               <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-md font-semibold text-gray-700 border border-gray-100">
//                 <div className="uppercase text-sm md:text-lg tracking-wide text-center text-orange-500 font-bold">ANAND</div>
//                 <div className="text-xs text-gray-500 text-center">Founder & Chairman</div>
//               </div>
//             </div>
//           </div>

//           {/* Quote below image */}
//           <blockquote className="border-l-4 border-amber-500 pl-3 md:pl-4 italic text-gray-700 bg-amber-50 rounded-lg p-3 md:p-4 text-sm md:text-base">
//             "We don't just build structures; we build dreams. Every project is a commitment to excellence, every development a step towards a better tomorrow."
//           </blockquote>
//         </div>

//         {/* Right: Content */}
//         <div className="pt-4 md:pt-6">
//           <h2 className="text-2xl md:text-4xl font-bold text-slate-800">Anand</h2>
//           <p className="text-xs md:text-sm text-indigo-700 font-medium mt-1">Founder & Chairman</p>

//           {/* Description */}
//           <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 mt-4 md:mt-5">
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               Under the visionary leadership of our Founder, Mr. Anand, the Anand Group was established on the principle of <span className='font-bold text-amber-500'>"Dharmo Rakshati Rakshitah"</span>—that one who upholds righteousness is protected by it.
//               This ethos guides our mission to build transformative and sustainable infrastructure, driven by his engineering expertise and a commitment to ethical development.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               This foundational belief has been the bedrock of our resilience and growth.
//               It has enabled us to expand from a single venture into a diversified global conglomerate, consistently navigating economic cycles to deliver projects that set a benchmark for quality and trust.
//             </p>
//           </div>

//           {/* Stats grid */}
//           <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4 max-w-md">
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
//     <div className="bg-white rounded-lg md:rounded-xl shadow-sm shadow-xl p-4 md:p-6 flex flex-col items-start justify-center ring-1 ring-gray-100 hover:bg-gray-50">
//       <div className="text-lg md:text-2xl font-bold text-slate-900">{title}</div>
//       <div className="text-xs md:text-sm text-gray-400 mt-1">{subtitle}</div>
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
//     <section className="py-8 md:py-16 text-black w-full bg-blue-50 mb-12 md:mb-20">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 text-center">
//           {[
//             { count: 40, label: 'Years of Trust' },
//             { count: 250, label: 'Projects Completed' },
//             { count: 10, label: 'Million+ Sq. Ft. Developed' },
//             { count: 98, label: 'Client Satisfaction %' }
//           ].map((stat, index) => (
//             <div key={index} className="p-2 md:p-4 fade-in">
//               <div className="text-2xl md:text-5xl lg:text-5xl text-navy-blue font-bold mb-1 md:mb-2 counter" data-count={stat.count}>0</div>
//               <div className="text-xs md:text-xl text-black">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="about-hero text-white py-12 md:py-28">
//         <div className="container mx-auto px-4 text-center">
//           <div className="text-md md:text-2xl text-amber-300 mb-4 font-sans">
//             Dharmo Rakshati Rakshitah
//           </div>
//           <h1 className="text-2xl md:text-4xl font-bold mb-4">
//             Building with Purpose
//           </h1>
//           <p className="text-sm md:text-lg lg:text-xl max-w-2xl mx-auto">
//             Guided by dharma, driven by excellence in every project we undertake.
//           </p>
//         </div>
//       </section>

//       {/* Founder & Chairman Section - Using the merged component */}
//       <section className="py-6 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-6 md:mb-12">
//             <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-6 fade-in">Our Leadership</h2>
            
//           </div>
//           <FounderProfile />
//         </div>
//       </section>

//       {/* Our Philosophy Section */}
//       <section className="py-8 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-3 md:mb-7 fade-in">Our Building Philosophy</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-5">
//             {philosophy.map((item, index) => (
//               <div key={index} className="bg-white p-4 md:p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300 fade-in">
//                 <div className={`bg-${item.color}-100 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6`}>
//                   <i className={`${item.icon} text-${item.color}-600 text-lg md:text-3xl`}></i>
//                 </div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">{item.title}</h3>
//                 <p className="text-gray-600 text-base md:text-base leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-8 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
//             <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border-l-4 border-amber-500 fade-in">
//               <div className="flex items-center mb-3 md:mb-6">
//                 <div className="bg-amber-500 p-2 md:p-3 rounded-lg mr-2 md:mr-4">
//                   <i className="fas fa-bullseye text-white text-base md:text-xl"></i>
//                 </div>
//                 <h3 className="text-lg md:text-2xl font-bold text-gray-800">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 mb-2 md:mb-4 text-md md:text-base">
//                 To create iconic, reliable, and innovative infrastructure that strengthens communities and meets the highest standards of quality, sustainability, and holistic living.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-md md:text-base">
//                 <li>Deliver exceptional value to our stakeholders</li>
//                 <li>Innovate continuously in construction methodologies</li>
//                 <li>Maintain uncompromising quality standards</li>
//                 <li>Foster sustainable development practices</li>
//               </ul>
//             </div>
//             <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500 fade-in">
//               <div className="flex items-center mb-3 md:mb-6">
//                 <div className="bg-blue-500 p-2 md:p-3 rounded-lg mr-2 md:mr-4">
//                   <i className="fas fa-eye text-white text-base md:text-xl"></i>
//                 </div>
//                 <h3 className="text-lg md:text-2xl font-bold text-gray-800">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 mb-2 md:mb-4 text-md md:text-base">
//                 To be the most trusted and innovative name in infrastructure development, renowned for building timeless structures that inspire future generations and transform urban landscapes.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-md md:text-base">
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















// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';

// const About = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

//   // Animation variants
//   const fadeInUp = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6 }
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   // Founder Profile Component - Only animations added
//   const FounderProfile = () => (
//     <section className="max-w-6xl mx-auto px-4 sm:px-2 py-2 md:py-2">
//       <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8 items-start">
//         {/* Left: Image card with quote below */}
//         <div className="space-y-4 md:space-y-6">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 2,delay: 0.5 }}
//             className="relative rounded-xl overflow-hidden shadow-lg ring-2 md:ring-3 ring-gray-100"
//           >
//             <div className='group-hover:border-2'>
//               <img
//                 src="./images/CEO.png"
//                 alt="Founder"
//                 className="w-full lg:h-[550px] sm:h-full md:h-[480px] object-fit object-cover md:object-top sm:object-top lg:object-fit transition-transform duration-300 hover:scale-105 md:hover:scale-105 sm:hover:scale-105 group-hover:border-2 group-hover:border-orange-500"
//                 style={{ borderRadius: 12 }}
//               />
//             </div>
 
//             {/* Small floating badge */}
//             <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
//               <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-md font-semibold text-gray-700 border border-gray-100">
//                 <div className="uppercase text-sm md:text-lg tracking-wide text-center text-orange-500 font-bold">ANAND</div>
//                 <div className="text-xs text-gray-500 text-center">Founder & Chairman</div>
//               </div>
//             </div>
//           </motion.div>
 
//           {/* Quote below image */}
//           <motion.blockquote 
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 3, delay: 0.2 }}
//             className="border-l-4 border-amber-500 pl-3 md:pl-4 italic text-gray-700 bg-amber-50 rounded-lg p-3 md:p-4 text-sm md:text-base"
//           >
//             "We don't just build structures; we build dreams. Every project is a commitment to excellence, every development a step towards a better tomorrow."
//           </motion.blockquote>
//         </div>
 
//         {/* Right: Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: 50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="pt-4 md:pt-6"
//         >
//           <h2 className="text-2xl md:text-4xl font-bold text-slate-800">Anand</h2>
//           <p className="text-xs md:text-sm text-indigo-700 font-medium mt-1">Founder & Chairman</p>
 
//           {/* Description */}
//           <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 mt-4 md:mt-5">
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               Under the visionary leadership of our Founder, Mr. Anand, the Anand Group was established on the principle of <span className='font-bold text-amber-500'>"Dharmo Rakshati Rakshitah"</span>—that one who upholds righteousness is protected by it.
//               This ethos guides our mission to build transformative and sustainable infrastructure, driven by his engineering expertise and a commitment to ethical development.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               This foundational belief has been the bedrock of our resilience and growth.
//               It has enabled us to expand from a single venture into a diversified global conglomerate, consistently navigating economic cycles to deliver projects that set a benchmark for quality and trust.
//             </p>
//           </div>
 
//           {/* Stats grid */}
//           <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4 max-w-md">
//             <StatCard title="100+" subtitle="Projects" />
//             <StatCard title="1B+" subtitle="Assets" />
//             <StatCard title="7" subtitle="Countries" />
//             <StatCard title="500+" subtitle="Team" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
 
//   // Stat Card Component - Only animations added
//   const StatCard = ({ title, subtitle }) => (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={isInView ? { opacity: 1, scale: 1 } : {}}
//       transition={{ duration: 0.4 }}
//       className="bg-white rounded-lg md:rounded-xl shadow-sm shadow-xl p-4 md:p-6 flex flex-col items-start justify-center ring-1 ring-gray-100 hover:bg-gray-50"
//     >
//       <div className="text-lg md:text-2xl font-bold text-slate-900">{title}</div>
//       <div className="text-xs md:text-sm text-gray-400 mt-1">{subtitle}</div>
//     </motion.div>
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
//   ];
 
//   // Stats Section Component for About Page - Only animations added
//   const StatsSection = () => (
//     <section className="py-8 md:py-16 text-black w-full bg-blue-50 mb-12 md:mb-20">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 text-center">
//           {[
//             { count: 40, label: 'Years of Trust' },
//             { count: 250, label: 'Projects Completed' },
//             { count: 10, label: 'Million+ Sq. Ft. Developed' },
//             { count: 98, label: 'Client Satisfaction %' }
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="p-2 md:p-4"
//             >
//               <div className="text-2xl md:text-5xl lg:text-5xl text-navy-blue font-bold mb-1 md:mb-2">{stat.count}{stat.label.includes('Million') ? 'M+' : '+'}</div>
//               <div className="text-xs md:text-xl text-black">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
 
//   return (
//     <div ref={sectionRef}>
//       {/* Hero Section - Only animations added */}
//       <section className="about-hero text-white py-12 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//             className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-4 md:mb-5 font-sans leading-tight"
//           >
//             धर्मो रक्षति रक्षितः
//           </motion.div>
         
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-base sm:text-lg md:text-2xl text-blue-100 italic mb-4 md:mb-5"
//           >
//             "Dharmo Rakshati Rakshitah"
//           </motion.div>
         
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={isInView ? { scale: 1 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-4 md:mb-5"
//           />
         
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-100"
//           >
//             Building with <span className="text-orange-300">Purpose</span>
//           </motion.h1>
 
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed px-2"
//           >
//             Guided by dharma, driven by excellence in every project we undertake.
//           </motion.p>
//         </div>
//       </section>
 
//       {/* Founder & Chairman Section */}
//       <section className="py-6 md:py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-6 md:mb-12"
//           >
//             <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-3 md:mb-6">Our Leadership</h2>
//           </motion.div>
//           <FounderProfile />
//         </div>
//       </section>
 
//       {/* Our Philosophy Section - Only animations added */}
//       <section className="py-8 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 2, delay: 0.5 }}
//             className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-3 md:mb-7"
//           >
//             Our Building Philosophy
//           </motion.h2>
         
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-5">
//             {philosophy.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white p-4 md:p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
//               >
//                 <div className={`bg-${item.color}-100 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6`}>
//                   <i className={`${item.icon} text-${item.color}-600 text-lg md:text-3xl`}></i>
//                 </div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">{item.title}</h3>
//                 <p className="text-gray-600 text-base md:text-base leading-relaxed">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
 
//       {/* Mission & Vision Section - Only animations added */}
//       <section className="py-8 md:py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16 fade-in">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//               className="bg-white p-4 md:p-8 rounded-xl shadow-lg border-l-4 border-amber-500"
//             >
//               <div className="flex items-center mb-3 md:mb-6">
//                 <div className="bg-amber-500 p-2 md:p-3 rounded-lg mr-2 md:mr-4">
//                   <i className="fas fa-bullseye text-white text-base md:text-xl"></i>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Mission</h3>
//               </div>
//               <p className="text-gray-600 mb-2 md:mb-4 text-md md:text-base">
//                 To create iconic, reliable, and innovative infrastructure that strengthens communities and meets the highest standards of quality, sustainability, and holistic living.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-md md:text-base">
//                 <li>Deliver exceptional value to our stakeholders</li>
//                 <li>Innovate continuously in construction methodologies</li>
//                 <li>Maintain uncompromising quality standards</li>
//                 <li>Foster sustainable development practices</li>
//               </ul>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6 }}
//               className="bg-white p-4 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
//             >
//               <div className="flex items-center mb-3 md:mb-6">
//                 <div className="bg-blue-500 p-2 md:p-3 rounded-lg mr-2 md:mr-4">
//                   <i className="fas fa-eye text-white text-base md:text-xl"></i>
//                 </div>
//                 <h3 className="text-lg md:text-2xl font-bold text-gray-800">Our Vision</h3>
//               </div>
//               <p className="text-gray-600 mb-2 md:mb-4 text-md md:text-base">
//                 To be the most trusted and innovative name in infrastructure development, renowned for building timeless structures that inspire future generations and transform urban landscapes.
//               </p>
//               <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-md md:text-base">
//                 <li>Pioneer sustainable urban development</li>
//                 <li>Expand our footprint across India</li>
//                 <li>Set new benchmarks in construction excellence</li>
//                 <li>Create communities, not just buildings</li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>
 
//       {/* Stats Section */}
//       <StatsSection />
//     </div>
//   );
// };
 
// export default About;

















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
          <div className="relative rounded-xl overflow-hidden shadow-lg ring-2 md:ring-3 ring-gray-100 slide-in-left">
            <img
              src="./images/CEO.png"
              alt="Founder"
              className="w-full lg:h-[550px] sm:h-full md:h-[480px] object-fit object-cover md:object-top sm:object-top lg:object-fit"
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
        <div className="pt-4 md:pt-6 slide-in-right">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800">Anand</h2>
          <p className="text-xs md:text-sm text-indigo-700 font-medium mt-1">Founder & Chairman</p>

          {/* Description */}
          <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 mt-4 md:mt-5">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Under the visionary leadership of our Founder, Mr. Anand, the Anand Group was established on the principle of <span className='font-bold text-amber-500'>"Dharmo Rakshati Rakshitah"</span>—that one who upholds righteousness is protected by it.
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
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm shadow-xl p-4 md:p-6 flex flex-col items-start justify-center ring-1 ring-gray-100 hover:bg-gray-50">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 text-center">
          {[
            { count: 40, label: 'Years of Trust' },
            { count: 250, label: 'Projects Completed' },
            { count: 10, label: 'Million+ Sq. Ft. Developed' },
            { count: 98, label: 'Client Satisfaction %' }
          ].map((stat, index) => (
            <div key={index} className="p-2 md:p-4 fade-in">
              <div className="text-2xl md:text-5xl lg:text-5xl text-navy-blue font-bold mb-1 md:mb-2 counter" data-count={stat.count}>0</div>
              <div className="text-xs md:text-xl text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div>
      {/* Hero Section - Enhanced with Glassy Finish */}
      <section className="relative text-white py-16 md:py-15 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Glassy Container */}
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/20 shadow-2xl mb-6 fade-in">
            {/* Sanskrit Text */}
            <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-4 md:mb-5 font-sans leading-tight fade-in">
              धर्मो रक्षति रक्षितः
            </div>

            {/* Transliteration */}
            <div className="text-base sm:text-lg md:text-2xl text-blue-100 italic mb-4 md:mb-5 fade-in">
              "Dharmo Rakshati Rakshitah"
            </div>

            {/* Separator */}
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-4 md:mb-5 zoom-in"></div>

            {/* Main Title */}
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-100 fade-in">
              Building with <span className="text-orange-300">Purpose</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed px-2 fade-in">
              Guided by dharma, driven by excellence in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Chairman Section - Using the merged component */}
      <section className="py-6 md:py-2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-3 md:mb-6 fade-in pt-5">Our Leadership</h2>
          </div>
          <FounderProfile />
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-3 md:mb-7 zoom-in">Our Building Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-5">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white p-4 md:p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300 fade-in">
                <div className={`bg-${item.color}-100 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6`}>
                  <i className={`${item.icon} text-${item.color}-600 text-lg md:text-3xl`}></i>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">{item.title}</h3>
                <p className="text-gray-600 text-base md:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
            <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border-l-4 border-amber-500 zoom-in">
              <div className="flex items-center mb-3 md:mb-6">
                <div className="bg-amber-500 p-2 md:p-3 rounded-lg mr-2 md:mr-4">
                  <i className="fas fa-bullseye text-white text-base md:text-xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-2 md:mb-4 text-md md:text-base">
                To create iconic, reliable, and innovative infrastructure that strengthens communities and meets the highest standards of quality, sustainability, and holistic living.
              </p>
              <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-md md:text-base">
                <li>Deliver exceptional value to our stakeholders</li>
                <li>Innovate continuously in construction methodologies</li>
                <li>Maintain uncompromising quality standards</li>
                <li>Foster sustainable development practices</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500 zoom-in">
              <div className="flex items-center mb-3 md:mb-6">
                <div className="bg-blue-500 p-2 md:p-3 rounded-lg mr-2 md:mr-4">
                  <i className="fas fa-eye text-white text-base md:text-xl"></i>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-2 md:mb-4 text-md md:text-base">
                To be the most trusted and innovative name in infrastructure development, renowned for building timeless structures that inspire future generations and transform urban landscapes.
              </p>
              <ul className="text-gray-600 list-disc list-inside space-y-1 md:space-y-2 text-md md:text-base">
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







