# Kishi Consulting - Next.js Application

A modern, professional web application for Kishi Consulting, a financial consulting firm specializing in SOX compliance, accounting services, and risk assessment.

## Features

- ✨ Modern, responsive design built with Next.js 14+ App Router
- 🎨 Styled with Tailwind CSS for a professional corporate aesthetic
- 🎭 Smooth animations powered by Framer Motion
- 📱 Fully responsive across mobile, tablet, and desktop
- ♿ Accessible with semantic HTML and ARIA labels
- 🔍 SEO optimized with proper meta tags
- 📝 Form validation for contact and newsletter forms
- 🚀 TypeScript for type safety
- 🎯 Smooth scroll navigation with active link highlighting

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── error.tsx          # Error boundary
│   └── loading.tsx        # Loading state
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Footer with newsletter
│   │   └── BackToTop.tsx  # Back to top button
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Services.tsx   # Services showcase
│   │   ├── About.tsx      # About section
│   │   ├── Testimonials.tsx # Client testimonials
│   │   └── Contact.tsx    # Contact form
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── ServiceCard.tsx
│       ├── TestimonialCard.tsx
│       ├── StatBox.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       └── Textarea.tsx
└── types/                 # TypeScript types
    └── index.ts
```

## Key Features Explained

### Responsive Navigation
- Sticky header that changes style on scroll
- Mobile menu with smooth transitions
- Active link highlighting based on scroll position

### Smooth Animations
- Scroll-triggered fade-in animations using Framer Motion
- Hover effects on cards and buttons
- Smooth scroll behavior for navigation

### Form Validation
- Client-side validation for contact form
- Real-time error messages
- Email format validation
- Required field checks

### Accessibility
- Semantic HTML elements
- ARIA labels for screen readers
- Keyboard navigation support
- Focus visible styles

## Color Palette

- Primary: `#1a3a52` (Navy Blue)
- Secondary: `#d4af37` (Gold)
- Accent: `#2c5f7f` (Blue)
- Text Dark: `#2d2d2d`
- Text Light: `#666666`
- Background Light: `#f8f9fa`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Kishi Consulting. All rights reserved.

