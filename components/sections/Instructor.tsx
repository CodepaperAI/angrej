'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.52a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84Z" />
  </svg>
);

// TODO: Vinay — verify follower counts against live socials and update before launch
const proofChips = [
  { icon: <Instagram size={16} aria-hidden="true" />, label: '15K followers', href: site.brand.socials.instagram },
  { icon: <Youtube size={16} aria-hidden="true" />, label: '5K subscribers', href: site.brand.socials.youtube },
  { icon: <TikTokIcon size={14} />, label: '10K followers', href: site.brand.socials.tiktok },
];

export function Instructor() {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-[2fr_3fr] gap-12 items-center"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl bg-brand-yellow rotate-12 opacity-90"
            />
            <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-card">
              <Image
                src="/instructor.jpg"
                alt="Angrej Singh — NCLEX coach"
                width={480}
                height={576}
                className="w-full h-auto object-cover aspect-[5/6]"
              />
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {proofChips.map((chip) => (
                <li key={chip.label}>
                  <a
                    href={chip.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white hover:bg-white/15 transition-colors"
                  >
                    {chip.icon}
                    {chip.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
              Meet your instructor
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
              Angrej Singh — registered nurse, NCLEX coach, full-time teacher.
            </h2>
            <div className="mt-6 space-y-4 text-white/90 leading-relaxed">
              <p>
                Angrej Singh teaches every live class on this platform. Not a TA,
                not a guest instructor, not a rotating panel — the same teacher
                from your first session to your last.
              </p>
              <p>
                His students are RN and RPN candidates from across Canada and
                abroad. The classes focus on what NCLEX actually tests, with
                practice questions, rationales, and clinical reasoning at the
                centre.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.brand.socials.instagram} variant="secondary" size="md">
                Follow on Instagram
              </Button>
              <a
                href={site.brand.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-brand-blue-dark transition-colors"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
