import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AuthPreviewForm } from '@/components/lms/AuthPreviewForm';
import { courses, type CourseSlug } from '@/content/courses';

type LoginPageProps = {
  searchParams: Promise<{ course?: string }>;
};

const courseSlugs = Object.keys(courses) as CourseSlug[];

export const metadata: Metadata = {
  title: 'Sign In | Angrej Singh Learning Hub',
  description: 'Sign in to continue your Angrej Singh course enrollment.',
  alternates: { canonical: '/login' },
};

function getSelectedCourseSlug(course?: string): CourseSlug {
  return courseSlugs.includes(course as CourseSlug)
    ? (course as CourseSlug)
    : 'rn';
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
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
              Student access
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-ink-900">
              Continue your learning journey.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              Sign in to continue enrollment, view your courses, and return to
              your learning dashboard.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <h2 className="text-3xl font-extrabold text-ink-900">Sign In</h2>
          <p className="mt-2 text-sm text-ink-700">
            New student?{' '}
            <Link
              href={`/sign-up?course=${courseSlug}`}
              className="font-bold text-brand-blue hover:underline"
            >
              Create an account
            </Link>
          </p>

          <AuthPreviewForm mode="login" courseSlug={courseSlug} />
        </div>
      </div>
    </section>
  );
}
