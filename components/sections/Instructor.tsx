'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function Instructor() {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-20 text-white md:py-28">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-center gap-12 md:grid-cols-[2fr_3fr]"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 h-32 w-32 rotate-12 rounded-2xl bg-brand-yellow opacity-90"
            />
            <div className="relative overflow-hidden rounded-3xl border-4 border-white/10 shadow-card">
              <Image
                src="/instructor.jpg"
                alt="Angrej Singh, NCLEX coach"
                width={480}
                height={576}
                className="aspect-[5/6] h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
              About Angrej Singh
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
              Teaching with knowledge. Leading with heart.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-white/90">
              <p>
                For me, teaching is not a business transaction. It is a
                responsibility.
              </p>
              <p>
                Every student who joins trusts me with their future, their
                dreams, and their hard-earned money.
              </p>
              <p>
                That trust deserves honesty, preparation, dedication, and my very
                best effort every single day.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
