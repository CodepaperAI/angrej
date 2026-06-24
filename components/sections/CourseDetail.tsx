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
  Sunrise,
  Sunset,
  HeartHandshake,
  ShieldCheck,
  GraduationCap,
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

const scheduleIcons: LucideIcon[] = [Sunrise, Sunset];

const motionProps = {
  initial: false as const,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export function CourseDetail({ course }: { course: Course }) {
  const accentBgGradient =
    course.accent === 'blue'
      ? 'from-brand-blue-soft via-white to-white'
      : 'from-brand-yellow-soft via-white to-white';
  const accentBorderClass =
    course.accent === 'blue' ? 'border-brand-blue' : 'border-brand-yellow';
  const enrollHref = `/checkout?course=${course.slug}`;
  const isRichProgram = Boolean(course.policy || course.includes);

  return (
    <>
      {/* Hero */}
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
              {course.subtitle && (
                <p className="mt-4 text-base font-semibold text-brand-blue md:text-lg">
                  {course.subtitle}
                </p>
              )}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 md:text-lg">
                {course.detailHero.intro}
              </p>
              <div className="mt-7">
                <Button href={enrollHref} variant="primary" size="xl">
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

      {/* Program overview */}
      {course.programOverview && (
        <section className="bg-white py-16 md:py-24">
          <Container>
            <motion.div {...motionProps}>
              <SectionHeader
                eyebrow="Course overview"
                title={`The ${course.title} Comprehensive Preparation Program.`}
                subtitle={course.programOverview}
                align="center"
              />
            </motion.div>
          </Container>
        </section>
      )}

      {/* Duration & schedule */}
      {(course.duration || course.schedule) && (
        <section className="bg-bg-soft py-16 md:py-24">
          <Container>
            <motion.div {...motionProps}>
              <SectionHeader
                eyebrow="Schedule & duration"
                title={course.duration?.headline ?? 'Class schedule.'}
                align="center"
              />

              {course.duration?.points && (
                <ul className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
                  {course.duration.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm font-semibold text-ink-700"
                    >
                      <Check
                        size={16}
                        className="shrink-0 text-brand-blue"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {course.schedule && (
                <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
                  {course.schedule.map((batch, index) => {
                    const Icon = scheduleIcons[index] ?? Clock;
                    return (
                      <article
                        key={batch.name}
                        className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
                      >
                        <div className="mb-4 w-fit rounded-xl bg-brand-blue-soft p-2.5">
                          <Icon
                            size={22}
                            className="text-brand-blue"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-base font-bold text-ink-900 md:text-lg">
                          {batch.name}
                        </h3>
                        <p className="mt-2 text-sm font-semibold text-ink-700">
                          {batch.days}
                        </p>
                        <p className="mt-1 text-sm text-ink-500">{batch.time}</p>
                      </article>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </Container>
        </section>
      )}

      {/* Course features */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <motion.div {...motionProps}>
            <SectionHeader
              eyebrow="What you get"
              title={`Everything included in your ${course.title} enrollment.`}
              align="center"
            />
            {course.featureGroups ? (
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {course.featureGroups.map((group, index) => {
                  const Icon = featureIcons[index] ?? BookOpen;
                  return (
                    <article
                      key={group.title}
                      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
                    >
                      <div className="mb-4 w-fit rounded-xl bg-brand-blue-soft p-2.5">
                        <Icon
                          size={22}
                          className="text-brand-blue"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-base font-bold text-ink-900 md:text-lg">
                        {group.title}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm leading-relaxed text-ink-700"
                          >
                            <Check
                              size={16}
                              className="mt-1 shrink-0 text-brand-blue"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {course.features.map((feature, index) => {
                  const Icon = featureIcons[index] ?? BookOpen;
                  return (
                    <article
                      key={feature.title}
                      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
                    >
                      <div className="mb-4 w-fit rounded-xl bg-brand-blue-soft p-2.5">
                        <Icon
                          size={22}
                          className="text-brand-blue"
                          aria-hidden="true"
                        />
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
            )}
          </motion.div>
        </Container>
      </section>

      {/* Curriculum / core subjects */}
      <section className="bg-bg-soft py-16 md:py-24">
        <Container>
          <motion.div {...motionProps}>
            <SectionHeader
              eyebrow={course.coreSubjects ? 'What you will learn' : 'Curriculum overview'}
              title={`What ${course.title} covers.`}
              align="center"
            />
            {course.coreSubjects ? (
              <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {course.coreSubjects.map((subject) => (
                  <li
                    key={subject}
                    className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-4 shadow-card"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue-soft">
                      <Check
                        size={16}
                        className="text-brand-blue"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-sm font-semibold text-ink-900">
                      {subject}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
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
            )}
          </motion.div>
        </Container>
      </section>

      {/* Student support + ideal for */}
      {(course.studentSupport || course.idealFor) && (
        <section className="bg-white py-16 md:py-24">
          <Container>
            <motion.div
              {...motionProps}
              className="grid gap-10 md:grid-cols-2 md:gap-14"
            >
              {course.studentSupport && (
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    Student support
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
                    Guided from enrollment to exam day.
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {course.studentSupport.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-ink-700"
                      >
                        <HeartHandshake
                          size={18}
                          className="mt-0.5 shrink-0 text-brand-blue"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {course.idealFor && (
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    Ideal for
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
                    Built for nurses ready to pass.
                  </h2>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {course.idealFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-ink-100 bg-bg-soft px-4 py-2 text-sm font-semibold text-ink-700"
                      >
                        <GraduationCap
                          size={16}
                          className="shrink-0 text-brand-blue"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </Container>
        </section>
      )}

      {/* Enroll / pricing */}
      <section className={`${isRichProgram ? 'bg-bg-soft' : 'bg-white'} py-16 md:py-24`}>
        <Container>
          <motion.div
            {...motionProps}
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

            {course.includes && (
              <div className="mt-8 border-t border-ink-100 pt-8 text-left">
                <p className="text-center text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  This course includes
                </p>
                <ul className="mx-auto mt-5 grid max-w-lg gap-2.5 sm:grid-cols-2">
                  {course.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-700"
                    >
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-brand-blue"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8">
              <Button href={enrollHref} variant="primary" size="xl">
                {course.enrollCta}
              </Button>
            </div>
          </motion.div>

          {course.policy && (
            <motion.div
              {...motionProps}
              className="mx-auto mt-8 max-w-2xl rounded-2xl border border-ink-100 bg-white p-6 text-left md:p-8"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck
                  size={18}
                  className="shrink-0 text-brand-blue"
                  aria-hidden="true"
                />
                <h3 className="text-sm font-bold uppercase tracking-wider text-ink-900">
                  Important policy
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {course.policy.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-500"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </Container>
      </section>
    </>
  );
}
