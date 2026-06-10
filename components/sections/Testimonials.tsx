'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonials } from '@/content/testimonials';

const firstRow = testimonials.filter((_, index) => index % 2 === 0);
const secondRow = testimonials.filter((_, index) => index % 2 === 1);

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-brand-blue-soft/35 to-white py-16 md:py-24">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Student feedback"
            title="What people say about Angrej Singh's teaching."
            subtitle="Real feedback from students who experienced his clear explanations, patient guidance, and steady support."
            align="center"
          />
        </motion.div>
      </Container>

      <div className="mt-12 space-y-5">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof testimonials;
  reverse?: boolean;
}) {
  return (
    <div className="testimonial-marquee">
      <div className={`testimonial-track ${reverse ? 'testimonial-track--reverse' : ''}`}>
        <div className="testimonial-set">
          {items.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
        <div className="testimonial-set" aria-hidden="true">
          {items.map((item) => (
            <TestimonialCard key={`${item.id}-clone`} testimonial={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="flex w-[21rem] shrink-0 flex-col rounded-[28px] border border-ink-100 bg-white/95 p-6 shadow-card backdrop-blur sm:w-[23rem]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-brand-yellow text-brand-yellow"
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="rounded-full bg-brand-blue-soft px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-blue-dark">
          {testimonial.result}
        </span>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <div className="mt-0.5 rounded-xl bg-brand-yellow-soft p-2 text-brand-yellow-dark">
          <Quote size={16} aria-hidden="true" />
        </div>
        <p className="text-sm leading-relaxed text-ink-700">
          {testimonial.quote}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-bold text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-500">Verified student review</p>
        </div>
      </div>
    </article>
  );
}
