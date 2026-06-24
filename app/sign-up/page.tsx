import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AuthPreviewForm } from '@/components/lms/AuthPreviewForm';
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

          <AuthPreviewForm mode="sign-up" courseSlug={courseSlug}>
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
          </AuthPreviewForm>
        </div>
      </div>
    </section>
  );
}
