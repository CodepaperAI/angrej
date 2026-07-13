import type { CourseSlug } from './courses';

export type LmsIconKey =
  | 'book'
  | 'check'
  | 'credit-card'
  | 'lock'
  | 'play'
  | 'user';

export const courseCatalog = {
  eyebrow: 'Course catalog',
  title: 'Choose your course and continue enrollment.',
  description:
    'Browse the available Angrej Singh courses, review what is included, and continue into the enrollment flow when you are ready.',
  courseSlugs: ['rn', 'rpn', 'psychology'] satisfies CourseSlug[],
} as const;

export const homeEnrollmentSteps = [
  {
    n: 1,
    title: 'Choose your course',
    body: 'Select NCLEX-RN, NCLEX-PN (RPN), or Human Psychology.',
  },
  {
    n: 2,
    title: 'Enroll',
    body: 'Review the checkout page and continue to your student account.',
  },
  {
    n: 3,
    title: 'Sign in',
    body: 'Use the account flow to reach your learning dashboard.',
  },
  {
    n: 4,
    title: 'Start learning',
    body: 'Join your first live class and access course materials.',
  },
] as const;

export const checkoutSteps = [
  {
    icon: 'user',
    title: 'Create or sign in',
    body: 'Use your student account for course access.',
  },
  {
    icon: 'credit-card',
    title: 'Confirm payment',
    body: 'Complete the payment step and unlock the selected course.',
  },
  {
    icon: 'lock',
    title: 'Open My Learning',
    body: 'Your paid course appears in the learning area with class access.',
  },
] as const satisfies {
  icon: LmsIconKey;
  title: string;
  body: string;
}[];

export const paymentPortal = {
  eyebrow: 'Payment portal',
  title: 'Complete your course payment.',
  description:
    'Review the selected course, enter student billing details, and continue into My Learning after payment.',
  notice:
    'Client preview: Complete Payment simulates a successful payment and unlocks the selected course in My Learning. When Stripe is connected, this same step can confirm the real payment before course access opens.',
  fields: [
    'Student name',
    'Email address',
    'Phone number',
    'Billing country',
  ],
  methods: ['Credit or debit card', 'Apple Pay / Google Pay', 'International card support'],
} as const;

export const enrollmentSuccess = {
  eyebrow: 'Payment confirmed',
  title: 'Your course is unlocked.',
  description:
    'Your selected course has been added to My Learning. Start from the course room, access materials, and return anytime from the dashboard.',
  nextSteps: [
    'Open your student dashboard',
    'Start the selected course',
    'Access recordings, materials, and progress tracking',
  ],
} as const;

export const learningDashboard = {
  eyebrow: 'My Learning',
  title: 'Your learning dashboard.',
  description:
    'Your enrolled courses, progress, recordings, and next steps stay together after payment.',
  courses: [
    {
      courseSlug: 'rn',
      status: 'In progress',
      progressPercent: 38,
      actionLabel: 'Continue',
      actionHref: '/rn',
    },
    {
      courseSlug: 'rpn',
      status: 'Available after enrollment',
      progressPercent: 0,
      actionLabel: 'Enroll',
      actionHref: '/checkout?course=rpn',
    },
    {
      courseSlug: 'psychology',
      status: 'Available after enrollment',
      progressPercent: 0,
      actionLabel: 'Enroll',
      actionHref: '/checkout?course=psychology',
    },
  ] satisfies {
    courseSlug: CourseSlug;
    status: string;
    progressPercent: number;
    actionLabel: string;
    actionHref: string;
  }[],
  tools: [
    {
      icon: 'play',
      title: 'Class recordings',
      body: 'Return to recorded lectures anytime.',
    },
    {
      icon: 'book',
      title: 'Course materials',
      body: 'Keep notes, PDFs, and revision content together.',
    },
    {
      icon: 'check',
      title: 'Progress tracking',
      body: 'See where you stopped and what comes next.',
    },
  ] satisfies {
    icon: LmsIconKey;
    title: string;
    body: string;
  }[],
} as const;
