'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, HeartHandshake, MessageCircleQuestion } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

type Item = { icon: LucideIcon; title: string; body: string[] };

const items: Item[] = [
  {
    icon: BookOpen,
    title: 'Honest Teaching',
    body: [
      'No shortcuts. No false promises. No unnecessary complications.',
      'Just concepts explained in the simplest way possible.',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'Student-First Approach',
    body: [
      'Every decision is made with one question:',
      'Will this help students learn better?',
    ],
  },
  {
    icon: MessageCircleQuestion,
    title: 'Real Support',
    body: [
      'Questions are welcomed.',
      'Doubts are respected.',
      'Learning never feels lonely.',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Built for Success',
    body: [
      'From nursing school foundations to NCLEX preparation, every lesson is designed to help students move forward with confidence.',
    ],
  },
];

export function PromiseSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
            Our promise to every student
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink-900 text-balance md:text-4xl lg:text-5xl">
            More than a teacher. A mentor who genuinely wants you to succeed.
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-700 md:text-lg">
            <p>
              Every student deserves a teacher who shows up prepared, explains
              with patience, answers questions honestly, and never gives up on
              them.
            </p>
            <p className="font-semibold text-ink-900">
              That&apos;s the standard we follow in every class.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export function WhyStudentsChooseUs() {
  return (
    <section className="bg-bg-soft py-16 md:py-24">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Why students choose us"
            title="Because learning should feel clear, not confusing."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card md:p-7"
              >
                <div className="mb-5 w-fit rounded-xl bg-brand-blue-soft p-3">
                  <Icon size={28} className="text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-ink-900">{title}</h3>
                <div className="mt-3 space-y-3 leading-relaxed text-ink-700">
                  {body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export function WhyAngrej() {
  return (
    <>
      <PromiseSection />
      <WhyStudentsChooseUs />
    </>
  );
}
