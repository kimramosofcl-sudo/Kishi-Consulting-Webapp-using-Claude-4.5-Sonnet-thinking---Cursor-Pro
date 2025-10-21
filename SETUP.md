# Setup Instructions for Kishi Consulting Next.js Application

## Quick Start

Follow these steps to get the application running on your local machine:

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14.2.0
- React 18.3.0
- TypeScript 5.3.3
- Tailwind CSS 3.4.1
- Framer Motion 11.0.0

### 2. Run Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Features

### ✅ Implemented Features

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)

2. **Navigation**
   - Sticky header with scroll effect
   - Mobile hamburger menu
   - Active section highlighting
   - Smooth scroll to sections

3. **Animations**
   - Framer Motion scroll animations
   - Hover effects on cards and buttons
   - Fade-in effects on viewport entry

4. **Forms**
   - Contact form with validation
   - Newsletter subscription
   - Error handling and feedback
   - Console logging for form submissions

5. **Sections**
   - Hero with gradient background
   - Services showcase (3 cards)
   - About with company stats
   - Client testimonials (3 testimonials)
   - Contact form with info

6. **Accessibility**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation
   - Focus visible styles

## File Structure Overview

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main home page
│   │   ├── globals.css         # Global styles
│   │   ├── error.tsx           # Error boundary
│   │   ├── loading.tsx         # Loading state
│   │   └── manifest.ts         # PWA manifest
│   ├── components/
│   │   ├── layout/             # Header, Footer, BackToTop
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Reusable components
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript interfaces
│   └── utils/                  # Utility functions
├── public/                     # Static assets
├── package.json
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.mjs             # Next.js configuration
└── README.md
```

## Customization Guide

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: { DEFAULT: '#1a3a52' },    // Navy blue
  secondary: { DEFAULT: '#d4af37' },  // Gold
  accent: { DEFAULT: '#2c5f7f' },     // Accent blue
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update navigation links in `src/components/layout/Header.tsx`

### Modifying Content

- **Services:** Edit `src/components/sections/Services.tsx`
- **Testimonials:** Edit `src/components/sections/Testimonials.tsx`
- **Contact Info:** Edit `src/components/sections/Contact.tsx`
- **Company Stats:** Edit `src/components/sections/About.tsx`

## Development Tips

### TypeScript

All components are typed. Main types are in `src/types/index.ts`

### Tailwind CSS

Use Tailwind utility classes. Custom colors are already configured.

### Framer Motion

Animations use `whileInView` for scroll-triggered effects with `viewport={{ once: true }}`

### Form Handling

Forms currently log to console. To add backend integration:
1. Create API routes in `src/app/api/`
2. Update form submission handlers in `Contact.tsx` and `Footer.tsx`

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Performance Optimization

The application includes:
- Next.js automatic code splitting
- Image optimization ready (add Next Image when needed)
- CSS purging via Tailwind
- Production build optimization

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the application:
```bash
npm run build
```

Deploy the `.next` folder and `public` directory.

## Troubleshooting

### Port Already in Use

```bash
npm run dev -- -p 3001
```

### Type Errors

```bash
npm run build
```

Check TypeScript errors before deployment.

### Styling Issues

Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Happy coding! 🚀

