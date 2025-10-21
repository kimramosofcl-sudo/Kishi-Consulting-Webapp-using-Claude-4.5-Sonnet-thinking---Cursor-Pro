'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCardProps } from '@/types';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  text,
  authorName,
  authorTitle,
  authorInitials,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-10 rounded-lg shadow-card relative"
    >
      <div className="absolute top-5 left-5 text-8xl text-secondary opacity-20 font-serif">
        &ldquo;
      </div>
      <div className="text-secondary mb-4 text-xl">
        {'★'.repeat(rating)}
      </div>
      <p className="text-textLight mb-6 italic leading-relaxed">{text}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {authorInitials}
        </div>
        <div>
          <h4 className="text-primary font-semibold">{authorName}</h4>
          <p className="text-textLight text-sm">{authorTitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

