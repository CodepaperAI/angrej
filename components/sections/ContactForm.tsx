'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  pathway: z.enum(['rn', 'rpn', 'psychology', 'unsure']),
  batch: z.enum(['morning', 'evening', 'none']).optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const pathwayOptions: { value: FormValues['pathway']; label: string }[] = [
  { value: 'rn', label: 'NCLEX-RN' },
  { value: 'rpn', label: 'NCLEX-PN (RPN)' },
  { value: 'psychology', label: 'Human Psychology' },
  { value: 'unsure', label: 'Not sure yet' },
];

const batchOptions: { value: NonNullable<FormValues['batch']>; label: string }[] = [
  { value: 'morning', label: 'Morning' },
  { value: 'evening', label: 'Evening' },
  { value: 'none', label: 'No preference' },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get('course');
  const initialPathway: FormValues['pathway'] =
    courseParam === 'rn'
      ? 'rn'
      : courseParam === 'rpn'
        ? 'rpn'
        : courseParam === 'psychology'
          ? 'psychology'
          : 'unsure';

  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  );
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      pathway: initialPathway,
      batch: 'none',
      message: '',
    },
  });

  useEffect(() => {
    setValue('pathway', initialPathway);
  }, [initialPathway, setValue]);

  const onSubmit = async (data: FormValues) => {
    setSubmitState('submitting');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? 'Something went wrong. Please try again.');
      }
      setSubmitState('success');
    } catch (err) {
      setSubmitState('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    }
  };

  if (submitState === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-ink-100 shadow-card p-8 md:p-10 text-center">
        <CheckCircle2
          size={56}
          className="mx-auto text-success"
          aria-hidden="true"
        />
        <h2 className="mt-5 text-2xl md:text-3xl font-bold text-ink-900">
          Message sent.
        </h2>
        <p className="mt-3 text-ink-700 leading-relaxed max-w-md mx-auto">
          Thanks for reaching out. We&apos;ll be in touch shortly with next
          steps for your course enrollment.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl border border-ink-100 shadow-card p-6 md:p-8 space-y-5"
      noValidate
    >
      {submitState === 'error' && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-danger rounded-lg p-4 text-sm">
          <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
          <p>{errorMessage}</p>
        </div>
      )}

      <Field label="Full name" error={errors.name?.message} required>
        <input
          type="text"
          autoComplete="name"
          {...register('name')}
          className="w-full px-4 py-3 rounded-lg border border-ink-100 bg-white text-ink-900 placeholder:text-ink-300 focus:border-brand-blue focus:outline-none"
          placeholder="Jane Doe"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" error={errors.email?.message} required>
          <input
            type="email"
            autoComplete="email"
            {...register('email')}
            className="w-full px-4 py-3 rounded-lg border border-ink-100 bg-white text-ink-900 placeholder:text-ink-300 focus:border-brand-blue focus:outline-none"
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message} required>
          <input
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border border-ink-100 bg-white text-ink-900 placeholder:text-ink-300 focus:border-brand-blue focus:outline-none"
            placeholder="+1 (555) 123-4567"
          />
        </Field>
      </div>

      <fieldset>
        <legend className="block text-sm font-semibold text-ink-900 mb-2">
          Course interest <span className="text-danger">*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {pathwayOptions.map((opt) => (
            <label
              key={opt.value}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ink-100 cursor-pointer hover:border-brand-blue has-[:checked]:bg-brand-blue-soft has-[:checked]:border-brand-blue has-[:checked]:text-brand-blue-dark text-sm font-semibold transition-colors"
            >
              <input
                type="radio"
                value={opt.value}
                {...register('pathway')}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="block text-sm font-semibold text-ink-900 mb-2">
          Preferred batch
        </legend>
        <div className="flex flex-wrap gap-2">
          {batchOptions.map((opt) => (
            <label
              key={opt.value}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ink-100 cursor-pointer hover:border-brand-blue has-[:checked]:bg-brand-blue-soft has-[:checked]:border-brand-blue has-[:checked]:text-brand-blue-dark text-sm font-semibold transition-colors"
            >
              <input
                type="radio"
                value={opt.value}
                {...register('batch')}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={4}
          {...register('message')}
          className="w-full px-4 py-3 rounded-lg border border-ink-100 bg-white text-ink-900 placeholder:text-ink-300 focus:border-brand-blue focus:outline-none resize-none"
          placeholder="Anything else we should know?"
        />
      </Field>

      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={submitState === 'submitting'}
        >
          {submitState === 'submitting' ? 'Sending...' : 'Enroll'}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-ink-900 mb-2">
        {label} {required && <span className="text-danger">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs text-danger">{error}</span>
      )}
    </label>
  );
}
