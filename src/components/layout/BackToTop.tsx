'use client';

import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary text-2xl z-[999] transition-all duration-300 hover:bg-secondary-dark hover:-translate-y-1 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

