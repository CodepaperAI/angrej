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
      'Built around one teacher and one plan - live NCLEX coaching for RN and RPN candidates.',
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
      <section className="bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft pt-10 pb-12 md:pt-14 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <Badge tone="blue">About</Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-ink-900 text-balance md:text-4xl lg:text-5xl">
              Built around one teacher and one plan.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
              Angrej Singh NCLEX exists for one reason: to help RN and RPN
              candidates pass the NCLEX without getting lost in a generic LMS.
              Every live class is taught by the same person, and the support
              continues right through to your exam day.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid items-start gap-8 md:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div className="relative overflow-hidden rounded-3xl border border-ink-100 shadow-card">
              <Image
                src="/instructor.jpg"
                alt="Angrej Singh - NCLEX coach"
                width={680}
                height={680}
                className="aspect-[4/5] w-full object-cover object-top md:aspect-auto md:h-[460px]"
              />
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-700 md:text-lg">
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
                preparing for the NCLEX-RN or NCLEX-PN exam - international
                nurses, recent graduates, and career changers alike.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pt-4 pb-12 md:pt-6 md:pb-16">
        <Container>
          <SectionHeader
            eyebrow="Our values"
            title="What we hold ourselves to."
            align="center"
          />
          <div className="grid gap-4 mt-8 md:grid-cols-3 md:gap-5">
            {values.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-card border border-ink-100"
              >
                <div className="bg-brand-blue-soft rounded-xl p-2.5 w-fit mb-4">
                  <Icon size={24} className="text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
