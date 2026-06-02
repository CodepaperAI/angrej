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
  title: 'Angrej Singh Nursing Mastery | Student-first nursing support',
  description:
    'Student-first nursing support by Angrej Singh for nursing school exams, NCLEX preparation, and career confidence.',
  openGraph: {
    title: 'Angrej Singh Nursing Mastery | Student-first nursing support',
    description:
      'Nursing mastery with honest teaching, patient explanations, and support that puts student success first.',
    images: ['/og-image.png'],
    url: 'https://angrej.vercel.app',
    siteName: 'Angrej Singh NCLEX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angrej Singh Nursing Mastery | Student-first nursing support',
    description:
      'Nursing mastery with honest teaching, patient explanations, and support that puts student success first.',
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
        {/* TODO: Vinay - drop GA4 / Meta Pixel <Script> tags here when ready */}
      </body>
    </html>
  );
}
