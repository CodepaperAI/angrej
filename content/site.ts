export const site = {
  brand: {
    name: 'Angrej Singh NCLEX',
    tagline: 'Live NCLEX coaching for RN and RPN aspirants',
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
    'Live NCLEX coaching by Angrej Singh. $1200 / 120 days. Limited seats. Call +1 (647) 507-3871',
  hero: {
    badge: 'Live NCLEX coaching',
    title: 'Pass your NCLEX with one teacher who actually shows up.',
    subtitle:
      'Live RN and RPN coaching by Angrej Singh, with the same teacher in every class, morning or evening batch, and recordings included.',
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
