import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kishi Consulting - Expert Financial Advisory Services',
  description:
    'Professional finance and accounting consulting services including SOX compliance, risk assessment, and financial advisory. Your trusted partner in financial excellence.',
  keywords: [
    'financial consulting',
    'SOX compliance',
    'accounting services',
    'risk assessment',
    'financial advisory',
    'Kishi Consulting',
  ],
  authors: [{ name: 'Kishi Consulting' }],
  openGraph: {
    title: 'Kishi Consulting - Expert Financial Advisory Services',
    description:
      'Professional finance and accounting consulting services including SOX compliance, risk assessment, and financial advisory.',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a3a52',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans text-textDark leading-relaxed overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}

