import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { courses, type CourseSlug } from '@/content/courses';
import { site } from '@/content/site';

type SignUpPageProps = {
  searchParams: Promise<{ course?: string }>;
};

const courseSlugs = Object.keys(courses) as CourseSlug[];

export const metadata: Metadata = {
  title: 'Create Account | Angrej Singh Learning Hub',
  description: 'Create a student account for Angrej Singh course enrollment.',
  alternates: { canonical: '/sign-up' },
};

function getSelectedCourseSlug(course?: string): CourseSlug {
  return courseSlugs.includes(course as CourseSlug)
    ? (course as CourseSlug)
    : 'rn';
}

function TextField({
  label,
  type = 'text',
  autoComplete,
}: {
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink-900">
        {label} *
      </span>
      <input
        type={type}
        autoComplete={autoComplete}
        required
        className="w-full rounded-lg border border-ink-100 bg-white px-4 py-3 text-ink-900 focus:border-brand-blue focus:outline-none"
      />
    </label>
  );
}

function ContinueToPaymentLink({
  courseSlug,
  children,
}: {
  courseSlug: CourseSlug;
  children: string;
}) {
  return (
    <a
      href={`/payment?course=${courseSlug}`}
      data-flow-action="continue-to-payment"
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-blue-dark"
    >
      {children}
    </a>
  );
}

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
  const params = await searchParams;
  const courseSlug = getSelectedCourseSlug(params.course);

  return (
    <section className="bg-bg-soft py-12 md:py-16">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card md:grid-cols-[0.92fr_1.08fr]">
        <div className="hidden bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft p-8 md:block">
          <Image
            src="/logo.png"
            alt="Angrej Singh Learning Hub logo"
            width={138}
            height={46}
            className="h-10 w-auto object-contain"
          />
          <div className="mt-16">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">
              Student account
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-ink-900">
              Create your learning account.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              Start enrollment with your student details, then continue into the
              learning dashboard.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <h2 className="text-3xl font-extrabold text-ink-900">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-ink-700">
            Already have an account?{' '}
            <Link
              href={`/login?course=${courseSlug}`}
              className="font-bold text-brand-blue hover:underline"
            >
              Sign In
            </Link>
          </p>

          <div className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="First Name" autoComplete="given-name" />
              <TextField label="Last Name" autoComplete="family-name" />
            </div>
            <TextField label="Email" type="email" autoComplete="email" />
            <TextField label="Phone Number" type="tel" autoComplete="tel" />
            <TextField
              label="Password"
              type="password"
              autoComplete="new-password"
            />

            <p className="text-xs leading-relaxed text-ink-500">
              By clicking Sign Up, I agree that I have read and accepted the{' '}
              <a
                href={site.policies.terms}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-blue hover:underline"
              >
                Terms of Use
              </a>{' '}
              and{' '}
              <a
                href={site.policies.privacy}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-blue hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>

            <ContinueToPaymentLink courseSlug={courseSlug}>
              Sign Up
            </ContinueToPaymentLink>
          </div>
        </div>
      </div>
    </section>
  );
}
