import type { MetadataRoute } from 'next';

const baseUrl = 'https://angrej.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/courses`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/rn`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/rpn`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/psychology`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/checkout`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/payment`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/enrollment-success`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/login`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/sign-up`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/forgot-password`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/my-learning`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/resources`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
