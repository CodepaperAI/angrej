'use client';

import Image from 'next/image';
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
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Choose your pathway"
            title="Three pathways. Same teacher."
            subtitle="Now each course is previewed with its own branded thumbnail, so the offer feels closer to the real Angrej Singh sales material."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((course) => (
              <article
                key={course.slug}
                className="group flex flex-col overflow-hidden rounded-[30px] border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="p-4 pb-0">
                  <div
                    className={`overflow-hidden rounded-[26px] border border-ink-100 ${
                      course.accent === 'blue'
                        ? 'bg-gradient-to-br from-brand-blue-soft via-white to-white'
                        : 'bg-gradient-to-br from-brand-yellow-soft via-white to-white'
                    }`}
                  >
                    <div
                      className={`h-1.5 ${
                        course.accent === 'blue' ? 'bg-brand-blue' : 'bg-brand-yellow'
                      }`}
                    />
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={course.thumbnailSrc}
                        alt={course.thumbnailAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 border-t border-ink-100/80 bg-white/88 px-4 py-3 backdrop-blur">
                      <span className="text-lg font-extrabold tracking-tight text-ink-900">
                        {course.priceDisplay}
                      </span>
                      <span className="rounded-full bg-bg-soft px-3 py-1 text-xs font-semibold text-ink-700">
                        {course.accessLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Badge tone={course.badgeTone}>{course.badgeLabel}</Badge>
                    {course.slug !== 'psychology' && (
                      <span className="rounded-full bg-brand-blue-soft px-3 py-1 text-xs font-semibold text-brand-blue-dark">
                        Live + recorded
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-ink-900 md:text-2xl">
                      {course.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-700">
                      {course.oneLiner}
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {course.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-ink-700">
                        <Check
                          size={18}
                          className="mt-1 shrink-0 text-brand-blue"
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

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                    <Button
                      href={`/contact?course=${course.slug}`}
                      variant="primary"
                      size="md"
                    >
                      {course.enrollCta}
                    </Button>
                    <Button href={`/${course.slug}`} variant="ghost" size="md">
                      View details
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
              className="font-semibold text-brand-blue hover:underline"
            >
              Talk to us before enrolling
            </Link>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
