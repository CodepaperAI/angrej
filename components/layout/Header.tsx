'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const courseLinks = [
  { label: 'All Courses', href: '/courses' },
  { label: 'NCLEX-RN', href: '/rn' },
  { label: 'NCLEX-PN (RPN)', href: '/rpn' },
  { label: 'Psychology', href: '/psychology' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [desktopCoursesOpen, setDesktopCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const coursesMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);
  const isCourseActive = courseLinks.some((link) => isActive(link.href));

  useEffect(() => {
    const closeDesktopCourses = (event: MouseEvent) => {
      if (
        coursesMenuRef.current &&
        !coursesMenuRef.current.contains(event.target as Node)
      ) {
        setDesktopCoursesOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDesktopCoursesOpen(false);
        setMobileCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', closeDesktopCourses);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeDesktopCourses);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileCoursesOpen(false);
  };

  return (
    <header className="sticky top-9 z-40 bg-white border-b border-ink-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-18 gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={site.brand.name}>
          <Image
            src="/logo.png"
            alt={`${site.brand.name} logo`}
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors ${
              isActive('/') ? 'text-brand-blue' : 'text-ink-700 hover:text-brand-blue'
            }`}
          >
            Home
          </Link>

          <div ref={coursesMenuRef} className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={desktopCoursesOpen}
              onClick={() => setDesktopCoursesOpen((value) => !value)}
              className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                isCourseActive || desktopCoursesOpen
                  ? 'text-brand-blue'
                  : 'text-ink-700 hover:text-brand-blue'
              }`}
            >
              Courses
              <ChevronDown
                size={16}
                className={`transition-transform ${desktopCoursesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {desktopCoursesOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 rounded-xl border border-ink-100 bg-white p-2 shadow-card-hover"
              >
                {courseLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setDesktopCoursesOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? 'bg-brand-blue-soft text-brand-blue'
                        : 'text-ink-700 hover:bg-bg-soft hover:text-brand-blue'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? 'text-brand-blue'
                  : 'text-ink-700 hover:text-brand-blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/my-learning"
            className="hidden text-sm font-semibold text-ink-700 transition-colors hover:text-brand-blue lg:inline-flex"
          >
            My Learning
          </Link>
          <Link
            href="/login"
            className="hidden text-sm font-semibold text-ink-700 transition-colors hover:text-brand-blue lg:inline-flex"
          >
            Sign In
          </Link>
          <a
            href={`tel:${site.brand.phoneTel}`}
            className="hidden text-sm font-semibold text-ink-700 hover:text-brand-blue transition-colors xl:inline-flex"
          >
            {site.brand.phone}
          </a>
          <Button href="/courses" variant="primary" size="md">
            Enroll
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => {
            setOpen((value) => !value);
            setMobileCoursesOpen(false);
          }}
          className="lg:hidden p-2 -mr-2 text-ink-900"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <nav className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col gap-1" aria-label="Mobile">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`px-3 py-3 rounded-lg font-semibold ${
                isActive('/')
                  ? 'bg-brand-blue-soft text-brand-blue'
                  : 'text-ink-700 hover:bg-bg-soft'
              }`}
            >
              Home
            </Link>

            <button
              type="button"
              aria-expanded={mobileCoursesOpen}
              onClick={() => setMobileCoursesOpen((value) => !value)}
              className={`flex items-center justify-between rounded-lg px-3 py-3 text-left font-semibold ${
                isCourseActive || mobileCoursesOpen
                  ? 'bg-brand-blue-soft text-brand-blue'
                  : 'text-ink-700 hover:bg-bg-soft'
              }`}
            >
              Courses
              <ChevronDown
                size={18}
                className={`transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {mobileCoursesOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-ink-100 pl-3">
                {courseLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                      isActive(link.href)
                        ? 'bg-brand-blue-soft text-brand-blue'
                        : 'text-ink-700 hover:bg-bg-soft'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`px-3 py-3 rounded-lg font-semibold ${
                  isActive(link.href)
                    ? 'bg-brand-blue-soft text-brand-blue'
                    : 'text-ink-700 hover:bg-bg-soft'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-ink-100 flex flex-col gap-3">
              <Link
                href="/my-learning"
                onClick={closeMobileMenu}
                className="px-3 py-2 text-sm font-semibold text-ink-700"
              >
                My Learning
              </Link>
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="px-3 py-2 text-sm font-semibold text-ink-700"
              >
                Sign In
              </Link>
              <a
                href={`tel:${site.brand.phoneTel}`}
                className="px-3 py-2 text-sm font-semibold text-ink-700"
              >
                Call {site.brand.phone}
              </a>
              <Button href="/courses" variant="primary" size="md" className="w-full">
                Enroll
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
