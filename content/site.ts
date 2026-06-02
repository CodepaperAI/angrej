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
