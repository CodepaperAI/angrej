type Align = 'left' | 'center';

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: Align;
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-700 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
