import type { Metadata } from 'next';
import { FileText, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { pdfResources } from '@/content/resources';

export const metadata: Metadata = {
  title: 'Resources | Angrej Singh NCLEX',
  description:
    'PDF resources and study handouts from Angrej Singh Learning Hub.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Resources | Angrej Singh NCLEX',
    description:
      'PDF resources and study handouts from Angrej Singh Learning Hub.',
    url: '/resources',
    type: 'website',
  },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-soft via-white to-brand-yellow-soft pt-12 pb-16 md:pt-20 md:pb-24">
        <Container>
          <div className="max-w-3xl">
            <Badge tone="blue">Resources</Badge>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 text-balance md:text-5xl lg:text-6xl">
              PDF resources for nursing students.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-700 md:text-lg">
              Study PDFs, handouts, and helpful nursing exam resources will be
              shared here as they become available.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          {pdfResources.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {pdfResources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  className="group rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="mb-5 w-fit rounded-xl bg-brand-blue-soft p-3">
                    <FileText
                      size={28}
                      className="text-brand-blue"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-ink-900">
                    {resource.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-700">
                    {resource.description}
                  </p>
                  <p className="mt-5 text-sm font-bold text-brand-blue group-hover:underline">
                    Open PDF
                  </p>
                </a>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-3xl border border-ink-100 bg-bg-soft p-8 text-center md:p-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white">
                <FileText size={28} aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink-900">
                PDF resources coming soon.
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                The resource library is being prepared. For now, you can contact
                the team for course guidance or current study support.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  <Mail size={18} aria-hidden="true" />
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
