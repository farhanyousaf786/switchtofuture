export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  location: string;
  contact: {
    email: string;
    phone: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: {
    mobile: string[];
    web: string[];
    backend: string[];
    cloud: string[];
    languages: string[];
  };
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string[];
  }[];
  projects: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  achievements: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'farhan',
    name: 'Farhan Yousaf',
    role: 'Senior Mobile Software Engineer',
    image: 'https://imgur.com/Zj8ssEp.png',
    bio: 'Having 6+ years of experience delivering scalable, cross-platform applications using Flutter, Kotlin, and native Android development. Specialized in building consumer-facing apps, with deep knowledge of RESTful APIs, Firebase, and mobile architecture patterns like MVVM.',
    location: 'Hillside, New York',
    contact: {
      email: 'Farhanyousaf1996@gmail.com',
      phone: '929-231-8782'
    },
    social: {
      github: 'https://github.com/farhanyousaf786',
      linkedin: 'https://linkedin.com/in/farhanyousaf786',
    },
    skills: {
      mobile: ['Flutter', 'Dart', 'Kotlin', 'Android', 'iOS', 'MVVM', 'Firebase'],
      web: ['React', 'JavaScript', 'HTML5', 'CSS', 'Node.js', 'Express'],
      backend: ['Python', 'Django', 'PostgreSQL', 'MongoDB', 'RESTful APIs'],
      cloud: ['Firebase', 'DigitalOcean', 'AWS', 'Cloud Functions', 'CI/CD'],
      languages: ['Dart', 'JavaScript', 'Python', 'Kotlin', 'C++']
    },
    experience: [
      {
        title: 'Software Developer',
        company: 'Maxsip Telecom',
        duration: 'March 2022 – April 2025',
        description: [
          'Developed and maintained 3+ production-level mobile apps using Flutter, Firebase, and MongoDB',
          'Scaled user base from 50K to over 1 million users within 4 months of launch on the Google Play Store',
          'Improved app performance by 35% via cache memory, lazy-loading, and database schema redesign',
          'Integrated secure payment with encryption/decryption and handled 150K+ transactions monthly',
          'Created and optimized Firebase Cloud Functions to automate backend workflows',
          'Owned full-cycle development of real-time user features including chat, push notifications, and background syncing'
        ]
      },
      {
        title: 'Mobile Developer',
        company: 'Chirp-tech',
        duration: 'May 2019 – December 2021',
        description: [
          'Built responsive, scalable mobile UIs using Flutter with MVVM architecture and LiveData patterns',
          'Integrated REST APIs and Firebase services for dynamic content, authentication, and data modeling',
          'Implemented offline storage and advanced caching strategies to reduce Firebase data consumption',
          'Optimized app startup time and reduced cloud usage by 25% through data minimization techniques'
        ]
      },
      {
        title: 'Flutter Development Intern',
        company: 'E-tech Lounge',
        duration: 'June 2017 – October 2018',
        description: [
          'Assisted in 10+ mobile UI implementations using Flutter, Dart, and Firebase',
          'Migrated legacy mobile interfaces for better performance and maintainability on Flutter',
          'Gained hands-on experience with widget trees, custom animations, and Firebase integration'
        ]
      }
    ],
    projects: [
      {
        title: 'Mobile Recharge & Support Platform',
        description: 'Developed and launched a Mobile Recharge app using Flutter & Firebase, serving Millions of users. Built custom chatbot handling 10K+ interactions/month. Optimized backend workflows improving scalability by 30%.',
        image: 'https://imgur.com/placeholder.png',
        technologies: ['Flutter', 'Firebase', 'Kotlin', 'Agora API', 'Google Ads SDK'],
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        title: 'Self-Aware Social Journaling App',
        description: 'Built with Flutter and Qdrant vector DB for semantic user memory data. Integrated OpenAI embeddings for long-term memory and reflection AI. Designed digital twin system for identity evolution tracking.',
        image: 'https://imgur.com/placeholder2.png',
        technologies: ['Flutter', 'OpenAI', 'Qdrant', 'Firebase'],
        liveUrl: '#',
        githubUrl: '#'
      },
      {
        title: 'Task Manager – Productivity App',
        description: 'Developed Flutter application for task scheduling with smart reminders and calendar integration. Implemented comprehensive calendar views and reduced backend load by 40% through optimized caching.',
        image: 'https://imgur.com/placeholder3.png',
        technologies: ['Flutter', 'Firebase', 'DigitalOcean'],
        liveUrl: '#',
        githubUrl: '#'
      }
    ],
    education: [
      {
        degree: 'BS Computer Science',
        institution: 'Queens College, CUNY, New York',
        year: 'Jan 2021 - Dec 2022'
      },
      {
        degree: 'Associate in Computer Science',
        institution: 'QCC, CUNY, New York',
        year: 'Aug 2019 - Dec 2021'
      },
      {
        degree: 'Certificate in Software Engineering',
        institution: 'General Assembly, Seattle, WA',
        year: 'Jul 2022 - Oct 2022'
      }
    ],
    achievements: [
      'Scaled mobile app to 1M+ users within 4 months of launch',
      'Improved app performance by 35% through optimization',
      'Reduced cloud resource usage by 40% across projects',
      'Led development of features handling 150K+ monthly transactions',
      'Successfully mentored junior developers in Flutter and mobile architecture'
    ]
  }
];
