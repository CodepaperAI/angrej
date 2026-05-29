'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';

const trustItems = [
  'Live classes by Angrej',
  'Recordings included',
  'Morning + Evening batches',
  '120 days access',
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft pt-12 pb-16 md:pt-20 md:pb-24">
      <Container>
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div className="min-w-0">
            <Badge tone="blue">{site.hero.badge}</Badge>

            <h1 className="mt-5 min-w-0 break-words text-3xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl md:text-balance md:text-5xl lg:text-6xl">
              {site.hero.title}
            </h1>

            <p className="mt-5 max-w-xl break-words text-base leading-relaxed text-ink-700 md:text-lg">
              {site.hero.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact?course=rn" variant="primary" size="lg">
                Enroll in RN
              </Button>
              <Button href="/contact?course=rpn" variant="secondary" size="lg">
                Enroll in RPN
              </Button>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue-soft px-3 py-2.5 shadow-card sm:px-4"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue">
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 break-words text-xs font-semibold leading-tight text-ink-900 sm:text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-3xl bg-brand-yellow-soft md:block"
            />
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 hidden h-32 w-32 rounded-full bg-brand-blue-soft md:block"
            />
            <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
              <Image
                src="/angrej-portrait.png"
                alt="Angrej Singh, NCLEX coach"
                width={680}
                height={680}
                priority
                className="aspect-[5/6] h-auto w-full object-contain bg-gradient-to-b from-brand-blue-soft/50 to-white px-4 pt-6"
              />

              <div className="absolute right-4 bottom-4 left-4 flex items-start gap-3 rounded-2xl border border-ink-100 bg-white/95 px-5 py-4 shadow-card backdrop-blur-md">
                <Quote
                  size={22}
                  className="mt-0.5 shrink-0 fill-brand-yellow text-brand-yellow"
                  aria-hidden="true"
                />
                <figure>
                  <blockquote className="text-sm font-semibold italic leading-snug text-ink-900 md:text-base">
                    &ldquo;{site.instructorQuote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 text-xs">
                    <span className="font-bold text-ink-900">
                      {site.instructorQuote.attribution}
                    </span>
                    <span className="text-ink-500"> | {site.instructorQuote.role}</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
