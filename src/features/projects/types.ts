export type ProjectCategory = 'Mobile Apps' | 'Web Apps' | 'AI Apps';

export type Platform = 'ios' | 'android' | 'web';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  platforms: Platform[];
  images: string[];
  featured?: boolean;
}

export const PROJECT_CATEGORIES: readonly (ProjectCategory | 'All')[] = [
  'All',
  'Mobile Apps',
  'Web Apps',
  'AI Apps',
] as const;
