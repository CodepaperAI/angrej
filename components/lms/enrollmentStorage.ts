import type { CourseSlug } from '@/content/courses';

const STORAGE_KEY = 'angrej-learning-enrolled-courses';

function isCourseSlug(value: string): value is CourseSlug {
  return value === 'rn' || value === 'rpn' || value === 'psychology';
}

export function getStoredEnrollments(): CourseSlug[] {
  if (typeof window === 'undefined') return [];

  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter(isCourseSlug) : [];
  } catch {
    return [];
  }
}

export function storeEnrollment(courseSlug: CourseSlug) {
  const existing = getStoredEnrollments();
  const next = [courseSlug, ...existing.filter((slug) => slug !== courseSlug)];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}
