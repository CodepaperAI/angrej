'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { faqs } from '@/content/faqs';

export function FAQ() {
  return (
    <section className="bg-bg-soft py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="FAQ"
            title="Questions students ask before joining."
            align="center"
          />

          <div className="mt-12 max-w-3xl mx-auto">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-xl border border-ink-100 mb-3 overflow-hidden"
              >
                <summary className="flex justify-between items-center gap-4 p-5 cursor-pointer font-semibold text-ink-900 list-none [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-ink-500 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-5 pb-5 text-ink-700 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-ink-700">
              Still have questions?{' '}
              <Link
                href="/contact"
                className="text-brand-blue font-semibold hover:underline"
              >
                Contact us →
              </Link>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
