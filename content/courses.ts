export type CourseSlug = 'rn' | 'rpn' | 'psychology';

export type Course = {
  slug: CourseSlug;
  badgeLabel: string;
  badgeTone: 'blue' | 'yellow' | 'neutral';
  accent: 'blue' | 'yellow';
  thumbnailSrc: string;
  thumbnailAlt: string;
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
  // Optional rich program detail (currently used by the NCLEX-RN program).
  // Components render each block only when the field is present, so courses
  // without them keep their existing layout.
  subtitle?: string;
  programOverview?: string;
  duration?: { headline: string; points: string[] };
  schedule?: { name: string; days: string; time: string }[];
  coreSubjects?: string[];
  featureGroups?: { title: string; items: string[] }[];
  studentSupport?: string[];
  idealFor?: string[];
  policy?: string[];
  includes?: string[];
};

export const courses: Record<CourseSlug, Course> = {
  rn: {
    slug: 'rn',
    badgeLabel: 'RN Pathway',
    badgeTone: 'blue',
    accent: 'blue',
    thumbnailSrc: '/course-rn.jpg',
    thumbnailAlt: 'RN NCLEX course thumbnail',
    title: 'NCLEX-RN',
    subtitle:
      'Expert-led NCLEX-RN training with practice tests and clinical case scenarios.',
    oneLiner:
      'Live, interactive NCLEX-RN coaching with 6,500+ practice questions, weekly mock tests, and dedicated SATA prep. Join an ongoing batch anytime.',
    priceDisplay: '$1200',
    accessLabel: '4 Months Access',
    bullets: [
      'Live interactive classes, morning or evening batch',
      '6,500+ exclusive NCLEX-RN practice questions',
      '2 mock tests every week with detailed rationales',
      'SATA practice sessions and test-taking strategies',
    ],
    features: [
      {
        title: 'Live classes by Angrej Singh',
        body: 'Every session is taught by Angrej Singh, with no rotating instructors.',
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
        title: '6,500+ practice questions',
        body: 'NCLEX-style questions with rationales for self-paced practice.',
      },
      {
        title: 'Clinical case scenarios',
        body: 'Apply nursing concepts to realistic patient cases.',
      },
      {
        title: '4 months full access',
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
      title: 'NCLEX-RN live coaching for the registered nurse exam.',
      intro:
        'Live NCLEX-RN classes with Angrej Singh, morning or evening batch, recordings included, plus 6,500+ practice questions, weekly mock tests, and SATA prep, all under one $1200 / 4-month enrollment.',
    },
    enrollCta: 'Enroll',
    programOverview:
      'Our NCLEX-RN Comprehensive Preparation Program helps nursing graduates pass the NCLEX-RN examination through live interactive classes, extensive practice questions, mock exams, and expert guidance. Join an ongoing batch and continue your preparation right up until you sit for the exam.',
    duration: {
      headline: '4 Months Intensive Training Program',
      points: [
        'Classes run throughout the program period',
        'Complete curriculum coverage before your examination',
        'Join an ongoing batch anytime, no waiting required',
      ],
    },
    schedule: [
      {
        name: 'Morning Batch',
        days: 'Monday – Thursday',
        time: '8:00 AM – 11:00 AM (Ontario Time)',
      },
      {
        name: 'Evening Batch',
        days: 'Monday – Thursday',
        time: '5:30 PM – 8:30 PM (Ontario Time)',
      },
    ],
    coreSubjects: [
      'Fundamentals of Nursing',
      'Medical-Surgical Nursing',
      'Pharmacology',
      'Mental Health Nursing',
      'Maternity Nursing',
      'Pediatric Nursing',
      'Leadership & Management',
      'Infection Control',
      'Patient Safety',
      'Health Promotion & Maintenance',
      'Physiological Adaptation',
      'Psychosocial Integrity',
      'Reduction of Risk Potential',
    ],
    featureGroups: [
      {
        title: 'Live Interactive Classes',
        items: [
          '2.5–3 hours of live instruction per class',
          'Detailed topic-by-topic explanations',
          'Real-time interaction with instructors',
        ],
      },
      {
        title: 'Extensive Question Bank',
        items: [
          '6,500+ exclusive NCLEX-RN practice questions',
          'Topic-wise MCQ practice',
          'Exam-style question training',
        ],
      },
      {
        title: 'Weekly Mock Tests',
        items: [
          '2 mock tests every week',
          'Detailed answer explanations',
          'Rationales for both correct and incorrect options',
        ],
      },
      {
        title: 'SATA Preparation',
        items: [
          'Dedicated Select-All-That-Apply practice sessions',
          'SATA mock examinations',
          'Test-taking strategies for higher scores',
        ],
      },
      {
        title: 'Study Resources Included',
        items: [
          'NCLEX study materials and concise notes',
          'Cheat sheets and quick revision guides',
          'Exam strategies and tips',
        ],
      },
      {
        title: 'Test-Taking Strategies',
        items: [
          'Critical thinking and priority question approaches',
          'Elimination methods and decision frameworks',
          'Time management skills',
        ],
      },
    ],
    studentSupport: [
      'Instructor guidance throughout the program',
      'Performance monitoring',
      'Doubt-clearing sessions',
      'Exam readiness assessment',
    ],
    idealFor: [
      'Internationally Educated Nurses (IENs)',
      'Nursing graduates',
      'Nurses preparing for NCLEX-RN',
      'Repeat NCLEX test takers',
    ],
    policy: [
      'Students are expected to appear for the NCLEX-RN exam within 4 months of enrollment.',
      'If a student does not attempt the exam within the 4-month course period, access to classes may be discontinued.',
      'If a student attempts the NCLEX-RN exam during the course period and does not pass, they may continue attending classes with no additional tuition fee, subject to program policies.',
    ],
    includes: [
      '2.5–3 hours of live instruction per class',
      '6,500+ practice questions with rationales',
      '2 mock tests every week',
      'SATA practice and mock examinations',
      'Study materials, notes, and cheat sheets',
      'Test-taking strategies and exam tips',
    ],
  },
  rpn: {
    slug: 'rpn',
    badgeLabel: 'RPN Pathway',
    badgeTone: 'yellow',
    accent: 'yellow',
    thumbnailSrc: '/course-rpn.jpg',
    thumbnailAlt: 'RPN NCLEX course thumbnail',
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
        body: 'Every session is taught by Angrej Singh, with the same teacher in every batch.',
      },
      {
        title: 'Morning + Evening batches',
        body: 'Choose the time that fits. Same syllabus, same pace, either batch.',
      },
      {
        title: 'Recordings for revision',
        body: 'Recordings are available for catch-up and reinforcement throughout your term.',
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
      title: 'NCLEX-PN (RPN) live coaching for international practical nurses.',
      intro:
        'Live NCLEX-PN classes with Angrej Singh, morning or evening batch, recordings included, with practice tests and clinical reasoning practice, all under one $1200 / 120-day enrollment.',
    },
    enrollCta: 'Enroll',
  },
  // TODO: Vinay - confirm bullets, features, curriculum, and access period for Human Psychology.
  // Pricing ($499) confirmed from the live site screenshot. Access period was not visible there, so "Self-paced access" is still a placeholder.
  psychology: {
    slug: 'psychology',
    badgeLabel: 'Bonus course',
    badgeTone: 'neutral',
    accent: 'blue',
    thumbnailSrc: '/course-psychology.jpg',
    thumbnailAlt: 'Human Psychology course thumbnail',
    title: 'Human Psychology: Master Human Behavior',
    shortTitle: 'Human Psychology',
    oneLiner:
      'A self-development course on understanding human behavior, useful for nurses, students, and anyone learning to read people better.',
    priceDisplay: '$499',
    accessLabel: 'Self-paced access',
    bullets: [
      'Foundations of human behavior and motivation',
      'Practical communication and emotional skills',
      'Apply psychology in clinical and everyday settings',
    ],
    features: [
      {
        title: 'Taught by Angrej Singh',
        body: 'Same instructor as the NCLEX program, explained in clear, practical terms.',
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
        body: 'No prior psychology background required, built for nurses and learners.',
      },
      {
        title: 'Reflection prompts',
        body: 'Apply each idea with short reflection exercises after every lesson.',
      },
      {
        title: 'Lifetime applicability',
        body: 'Skills useful long after the course ends, at work and in life.',
      },
    ],
    curriculum: [
      {
        topic: 'Foundations of human behavior',
        description:
          'How motivation, perception, and emotion shape what people do.',
      },
      {
        topic: 'Communication and influence',
        description:
          'Listening, framing, and difficult conversations, with practical tools.',
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
      title: 'Human Psychology: Master Human Behavior.',
      intro:
        'A self-paced course on understanding people, motivations, communication, and behavior. Designed for nurses and learners who want to be better at reading and working with people.',
    },
    enrollCta: 'Enroll',
  },
};
