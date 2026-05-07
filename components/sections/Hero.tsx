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
    <section className="relative bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <Badge tone="blue">{site.hero.badge}</Badge>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink-900 text-balance">
              {site.hero.title}
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-700 leading-relaxed max-w-xl">
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

            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trustItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium text-ink-700">
                  <Check
                    size={18}
                    className="shrink-0 mt-0.5 text-brand-blue"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-brand-yellow-soft hidden md:block"
            />
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-brand-blue-soft hidden md:block"
            />
            <div className="relative rounded-3xl bg-white shadow-card border border-ink-100 overflow-hidden">
              <Image
                src="/instructor.jpg"
                alt="Angrej Singh — NCLEX coach"
                width={680}
                height={680}
                priority
                className="w-full h-auto object-cover aspect-[5/6]"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl border border-ink-100 shadow-card px-5 py-4 flex items-start gap-3">
                <Quote
                  size={22}
                  className="shrink-0 text-brand-yellow fill-brand-yellow mt-0.5"
                  aria-hidden="true"
                />
                <figure>
                  <blockquote className="text-sm md:text-base font-semibold italic text-ink-900 leading-snug">
                    &ldquo;{site.instructorQuote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 text-xs">
                    <span className="font-bold text-ink-900">
                      {site.instructorQuote.attribution}
                    </span>
                    <span className="text-ink-500"> · {site.instructorQuote.role}</span>
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
