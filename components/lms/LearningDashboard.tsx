'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, FileText, PlayCircle, Video } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { courses, type CourseSlug } from '@/content/courses';
import { learningDashboard } from '@/content/lms';
import { getStoredEnrollments, storeEnrollment } from './enrollmentStorage';

const learningIconMap = {
  play: PlayCircle,
  book: BookOpen,
  check: CheckCircle2,
} satisfies Record<(typeof learningDashboard.tools)[number]['icon'], LucideIcon>;

const courseSlugs = Object.keys(courses) as CourseSlug[];

type DashboardCourse = {
  courseSlug: CourseSlug;
  status: string;
  progressPercent: number;
  actionLabel: string;
  actionHref: string;
  isUnlocked?: boolean;
};

export function LearningDashboard({
  selectedCourseSlug,
}: {
  selectedCourseSlug: CourseSlug | null;
}) {
  const [enrolledCourses, setEnrolledCourses] = useState<CourseSlug[]>(
    selectedCourseSlug ? [selectedCourseSlug] : [],
  );

  useEffect(() => {
    if (selectedCourseSlug) {
      setEnrolledCourses(storeEnrollment(selectedCourseSlug));
      return;
    }

    setEnrolledCourses(getStoredEnrollments());
  }, [selectedCourseSlug]);

  useEffect(() => {
    if (!selectedCourseSlug) return;

    const id = window.setTimeout(() => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      document.getElementById('course-room')?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }, 150);

    return () => window.clearTimeout(id);
  }, [selectedCourseSlug]);

  const dashboardCourses = useMemo<DashboardCourse[]>(() => {
    if (enrolledCourses.length === 0) return learningDashboard.courses;

    const enrolledSet = new Set(enrolledCourses);
    const orderedSlugs = [
      ...enrolledCourses,
      ...courseSlugs.filter((slug) => !enrolledSet.has(slug)),
    ];

    return orderedSlugs.map((slug) => {
      const fallback = learningDashboard.courses.find(
        (item) => item.courseSlug === slug,
      );

      if (enrolledSet.has(slug)) {
        return {
          courseSlug: slug,
          status: 'Enrollment complete',
          progressPercent: fallback?.progressPercent ?? 0,
          actionLabel: fallback?.progressPercent ? 'Continue' : 'Start Learning',
          actionHref: `/my-learning?course=${slug}#course-room`,
          isUnlocked: true,
        };
      }

      return {
        courseSlug: slug,
        status: 'Available after enrollment',
        progressPercent: 0,
        actionLabel: 'Enroll',
        actionHref: `/checkout?course=${slug}`,
      };
    });
  }, [enrolledCourses]);

  const activeCourseSlug = selectedCourseSlug ?? enrolledCourses[0] ?? null;
  const activeCourse = activeCourseSlug ? courses[activeCourseSlug] : null;

  return (
    <section className="bg-bg-soft py-12 md:py-16">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Badge tone="blue">{learningDashboard.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 md:text-5xl">
              {learningDashboard.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-700">
              {learningDashboard.description}
            </p>
          </div>
          <Button href="/courses" variant="outline" size="md">
            Browse Courses
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card md:p-8">
            <h2 className="text-xl font-extrabold text-ink-900">
              Continue learning
            </h2>
            <div className="mt-5 space-y-4">
              {dashboardCourses.map((item) => {
                const course = courses[item.courseSlug];
                const hasProgress = item.progressPercent > 0;

                return (
                  <article
                    key={course.slug}
                    className={`grid gap-4 rounded-2xl border p-4 sm:grid-cols-[1fr_auto] sm:items-center ${
                      item.isUnlocked
                        ? 'border-brand-blue/30 bg-brand-blue-soft/45'
                        : 'border-ink-100 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-ink-900">{course.title}</h3>
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            item.isUnlocked
                              ? 'bg-white text-brand-blue'
                              : 'bg-bg-soft text-ink-700'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                        <div
                          className="h-full rounded-full bg-brand-blue"
                          style={{ width: `${item.progressPercent}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs font-semibold text-ink-500">
                        {hasProgress
                          ? `${item.progressPercent}% complete`
                          : item.isUnlocked
                            ? 'Ready to start'
                            : 'Not started'}
                      </p>
                    </div>
                    <Button
                      href={item.actionHref}
                      variant={item.isUnlocked || hasProgress ? 'primary' : 'outline'}
                      size="md"
                    >
                      {item.actionLabel}
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card md:p-8">
            <h2 className="text-xl font-extrabold text-ink-900">
              Learning tools
            </h2>
            <div className="mt-5 space-y-4">
              {learningDashboard.tools.map((tool) => {
                const ToolIcon = learningIconMap[tool.icon];
                return (
                  <div key={tool.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue">
                      <ToolIcon size={19} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-ink-900">{tool.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-700">
                        {tool.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              Need account help?{' '}
              <Link href="/contact" className="font-bold text-brand-blue hover:underline">
                Contact support
              </Link>
              .
            </p>
          </aside>
        </div>

        {activeCourse && (
          <section
            id="course-room"
            className="mt-8 scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-6 shadow-card md:p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div className="overflow-hidden rounded-2xl bg-ink-900 text-white">
                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-ink-900 via-ink-800 to-brand-blue-dark">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-blue shadow-card">
                      <PlayCircle size={34} aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-sm font-bold uppercase tracking-wider text-brand-yellow">
                      Course access unlocked
                    </p>
                    <h2 className="mx-auto mt-2 max-w-md text-2xl font-extrabold">
                      {activeCourse.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div>
                <Badge tone={activeCourse.badgeTone}>Course room</Badge>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900">
                  Start your enrolled course.
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-700">
                  This preview shows the post-payment learning area students
                  should reach after checkout: class access, recordings,
                  materials, and next steps in one place.
                </p>
                <div className="mt-5 grid gap-3">
                  {[
                    {
                      icon: Video,
                      title: activeCourse.slug === 'psychology' ? 'Self-paced lessons' : 'Live class access',
                      body: activeCourse.slug === 'psychology'
                        ? 'Open the first psychology lesson and continue at your pace.'
                        : 'Join live classes and return to recordings when needed.',
                    },
                    {
                      icon: FileText,
                      title: 'Course materials',
                      body: 'Keep notes, PDFs, and revision resources with the course.',
                    },
                    {
                      icon: CheckCircle2,
                      title: 'Progress tracking',
                      body: 'Track what is complete and what to study next.',
                    },
                  ].map(({ icon: Icon, title, body }) => (
                    <div key={title} className="flex gap-3 rounded-2xl bg-bg-soft p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue">
                        <Icon size={19} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-bold text-ink-900">{title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-700">
                          {body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex">
                  <Button href={`/${activeCourse.slug}`} variant="primary" size="md">
                    Start Learning
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
      </Container>
    </section>
  );
}
