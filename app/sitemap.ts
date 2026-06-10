import type { MetadataRoute } from 'next';

const baseUrl = 'https://angrej.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/rn`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/rpn`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/psychology`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
