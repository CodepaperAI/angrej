'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { courses } from '@/content/courses';

const includedCourses = [
  {
    label: 'NCLEX-RN',
    image: courses.rn.thumbnailSrc,
    alt: courses.rn.thumbnailAlt,
  },
  {
    label: 'NCLEX-PN (RPN)',
    image: courses.rpn.thumbnailSrc,
    alt: courses.rpn.thumbnailAlt,
  },
  {
    label: 'Human Psychology',
    image: courses.psychology.thumbnailSrc,
    alt: courses.psychology.thumbnailAlt,
  },
];

const includedBullets = [
  'Nursing school exam support',
  'NCLEX-RN and NCLEX-PN preparation',
  'Human psychology and communication guidance',
  'Live teaching, recordings, and course materials',
];

export function CourseCards() {
  return (
    <section id="course" className="scroll-mt-28 bg-white py-16 md:py-24">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="One complete course"
            title="One course. Everything students need to move forward."
            subtitle="Nursing school support, NCLEX preparation, and human psychology guidance are brought together into one complete learning experience."
            align="center"
          />

          <article className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[30px] border border-ink-100 bg-white shadow-card md:grid-cols-[1.05fr_0.95fr]">
            <div className="bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft p-5 md:p-7">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
                <Layers size={18} aria-hidden="true" />
                Included inside one course
              </div>
              <div className="mt-5 grid gap-4">
                {includedCourses.map((course) => (
                  <div
                    key={course.label}
                    className="grid grid-cols-[108px_1fr] items-center gap-4 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-sm backdrop-blur sm:grid-cols-[148px_1fr]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-ink-100 bg-white">
                      <Image
                        src={course.image}
                        alt={course.alt}
                        fill
                        sizes="(max-width: 640px) 108px, 148px"
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div>
                      <p className="text-base font-extrabold text-ink-900 sm:text-lg">
                        {course.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-ink-500">
                        Included in the complete course
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col p-6 md:p-8 lg:p-10">
              <div className="flex flex-wrap gap-2">
                <Badge tone="blue">Complete course</Badge>
                <Badge tone="yellow">All-in-one learning</Badge>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
                Nursing Mastery Complete Course
              </h3>
              <p className="mt-4 leading-relaxed text-ink-700">
                One enrollment gives students access to the complete Angrej
                Singh learning path, with the team guiding every student to the
                right starting point.
              </p>

              <ul className="mt-6 space-y-3">
                {includedBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-ink-700">
                    <Check
                      size={19}
                      className="mt-1 shrink-0 text-brand-blue"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/contact?course=complete" variant="primary" size="lg">
                  Enroll
                </Button>
                <p className="mt-3 text-sm font-semibold text-ink-500">
                  Guidance starts with one simple enrollment.
                </p>
              </div>
            </div>
          </article>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-500">
            Not sure where to begin? Enroll once and the team will guide you to
            the right starting point.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
