import { site } from '@/content/site';

export function OfferBar() {
  return (
    <div className="sticky top-0 z-50 h-9 bg-ink-900 text-white text-xs md:text-sm flex items-center justify-center px-4 overflow-hidden">
      <p className="text-center font-medium leading-none whitespace-nowrap overflow-hidden text-ellipsis">
        🎓 Live NCLEX coaching by Angrej Singh — $1200 / 120 days
        <span className="hidden sm:inline"> · Limited seats · Call </span>
        <a
          href={`tel:${site.brand.phoneTel}`}
          className="hidden sm:inline underline decoration-brand-yellow underline-offset-2 hover:text-brand-yellow"
        >
          {site.brand.phone}
        </a>
      </p>
    </div>
  );
}
