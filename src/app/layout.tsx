import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'LidafCCA, Cabinet Conseil Douala Cameroun',
    template: '%s | LidafCCA',
  },
  description:
    'Cabinet Lidaf CCA, votre partenaire stratégique à Douala pour la fiscalité, comptabilité, gestion de projets, logistique et formations professionnelles.',
  icons: {
    icon: [{ url: '/assets/images/lidaf/logo-lcca.png', type: 'image/png' }],
    apple: [{ url: '/assets/images/lidaf/logo-lcca.png', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} bg-background text-foreground antialiased overflow-x-hidden`}>
        {children}
        <WhatsAppFloat />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
