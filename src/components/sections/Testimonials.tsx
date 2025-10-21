'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/ui/TestimonialCard';

const testimonials = [
  {
    rating: 5,
    text: "Kishi transformed our approach to SOX compliance. Their expertise and attention to detail gave us the confidence we needed during our audit. Highly recommend their services!",
    authorName: 'Jennifer Davis',
    authorTitle: 'CFO, TechVision Inc.',
    authorInitials: 'JD',
  },
  {
    rating: 5,
    text: "Working with Kishi has been a game-changer for our business. Their financial planning and risk assessment services helped us navigate a challenging market environment successfully.",
    authorName: 'Michael Chen',
    authorTitle: 'CEO, Summit Ventures',
    authorInitials: 'MC',
  },
  {
    rating: 5,
    text: "The team at Kishi is incredibly professional and knowledgeable. They simplified complex accounting processes and provided insights that directly improved our bottom line.",
    authorName: 'Sarah Rodriguez',
    authorTitle: 'Owner, Coastal Retail Group',
    authorInitials: 'SR',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-bgLight">
      <div className="container mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-primary mb-4 text-center font-bold"
        >
          Client Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-textLight text-center mb-12 max-w-3xl mx-auto"
        >
          Don&apos;t just take our word for it – hear from our satisfied clients
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              authorName={testimonial.authorName}
              authorTitle={testimonial.authorTitle}
              authorInitials={testimonial.authorInitials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

