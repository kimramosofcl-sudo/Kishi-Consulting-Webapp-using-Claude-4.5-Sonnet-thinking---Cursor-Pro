'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ui/ServiceCard';

const services = [
  {
    icon: '📋',
    title: 'SOX Consulting & Compliance',
    description:
      'Navigate the complexities of Sarbanes-Oxley compliance with confidence. Our experts ensure your organization meets all regulatory requirements while implementing efficient internal controls and governance frameworks.',
  },
  {
    icon: '💼',
    title: 'Finance & Accounting Services',
    description:
      'Comprehensive financial management solutions including bookkeeping, financial reporting, budgeting, forecasting, and strategic planning to drive your business growth and profitability.',
  },
  {
    icon: '🛡️',
    title: 'Risk Assessment',
    description:
      "Identify, evaluate, and mitigate financial risks before they impact your business. Our thorough risk assessment services help you make informed decisions and protect your organization's financial health.",
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-bgLight">
      <div className="container mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-primary mb-4 text-center font-bold"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-textLight text-center mb-12 max-w-3xl mx-auto"
        >
          Comprehensive financial consulting solutions tailored to your business needs
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

