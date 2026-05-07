export type CourseSlug = 'rn' | 'rpn' | 'psychology';

export type Course = {
  slug: CourseSlug;
  badgeLabel: string;
  badgeTone: 'blue' | 'yellow' | 'neutral';
  accent: 'blue' | 'yellow';
  title: string;
  shortTitle?: string;
  oneLiner: string;
  priceDisplay: string;
  accessLabel: string;
  bullets: string[];
  features: { title: string; body: string }[];
  curriculum: { topic: string; description: string }[];
  detailHero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  enrollCta: string;
};

export const courses: Record<CourseSlug, Course> = {
  rn: {
    slug: 'rn',
    badgeLabel: 'RN Pathway',
    badgeTone: 'blue',
    accent: 'blue',
    title: 'NCLEX-RN',
    oneLiner:
      'Expert-led training for the NCLEX-RN exam, with practice tests and clinical case scenarios.',
    priceDisplay: '$1200',
    accessLabel: '120 Days Access',
    bullets: [
      'Full NCLEX-RN exam content coverage',
      '3000+ NCLEX-style practice questions',
      'Personalized coaching and test-taking strategies',
    ],
    features: [
      {
        title: 'Live classes by Angrej Singh',
        body: 'Every session is taught by Angrej Singh — no rotating instructors.',
      },
      {
        title: 'Morning + Evening batches',
        body: 'Pick the slot that fits your schedule. Both follow the same plan.',
      },
      {
        title: 'Recordings for revision',
        body: 'Class recordings are available throughout your access period.',
      },
      {
        title: '3000+ practice questions',
        body: 'NCLEX-style questions with rationales for self-paced practice.',
      },
      {
        title: 'Clinical case scenarios',
        body: 'Apply nursing concepts to realistic patient cases.',
      },
      {
        title: '120 days full access',
        body: 'Live classes, recordings, and practice questions for the full term.',
      },
    ],
    curriculum: [
      {
        topic: 'Safe and Effective Care Environment',
        description:
          'Management of care, safety, and infection control concepts as tested on NCLEX-RN.',
      },
      {
        topic: 'Health Promotion and Maintenance',
        description:
          'Growth, development, prevention, and early detection of health problems.',
      },
      {
        topic: 'Psychosocial Integrity',
        description:
          'Mental health, coping, and supporting emotional and social well-being.',
      },
      {
        topic: 'Physiological Integrity',
        description:
          'Basic care and comfort, pharmacology, risk reduction, and physiological adaptation.',
      },
    ],
    detailHero: {
      eyebrow: 'RN Pathway',
      title: 'NCLEX-RN — Live coaching for the registered nurse exam.',
      intro:
        'Live NCLEX-RN classes with Angrej Singh, morning or evening batch, recordings included, plus 3000+ practice questions and clinical case scenarios — all under one $1200 / 120-day enrollment.',
    },
    enrollCta: 'Enroll in RN',
  },
  rpn: {
    slug: 'rpn',
    badgeLabel: 'RPN Pathway',
    badgeTone: 'yellow',
    accent: 'yellow',
    title: 'NCLEX-PN (RPN)',
    oneLiner:
      'Comprehensive online RPN training for international practical nurses entering Canadian practice.',
    priceDisplay: '$1200',
    accessLabel: '120 Days Access',
    bullets: [
      'NCLEX-PN syllabus explained in clear language',
      'Practice tests with detailed rationales',
      'Time management and clinical reasoning skills',
    ],
    features: [
      {
        title: 'Live classes by Angrej Singh',
        body: 'Every session is taught by Angrej Singh — same teacher in every batch.',
      },
      {
        title: 'Morning + Evening batches',
        body: 'Choose the time that fits. Same syllabus, same pace, either batch.',
      },
      {
        title: 'Recordings for revision',
        body: 'Recordings available for catch-up and reinforcement throughout your term.',
      },
      {
        title: 'NCLEX-PN practice tests',
        body: 'Practice questions with detailed rationales to build exam confidence.',
      },
      {
        title: 'Clinical reasoning focus',
        body: 'Time management and applied clinical thinking for the practical nurse role.',
      },
      {
        title: '120 days full access',
        body: 'Live classes, recordings, and practice content for the full term.',
      },
    ],
    curriculum: [
      {
        topic: 'Safe and Effective Care Environment',
        description:
          'Coordinated care and safety/infection control at the practical nurse scope.',
      },
      {
        topic: 'Health Promotion and Maintenance',
        description:
          'Health teaching, screening, and supporting healthy lifestyles across the lifespan.',
      },
      {
        topic: 'Psychosocial Integrity',
        description:
          'Coping, mental health, and culturally responsive emotional support.',
      },
      {
        topic: 'Physiological Integrity',
        description:
          'Basic care and comfort, pharmacology, risk reduction, and physiological adaptation at the PN scope.',
      },
    ],
    detailHero: {
      eyebrow: 'RPN Pathway',
      title: 'NCLEX-PN (RPN) — Live coaching for international practical nurses.',
      intro:
        'Live NCLEX-PN classes with Angrej Singh, morning or evening batch, recordings included, with practice tests and clinical reasoning practice — all under one $1200 / 120-day enrollment.',
    },
    enrollCta: 'Enroll in RPN',
  },
  // TODO: Vinay — confirm bullets, features, curriculum, and access period for Human Psychology.
  // Pricing ($499) confirmed from live site screenshot. Access period not visible there — using "Self-paced access" as placeholder.
  psychology: {
    slug: 'psychology',
    badgeLabel: 'Bonus course',
    badgeTone: 'neutral',
    accent: 'blue',
    title: 'Human Psychology — Master Human Behavior',
    shortTitle: 'Human Psychology',
    oneLiner:
      'A self-development course on understanding human behavior — useful for nurses, students, and anyone learning to read people better.',
    priceDisplay: '$499',
    accessLabel: 'Self-paced access',
    bullets: [
      // TODO: Vinay to refine bullets
      'Foundations of human behavior and motivation',
      'Practical communication and emotional skills',
      'Apply psychology in clinical and everyday settings',
    ],
    features: [
      // TODO: Vinay to refine — placeholder structure to mirror NCLEX courses
      {
        title: 'Taught by Angrej Singh',
        body: 'Same instructor as the NCLEX program — explained in clear, practical terms.',
      },
      {
        title: 'Self-paced format',
        body: 'Watch and revisit on your schedule. No fixed live class times.',
      },
      {
        title: 'Real-world examples',
        body: 'Concepts grounded in real interactions with patients, peers, and family.',
      },
      {
        title: 'Beginner-friendly',
        body: 'No prior psychology background required — built for nurses and learners.',
      },
      {
        title: 'Reflection prompts',
        body: 'Apply each idea with short reflection exercises after every lesson.',
      },
      {
        title: 'Lifetime applicability',
        body: 'Skills useful long after the course ends — at work and in life.',
      },
    ],
    curriculum: [
      // TODO: Vinay to refine curriculum topics
      {
        topic: 'Foundations of human behavior',
        description:
          'How motivation, perception, and emotion shape what people do.',
      },
      {
        topic: 'Communication and influence',
        description:
          'Listening, framing, and difficult conversations — practical tools.',
      },
      {
        topic: 'Self-development',
        description:
          'Habits, mindset, and emotional regulation for everyday resilience.',
      },
      {
        topic: 'Application in practice',
        description:
          'Apply psychology in nursing care, teamwork, and personal life.',
      },
    ],
    detailHero: {
      eyebrow: 'Bonus course',
      title: 'Human Psychology — Master Human Behavior.',
      intro:
        'A self-paced course on understanding people — motivations, communication, and behavior. Designed for nurses and learners who want to be better at reading and working with people.',
    },
    enrollCta: 'Enroll in Psychology',
  },
};
