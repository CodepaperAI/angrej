export const site = {
  brand: {
    name: 'Angrej Singh NCLEX',
    tagline: 'Nursing mastery for students preparing for school, exams, and career growth',
    phone: '+1 (647) 507-3871',
    phoneTel: '+16475073871',
    email: 'angrejs272@gmail.com',
    socials: {
      instagram: 'https://www.instagram.com/rn.angrejsingh',
      youtube: 'https://youtube.com/@angrejsingh2588',
      tiktok: 'https://www.tiktok.com/@angrej272',
      facebook: 'https://www.facebook.com/share/17B8HxbcpP/',
    },
  },
  offerBar:
    'Nursing Mastery with Angrej Singh. Your success comes first. Call +1 (647) 507-3871',
  hero: {
    badge: 'Nursing Mastery',
    title: 'Where nursing students stop struggling and start believing in themselves.',
    subtitle:
      'Whether you are preparing for nursing school exams, NCLEX, or your nursing career, you will be taught with honesty, dedication, and a simple goal:',
    successLine: 'Your success comes first.',
    quote:
      "I don't teach to finish a syllabus. I teach until students understand.",
    quoteAttribution: 'Angrej Singh',
  },
  institute: {
    badge: 'Complete nursing support',
    title: 'Your Complete Nursing Learning Institute.',
    body: [
      'Every nursing student has felt it at some point - leaving class with questions, struggling to understand difficult topics, or wishing someone explained things in a simpler way.',
      "That's why Angrej Singh Learning Hub exists.",
      'Our goal is to make nursing easier to understand, easier to remember, and easier to apply in real clinical practice. From nursing subjects and clinical concepts to NCLEX preparation, every lesson is taught in a simple, practical, and student-friendly way.',
      "Whether you're trying to score better in college, build stronger clinical knowledge, or prepare for the NCLEX, we're here to help you learn with confidence - every step of the way.",
    ],
    video: {
      src: '/videos/front-page-video.mp4',
      poster: '/videos/front-page-video-poster.jpg',
      label: 'Angrej Singh Learning Hub front page introduction video',
    },
  },
  pricing: {
    amount: 1200,
    currency: 'USD',
    accessDays: 120,
    display: '$1200',
  },
  instructorQuote: {
    text: 'Believe in yourself, keep learning, and success will follow.',
    attribution: 'Angrej Singh',
    role: 'Your NCLEX coach',
  },
  policies: {
    privacy: 'https://theangrejsinghnclex.com/privacy-policy',
    terms: 'https://theangrejsinghnclex.com/terms-conditions',
    refund: 'https://theangrejsinghnclex.com/refund-policy',
    cookies: 'https://theangrejsinghnclex.com/privacy-policy',
  },
} as const;

export type Site = typeof site;
