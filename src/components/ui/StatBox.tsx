'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StatBoxProps } from '@/types';

export const StatBox: React.FC<StatBoxProps> = ({ number, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center p-6 bg-bgLight rounded-lg"
    >
      <span className="text-5xl font-bold text-secondary block">{number}</span>
      <span className="text-textLight text-sm mt-2 block">{label}</span>
    </motion.div>
  );
};

