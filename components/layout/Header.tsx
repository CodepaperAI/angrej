'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'NCLEX-RN', href: '/rn' },
  { label: 'NCLEX-PN (RPN)', href: '/rpn' },
  { label: 'Psychology', href: '/psychology' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

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
          {navLinks.map((link) => (
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
          <a
            href={`tel:${site.brand.phoneTel}`}
            className="text-sm font-semibold text-ink-700 hover:text-brand-blue transition-colors"
          >
            {site.brand.phone}
          </a>
          <Button href="/contact" variant="primary" size="md">
            Enroll Now
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-ink-900"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <nav className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
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
              <a
                href={`tel:${site.brand.phoneTel}`}
                className="px-3 py-2 text-sm font-semibold text-ink-700"
              >
                Call {site.brand.phone}
              </a>
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Enroll Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
