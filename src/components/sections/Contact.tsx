'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { ContactFormData, FormErrors } from '@/types';

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'sox', label: 'SOX Consulting & Compliance' },
  { value: 'finance', label: 'Finance & Accounting Services' },
  { value: 'risk', label: 'Risk Assessment' },
  { value: 'other', label: 'Other' },
];

const contactInfo = [
  {
    icon: '📞',
    title: 'Phone',
    content: '(555) 123-4567',
  },
  {
    icon: '✉️',
    title: 'Email',
    content: 'contact@kishi.com',
  },
  {
    icon: '🕐',
    title: 'Business Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM',
  },
  {
    icon: '📍',
    title: 'Office Location',
    content: '123 Financial Plaza, Suite 500\nNew York, NY 10001',
  },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-primary mb-4 text-center font-bold"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-textLight text-center mb-12 max-w-3xl mx-auto"
        >
          Ready to take your business to the next level? Let&apos;s start a conversation.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bgLight p-10 rounded-lg"
          >
            <form onSubmit={handleSubmit}>
              <Input
                label="Full Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <Input
                label="Email Address"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
              <Input
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                optional
              />
              <Select
                label="Service Interested In"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                error={errors.service}
                options={serviceOptions}
                required
              />
              <Textarea
                label="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
              />
              <Button type="submit" variant="primary" fullWidth>
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <h3 className="text-3xl font-semibold text-primary mb-4">Contact Information</h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-primary font-semibold mb-1 text-lg">{item.title}</h4>
                  <p className="text-textLight whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-1"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-secondary hover:-translate-y-1"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

