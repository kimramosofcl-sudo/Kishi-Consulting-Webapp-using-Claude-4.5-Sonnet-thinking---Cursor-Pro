'use client';

import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      alert('Please enter your email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Log the response for debugging
        console.log('Newsletter subscription response:', data);
        
        // Show appropriate message based on what emails were sent
        if (data.confirmationSent && data.notificationSent) {
          alert('Thank you for subscribing! Please check your email for confirmation.');
        } else if (data.notificationSent && !data.confirmationSent) {
          alert('Subscription received! Note: There was an issue sending the confirmation email. Please check your spam folder or contact us.');
        } else if (data.confirmationSent && !data.notificationSent) {
          alert('Thank you for subscribing! Please check your email for confirmation.');
        } else {
          alert('Subscription recorded, but there was an issue with email delivery. We will contact you shortly.');
        }
        setEmail('');
      } else {
        alert(`Error: ${data.error || 'Failed to subscribe. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
  };

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-secondary font-semibold text-lg">Kishi Consulting</h3>
            <p className="opacity-90 leading-relaxed">
              Your trusted partner in financial excellence and compliance. Building stronger
              businesses through strategic financial guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-secondary font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    onClick={(e) =>
                      handleNavClick(e, `#${item.toLowerCase().replace(/\s+/g, '')}`)
                    }
                    className="opacity-90 hover:opacity-100 hover:text-secondary hover:pl-1 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-secondary font-semibold text-lg">Legal</h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="opacity-90 hover:opacity-100 hover:text-secondary hover:pl-1 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-secondary font-semibold text-lg">Newsletter</h3>
            <p className="opacity-90 mb-4">Stay updated with our latest insights and news</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2.5 rounded-lg border-none text-base"
                aria-label="Newsletter email"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 bg-secondary text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-secondary-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 opacity-80">
          <p>&copy; 2025 Kishi Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

