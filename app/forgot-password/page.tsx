import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Forgot Password | Angrej Singh Learning Hub',
  description: 'Request password reset instructions for your student account.',
  alternates: { canonical: '/forgot-password' },
};

export default function ForgotPasswordPage() {
  return (
    <section className="bg-bg-soft py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-ink-100 bg-white p-6 shadow-card md:p-10">
          <h1 className="text-3xl font-extrabold text-ink-900">
            Forgot Password?
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            Enter the email address you used when you joined and we will send
            reset instructions when account email is connected.
          </p>

          <form action="/login" className="mt-7 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-ink-900">
                Email
              </span>
              <input
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-ink-100 bg-white px-4 py-3 text-ink-900 focus:border-brand-blue focus:outline-none"
              />
            </label>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send Reset Instructions
            </Button>
          </form>

          <p className="mt-5 text-center text-sm">
            <Link href="/login" className="font-bold text-brand-blue hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
