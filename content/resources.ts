import type { CourseSlug } from './courses';

export type PdfResource = {
  title: string;
  description: string;
  href: string;
  courseSlug?: CourseSlug;
};

export const pdfResources: PdfResource[] = [];
