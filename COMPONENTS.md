# Component Documentation

## Table of Contents

1. [Layout Components](#layout-components)
2. [Section Components](#section-components)
3. [UI Components](#ui-components)
4. [Hooks & Utils](#hooks--utils)

---

## Layout Components

### Header

**Location:** `src/components/layout/Header.tsx`

**Purpose:** Main navigation header with responsive menu

**Features:**
- Sticky positioning with scroll-triggered styling
- Desktop horizontal navigation
- Mobile hamburger menu with overlay
- Active section highlighting
- Smooth scroll to sections

**State Management:**
- `isScrolled`: Changes header background when scrolling
- `isMobileMenuOpen`: Controls mobile menu visibility
- `activeSection`: Tracks current section in viewport

**Props:** None (uses internal state)

---

### Footer

**Location:** `src/components/layout/Footer.tsx`

**Purpose:** Site footer with links and newsletter subscription

**Features:**
- Company information
- Quick navigation links
- Legal links
- Newsletter subscription form
- Responsive grid layout

**State Management:**
- `email`: Newsletter email input value

**Props:** None

---

### BackToTop

**Location:** `src/components/layout/BackToTop.tsx`

**Purpose:** Floating button to scroll to page top

**Features:**
- Appears after scrolling 300px
- Smooth scroll animation
- Hover effects

**State Management:**
- `isVisible`: Shows/hides based on scroll position

**Props:** None

---

## Section Components

### Hero

**Location:** `src/components/sections/Hero.tsx`

**Purpose:** Landing section with main value proposition

**Features:**
- Gradient background
- Animated entrance with Framer Motion
- Call-to-action buttons
- Full viewport height

**Props:** None

**Content:**
- Heading text
- Description paragraph
- Two CTA buttons

---

### Services

**Location:** `src/components/sections/Services.tsx`

**Purpose:** Showcase company services

**Features:**
- Grid layout (responsive)
- Three service cards
- Scroll-triggered animations

**Props:** None

**Service Cards:**
1. SOX Consulting & Compliance
2. Finance & Accounting Services
3. Risk Assessment

---

### About

**Location:** `src/components/sections/About.tsx`

**Purpose:** Company information and statistics

**Features:**
- Two-column layout (responsive)
- Company description
- Statistics boxes (Years, Clients)
- Image placeholder

**Props:** None

**Stats:**
- 15+ Years of Excellence
- 500+ Clients Served

---

### Testimonials

**Location:** `src/components/sections/Testimonials.tsx`

**Purpose:** Display client testimonials

**Features:**
- Grid layout for testimonial cards
- Three client testimonials
- Rating stars

**Props:** None

**Testimonials:**
1. Jennifer Davis - CFO, TechVision Inc.
2. Michael Chen - CEO, Summit Ventures
3. Sarah Rodriguez - Owner, Coastal Retail Group

---

### Contact

**Location:** `src/components/sections/Contact.tsx`

**Purpose:** Contact form and company contact information

**Features:**
- Two-column layout
- Validated contact form
- Contact information display
- Social media links

**State Management:**
- `formData`: Form field values
- `errors`: Validation error messages

**Form Fields:**
- Name (required)
- Email (required, validated)
- Phone (optional)
- Service (required, dropdown)
- Message (required)

**Validation:**
- Name: Cannot be empty
- Email: Must match email regex pattern
- Service: Must select an option
- Message: Cannot be empty

---

## UI Components

### Button

**Location:** `src/components/ui/Button.tsx`

**Purpose:** Reusable button component

**Props:**
```typescript
{
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;              // If provided, renders as <a>
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
}
```

**Variants:**
- `primary`: Gold background with navy text
- `outline`: Transparent with white border

**Usage:**
```tsx
<Button variant="primary" href="#contact">
  Get Started
</Button>
```

---

### ServiceCard

**Location:** `src/components/ui/ServiceCard.tsx`

**Purpose:** Display individual service information

**Props:**
```typescript
{
  icon: string;           // Emoji or icon
  title: string;
  description: string;
}
```

**Features:**
- Gradient icon circle
- Hover lift effect
- Border accent
- Framer Motion animations

**Usage:**
```tsx
<ServiceCard
  icon="📋"
  title="SOX Consulting"
  description="Navigate SOX compliance..."
/>
```

---

### TestimonialCard

**Location:** `src/components/ui/TestimonialCard.tsx`

**Purpose:** Display client testimonial

**Props:**
```typescript
{
  rating: number;         // 1-5 stars
  text: string;
  authorName: string;
  authorTitle: string;
  authorInitials: string; // For avatar
}
```

**Features:**
- Decorative quote mark
- Star rating display
- Author avatar with initials
- Shadow effects

**Usage:**
```tsx
<TestimonialCard
  rating={5}
  text="Great service!"
  authorName="John Doe"
  authorTitle="CEO, Company"
  authorInitials="JD"
/>
```

---

### StatBox

**Location:** `src/components/ui/StatBox.tsx`

**Purpose:** Display statistics in About section

**Props:**
```typescript
{
  number: string;         // e.g., "15+" or "500+"
  label: string;
}
```

**Features:**
- Large number display
- Descriptive label
- Background styling
- Animation on scroll

**Usage:**
```tsx
<StatBox number="15+" label="Years of Excellence" />
```

---

### Input

**Location:** `src/components/ui/Input.tsx`

**Purpose:** Form text input with label and error

**Props:**
```typescript
{
  label: string;
  error?: string;
  optional?: boolean;
  id: string;
  ...HTMLInputElement props
}
```

**Features:**
- Label with optional indicator
- Error message display
- Focus border color change
- Accessible with proper id/label connection

---

### Select

**Location:** `src/components/ui/Select.tsx`

**Purpose:** Form dropdown select

**Props:**
```typescript
{
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  id: string;
  ...HTMLSelectElement props
}
```

**Features:**
- Label
- Error message display
- Dynamic options from array

---

### Textarea

**Location:** `src/components/ui/Textarea.tsx`

**Purpose:** Multi-line text input

**Props:**
```typescript
{
  label: string;
  error?: string;
  id: string;
  ...HTMLTextAreaElement props
}
```

**Features:**
- Resizable (vertical only)
- Minimum height set
- Same styling as Input

---

## Hooks & Utils

### useScrollSpy

**Location:** `src/hooks/useScrollSpy.ts`

**Purpose:** Track which section is currently in view

**Usage:**
```tsx
const activeSection = useScrollSpy(['home', 'services', 'about']);
```

**Parameters:**
- `sectionIds`: Array of section IDs to track

**Returns:**
- Current active section ID

---

### scrollToSection

**Location:** `src/utils/scrollToSection.ts`

**Purpose:** Smooth scroll to a section with offset

**Usage:**
```tsx
scrollToSection('#services', 80);
```

**Parameters:**
- `sectionId`: CSS selector for target section
- `offset`: Pixels to offset (default: 80 for header)

---

## TypeScript Types

**Location:** `src/types/index.ts`

### Main Interfaces

```typescript
// Service card data
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

// Testimonial data
interface TestimonialCardProps {
  rating: number;
  text: string;
  authorName: string;
  authorTitle: string;
  authorInitials: string;
}

// Contact form data
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

// Form validation errors
interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

// Statistics box
interface StatBoxProps {
  number: string;
  label: string;
}

// Contact info item
interface InfoItemProps {
  icon: string;
  title: string;
  content: string;
}

// Navigation link
interface NavLink {
  href: string;
  label: string;
}
```

---

## Animation Patterns

### Framer Motion Setup

Most components use this pattern:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

**Properties:**
- `initial`: Starting state (hidden, moved down)
- `whileInView`: Target state when in viewport
- `viewport={{ once: true }}`: Animate only once
- `transition`: Animation duration

### Hover Effects

```tsx
<motion.div
  whileHover={{ y: -10 }}
>
  {/* Content */}
</motion.div>
```

---

## Styling Conventions

### Tailwind Classes

- Use utility classes directly
- Custom colors defined in `tailwind.config.ts`
- Responsive prefixes: `sm:`, `md:`, `lg:`

### Common Patterns

```tsx
// Container
className="container mx-auto px-5"

// Section padding
className="py-20"

// Card
className="bg-white p-10 rounded-lg shadow-card"

// Button hover
className="transition-all duration-300 hover:-translate-y-1"
```

---

## Best Practices

1. **Component Organization**
   - One component per file
   - Export from index files for cleaner imports
   - Keep components focused and reusable

2. **TypeScript**
   - Always define prop interfaces
   - Use strict typing
   - Leverage type inference where appropriate

3. **Accessibility**
   - Use semantic HTML
   - Include ARIA labels
   - Ensure keyboard navigation
   - Maintain color contrast

4. **Performance**
   - Use `viewport={{ once: true }}` for animations
   - Minimize state updates
   - Leverage Next.js automatic optimizations

---

For more information, see README.md and SETUP.md.

