export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How AI is reshaping mobile app development in 2025',
    excerpt:
      'From intelligent UX patterns to on-device machine learning, the way we build apps is changing fast. Here\'s what you need to know.',
    category: 'AI & Dev',
    date: 'May 12, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    slug: 'ai-reshaping-mobile-development',
  },
  {
    id: 2,
    title: 'Why great UX starts before the first wireframe',
    excerpt:
      'The best digital products aren\'t born in Figma — they\'re born in deep user research, stakeholder alignment, and strategic thinking.',
    category: 'Design',
    date: 'Apr 28, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80',
    slug: 'ux-before-wireframes',
  },
  {
    id: 3,
    title: 'Building scalable backends with Node.js and Firebase',
    excerpt:
      'A practical guide to architecting real-time, scalable backend systems that grow with your product and never let you down under load.',
    category: 'Engineering',
    date: 'Apr 10, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    slug: 'scalable-backends-nodejs-firebase',
  },
];
