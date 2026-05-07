import type { Metadata } from 'next';
import { CourseDetail } from '@/components/sections/CourseDetail';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { courses } from '@/content/courses';

export const metadata: Metadata = {
  title: 'Human Psychology — Master Human Behavior | Angrej Singh NCLEX',
  description:
    'A self-paced course on understanding human behavior, communication, and self-development. Taught by Angrej Singh.',
  alternates: { canonical: '/psychology' },
  openGraph: {
    title: 'Human Psychology — Master Human Behavior | Angrej Singh',
    description:
      'A self-paced course on understanding human behavior, communication, and self-development.',
    url: '/psychology',
    type: 'website',
  },
};

export default function PsychologyPage() {
  return (
    <>
      <CourseDetail course={courses.psychology} />
      <FAQ />
      <FinalCTA />
    </>
  );
}
