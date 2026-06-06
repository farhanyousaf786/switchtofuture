export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: 'websites' | 'applications' | 'ai' | 'branding';
  image: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Mobile Recharge & Support Platform',
    subtitle: 'The First Super-App for Telecom in the Region',
    category: 'applications',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    tags: ['Mobile', 'Payments', 'Support'],
    link: '/projects/mobile-recharge',
  },
  {
    id: 2,
    title: 'Meddy App',
    subtitle: 'Comprehensive healthcare communication platform',
    category: 'applications',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    tags: ['Healthcare', 'Appointments', 'Chat'],
    link: '/projects/meddy-app',
  },
  {
    id: 3,
    title: 'DevFlow',
    subtitle: 'A suite of powerful tools for developer productivity',
    category: 'websites',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
    tags: ['Development', 'Tools', 'Productivity'],
    link: '/projects/devflow',
  },
  {
    id: 4,
    title: 'EduTech Platform',
    subtitle: 'Modern learning management with live sessions',
    category: 'websites',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80',
    tags: ['Education', 'E-Learning', 'Tech'],
    link: '/projects/edutech',
  },
  {
    id: 5,
    title: 'AI Analytics Hub',
    subtitle: 'Transform business data into actionable insights',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    tags: ['Analytics', 'AI', 'Business'],
    link: '/projects/ai-analytics',
  },
  {
    id: 6,
    title: 'Smart IoT Platform',
    subtitle: 'Real-time monitoring for connected devices',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    tags: ['IoT', 'Real-time', 'Monitoring'],
    link: '/projects/smart-iot',
  },
];
