export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  profilePath: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: string[];
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
  }[];
  achievements: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'farhan',
    name: 'Farhan',
    role: 'Team Lead',
    image: 'https://imgur.com/Zj8ssEp.png',
    bio: 'Visionary full-stack lead. Loves innovation, cloud, and clean UI.',
    profilePath: '/profile/farhan',
    social: {
      github: 'https://github.com/farhanyousaf786',
      linkedin: 'https://linkedin.com/in/farhanyousaf786',
      twitter: 'https://twitter.com/farhanyousaf786',
    },
    skills: [
      'React', 'Node.js', 'TypeScript', 'AWS', 'Docker',
      'MongoDB', 'GraphQL', 'Next.js', 'TailwindCSS'
    ],
    experience: [
      {
        title: 'Team Lead',
        company: 'Switch to Future',
        duration: '2023 - Present',
        description: 'Leading development of innovative web solutions and mentoring team members.'
      },
      {
        title: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        duration: '2021 - 2023',
        description: 'Developed and maintained large-scale web applications.'
      }
    ],
    education: [
      {
        degree: 'MS in Computer Science',
        institution: 'University of Technology',
        year: '2021'
      }
    ],
    projects: [
      {
        title: 'Switch to Future Website',
        description: 'Modern web platform showcasing our team and services.',
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        image: 'https://imgur.com/project1.png',
        liveUrl: 'https://switchtofuture.com',
        githubUrl: 'https://github.com/farhanyousaf786/switchtofuture'
      }
    ],
    achievements: [
      'Led successful delivery of 10+ enterprise projects',
      'Published research paper on cloud architecture',
      'Open source contributor with 500+ GitHub stars'
    ]
  },
  {
    id: 'kamran',
    name: 'Kamran',
    role: 'Backend Architect',
    image: 'https://imgur.com/Zj8ssEp.png',
    bio: 'Master of APIs, databases, and scalable infrastructures.',
    profilePath: '/profile/kamran',
    social: {
      github: 'https://github.com/kamran',
      linkedin: 'https://linkedin.com/in/kamran'
    },
    skills: [
      'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
      'AWS', 'Docker', 'Kubernetes', 'Redis'
    ],
    experience: [
      {
        title: 'Backend Architect',
        company: 'Switch to Future',
        duration: '2023 - Present',
        description: 'Designing and implementing scalable backend solutions.'
      }
    ],
    education: [
      {
        degree: 'BS in Software Engineering',
        institution: 'Tech University',
        year: '2020'
      }
    ],
    projects: [
      {
        title: 'Cloud Infrastructure',
        description: 'Designed and implemented cloud-native architecture.',
        technologies: ['AWS', 'Docker', 'Kubernetes'],
        image: 'https://imgur.com/project2.png'
      }
    ],
    achievements: [
      'Optimized database performance by 200%',
      'Implemented microservices architecture',
      'AWS Certified Solutions Architect'
    ]
  },
  {
    id: 'usman',
    name: 'Usman',
    role: 'Frontend Wizard',
    image: 'https://imgur.com/Zj8ssEp.png',
    bio: 'Transforms UI ideas into production-grade apps.',
    profilePath: '/profile/usman',
    social: {
      github: 'https://github.com/usman',
      linkedin: 'https://linkedin.com/in/usman',
      twitter: 'https://twitter.com/usman'
    },
    skills: [
      'React', 'Vue.js', 'TypeScript', 'TailwindCSS',
      'Next.js', 'GraphQL', 'Figma', 'UI/UX'
    ],
    experience: [
      {
        title: 'Frontend Developer',
        company: 'Switch to Future',
        duration: '2023 - Present',
        description: 'Creating beautiful and responsive user interfaces.'
      }
    ],
    education: [
      {
        degree: 'BS in Computer Science',
        institution: 'Digital University',
        year: '2021'
      }
    ],
    projects: [
      {
        title: 'UI Component Library',
        description: 'Built reusable component library for rapid development.',
        technologies: ['React', 'TypeScript', 'Storybook'],
        image: 'https://imgur.com/project3.png'
      }
    ],
    achievements: [
      'Created award-winning UI designs',
      'Reduced load times by 60%',
      'Speaker at React Conference 2023'
    ]
  }
];
