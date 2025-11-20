// import React from 'react';
// import { Link } from 'react-router-dom';

// const HeroSlider = ({ slides, currentSlide, goToSlide }) => (
//   <section className="hero-slider">
//     {slides.map((slide, index) => (
//       <div 
//         key={slide.id}
//         className={`slide ${index === currentSlide ? 'active' : ''}`}
//         style={{ backgroundImage: `url(${slide.background})` }}
//       >
//         <div className="slide-content">
//           <h1 className="text-3xl md:text-4xl font-bold mb-6 fade-in">{slide.title}</h1>
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

// export default HeroSlider;















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const HeroSlider = ({ slides, currentSlide, goToSlide, autoPlay = true, interval = 5000 }) => {
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     if (autoPlay) {
//       const timer = setInterval(() => {
//         handleNextSlide();
//       }, interval);
//       return () => clearInterval(timer);
//     }
//   }, [currentSlide, autoPlay, interval]);

//   const handleNextSlide = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       goToSlide((currentSlide + 1) % slides.length);
//       setIsAnimating(false);
//     }, 500);
//   };

//   const handlePrevSlide = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       goToSlide((currentSlide - 1 + slides.length) % slides.length);
//       setIsAnimating(false);
//     }, 500);
//   };

//   const handleIndicatorClick = (index) => {
//     if (index !== currentSlide) {
//       setIsAnimating(true);
//       setTimeout(() => {
//         goToSlide(index);
//         setIsAnimating(false);
//       }, 500);
//     }
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <div className="relative w-full h-full">
//         {slides.map((slide, index) => (
//           <div 
//             key={slide.id}
//             className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out flex items-center justify-center
//               ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
//             `}
//             style={{ backgroundImage: `url(${slide.background})` }}
//           >
//             {/* Gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
            
//             <div className="relative z-10 text-center text-white max-w-4xl px-6">
//               {/* Animated title */}
//               <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${
//                 index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}>
//                 {slide.title}
//               </h1>
              
//               {/* Animated subtitle */}
//               <p className={`text-xl md:text-2xl mb-10 transition-all duration-700 delay-300 ${
//                 index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}>
//                 {slide.subtitle}
//               </p>
              
//               {/* Animated buttons */}
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 {slide.buttons.map((button, btnIndex) => (
//                   <Link 
//                     key={btnIndex}
//                     to={button.link}
//                     className={`relative px-8 py-4 font-semibold rounded-full overflow-hidden transition-all duration-500 group ${
//                       index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                     } ${
//                       button.type === 'primary' 
//                         ? 'bg-amber-500 hover:bg-amber-600 text-white border-2 border-transparent' 
//                         : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900'
//                     } transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl`}
//                     style={{
//                       transitionDelay: index === currentSlide ? `${400 + btnIndex * 100}ms` : '0ms'
//                     }}
//                   >
//                     <span className="relative z-10">{button.text}</span>
//                     {/* Shine effect */}
//                     <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full"></div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button 
//         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:bg-white/20 hover:scale-110 z-20"
//         onClick={handlePrevSlide}
//       >
//         ‹
//       </button>
      
//       <button 
//         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:bg-white/20 hover:scale-110 z-20"
//         onClick={handleNextSlide}
//       >
//         ›
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button 
//             key={index}
//             className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
//               index === currentSlide 
//                 ? 'border-amber-500 bg-amber-500 scale-125' 
//                 : 'border-white/50 bg-transparent hover:border-white'
//             } hover:scale-110`}
//             onClick={() => handleIndicatorClick(index)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;












import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const infrastructureSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Road Construction",
      subtitle: "Modern Highway Development",
      description: "State-of-the-art road infrastructure with smart traffic management systems and durable materials for long-lasting performance.",
      features: ["Smart Traffic Management", "Durable Materials", "Eco-friendly Design", "Advanced Engineering"],
      timeline: "12-18 Months",
      cta: "View Projects"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Bridge Engineering",
      subtitle: "Advanced Structural Solutions",
      description: "Precision-engineered bridges with safety-first approach and sustainable materials for reliable infrastructure.",
      features: ["Precision Engineering", "Safety First Approach", "Sustainable Materials", "Quality Assurance"],
      timeline: "18-24 Months",
      cta: "Explore Designs"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Urban Infrastructure",
      subtitle: "Smart City Development",
      description: "Comprehensive urban development with integrated utilities and digital infrastructure for modern cities.",
      features: ["Integrated Utilities", "Green Spaces", "Digital Infrastructure", "Smart Solutions"],
      timeline: "24-36 Months",
      cta: "See Plans"
    },
    {
      id: 4,
      image: "https://media.istockphoto.com/id/2226599963/photo/high-rise-apartment-buildings-in-bengaluru-india-viewed-from-above-under-a-dramatic-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bh9uE9GnrU4kga3DCeR2tZ6rhI_N7j4bma2RUcppa1w=",
      title: "Public Works",
      subtitle: "Community Development Projects",
      description: "Sustainable public infrastructure projects focusing on environmental care and community welfare.",
      features: ["Water Management", "Public Facilities", "Environmental Care", "Community Focus"],
      timeline: "12-24 Months",
      cta: "Learn More"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % infrastructureSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovering, infrastructureSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % infrastructureSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + infrastructureSlides.length) % infrastructureSlides.length);
  };

  const heroVariants = {
    enter: { opacity: 0, x: 300 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 }
  };

  const contentVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Carousel Container */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[500px]">
              
              {/* Image Slider */}
              <div className="relative h-48 md:h-64 lg:h-auto lg:w-1/2 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    variants={heroVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${infrastructureSlides[currentSlide].image})`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30"></div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Navigation Dots */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {infrastructureSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-orange-500' : 'bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center lg:text-left"
                  >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-4 md:mb-6">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-xs md:text-sm text-blue-700 font-medium">Infrastructure Excellence</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-800 mb-2 md:mb-3 leading-tight">
                      {infrastructureSlides[currentSlide].title}
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-base md:text-lg text-orange-600 font-semibold mb-2 md:mb-3 leading-tight">
                      {infrastructureSlides[currentSlide].subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                      {infrastructureSlides[currentSlide].description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4 md:mb-6">
                      {infrastructureSlides[currentSlide].features.map((feature, index) => (
                        <div key={index} className="flex items-center text-xs md:text-sm text-gray-700">
                          <span className="text-green-500 mr-1">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Timeline & CTA Container */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                      {/* Timeline */}
                      <div className="bg-blue-50 px-4 py-3 rounded-xl border border-blue-200 min-w-[140px]">
                        <div className="text-xs md:text-sm text-blue-700 font-medium">Timeline</div>
                        <div className="text-base md:text-lg font-bold text-blue-800 mt-1">
                          {infrastructureSlides[currentSlide].timeline}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base flex items-center gap-2 group w-full sm:w-auto justify-center">
                        <span>{infrastructureSlides[currentSlide].cta}</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Brand Tagline */}
                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
                  <p className="text-xs md:text-sm text-gray-500 text-center lg:text-left leading-tight">
                    <span className="text-orange-500 font-semibold">"Building Tomorrow's Infrastructure Today"</span> - Quality, Reliability, Excellence
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Custom CSS for exact font matching */}
      <style jsx>{`
        /* Font family matching the reference design */
        .font-family-inherit {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        /* Custom animations */
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(180deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }

        /* Smooth transitions */
        * {
          transition-property: color, background-color, border-color, transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;