import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ClientLayout } from '../components/ClientLayout';

// Configure Montserrat (Secondary Font)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: '%s | Auto Evolution Workshop',
    default: 'Auto Evolution Workshop',
  },
  description: 'Precision. Performance. Perfection. The future of automotive engineering.',
  applicationName: 'Auto Evolution Workshop',
  icons: {
    icon: '/resources/favicon.png', 
    shortcut: '/resources/favicon.png',
    apple: '/resources/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-[#f7f7f5] text-[#121212]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}