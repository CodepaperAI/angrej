import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, CreditCard, LockKeyhole, UserRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { courses, type CourseSlug } from '@/content/courses';
import { checkoutSteps } from '@/content/lms';

type CheckoutPageProps = {
  searchParams: Promise<{ course?: string }>;
};

const courseSlugs = Object.keys(courses) as CourseSlug[];

const checkoutIconMap = {
  user: UserRound,
  'credit-card': CreditCard,
  lock: LockKeyhole,
} satisfies Record<(typeof checkoutSteps)[number]['icon'], LucideIcon>;

export const metadata: Metadata = {
  title: 'Checkout | Angrej Singh NCLEX',
  description:
    'Review your selected course and continue into the account flow for enrollment.',
  alternates: { canonical: '/checkout' },
};

function getSelectedCourse(course?: string) {
  const slug = courseSlugs.includes(course as CourseSlug)
    ? (course as CourseSlug)
    : 'rn';

  return courses[slug];
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const course = getSelectedCourse(params.course);

  return (
    <section className="bg-bg-soft py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <Badge tone={course.badgeTone}>Enrollment checkout</Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 md:text-5xl">
              Review your course before continuing.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
              Confirm the course details, then continue to sign in or create an
              account. Payment and student access can be connected when the LMS
              backend is ready.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-ink-100 pb-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                    Selected course
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-ink-900">
                    {course.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-700">
                    {course.oneLiner}
                  </p>
                </div>
                <p className="text-3xl font-extrabold text-ink-900">
                  {course.priceDisplay}
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  ['Access period', course.accessLabel],
                  ['Instructor', 'Angrej Singh'],
                  ['Format', course.slug === 'psychology' ? 'Self-paced' : 'Live + recorded'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-bg-soft p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-500">
                      {label}
                    </p>
                    <p className="mt-1 font-bold text-ink-900">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-base font-bold text-ink-900">
                  This enrollment includes
                </h3>
                <ul className="mt-3 grid gap-2">
                  {course.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-ink-700">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-brand-blue"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card md:p-8">
              <h2 className="text-xl font-extrabold text-ink-900">
                Enrollment steps
              </h2>
              <div className="mt-5 space-y-4">
                {checkoutSteps.map((step) => {
                  const StepIcon = checkoutIconMap[step.icon];
                  return (
                    <div key={step.title} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue">
                        <StepIcon size={19} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-bold text-ink-900">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-700">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 space-y-3">
                <Button href={`/login?course=${course.slug}`} variant="primary" size="lg" className="w-full">
                  Continue to Sign In
                </Button>
                <Button href={`/sign-up?course=${course.slug}`} variant="outline" size="lg" className="w-full">
                  Create Account
                </Button>
              </div>

              <p className="mt-5 text-center text-xs leading-relaxed text-ink-500">
                Need help before enrolling?{' '}
                <Link href="/contact" className="font-bold text-brand-blue hover:underline">
                  Contact the team
                </Link>
                .
              </p>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
