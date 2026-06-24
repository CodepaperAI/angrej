export type Banner = {
  src: string;
  alt: string;
  href?: string;
};

export const banners: Banner[] = [
  {
    src: '/banners/banner-ongoing-batch.jpg',
    alt: 'NCLEX-RN ongoing batch — join anytime, complete the full curriculum, no waiting required.',
    href: '/rn',
  },
  {
    src: '/banners/banner-success-stories.jpg',
    alt: "This week's NCLEX success stories — see how students are turning their nursing dreams into reality.",
    href: '/courses',
  },
  {
    src: '/banners/banner-coming-soon.jpg',
    alt: 'What if nursing education could be better? Live learning, expert mentorship, structured success — coming soon.',
  },
];
