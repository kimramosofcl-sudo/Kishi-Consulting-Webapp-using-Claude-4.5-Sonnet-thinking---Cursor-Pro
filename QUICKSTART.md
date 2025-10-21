# Quick Start Guide - Kishi Consulting

## Prerequisites

Before you begin, ensure you have:
- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)

## Installation & Setup

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This installs:
- Next.js 14.2.0
- React 18.3.0
- TypeScript 5.3.3
- Tailwind CSS 3.4.1
- Framer Motion 11.0.0

**Expected time:** 1-2 minutes

### Step 2: Start Development Server

```bash
npm run dev
```

**Output:**
```
> kishi-consulting@1.0.0 dev
> next dev

  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Ready in 2.1s
```

### Step 3: Open in Browser

Navigate to: **http://localhost:3000**

You should see the Kishi Consulting homepage with:
- ✅ Hero section with gradient background
- ✅ Services section with 3 cards
- ✅ About section with stats
- ✅ Testimonials section
- ✅ Contact form
- ✅ Responsive navigation

---

## Testing Features

### 1. Navigation

- Click navigation links → Should smoothly scroll to sections
- Scroll down → Header should become white with shadow
- Click mobile menu (on small screen) → Menu slides in from right

### 2. Forms

**Contact Form:**
1. Go to Contact section
2. Fill out all required fields
3. Click "Send Message"
4. Check browser console for form data
5. Should see success alert

**Newsletter:**
1. Scroll to footer
2. Enter email in newsletter field
3. Click "Subscribe"
4. Check console for logged email
5. Should see success alert

### 3. Animations

- Scroll through the page
- Sections should fade in as they enter viewport
- Hover over service cards → Should lift up
- Hover over buttons → Should change color and lift

### 4. Responsive Design

Test at these breakpoints:
- **Mobile:** 375px width
- **Tablet:** 768px width
- **Desktop:** 1200px+ width

---

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## Project Structure at a Glance

```
src/
├── app/
│   ├── layout.tsx        # Root layout + SEO
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── components/
│   ├── layout/           # Header, Footer, BackToTop
│   ├── sections/         # Hero, Services, About, etc.
│   └── ui/               # Buttons, Cards, Forms
├── types/                # TypeScript types
├── hooks/                # Custom hooks
└── utils/                # Helper functions
```

---

## Making Your First Change

### Example: Change Hero Title

1. Open `src/components/sections/Hero.tsx`
2. Find line with `<h1>` tag:
   ```tsx
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
     Strategic Financial Guidance for Growing Businesses
   </h1>
   ```
3. Change the text to your preference
4. Save file
5. Browser auto-refreshes with your changes ✨

### Example: Add a New Service

1. Open `src/components/sections/Services.tsx`
2. Find the `services` array
3. Add a new object:
   ```tsx
   {
     icon: '💡',
     title: 'Business Consulting',
     description: 'Your description here...',
   }
   ```
4. Save and see the new card appear!

---

## Customization Quick Reference

| What to Change | File to Edit |
|---------------|--------------|
| Colors | `tailwind.config.ts` |
| Logo | `src/components/layout/Header.tsx` |
| Hero text | `src/components/sections/Hero.tsx` |
| Services | `src/components/sections/Services.tsx` |
| About content | `src/components/sections/About.tsx` |
| Testimonials | `src/components/sections/Testimonials.tsx` |
| Contact info | `src/components/sections/Contact.tsx` |
| Footer links | `src/components/layout/Footer.tsx` |
| SEO metadata | `src/app/layout.tsx` |

---

## Troubleshooting

### Port Already in Use

```bash
npm run dev -- -p 3001
```

Then visit: http://localhost:3001

### Changes Not Showing

1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run dev
   ```

### TypeScript Errors

Run type check:
```bash
npx tsc --noEmit
```

### Styling Not Working

Make sure Tailwind is processing:
1. Check `tailwind.config.ts` has correct content paths
2. Restart dev server
3. Clear browser cache

---

## Next Steps

1. **Read Documentation:**
   - `README.md` - Project overview
   - `SETUP.md` - Detailed setup guide
   - `COMPONENTS.md` - Component documentation

2. **Customize Content:**
   - Update company information
   - Add real images
   - Modify service offerings
   - Update contact details

3. **Add Backend:**
   - Create API routes in `src/app/api/`
   - Integrate email service for forms
   - Add database if needed

4. **Deploy:**
   - Deploy to Vercel (recommended)
   - Or any Node.js hosting platform

---

## Getting Help

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion Docs:** https://www.framer.com/motion/

---

**You're all set! Happy coding! 🚀**

If you see the Kishi Consulting homepage at http://localhost:3000, everything is working correctly.

