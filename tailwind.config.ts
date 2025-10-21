import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3a52',
          dark: '#0f2432',
        },
        secondary: {
          DEFAULT: '#d4af37',
          dark: '#c09e30',
        },
        accent: {
          DEFAULT: '#2c5f7f',
        },
        textDark: '#2d2d2d',
        textLight: '#666666',
        bgLight: '#f8f9fa',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cardHover: '0 8px 15px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
export default config

