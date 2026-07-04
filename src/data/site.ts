export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'process', label: 'Process' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'team', label: 'Team' },
  { id: 'about', label: 'About' },
] as const;

export const CONTACT_EMAIL = 'build@switchtofuture.com';

export const TEAM = [
  { name: 'Farhan Yousaf', role: 'CEO', initials: 'FY' },
  { name: 'Kamran Shafique', role: 'CTO', initials: 'KS' },
  { name: 'Usama Javed', role: 'COO', initials: 'UJ' },
  { name: 'Chang', role: 'Lead Software Engineer', initials: 'CH' },
] as const;

export const PROCESS = [
  { step: '01', title: 'Discover', desc: 'Map goals, users, and scope' },
  { step: '02', title: 'Design', desc: 'UI/UX systems that convert' },
  { step: '03', title: 'Build', desc: 'Ship scalable product code' },
  { step: '04', title: 'Launch', desc: 'Deploy, monitor, iterate' },
] as const;

export type ServiceIcon = 'mobile' | 'web' | 'ai' | 'cloud';

export const SERVICES: readonly {
  title: string;
  desc: string;
  icon: ServiceIcon;
  span: 'wide' | 'normal';
}[] = [
  {
    title: 'Mobile Apps',
    desc: 'iOS & Android apps with polished UX and secure backends.',
    icon: 'mobile',
    span: 'wide',
  },
  {
    title: 'Web Platforms',
    desc: 'Fast, SEO-ready sites and dashboards.',
    icon: 'web',
    span: 'normal',
  },
  {
    title: 'AI Solutions',
    desc: 'Chatbots, automation, and intelligent workflows.',
    icon: 'ai',
    span: 'normal',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Firebase, AWS, CI/CD, and scalable infra.',
    icon: 'cloud',
    span: 'wide',
  },
];

export type Project = {
  title: string;
  tag: string;
  category: string;
  desc: string;
  detail: string;
  features: readonly string[];
};

export const PROJECTS: readonly Project[] = [
  {
    title: 'Mobile Recharge Platform',
    tag: '1M+ Users',
    category: 'Mobile',
    desc: 'Real-time payments and support at scale.',
    detail:
      'A high-volume recharge and bill-pay platform serving over one million users with sub-second transaction confirmation, multi-wallet support, and 24/7 customer tooling.',
    features: ['Flutter mobile apps', 'Real-time payment rails', 'Admin analytics dashboard', 'Push notifications & support chat'],
  },
  {
    title: 'Meddy Healthcare',
    tag: 'Healthcare',
    category: 'Mobile',
    desc: 'Patient-provider app with secure messaging.',
    detail:
      'HIPAA-aware telehealth experience connecting patients and providers through appointment booking, encrypted messaging, prescription tracking, and video consult flows.',
    features: ['Secure messaging', 'Appointment scheduling', 'Provider portal', 'E-prescription integration'],
  },
  {
    title: 'AI Analytics Hub',
    tag: 'AI / ML',
    category: 'AI',
    desc: 'Predictive dashboards for business data.',
    detail:
      'An intelligence layer on top of enterprise data that surfaces forecasts, anomaly alerts, and natural-language insights for non-technical stakeholders.',
    features: ['Predictive models', 'Custom KPI dashboards', 'Automated reporting', 'Role-based access'],
  },
  {
    title: 'EduTech LMS',
    tag: 'Education',
    category: 'Web',
    desc: 'Courses, live sessions, and progress tracking.',
    detail:
      'Full learning management system with course authoring, live class integration, quizzes, certificates, and instructor analytics for growing ed-tech brands.',
    features: ['Course builder', 'Live session hooks', 'Progress & certificates', 'Instructor analytics'],
  },
  {
    title: 'FinFlow Banking',
    tag: 'Fintech',
    category: 'Mobile',
    desc: 'Digital banking with budgets and instant transfers.',
    detail:
      'Consumer banking app with account overview, P2P transfers, spending insights, savings goals, and card controls — designed for clarity and trust.',
    features: ['Instant transfers', 'Budget insights', 'Card freeze/unfreeze', 'Biometric login'],
  },
  {
    title: 'ShopSwift Commerce',
    tag: 'E-Commerce',
    category: 'Web',
    desc: 'Headless storefront with inventory sync.',
    detail:
      'Modern e-commerce stack with a fast React storefront, inventory sync, promo engine, and fulfillment dashboards for multi-channel retail teams.',
    features: ['Headless storefront', 'Inventory sync', 'Promo & coupon engine', 'Order management'],
  },
  {
    title: 'FleetTrack Logistics',
    tag: 'Logistics',
    category: 'Mobile',
    desc: 'Live fleet tracking and route optimization.',
    detail:
      'Operations platform for dispatchers and drivers featuring live GPS tracking, optimized routes, proof-of-delivery capture, and SLA monitoring.',
    features: ['Live GPS tracking', 'Route optimization', 'Proof of delivery', 'Dispatcher console'],
  },
  {
    title: 'SmartHome IoT Hub',
    tag: 'IoT',
    category: 'AI',
    desc: 'Unified control for connected devices.',
    detail:
      'Cross-device smart home hub with automation rules, voice assistant hooks, energy usage insights, and secure remote access from mobile.',
    features: ['Device automation', 'Energy insights', 'Remote access', 'Voice assistant hooks'],
  },
  {
    title: 'LegalDoc Manager',
    tag: 'Enterprise',
    category: 'Web',
    desc: 'Contract workflow with e-signatures.',
    detail:
      'Document lifecycle tool for legal teams — template library, approval chains, version history, e-signature integration, and audit-ready logs.',
    features: ['Template library', 'Approval workflows', 'E-sign integration', 'Audit trail'],
  },
  {
    title: 'EventHive Platform',
    tag: 'Events',
    category: 'Web',
    desc: 'Ticketing, check-in, and attendee engagement.',
    detail:
      'End-to-end event platform covering ticket sales, QR check-in, agenda apps, sponsor portals, and post-event feedback for organizers.',
    features: ['Ticket sales & QR check-in', 'Agenda mobile app', 'Sponsor dashboard', 'Post-event surveys'],
  },
];

export const TECH = [
  'React', 'Flutter', 'Node.js', 'Firebase', 'TypeScript',
  'Python', 'AWS', 'TensorFlow', 'PostgreSQL', 'Docker',
] as const;
