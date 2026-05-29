import { Hero } from '@/components/sections/Hero';
import { CourseCards } from '@/components/sections/CourseCards';
import { Testimonials } from '@/components/sections/Testimonials';
import { WhyAngrej } from '@/components/sections/WhyAngrej';
import { Instructor } from '@/components/sections/Instructor';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CourseCards />
      <Testimonials />
      <WhyAngrej />
      <Instructor />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </>
  );
}
