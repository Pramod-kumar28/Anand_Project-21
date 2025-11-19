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

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const infrastructureSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Road Construction",
      subtitle: "Modern Highway Development",
      features: ["Smart Traffic Management", "Durable Materials", "Eco-friendly Design"],
      timeline: "12-18 Months",
      cta: "View Projects"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Bridge Engineering",
      subtitle: "Advanced Structural Solutions",
      features: ["Precision Engineering", "Safety First Approach", "Sustainable Materials"],
      timeline: "18-24 Months",
      cta: "Explore Designs"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Urban Infrastructure",
      subtitle: "Smart City Development",
      features: ["Integrated Utilities", "Green Spaces", "Digital Infrastructure"],
      timeline: "24-36 Months",
      cta: "See Plans"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Public Works",
      subtitle: "Community Development Projects",
      features: ["Water Management", "Public Facilities", "Environmental Care"],
      timeline: "12-24 Months",
      cta: "Learn More"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % infrastructureSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, infrastructureSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % infrastructureSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + infrastructureSlides.length) % infrastructureSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float-slow sm:-top-20 sm:-right-20 sm:w-60 sm:h-60"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-float-medium sm:-bottom-20 sm:-left-20 sm:w-60 sm:h-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center py-8 sm:py-12 lg:py-16">
          
          {/* Left Side - Content */}
          <div className="text-white relative sm:p-0 px-6 order-2 lg:order-1">
            <div className="relative h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] overflow-hidden">
              {infrastructureSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-4'
                  }`}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 mb-4 sm:mb-6">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm text-blue-100 font-medium">Infrastructure Excellence</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-light mb-4 sm:mb-6 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {slide.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-blue-100">
                        <span className="text-orange-400 mr-2 sm:mr-3 text-sm sm:text-base">✓</span>
                        <span className="text-sm sm:text-base md:text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Timeline & CTA Container */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    {/* Timeline */}
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 min-w-[140px]">
                      <div className="text-xs sm:text-sm text-blue-200 font-medium">Timeline</div>
                      <div className="text-base sm:text-lg md:text-xl font-bold text-white mt-1">{slide.timeline}</div>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-sm sm:text-base md:text-lg flex items-center gap-2 group">
                      <span>{slide.cta}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6 lg:hidden">
              {infrastructureSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-orange-400 w-6'
                      : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-1 lg:order-2">
            {/* Mobile Navigation Buttons */}
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <button 
                onClick={prevSlide}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-sm">
                  {currentSlide + 1} / {infrastructureSlides.length}
                </span>
              </div>

              <button 
                onClick={nextSlide}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation Buttons */}
            <div className="hidden lg:block absolute top-1/2 -left-6 transform -translate-y-1/2 z-20">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Main Image */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {infrastructureSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === currentSlide
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Desktop Slide Indicator */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full hidden lg:block">
                    <span className="text-white text-sm">
                      {currentSlide + 1} / {infrastructureSlides.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Thumbnails - Desktop Only */}
            <div className="hidden lg:flex justify-center space-x-3 mt-4">
              {infrastructureSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 transform ${
                    index === currentSlide
                      ? 'border-orange-400 scale-110 shadow-lg'
                      : 'border-white/30 hover:border-white/50 hover:scale-105'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        .animate-float-slow { 
          animation: float-slow 8s ease-in-out infinite; 
        }
        .animate-float-medium { 
          animation: float-medium 6s ease-in-out infinite; 
        }
        
        /* Ensure proper text rendering */
        h1 {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        /* Smooth transitions for all interactive elements */
        button, .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;