import type { Project, ProjectCategory } from './types';

export const projects: Project[] = [
  {
    id: 'mobile-recharge',
    slug: 'mobile-recharge',
    title: 'Mobile Recharge & Support',
    subtitle: '1M+ Users',
    description:
      'End-to-end mobile recharge platform with real-time payments, customer support chat, and transaction analytics at scale.',
    category: 'Mobile Apps',
    tags: ['Flutter', 'Payments', 'Firebase'],
    platforms: ['ios', 'android'],
    images: [
      'https://i.imgur.com/zmLULuM.png',
      'https://i.imgur.com/zmLULuM.png',
      'https://i.imgur.com/zmLULuM.png',
    ],
    featured: true,
  },
  {
    id: 'meddy-app',
    slug: 'meddy-app',
    title: 'Meddy App',
    subtitle: 'Healthcare Platform',
    description:
      'Healthcare app connecting patients and providers with appointments, secure messaging, and medical record management.',
    category: 'Mobile Apps',
    tags: ['Healthcare', 'HIPAA', 'Real-time Chat'],
    platforms: ['android', 'web'],
    images: [
      'https://i.imgur.com/zmLULuM.png',
      'https://i.imgur.com/zmLULuM.png',
    ],
  },
  {
    id: 'devflow',
    slug: 'devflow',
    title: 'DevFlow',
    subtitle: 'Developer Toolkit',
    description:
      'A modular developer toolkit for code review, CI insights, and team workflow automation in one unified dashboard.',
    category: 'Web Apps',
    tags: ['React', 'API', 'DevTools'],
    platforms: ['web'],
    images: [
      'https://i.imgur.com/zmLULuM.png',
      'https://i.imgur.com/zmLULuM.png',
    ],
  },
  {
    id: 'edutech',
    slug: 'edutech',
    title: 'EduTech Platform',
    subtitle: 'Learning Management',
    description:
      'Modern LMS with interactive courses, live sessions, progress tracking, and AI-powered student recommendations.',
    category: 'Web Apps',
    tags: ['Education', 'LMS', 'Video'],
    platforms: ['ios', 'web'],
    images: [
      'https://i.imgur.com/zmLULuM.png',
      'https://i.imgur.com/zmLULuM.png',
    ],
  },
  {
    id: 'ai-analytics',
    slug: 'ai-analytics',
    title: 'AI Analytics Hub',
    subtitle: 'Data Intelligence',
    description:
      'AI-driven analytics platform that transforms business data into actionable insights with predictive dashboards.',
    category: 'AI Apps',
    tags: ['AI/ML', 'Analytics', 'Python'],
    platforms: ['web'],
    images: [
      'https://i.imgur.com/zmLULuM.png',
      'https://i.imgur.com/zmLULuM.png',
    ],
    featured: true,
  },
  {
    id: 'smart-iot',
    slug: 'smart-iot',
    title: 'Smart IoT Platform',
    subtitle: 'Connected Devices',
    description:
      'Real-time IoT monitoring and control platform for smart devices with alerts, automation rules, and fleet management.',
    category: 'AI Apps',
    tags: ['IoT', 'Real-time', 'Edge AI'],
    platforms: ['ios', 'android', 'web'],
    images: [
      'https://i.imgur.com/zmLULuM.png',
      'https://i.imgur.com/zmLULuM.png',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function filterProjects(category: ProjectCategory | 'All'): Project[] {
  const list = category === 'All'
    ? projects
    : projects.filter((p) => p.category === category);
  return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
}
