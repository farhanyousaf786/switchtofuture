export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  slug: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'We design and build high-performance mobile apps for Android and iOS. In our team, developers work alongside designers — this is crucial for creating fast, responsive apps that excite users.',
    bullets: [
      'Custom UI with secure login, chat & payments',
      'iOS & Android native and cross-platform',
      'Admin dashboard or backend tools included',
    ],
    slug: 'mobile',
  },
  {
    id: 2,
    icon: '🌐',
    title: 'Web Development',
    description:
      'We create modern websites that are fast, responsive, and built for conversion. Every project starts with deep research and prototype testing rather than template solutions.',
    bullets: [
      'SEO-ready design with animations',
      'Works on mobile, tablets, and all browsers',
      'CMS integration & custom backends',
    ],
    slug: 'digital',
  },
  {
    id: 3,
    icon: '🤖',
    title: 'AI & Automation',
    description:
      'Smart chatbots, AI integrations, and workflow automations that reduce overhead and scale your business. We turn complex data into actionable intelligence.',
    bullets: [
      'LLM-powered chatbots & assistants',
      'Analytics dashboards & reports',
      'Process automation & integrations',
    ],
    slug: 'ai',
  },
  {
    id: 4,
    icon: '✦',
    title: 'Branding & Strategy',
    description:
      'Covers logo development, corporate identity, brand manuals, mockups, and merchandise. We build brands that tell a story and resonate with audiences.',
    bullets: [
      'Logo & visual identity systems',
      'Brand guidelines & style manuals',
      'Pitch decks & marketing assets',
    ],
    slug: 'branding',
  },
];
