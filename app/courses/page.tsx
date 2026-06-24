import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, GraduationCap, UserRound } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { courses } from '@/content/courses';
import { courseCatalog } from '@/content/lms';

export const metadata: Metadata = {
  title: 'Courses | Angrej Singh NCLEX',
  description:
    'Browse NCLEX-RN, NCLEX-PN (RPN), and Human Psychology courses by Angrej Singh.',
  alternates: { canonical: '/courses' },
  openGraph: {
    title: 'Courses | Angrej Singh NCLEX',
    description:
      'Browse individual course options, access periods, pricing, and enrollment paths.',
    url: '/courses',
    type: 'website',
  },
};

const catalogCourses = courseCatalog.courseSlugs.map((slug) => courses[slug]);

export default function CoursesPage() {
  return (
    <section className="bg-bg-soft py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge tone="blue">{courseCatalog.eyebrow}</Badge>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 md:text-5xl">
            {courseCatalog.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
            {courseCatalog.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {catalogCourses.map((course) => (
            <article
              key={course.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card"
            >
              <Link href={`/${course.slug}`} className="block p-4 pb-0">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-ink-100 bg-white">
                  <Image
                    src={course.thumbnailSrc}
                    alt={course.thumbnailAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-2.5"
                  />
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge tone={course.badgeTone}>{course.badgeLabel}</Badge>
                  <span className="text-xl font-extrabold text-ink-900">
                    {course.priceDisplay}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold text-ink-900">
                  <Link href={`/${course.slug}`} className="hover:text-brand-blue">
                    {course.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {course.oneLiner}
                </p>

                <div className="mt-5 grid gap-2 text-sm font-semibold text-ink-700">
                  <p className="flex items-center gap-2">
                    <UserRound size={17} className="text-brand-blue" aria-hidden="true" />
                    Angrej Singh
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={17} className="text-brand-blue" aria-hidden="true" />
                    {course.accessLabel}
                  </p>
                  <p className="flex items-center gap-2">
                    <GraduationCap size={17} className="text-brand-blue" aria-hidden="true" />
                    {course.slug === 'psychology' ? 'Self-paced course' : 'Live + recorded'}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <Button href={`/checkout?course=${course.slug}`} variant="primary" size="md">
                    Enroll
                  </Button>
                  <Button href={`/${course.slug}`} variant="ghost" size="md">
                    Details
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
