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
      <section className="bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft pt-8 pb-9 md:pt-10 md:pb-12">
        <Container>
          <div className="min-w-0 max-w-3xl">
            <Badge tone="blue">About</Badge>
            <h1 className="mt-3 min-w-0 break-words text-3xl font-extrabold leading-[1.08] tracking-tight text-ink-900 [overflow-wrap:anywhere] md:text-balance md:text-4xl lg:text-5xl">
              Built around one teacher and one plan.
            </h1>
            <p className="mt-3 min-w-0 break-words text-base leading-relaxed text-ink-700 [overflow-wrap:anywhere] md:text-lg">
              Angrej Singh NCLEX exists for one reason: to help RN and RPN
              candidates pass the NCLEX without getting lost in a generic LMS.
              Every live class is taught by the same person, and the support
              continues right through to your exam day.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-9 md:py-11">
        <Container>
          <div className="grid min-w-0 items-start gap-6 md:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <div className="relative min-w-0 overflow-hidden rounded-2xl border border-ink-100 shadow-card">
              <Image
                src="/instructor.jpg"
                alt="Angrej Singh - NCLEX coach"
                width={680}
                height={680}
                className="aspect-[4/5] w-full object-cover object-top md:aspect-auto md:h-[380px] lg:h-[410px]"
              />
            </div>
            <div className="min-w-0 space-y-3 break-words text-base leading-relaxed text-ink-700 [overflow-wrap:anywhere] md:pt-1">
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

      <section className="bg-white pt-0 pb-9 md:pb-12">
        <Container>
          <SectionHeader
            eyebrow="Our values"
            title="What we hold ourselves to."
            align="center"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-ink-100 bg-white p-4 shadow-card md:p-5"
              >
                <div className="mb-3 w-fit rounded-xl bg-brand-blue-soft p-2.5">
                  <Icon size={22} className="text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-ink-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
