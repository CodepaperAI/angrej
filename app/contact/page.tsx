import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Instagram, Youtube, Facebook, Mail, Phone, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/sections/ContactForm';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact | Angrej Singh NCLEX',
  description:
    "Get in touch for Angrej Singh course enrollment. We'll respond within one business day.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Angrej Singh NCLEX',
    description:
      "Get in touch for Angrej Singh course enrollment. We'll respond within one business day.",
    url: '/contact',
    type: 'website',
  },
};

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.52a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84Z" />
  </svg>
);

export default function ContactPage() {
  return (
    <section className="bg-bg-soft py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 lg:gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.1] text-balance">
              Let&apos;s get you started.
            </h1>
            <p className="mt-4 text-base md:text-lg text-ink-700 leading-relaxed max-w-xl">
              Tell us you&apos;re ready to enroll and the best way to reach you.
              We&apos;ll respond within one business day.
            </p>
            <div className="mt-8">
              <Suspense fallback={<div className="text-ink-500">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <aside className="bg-brand-blue-soft rounded-2xl p-6 md:p-8 h-fit">
            <h2 className="text-xl md:text-2xl font-bold text-ink-900">
              Prefer to call?
            </h2>
            <div className="mt-5 space-y-4">
              <a
                href={`tel:${site.brand.phoneTel}`}
                className="flex items-center gap-3 text-ink-900 hover:text-brand-blue transition-colors"
              >
                <Phone size={20} className="text-brand-blue shrink-0" aria-hidden="true" />
                <span className="text-lg font-bold">{site.brand.phone}</span>
              </a>
              <a
                href={`mailto:${site.brand.email}`}
                className="flex items-center gap-3 text-ink-700 hover:text-brand-blue transition-colors"
              >
                <Mail size={20} className="text-brand-blue shrink-0" aria-hidden="true" />
                <span className="font-semibold break-all">{site.brand.email}</span>
              </a>
              <p className="flex items-center gap-3 text-ink-700">
                <Clock size={20} className="text-brand-blue shrink-0" aria-hidden="true" />
                <span>Mon-Sat, 9am-6pm ET</span>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/40">
              <p className="text-sm font-semibold text-ink-900 mb-3">
                Find us elsewhere
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={site.brand.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white border border-ink-100 flex items-center justify-center text-ink-700 hover:text-brand-blue transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={site.brand.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-white border border-ink-100 flex items-center justify-center text-ink-700 hover:text-brand-blue transition-colors"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href={site.brand.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-full bg-white border border-ink-100 flex items-center justify-center text-ink-700 hover:text-brand-blue transition-colors"
                >
                  <TikTokIcon size={18} />
                </a>
                <a
                  href={site.brand.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white border border-ink-100 flex items-center justify-center text-ink-700 hover:text-brand-blue transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
