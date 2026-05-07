'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { courses } from '@/content/courses';

const cards = [courses.rn, courses.rpn, courses.psychology];

export function CourseCards() {
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
            eyebrow="Choose your pathway"
            title="Three pathways. Same teacher."
            subtitle="Start with the exam you're preparing for, or pick up the bonus Human Psychology course alongside it."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {cards.map((course) => (
              <article
                key={course.slug}
                className="bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-shadow border border-ink-100 overflow-hidden flex flex-col"
              >
                <div
                  className={`h-2 ${
                    course.accent === 'blue' ? 'bg-brand-blue' : 'bg-brand-yellow'
                  }`}
                />
                <div className="p-8 flex flex-col gap-5 flex-1">
                  <Badge tone={course.badgeTone}>{course.badgeLabel}</Badge>
                  <h3 className="text-xl md:text-2xl font-bold text-ink-900">
                    {course.title}
                  </h3>
                  <p className="text-ink-700 leading-relaxed">{course.oneLiner}</p>

                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold text-ink-900">
                      {course.priceDisplay}
                    </span>
                    <span className="text-sm font-semibold text-ink-500">
                      {course.accessLabel}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {course.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-ink-700">
                        <Check
                          size={18}
                          className="shrink-0 mt-1 text-brand-blue"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {course.slug !== 'psychology' && (
                    <div className="flex flex-wrap gap-2">
                      <Badge tone="neutral">Morning batch</Badge>
                      <Badge tone="neutral">Evening batch</Badge>
                    </div>
                  )}

                  <div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
                    <Button
                      href={`/contact?course=${course.slug}`}
                      variant="primary"
                      size="md"
                    >
                      {course.enrollCta}
                    </Button>
                    <Button href={`/${course.slug}`} variant="ghost" size="md">
                      View details →
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-500">
            Not sure which pathway?{' '}
            <Link
              href="/contact"
              className="text-brand-blue font-semibold hover:underline"
            >
              Talk to us before enrolling →
            </Link>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
