'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.52a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84Z" />
  </svg>
);

const socialStats = [
  {
    label: 'Instagram',
    href: site.brand.socials.instagram,
    ariaLabel: 'Instagram',
    icon: Instagram,
  },
  {
    label: 'YouTube',
    href: site.brand.socials.youtube,
    ariaLabel: 'YouTube',
    icon: Youtube,
  },
  {
    label: 'TikTok',
    href: site.brand.socials.tiktok,
    ariaLabel: 'TikTok',
    icon: TikTokIcon,
  },
];

export function Hero() {
  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft pt-12 pb-16 md:pt-20 md:pb-24">
      <Container className="min-w-0">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid min-w-0 items-center gap-12 md:grid-cols-2"
        >
          <div className="hero-copy min-w-0">
            <Badge tone="blue">{site.hero.badge}</Badge>

            <h1 className="hero-title mt-5 min-w-0 break-words [overflow-wrap:anywhere] text-3xl font-extrabold leading-[1.1] text-ink-900 sm:text-4xl md:text-balance md:text-5xl lg:text-6xl">
              {site.hero.title}
            </h1>

            <p className="mt-5 max-w-xl break-words [overflow-wrap:anywhere] text-base leading-relaxed text-ink-700 md:text-lg">
              {site.hero.subtitle}
            </p>
            <p className="mt-3 text-xl font-extrabold leading-tight text-brand-blue md:text-2xl">
              {site.hero.successLine}
            </p>
            <figure className="mt-6 border-l-4 border-brand-yellow pl-5">
              <blockquote className="text-base font-semibold italic leading-relaxed text-ink-900 md:text-lg">
                &ldquo;{site.hero.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-sm font-bold text-ink-700">
                &mdash; {site.hero.quoteAttribution}
              </figcaption>
            </figure>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/#courses" variant="primary" size="lg">
                Enroll
              </Button>
            </div>
          </div>

          <div className="hero-media relative min-w-0">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-3xl bg-brand-yellow-soft md:block"
            />
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 hidden h-32 w-32 rounded-full bg-brand-blue-soft md:block"
            />
            <div className="relative min-w-0 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
              <Image
                src="/angrej-singh-dp.jpeg"
                alt="Angrej Singh, NCLEX coach"
                width={1080}
                height={1080}
                priority
                className="aspect-[5/6] h-auto w-full object-cover object-top bg-gradient-to-b from-brand-blue-soft/50 to-white"
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-blue/95 via-brand-blue/60 to-transparent"
              />
              <div className="absolute right-4 bottom-4 left-4 flex flex-wrap items-center justify-center gap-2.5">
                {socialStats.map(({ label, href, ariaLabel, icon: Icon }) => (
                  <a
                    key={ariaLabel}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/18 px-3 py-2 text-xs font-bold text-white shadow-card backdrop-blur-md transition-colors hover:bg-white/28 sm:text-sm"
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
