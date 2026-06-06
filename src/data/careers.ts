export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
  slug: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior React Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description:
      'We\'re looking for a senior React developer to help build world-class web applications for our clients. You\'ll work closely with designers and backend engineers to deliver pixel-perfect, performant experiences.',
    requirements: [
      '4+ years of React experience',
      'Strong TypeScript skills',
      'Experience with GSAP or Framer Motion',
      'Understanding of performance optimization',
    ],
    slug: 'senior-react-developer',
  },
  {
    id: 2,
    title: 'Flutter Engineer',
    department: 'Mobile',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Join our mobile team to build high-quality cross-platform apps using Flutter. You\'ll be responsible for building new features, maintaining existing apps, and ensuring a smooth user experience.',
    requirements: [
      '3+ years of Flutter/Dart experience',
      'Published apps on App Store or Play Store',
      'Experience with Firebase & REST APIs',
      'Knowledge of state management (Riverpod, Bloc)',
    ],
    slug: 'flutter-engineer',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description:
      'We need a talented designer who can translate complex user needs into elegant, intuitive interfaces. You\'ll own the design process from research to high-fidelity prototypes.',
    requirements: [
      'Strong Figma skills',
      'Portfolio showcasing mobile & web projects',
      'Experience with design systems',
      'Understanding of motion & interaction design',
    ],
    slug: 'ui-ux-designer',
  },
];
