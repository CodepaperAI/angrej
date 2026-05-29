import type { Metadata } from 'next';
import { CourseDetail } from '@/components/sections/CourseDetail';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { courses } from '@/content/courses';

export const metadata: Metadata = {
  title: 'NCLEX-PN (RPN) coaching | Angrej Singh NCLEX',
  description:
    'Live NCLEX-PN (RPN) coaching by Angrej Singh, with morning and evening batches, recordings included, and practice tests with rationales. $1200 / 120 days.',
  alternates: { canonical: '/rpn' },
  openGraph: {
    title: 'NCLEX-PN (RPN) coaching | Angrej Singh NCLEX',
    description:
      'Live NCLEX-PN coaching with Angrej Singh, same teacher every class.',
    url: '/rpn',
    type: 'website',
  },
};

export default function RpnPage() {
  return (
    <>
      <CourseDetail course={courses.rpn} />
      <FAQ />
      <FinalCTA variant="rpn-only" />
    </>
  );
}
