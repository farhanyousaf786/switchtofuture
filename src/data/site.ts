export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'process', label: 'Process' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
] as const;

export const PROCESS = [
  { step: '01', title: 'Discover', desc: 'Map goals, users, and scope' },
  { step: '02', title: 'Design', desc: 'UI/UX systems that convert' },
  { step: '03', title: 'Build', desc: 'Ship scalable product code' },
  { step: '04', title: 'Launch', desc: 'Deploy, monitor, iterate' },
] as const;

export const SERVICES = [
  {
    title: 'Mobile Apps',
    desc: 'iOS & Android apps with polished UX and secure backends.',
    icon: '📱',
    span: 'wide',
  },
  {
    title: 'Web Platforms',
    desc: 'Fast, SEO-ready sites and dashboards.',
    icon: '🌐',
    span: 'normal',
  },
  {
    title: 'AI Solutions',
    desc: 'Chatbots, automation, and intelligent workflows.',
    icon: '🤖',
    span: 'normal',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Firebase, AWS, CI/CD, and scalable infra.',
    icon: '☁️',
    span: 'wide',
  },
] as const;

export const PROJECTS = [
  {
    title: 'Mobile Recharge Platform',
    tag: '1M+ Users',
    category: 'Mobile',
    desc: 'Real-time payments and support at scale.',
  },
  {
    title: 'Meddy Healthcare',
    tag: 'Healthcare',
    category: 'Mobile',
    desc: 'Patient-provider app with secure messaging.',
  },
  {
    title: 'AI Analytics Hub',
    tag: 'AI / ML',
    category: 'AI',
    desc: 'Predictive dashboards for business data.',
  },
  {
    title: 'EduTech LMS',
    tag: 'Education',
    category: 'Web',
    desc: 'Courses, live sessions, and progress tracking.',
  },
] as const;

export const TECH = [
  'React', 'Flutter', 'Node.js', 'Firebase', 'TypeScript',
  'Python', 'AWS', 'TensorFlow', 'PostgreSQL', 'Docker',
] as const;
