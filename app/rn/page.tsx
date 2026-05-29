import type { Metadata } from 'next';
import { CourseDetail } from '@/components/sections/CourseDetail';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { courses } from '@/content/courses';

export const metadata: Metadata = {
  title: 'NCLEX-RN coaching | Angrej Singh NCLEX',
  description:
    'Live NCLEX-RN coaching by Angrej Singh, with morning and evening batches, recordings included, and 3000+ practice questions. $1200 / 120 days.',
  alternates: { canonical: '/rn' },
  openGraph: {
    title: 'NCLEX-RN coaching | Angrej Singh NCLEX',
    description:
      'Live NCLEX-RN coaching with Angrej Singh, same teacher every class.',
    url: '/rn',
    type: 'website',
  },
};

export default function RnPage() {
  return (
    <>
      <CourseDetail course={courses.rn} />
      <FAQ />
      <FinalCTA variant="rn-only" />
    </>
  );
}
