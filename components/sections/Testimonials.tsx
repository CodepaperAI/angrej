'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonials } from '@/content/testimonials';

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Student wins"
            title="Real students. Real NCLEX passes."
            subtitle="Stories from RN and RPN students who studied under Angrej Singh."
            align="center"
          />
        </motion.div>

        <div className="mt-12 -mx-4 md:mx-0">
          <div className="md:hidden flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3 gap-6 px-4 md:px-0">
            {testimonials.slice(0, 6).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="bg-bg-soft rounded-2xl p-6 border border-ink-100 min-w-[18rem] md:min-w-0 snap-start flex flex-col">
      <div className="flex items-center gap-1 mb-4" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-brand-yellow text-brand-yellow"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-ink-700 leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 pt-5 border-t border-ink-100">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white font-bold text-sm">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-bold text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-500">{testimonial.result}</p>
        </div>
      </div>
    </article>
  );
}
