import { Hero } from '@/components/sections/Hero';
import { InstituteVideo } from '@/components/sections/InstituteVideo';
import { BannerCarousel } from '@/components/sections/BannerCarousel';
import { CourseCards } from '@/components/sections/CourseCards';
import { Testimonials } from '@/components/sections/Testimonials';
import { PromiseSection, WhyStudentsChooseUs } from '@/components/sections/WhyAngrej';
import { Instructor } from '@/components/sections/Instructor';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <InstituteVideo />
      <BannerCarousel />
      <PromiseSection />
      <CourseCards />
      <WhyStudentsChooseUs />
      <Instructor />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </>
  );
}
