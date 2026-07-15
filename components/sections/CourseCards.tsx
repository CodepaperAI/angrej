'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { courses } from '@/content/courses';

const cards = [courses.rn, courses.rpn, courses.psychology];

export function CourseCards() {
  return (
    <section id="courses" className="scroll-mt-28 bg-white py-16 md:py-24">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Choose your course"
            title="Individual courses for every learning goal."
            subtitle="Choose the course that matches your next step. Each course has its own lessons, access, support, and enrollment."
            align="center"
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((course) => (
              <article
                key={course.slug}
                className="group flex min-h-[430px] flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <Link
                  href={`/${course.slug}`}
                  aria-label={`View ${course.title} course details`}
                  className="block p-3 pb-0"
                >
                  <div
                    className={`overflow-hidden rounded-xl border border-ink-100 ${
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
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 border-t border-ink-100/80 bg-white/90 px-3.5 py-2.5 backdrop-blur">
                      <span className="text-base font-extrabold tracking-tight text-ink-900">
                        {course.priceDisplay}
                      </span>
                      <span className="rounded-full bg-bg-soft px-2.5 py-1 text-xs font-semibold text-ink-700">
                        {course.accessLabel}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={course.badgeTone}>{course.badgeLabel}</Badge>
                    {course.slug !== 'psychology' && (
                      <span className="rounded-full bg-brand-blue-soft px-2.5 py-1 text-xs font-semibold text-brand-blue-dark">
                        Live + recorded
                      </span>
                    )}
                  </div>

                  <div>
                    <Link href={`/${course.slug}`} className="hover:text-brand-blue">
                      <h3 className="mt-4 line-clamp-2 min-h-[3.25rem] text-lg font-extrabold leading-tight text-ink-900 transition-colors group-hover:text-brand-blue">
                        {course.title}
                      </h3>
                    </Link>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-700">
                      {course.oneLiner}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <Link
                      href={`/${course.slug}`}
                      className="text-sm font-bold text-brand-blue hover:underline"
                    >
                      Details
                    </Link>
                    <Button
                      href={`/checkout?course=${course.slug}`}
                      variant="primary"
                      size="md"
                    >
                      Enroll
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-500">
            Not sure which course is right for you? Select &ldquo;Not sure
            yet&rdquo; on the enrollment form and the team will guide you.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
