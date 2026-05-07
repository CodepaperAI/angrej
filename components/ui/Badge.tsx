import type { ReactNode } from 'react';

type Tone = 'blue' | 'yellow' | 'neutral';

const toneClasses: Record<Tone, string> = {
  blue: 'bg-brand-blue-soft text-brand-blue-dark',
  yellow: 'bg-brand-yellow-soft text-brand-yellow-dark',
  neutral: 'bg-ink-100 text-ink-700',
};

export function Badge({
  tone = 'blue',
  children,
  className = '',
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${toneClasses[tone]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
