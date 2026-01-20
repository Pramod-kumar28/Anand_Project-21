import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const infrastructureSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: " Anand Infra: Complete Construction Specialists",
      subtitle: "Modern Highway Development",
      description: "State of the art road infrastructure with smart traffic management systems and durable materials for long lasting performance.",
      features: ["Smart Traffic Management", "Durable Materials", "Eco-friendly Design", "Advanced Engineering"],

      cta: "View services"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Bridge Engineering",
      subtitle: "Advanced Structural Solutions",
      description: "Precision engineered bridges with safety first approach and sustainable materials for reliable infrastructure.",
      features: ["Precision Engineering", "Safety First Approach", "Sustainable Materials", "Quality Assurance"],

      cta: "View Services"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Urban Infrastructure",
      subtitle: "Smart City Development",
      description: "Comprehensive urban development with integrated utilities and digital infrastructure for modern cities.",
      features: ["Integrated Utilities", "Green Spaces", "Digital Infrastructure", "Smart Solutions"],

      cta: "View Services"
    },
    {
      id: 4,
      image: "https://media.istockphoto.com/id/2226599963/photo/high-rise-apartment-buildings-in-bengaluru-india-viewed-from-above-under-a-dramatic-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bh9uE9GnrU4kga3DCeR2tZ6rhI_N7j4bma2RUcppa1w=",
      title: "Public Works",
      subtitle: "Community Development Projects",
      description: "Sustainable public infrastructure projects focusing on environmental care and community welfare.",
      features: ["Water Management", "Public Facilities", "Environmental Care", "Community Focus"],

      cta: "View Services"
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
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-orange-500' : 'bg-white/60'
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


                      {/* CTA Button */}
                      <Link
                        to="/services"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base flex items-center gap-2 group w-full sm:w-auto justify-center"
                      >
                        <span>{infrastructureSlides[currentSlide].cta}</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                      </div>


                  </motion.div>
                </AnimatePresence>


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