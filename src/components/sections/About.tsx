'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StatBox } from '@/components/ui/StatBox';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-6 font-bold">
              About Kishi Consulting
            </h2>
            <p className="text-textLight mb-6 leading-relaxed">
              Founded in 2008, Kishi Consulting has been a trusted partner for businesses seeking
              expert financial guidance and compliance solutions. Our team of certified
              professionals brings decades of combined experience in finance, accounting, and
              regulatory compliance.
            </p>
            <p className="text-textLight mb-6 leading-relaxed">
              We understand that every business faces unique financial challenges. That&apos; swhy we
              take a personalized approach, working closely with each client to develop customized
              strategies that align with their goals and drive sustainable growth.
            </p>
            <p className="text-textLight mb-8 leading-relaxed">
              Our commitment to excellence, integrity, and client success has made us a leading
              choice for companies ranging from emerging startups to established enterprises
              seeking reliable financial advisory services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              <StatBox number="15+" label="Years of Excellence" />
              <StatBox number="500+" label="Clients Served" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary to-accent rounded-lg p-5 flex items-center justify-center min-h-[400px] text-white text-xl text-center"
          >
            <p>
              📊 Professional Team Photo
              <br />
              Expert Financial Consultants
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

