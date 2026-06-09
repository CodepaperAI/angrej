import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Compass, Repeat } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'About Angrej Singh NCLEX',
  description:
    'One teacher. One plan. Real continuity. Live NCLEX-RN and NCLEX-PN coaching by Angrej Singh for nurses in Canada and abroad.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Angrej Singh NCLEX',
    description:
      'Built around one teacher and one plan — live NCLEX coaching for RN and RPN candidates.',
    url: '/about',
    type: 'website',
  },
};

const values = [
  {
    icon: Repeat,
    title: 'Consistency',
    body: 'Same teacher, same plan, every batch. No swapped instructors mid-program.',
  },
  {
    icon: Compass,
    title: 'Clarity',
    body: 'Concepts explained in plain language with real clinical context.',
  },
  {
    icon: Heart,
    title: 'Continuity',
    body: 'Recordings, alternate batch attendance, and revision support are built in.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft pt-12 pb-16 md:pt-20 md:pb-24">
        <Container>
          <div className="max-w-3xl">
            <Badge tone="blue">About</Badge>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink-900 text-balance">
              Built around one teacher and one plan.
            </h1>
            <p className="mt-5 text-base md:text-lg text-ink-700 leading-relaxed">
              Angrej Singh NCLEX exists for one reason: to help RN and RPN
              candidates pass the NCLEX without getting lost in a generic LMS.
              Every live class is taught by the same person, and the support
              continues right through to your exam day.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-ink-100 shadow-card">
              <Image
                src="/instructor.jpg"
                alt="Angrej Singh — NCLEX coach"
                width={680}
                height={680}
                className="w-full h-auto object-cover aspect-[5/6]"
              />
            </div>
            <div className="space-y-5 text-ink-700 leading-relaxed">
              <p>
                Angrej Singh started teaching NCLEX students after years of
                bedside nursing experience and watching candidates struggle
                with prep programs that swapped teachers, padded content, or
                left students without revision support.
              </p>
              <p>
                The format that emerged is deliberately simple: one teacher,
                one syllabus, two batch timings (morning and evening),
                recordings for every class, and the ability to attend the
                alternate batch on the same day if life gets in the way.
              </p>
              <p>
                The program is for RN and RPN candidates in Canada and abroad
                preparing for the NCLEX-RN or NCLEX-PN exam — international
                nurses, recent graduates, and career changers alike.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Our values"
            title="What we hold ourselves to."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {values.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-ink-100"
              >
                <div className="bg-brand-blue-soft rounded-xl p-3 w-fit mb-5">
                  <Icon size={28} className="text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-ink-700 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
