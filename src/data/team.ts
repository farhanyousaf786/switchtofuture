export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Farhan',
    role: 'Team Lead & Full-Stack Engineer',
    image: 'https://i.imgur.com/AftbaTl.png',
    bio: 'Visionary full-stack lead. Loves innovation, cloud architecture, and clean UI.',
    social: {
      github: 'https://github.com/farhanyousaf786',
      linkedin: 'https://linkedin.com/in/farhanyousaf786',
      twitter: 'https://twitter.com/farhanyousaf786',
    },
  },
  {
    id: 2,
    name: 'Kamran',
    role: 'Backend Architect',
    image: 'https://i.imgur.com/AftbaTl.png',
    bio: 'Master of APIs, databases, and scalable cloud infrastructures.',
    social: {
      github: 'https://github.com/kamran',
      linkedin: 'https://linkedin.com/in/kamran',
    },
  },
  {
    id: 3,
    name: 'Usman',
    role: 'Frontend Engineer',
    image: 'https://i.imgur.com/AftbaTl.png',
    bio: 'Transforms UI ideas into production-grade, pixel-perfect applications.',
    social: {
      github: 'https://github.com/usman',
      linkedin: 'https://linkedin.com/in/usman',
      twitter: 'https://twitter.com/usman',
    },
  },
];
