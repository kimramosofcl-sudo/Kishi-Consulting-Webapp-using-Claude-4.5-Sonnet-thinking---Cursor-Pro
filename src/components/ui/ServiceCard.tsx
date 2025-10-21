'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCardProps } from '@/types';

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="bg-white p-10 rounded-lg shadow-card transition-all duration-300 hover:shadow-cardHover border-t-4 border-secondary"
    >
      <div className="w-[70px] h-[70px] bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 text-4xl">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-primary mb-4">{title}</h3>
      <p className="text-textLight leading-relaxed">{description}</p>
    </motion.div>
  );
};

