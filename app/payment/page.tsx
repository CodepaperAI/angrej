import type { Metadata } from 'next';
import { CreditCard, LockKeyhole, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { courses, type CourseSlug } from '@/content/courses';
import { paymentPortal } from '@/content/lms';

type PaymentPageProps = {
  searchParams: Promise<{ course?: string }>;
};

const courseSlugs = Object.keys(courses) as CourseSlug[];

export const metadata: Metadata = {
  title: 'Payment Portal Preview | Angrej Singh Learning Hub',
  description:
    'Preview the payment step for Angrej Singh course enrollment.',
  alternates: { canonical: '/payment' },
};

function getSelectedCourse(course?: string) {
  const slug = courseSlugs.includes(course as CourseSlug)
    ? (course as CourseSlug)
    : 'rn';

  return courses[slug];
}

export default async function PaymentPage({ searchParams }: PaymentPageProps) {
  const params = await searchParams;
  const course = getSelectedCourse(params.course);

  return (
    <section className="bg-bg-soft py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <Badge tone={course.badgeTone}>{paymentPortal.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 md:text-5xl">
              {paymentPortal.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
              {paymentPortal.description}
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue">
                  <CreditCard size={22} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-ink-900">
                    Payment details
                  </h2>
                  <p className="text-sm text-ink-500">
                    Client preview only. No payment will be charged.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {paymentPortal.fields.map((field) => (
                  <label key={field} className="block">
                    <span className="mb-2 block text-sm font-semibold text-ink-900">
                      {field}
                    </span>
                    <input
                      type="text"
                      placeholder={field}
                      className="w-full rounded-lg border border-ink-100 bg-white px-4 py-3 text-ink-900 focus:border-brand-blue focus:outline-none"
                    />
                  </label>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-ink-100 bg-bg-soft p-5">
                <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  Future payment methods
                </p>
                <div className="mt-4 grid gap-3">
                  {paymentPortal.methods.map((method) => (
                    <div
                      key={method}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-ink-700"
                    >
                      <ShieldCheck
                        size={18}
                        className="text-brand-blue"
                        aria-hidden="true"
                      />
                      {method}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-brand-yellow/40 bg-brand-yellow-soft p-5">
                <div className="flex gap-3">
                  <LockKeyhole
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-yellow-dark"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-ink-700">
                    {paymentPortal.notice}
                  </p>
                </div>
              </div>
            </div>

            <aside className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card md:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                Order summary
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-ink-900">
                {course.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {course.oneLiner}
              </p>

              <div className="mt-6 space-y-3 border-y border-ink-100 py-5">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-ink-500">Course access</span>
                  <span className="font-bold text-ink-900">{course.accessLabel}</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-ink-500">Instructor</span>
                  <span className="font-bold text-ink-900">Angrej Singh</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-ink-500">Total</span>
                  <span className="text-2xl font-extrabold text-ink-900">
                    {course.priceDisplay}
                  </span>
                </div>
              </div>

              <Button
                href={`/enrollment-success?course=${course.slug}`}
                variant="primary"
                size="lg"
                className="mt-7 w-full"
              >
                Complete Enrollment Preview
              </Button>

              <Button
                href={`/checkout?course=${course.slug}`}
                variant="ghost"
                size="md"
                className="mt-3 w-full"
              >
                Back to checkout
              </Button>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
