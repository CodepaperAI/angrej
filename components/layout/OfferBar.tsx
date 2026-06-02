import { site } from '@/content/site';

export function OfferBar() {
  return (
    <div className="sticky top-0 z-50 flex h-9 items-center justify-center overflow-hidden bg-ink-900 px-4 text-xs text-white md:text-sm">
      <p className="overflow-hidden text-ellipsis whitespace-nowrap text-center font-medium leading-none">
        Nursing Mastery with Angrej Singh
        <span className="hidden sm:inline">. Your success comes first. Call </span>
        <a
          href={`tel:${site.brand.phoneTel}`}
          className="hidden underline decoration-brand-yellow underline-offset-2 hover:text-brand-yellow sm:inline"
        >
          {site.brand.phone}
        </a>
      </p>
    </div>
  );
}
