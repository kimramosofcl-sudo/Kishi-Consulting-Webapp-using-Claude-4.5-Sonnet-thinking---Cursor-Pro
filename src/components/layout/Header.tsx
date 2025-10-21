'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
          current = section.getAttribute('id') || 'home';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-card' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-5 flex justify-between items-center py-5">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
        >
          Kishi
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors duration-300 relative pb-1 ${
                  isScrolled ? 'text-textDark' : 'text-white'
                } ${
                  activeSection === link.href.slice(1) 
                    ? 'after:w-full' 
                    : 'after:w-0 hover:after:w-full'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-4">
            <Button href="#contact" variant="primary">
              Schedule Consultation
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 transition-colors duration-300 ${
              isScrolled ? 'bg-primary' : 'bg-white'
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-colors duration-300 ${
              isScrolled ? 'bg-primary' : 'bg-white'
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-colors duration-300 ${
              isScrolled ? 'bg-primary' : 'bg-white'
            }`}
          />
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 w-[70%] max-w-[350px] h-screen bg-white flex flex-col justify-center items-center transition-all duration-300 shadow-[-5px_0_15px_rgba(0,0,0,0.1)] md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-textDark font-medium text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button href="#contact" variant="primary">
                Schedule Consultation
              </Button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-[-1]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

