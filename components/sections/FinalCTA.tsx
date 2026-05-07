'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';

type Variant = 'both' | 'rn-only' | 'rpn-only';

export function FinalCTA({ variant = 'both' }: { variant?: Variant }) {
  return (
    <section className="bg-brand-yellow py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 text-balance">
            Ready to start your NCLEX prep?
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-700 leading-relaxed">
            Join the next batch with Angrej Singh. Pick your pathway and we&apos;ll
            take it from there.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {(variant === 'both' || variant === 'rn-only') && (
              <Button href="/contact?course=rn" variant="primary" size="lg">
                Enroll in RN
              </Button>
            )}
            {(variant === 'both' || variant === 'rpn-only') && (
              <Button href="/contact?course=rpn" variant="outline" size="lg">
                Enroll in RPN
              </Button>
            )}
          </div>

          <p className="mt-6 text-sm text-ink-700">
            Or call directly:{' '}
            <a
              href={`tel:${site.brand.phoneTel}`}
              className="font-bold text-ink-900 hover:underline"
            >
              {site.brand.phone}
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
