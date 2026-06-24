'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import type { CourseSlug } from '@/content/courses';

type AuthPreviewFormProps =
  | {
      mode: 'login';
      courseSlug: CourseSlug;
      children?: ReactNode;
    }
  | {
      mode: 'sign-up';
      courseSlug: CourseSlug;
      children?: ReactNode;
    };

export function AuthPreviewForm({ mode, courseSlug, children }: AuthPreviewFormProps) {
  const router = useRouter();
  const isSignUp = mode === 'sign-up';

  return (
    <form
      className="mt-7 space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        router.push(`/payment?course=${courseSlug}`);
      }}
    >
      {isSignUp && (
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField label="First Name" autoComplete="given-name" />
          <TextField label="Last Name" autoComplete="family-name" />
        </div>
      )}

      <TextField label="Email" type="email" autoComplete="email" />

      {isSignUp && (
        <TextField label="Phone Number" type="tel" autoComplete="tel" />
      )}

      <TextField
        label="Password"
        type="password"
        autoComplete={isSignUp ? 'new-password' : 'current-password'}
      />

      {!isSignUp && (
        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="inline-flex items-center gap-2 font-semibold text-ink-700">
            <input type="checkbox" className="h-4 w-4 rounded border-ink-100" />
            Remember me
          </label>
          <a
            href="/forgot-password"
            className="font-bold text-brand-blue hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      )}

      {children}

      <Button type="submit" variant="primary" size="lg" className="w-full">
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </Button>
    </form>
  );
}

function TextField({
  label,
  type = 'text',
  autoComplete,
}: {
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink-900">
        {label} *
      </span>
      <input
        type={type}
        autoComplete={autoComplete}
        required
        className="w-full rounded-lg border border-ink-100 bg-white px-4 py-3 text-ink-900 focus:border-brand-blue focus:outline-none"
      />
    </label>
  );
}
