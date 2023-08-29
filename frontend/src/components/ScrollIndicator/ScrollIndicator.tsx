import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  const handleScroll = () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator-container">
      <div className="scroll-indicator-bar">
        <div className="scroll-indicator-overlay" style={{ transform: `translateX(${scrollWidth})%` }}></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
