import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { OfferBar } from '@/components/layout/OfferBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://angrej.vercel.app'),
  title: 'Angrej Singh NCLEX | Live RN and RPN coaching',
  description:
    'Live NCLEX-RN and NCLEX-PN (RPN) coaching by Angrej Singh. One teacher, morning and evening batches, recordings included. $1200 / 120 days.',
  openGraph: {
    title: 'Angrej Singh NCLEX | Live coaching for RN and RPN',
    description:
      'Live NCLEX coaching with Angrej Singh — same teacher every class, recordings included.',
    images: ['/og-image.png'],
    url: 'https://angrej.vercel.app',
    siteName: 'Angrej Singh NCLEX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angrej Singh NCLEX | Live RN and RPN coaching',
    description:
      'Live NCLEX coaching with Angrej Singh — same teacher every class, recordings included.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <OfferBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {/* TODO: Vinay — drop GA4 / Meta Pixel <Script> tags here when ready */}
      </body>
    </html>
  );
}
