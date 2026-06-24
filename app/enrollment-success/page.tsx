import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { courses, type CourseSlug } from '@/content/courses';
import { enrollmentSuccess } from '@/content/lms';

type EnrollmentSuccessPageProps = {
  searchParams: Promise<{ course?: string }>;
};

const courseSlugs = Object.keys(courses) as CourseSlug[];

export const metadata: Metadata = {
  title: 'Enrollment Complete | Angrej Singh Learning Hub',
  description:
    'Enrollment success preview for Angrej Singh course students.',
  alternates: { canonical: '/enrollment-success' },
};

function getSelectedCourse(course?: string) {
  const slug = courseSlugs.includes(course as CourseSlug)
    ? (course as CourseSlug)
    : 'rn';

  return courses[slug];
}

export default async function EnrollmentSuccessPage({
  searchParams,
}: EnrollmentSuccessPageProps) {
  const params = await searchParams;
  const course = getSelectedCourse(params.course);

  return (
    <section className="bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-ink-100 bg-white p-6 text-center shadow-card md:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue text-white">
            <CheckCircle2 size={34} aria-hidden="true" />
          </div>
          <Badge tone={course.badgeTone} className="mt-6">
            {enrollmentSuccess.eyebrow}
          </Badge>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 md:text-5xl">
            {enrollmentSuccess.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
            {enrollmentSuccess.description}
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-ink-100 bg-bg-soft p-5 text-left">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">
              Selected course
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-ink-900">
              {course.title}
            </h2>
            <ul className="mt-5 space-y-3">
              {enrollmentSuccess.nextSteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm text-ink-700">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href={`/my-learning?course=${course.slug}`}
              variant="primary"
              size="lg"
            >
              Open My Learning
            </Button>
            <Button href={`/${course.slug}`} variant="outline" size="lg">
              View Course
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
