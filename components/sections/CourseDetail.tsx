'use client';

import { motion } from 'framer-motion';
import {
  Check,
  BookOpen,
  Calendar,
  PlayCircle,
  ListChecks,
  Brain,
  Clock,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Course } from '@/content/courses';

const featureIcons: LucideIcon[] = [
  BookOpen,
  Calendar,
  PlayCircle,
  ListChecks,
  Brain,
  Clock,
];

export function CourseDetail({ course }: { course: Course }) {
  const accentBgGradient =
    course.accent === 'blue'
      ? 'from-brand-blue-soft via-white to-white'
      : 'from-brand-yellow-soft via-white to-white';
  const accentBorderClass =
    course.accent === 'blue' ? 'border-brand-blue' : 'border-brand-yellow';
  const enrollHref = `/contact?course=${course.slug}`;

  return (
    <>
      <section
        className={`bg-gradient-to-br ${accentBgGradient} pt-12 pb-16 md:pt-20 md:pb-24`}
      >
        <Container>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <div>
              <Badge tone={course.badgeTone}>{course.detailHero.eyebrow}</Badge>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 text-balance md:text-5xl">
                {course.detailHero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 md:text-lg">
                {course.detailHero.intro}
              </p>
              <div className="mt-7">
                <Button href={enrollHref} variant="primary" size="lg">
                  {course.enrollCta}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                className={`overflow-hidden rounded-3xl border border-ink-100 shadow-card ${
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
                    width={680}
                    height={680}
                    priority
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-ink-100/80 bg-white/88 px-5 py-4 backdrop-blur">
                  <span className="text-2xl font-extrabold tracking-tight text-ink-900">
                    {course.priceDisplay}
                  </span>
                  <span className="rounded-full bg-bg-soft px-3 py-1.5 text-sm font-semibold text-ink-700">
                    {course.accessLabel}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              eyebrow="What you get"
              title={`Everything included in your ${course.title} enrollment.`}
              align="center"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {course.features.map((feature, index) => {
                const Icon = featureIcons[index] ?? BookOpen;
                return (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
                  >
                    <div className="mb-4 w-fit rounded-xl bg-brand-blue-soft p-2.5">
                      <Icon size={22} className="text-brand-blue" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-ink-900 md:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">
                      {feature.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-bg-soft py-16 md:py-24">
        <Container>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              eyebrow="Curriculum overview"
              title={`What ${course.title} covers.`}
              align="center"
            />
            <ol className="mx-auto mt-12 max-w-3xl space-y-4">
              {course.curriculum.map((item, index) => (
                <li
                  key={item.topic}
                  className="flex items-start gap-5 rounded-2xl border border-ink-100 bg-white p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink-900 md:text-lg">
                      {item.topic}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`mx-auto max-w-2xl rounded-3xl border-2 ${accentBorderClass} bg-white p-8 text-center shadow-card md:p-10`}
          >
            <Badge tone={course.badgeTone}>{course.badgeLabel}</Badge>
            <p className="mt-6 text-5xl font-extrabold text-ink-900 md:text-6xl">
              {course.priceDisplay}
            </p>
            <p className="mt-2 text-base font-semibold text-ink-500">
              {course.accessLabel}
            </p>
            <ul className="mx-auto mt-8 max-w-md space-y-2.5 text-left">
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
            <div className="mt-8">
              <Button href={enrollHref} variant="primary" size="lg">
                {course.enrollCta}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
