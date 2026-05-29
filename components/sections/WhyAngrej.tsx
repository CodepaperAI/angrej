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
    body: 'Both morning and evening batches are taught directly by Angrej Singh. No swapped instructors and no rotation, just one teaching style throughout your prep.',
  },
  {
    icon: Calendar,
    title: 'Flexible timing without the trade-off.',
    body: 'Pick the batch that fits your schedule. Both follow the same syllabus and teaching plan, so the only thing that changes is the clock.',
  },
  {
    icon: PlayCircle,
    title: 'Miss a class? No problem.',
    body: 'Join the alternate batch the same day, or watch the recording. Revision support is built into the program, not sold as a paid add-on.',
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

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {items.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card md:p-8"
              >
                <div className="mb-5 w-fit rounded-xl bg-brand-blue-soft p-3">
                  <Icon size={28} className="text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 md:text-2xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-700">{body}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
