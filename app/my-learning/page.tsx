import type { Metadata } from 'next';
import { LearningDashboard } from '@/components/lms/LearningDashboard';
import { courses, type CourseSlug } from '@/content/courses';

type MyLearningPageProps = {
  searchParams: Promise<{ course?: string }>;
};

export const metadata: Metadata = {
  title: 'My Learning | Angrej Singh Learning Hub',
  description: 'Student learning dashboard preview for Angrej Singh courses.',
  alternates: { canonical: '/my-learning' },
};

const courseSlugs = Object.keys(courses) as CourseSlug[];

function getSelectedCourseSlug(course?: string): CourseSlug | null {
  return courseSlugs.includes(course as CourseSlug) ? (course as CourseSlug) : null;
}

export default async function MyLearningPage({
  searchParams,
}: MyLearningPageProps) {
  const params = await searchParams;

  return (
    <LearningDashboard
      selectedCourseSlug={getSelectedCourseSlug(params.course)}
    />
  );
}
