import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { site } from '@/content/site';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'NCLEX-RN', href: '/rn' },
  { label: 'NCLEX-PN (RPN)', href: '/rpn' },
  { label: 'Psychology', href: '/psychology' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: site.policies.privacy },
  { label: 'Terms & Conditions', href: site.policies.terms },
  { label: 'Refund Policy', href: site.policies.refund },
  { label: 'Cookie Policy', href: site.policies.cookies },
];

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.52a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84Z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt={`${site.brand.name} logo`}
              width={120}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-xs">
              {site.brand.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
              <li>
                <a
                  href={`mailto:${site.brand.email}`}
                  className="hover:text-white transition-colors"
                >
                  {site.brand.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.brand.phoneTel}`}
                  className="hover:text-white transition-colors"
                >
                  {site.brand.phone}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.brand.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ink-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={site.brand.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-ink-300 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href={site.brand.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-ink-300 hover:text-white transition-colors"
              >
                <TikTokIcon size={20} />
              </a>
              <a
                href={site.brand.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-ink-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-ink-300">
          <p>Copyright {new Date().getFullYear()} {site.brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
