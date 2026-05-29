'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

const steps = [
  {
    n: 1,
    title: 'Choose your pathway',
    body: 'RN or RPN, based on the exam you are preparing for.',
  },
  {
    n: 2,
    title: 'Contact us',
    body: 'Send a message with your batch preference (morning or evening).',
  },
  {
    n: 3,
    title: 'Confirm enrollment',
    body: "We'll guide you through payment and onboarding.",
  },
  {
    n: 4,
    title: 'Start learning',
    body: 'Join your first live class and access course materials.',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="How enrollment works"
            title="Four simple steps to start your NCLEX prep."
            align="center"
          />

          <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6 relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-ink-100"
            />
            {steps.map((s) => (
              <li key={s.n} className="relative flex md:flex-col items-start md:items-center gap-4 md:text-center">
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue text-white font-bold text-lg shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </Container>
    </section>
  );
}
