'use client';

import { motion } from 'framer-motion';
import { Check, BookOpen, Calendar, PlayCircle, ListChecks, Brain, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Course } from '@/content/courses';

const featureIcons: LucideIcon[] = [BookOpen, Calendar, PlayCircle, ListChecks, Brain, Clock];

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
      <section className={`bg-gradient-to-br ${accentBgGradient} pt-12 pb-16 md:pt-20 md:pb-24`}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge tone={course.badgeTone}>{course.detailHero.eyebrow}</Badge>
              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-ink-900 text-balance">
                {course.detailHero.title}
              </h1>
              <p className="mt-5 text-base md:text-lg text-ink-700 leading-relaxed max-w-xl">
                {course.detailHero.intro}
              </p>
              <div className="mt-7">
                <Button href={enrollHref} variant="primary" size="lg">
                  {course.enrollCta}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl bg-white shadow-card border border-ink-100 overflow-hidden">
                <Image
                  src="/instructor.jpg"
                  alt="Angrej Singh — NCLEX coach"
                  width={680}
                  height={680}
                  priority
                  className="w-full h-auto object-cover aspect-[5/6]"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              eyebrow="What you get"
              title={`Everything included in your ${course.title} enrollment.`}
              align="center"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {course.features.map((f, i) => {
                const Icon = featureIcons[i] ?? BookOpen;
                return (
                  <article
                    key={f.title}
                    className="bg-white rounded-2xl p-6 shadow-card border border-ink-100"
                  >
                    <div className="bg-brand-blue-soft rounded-xl p-2.5 w-fit mb-4">
                      <Icon size={22} className="text-brand-blue" aria-hidden="true" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-ink-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-700 leading-relaxed">{f.body}</p>
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              eyebrow="Curriculum overview"
              title={`What ${course.title} covers.`}
              align="center"
            />
            <ol className="mt-12 max-w-3xl mx-auto space-y-4">
              {course.curriculum.map((c, i) => (
                <li
                  key={c.topic}
                  className="bg-white rounded-2xl p-6 border border-ink-100 flex items-start gap-5"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-ink-900">
                      {c.topic}
                    </h3>
                    <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                      {c.description}
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`max-w-2xl mx-auto bg-white rounded-3xl border-2 ${accentBorderClass} shadow-card p-8 md:p-10 text-center`}
          >
            <Badge tone={course.badgeTone}>{course.badgeLabel}</Badge>
            <p className="mt-6 text-5xl md:text-6xl font-extrabold text-ink-900">
              {course.priceDisplay}
            </p>
            <p className="mt-2 text-base font-semibold text-ink-500">
              {course.accessLabel}
            </p>
            <ul className="mt-8 max-w-md mx-auto space-y-2.5 text-left">
              {course.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-ink-700">
                  <Check
                    size={18}
                    className="shrink-0 mt-1 text-brand-blue"
                    aria-hidden="true"
                  />
                  <span>{b}</span>
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
