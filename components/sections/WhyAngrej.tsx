'use client';

import { motion } from 'framer-motion';
import { User, Calendar, PlayCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

type Item = { icon: LucideIcon; title: string; body: string };

const items: Item[] = [
  {
    icon: User,
    title: 'Same teacher, every single class.',
    body: 'Both morning and evening batches are taught directly by Angrej Singh. No swapped instructors, no rotation — one teaching style throughout your prep.',
  },
  {
    icon: Calendar,
    title: 'Flexible timing without the trade-off.',
    body: 'Pick the batch that fits your schedule. Both follow the same syllabus and teaching plan, so the only thing that changes is the clock.',
  },
  {
    icon: PlayCircle,
    title: 'Miss a class? No problem.',
    body: 'Join the alternate batch the same day, or watch the recording. Revision support is built into the program — not a paid add-on.',
  },
];

export function WhyAngrej() {
  return (
    <section className="bg-bg-soft py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Why students trust Angrej"
            title="One teacher. One plan. Real continuity."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {items.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-ink-100"
              >
                <div className="bg-brand-blue-soft rounded-xl p-3 w-fit mb-5">
                  <Icon size={28} className="text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-ink-900">
                  {title}
                </h3>
                <p className="mt-3 text-ink-700 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
