import React from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = ({ slides, currentSlide, goToSlide }) => (
  <section className="hero-slider">
    {slides.map((slide, index) => (
      <div 
        key={slide.id}
        className={`slide ${index === currentSlide ? 'active' : ''}`}
        style={{ backgroundImage: `url(${slide.background})` }}
      >
        <div className="slide-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">{slide.title}</h1>
          <p className="text-xl md:text-2xl mb-10 fade-in">{slide.subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {slide.buttons.map((button, btnIndex) => (
              <Link 
                key={btnIndex}
                to={button.link}
                className={`${
                  button.type === 'primary' 
                    ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                    : 'bg-transparent border-2 border-white hover:bg-white hover:text-navy-blue text-white'
                } font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 fade-in`}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    ))}
    
    {/* Slide Indicators */}
    <div className="slide-indicators">
      {slides.map((_, index) => (
        <div 
          key={index}
          className={`indicator ${index === currentSlide ? 'active' : ''}`}
          onClick={() => goToSlide(index)}
        ></div>
      ))}
    </div>
  </section>
);

export default HeroSlider;