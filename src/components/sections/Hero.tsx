'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-primary to-accent min-h-screen flex items-center relative pt-20"
    >
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-white text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Strategic Financial Guidance for Growing Businesses
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-95 max-w-3xl mx-auto">
            Expert consulting in SOX compliance, accounting services, and risk management to help
            your business thrive with confidence and clarity.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button href="#contact" variant="primary">
              Get Started
            </Button>
            <Button href="#services" variant="outline">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

