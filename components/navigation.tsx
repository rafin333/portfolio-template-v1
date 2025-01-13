"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      
      const progress = (scrollPosition / documentHeight) * 100;
      setScrollProgress(progress);

      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['about', 'projects', 'skills', 'contact'];

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      
      <div className="flex w-full h-16">
        {sections.map((section, index) => (
          <a
            key={section}
            href={`#${section}`}
            className="relative flex-1 flex items-center justify-center group"
          >
            <div 
              className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300 ${
                scrollProgress >= (index / sections.length) * 100 ? 'opacity-100' : 'opacity-30'
              }`}
              style={{ 
                width: scrollProgress > (index + 1) / sections.length * 100 
                  ? '100%' 
                  : scrollProgress < (index / sections.length) * 100
                  ? '0%'
                  : `${(scrollProgress - (index / sections.length) * 100) * sections.length}%`
              }}
            />
            <span 
              className={`text-sm font-medium capitalize transition-colors ${
                activeSection === section 
                  ? 'text-primary' 
                  : 'text-muted-foreground group-hover:text-primary'
              }`}
            >
              {section}
            </span>
          </a>
        ))}
      </div>
      
      
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <ThemeToggle />
      </div>
    </motion.div>
  );
}