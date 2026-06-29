'use client';

import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';

export function InstituteVideo() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="min-w-0">
            <Badge tone="yellow">{site.institute.badge}</Badge>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-ink-900 md:text-5xl">
              {site.institute.title}
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-ink-700">
              {site.institute.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/courses" variant="primary" size="lg">
                Explore Courses
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-3xl border border-ink-100 bg-ink-900 shadow-card">
              <div className="relative aspect-video bg-ink-900">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                  poster={site.institute.video.poster}
                  aria-label={site.institute.video.label}
                >
                  <source src={site.institute.video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 bg-ink-900 px-5 py-4 text-white">
                <PlayCircle size={21} className="shrink-0 text-brand-yellow" aria-hidden="true" />
                <p className="text-sm font-semibold">
                  Watch how Angrej Singh makes nursing concepts easier to understand.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
