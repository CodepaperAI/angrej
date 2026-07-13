'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import type { CourseSlug } from '@/content/courses';
import { storeEnrollment } from './enrollmentStorage';

export function PaymentCompleteButton({ courseSlug }: { courseSlug: CourseSlug }) {
  const [isCompleting, setIsCompleting] = useState(false);

  return (
    <Button
      type="button"
      variant="primary"
      size="lg"
      className="mt-7 w-full"
      disabled={isCompleting}
      onClick={() => {
        setIsCompleting(true);
        storeEnrollment(courseSlug);
        window.location.assign(`/enrollment-success?course=${courseSlug}&status=paid`);
      }}
    >
      {isCompleting ? 'Unlocking Course...' : 'Complete Payment'}
    </Button>
  );
}
