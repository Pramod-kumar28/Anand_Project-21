
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
import FeaturedServicesSection from '../components/home/FeaturedProjectsSection';

const Home = () => {
  // Remove the old slider state and functionality since HeroSlider now manages its own state
  const [mounted, setMounted] = useState(false);

  // Counter animation and scroll effects
  useEffect(() => {
    // Set mounted to true after component mounts
    setMounted(true);

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

    // Initialize animations with a slight delay to ensure HeroSlider is fully loaded
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

  return (
    <div className="App">
      {/* HeroSlider now manages its own state internally */}
      <HeroSlider 
        autoPlay={true}
        showNavigation={true}
      />
      
      {/* Add loading state if needed */}
     
     
          <IntroductionSection />
          <ValuesSection />
          <PromiseSection />
          <TimelineSection />
          <FeaturedServicesSection />
          <TrustedPartnersSection />
          <SustainabilitySection />
          <ParallaxSection />
          <TestimonialsSection />
          <CTASection />
        
    </div>
  );
};

export default Home;















