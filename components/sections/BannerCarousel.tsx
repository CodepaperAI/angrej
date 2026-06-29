'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { banners } from '@/content/banners';

const AUTOPLAY_MS = 6000;
const EASE = [0.16, 1, 0.3, 1] as const;

export function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = banners.length;

  const goTo = useCallback(
    (next: number) => {
      setDirection(next >= index ? 1 : -1);
      setIndex((next + count) % count);
    },
    [count, index],
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((current) => (current + 1) % count);
  }, [count]);

  const goPrevious = useCallback(() => {
    setDirection(-1);
    setIndex((current) => (current - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (reduceMotion || paused || count <= 1) return;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, count, goNext]);

  if (count === 0) return null;

  const active = banners[index];

  return (
    <section className="bg-white py-10 md:py-14" aria-roledescription="carousel">
      <Container>
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="relative aspect-[1920/700] overflow-hidden rounded-3xl border border-ink-100 bg-brand-blue-soft shadow-card">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                className="absolute inset-0"
                custom={direction}
                initial={{
                  x: reduceMotion ? 0 : `${direction * 100}%`,
                  opacity: reduceMotion ? 1 : 0.88,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: reduceMotion ? 0 : `${direction * -100}%`,
                  opacity: reduceMotion ? 1 : 0.88,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.65, ease: EASE }}
              >
                <BannerSlide banner={active} priority={index === 0} />
              </motion.div>
            </AnimatePresence>
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous banner"
                className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink-100 bg-white/90 text-ink-700 shadow-card backdrop-blur transition hover:bg-white hover:text-brand-blue sm:flex"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next banner"
                className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink-100 bg-white/90 text-ink-700 shadow-card backdrop-blur transition hover:bg-white hover:text-brand-blue sm:flex"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>

              <div className="mt-5 flex items-center justify-center gap-2.5">
                {banners.map((banner, dotIndex) => {
                  const isActive = dotIndex === index;
                  return (
                    <button
                      key={banner.src}
                      type="button"
                      onClick={() => goTo(dotIndex)}
                      aria-label={`Go to banner ${dotIndex + 1}`}
                      aria-current={isActive}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-7 bg-brand-blue'
                          : 'w-2.5 bg-ink-100 hover:bg-ink-300'
                      }`}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

function BannerSlide({
  banner,
  priority,
}: {
  banner: (typeof banners)[number];
  priority: boolean;
}) {
  const image = (
    <Image
      src={banner.src}
      alt={banner.alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 1152px"
      className="object-cover"
    />
  );

  if (banner.href) {
    return (
      <Link href={banner.href} className="relative block h-full w-full" aria-label={banner.alt}>
        {image}
      </Link>
    );
  }

  return image;
}
