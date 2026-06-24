import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, CheckCircle2, PlayCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { courses, type CourseSlug } from '@/content/courses';
import { learningDashboard } from '@/content/lms';

type MyLearningPageProps = {
  searchParams: Promise<{ course?: string }>;
};

export const metadata: Metadata = {
  title: 'My Learning | Angrej Singh Learning Hub',
  description: 'Student learning dashboard preview for Angrej Singh courses.',
  alternates: { canonical: '/my-learning' },
};

const learningIconMap = {
  play: PlayCircle,
  book: BookOpen,
  check: CheckCircle2,
} satisfies Record<(typeof learningDashboard.tools)[number]['icon'], LucideIcon>;

const courseSlugs = Object.keys(courses) as CourseSlug[];

function getSelectedCourseSlug(course?: string): CourseSlug | null {
  return courseSlugs.includes(course as CourseSlug) ? (course as CourseSlug) : null;
}

export default async function MyLearningPage({
  searchParams,
}: MyLearningPageProps) {
  const params = await searchParams;
  const selectedCourseSlug = getSelectedCourseSlug(params.course);
  const dashboardCourses = selectedCourseSlug
    ? [
        {
          courseSlug: selectedCourseSlug,
          status: 'Enrollment complete',
          progressPercent: 0,
          actionLabel: 'Start Course',
          actionHref: `/${selectedCourseSlug}`,
        },
        ...learningDashboard.courses.filter(
          (item) => item.courseSlug !== selectedCourseSlug,
        ),
      ]
    : learningDashboard.courses;

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
                const isNewEnrollment = item.status === 'Enrollment complete';

                return (
                  <article
                    key={course.slug}
                    className="grid gap-4 rounded-2xl border border-ink-100 p-4 sm:grid-cols-[1fr_auto] sm:items-center"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-ink-900">{course.title}</h3>
                        <span className="rounded-full bg-bg-soft px-2.5 py-1 text-xs font-semibold text-ink-700">
                          {item.status}
                        </span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-bg-soft">
                        <div
                          className="h-full rounded-full bg-brand-blue"
                          style={{ width: `${item.progressPercent}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs font-semibold text-ink-500">
                        {hasProgress
                          ? `${item.progressPercent}% complete`
                          : isNewEnrollment
                            ? 'Ready to start'
                            : 'Not started'}
                      </p>
                    </div>
                    <Button
                      href={item.actionHref}
                      variant={hasProgress || isNewEnrollment ? 'primary' : 'outline'}
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
      </Container>
    </section>
  );
}
