import styles from './styles/Profile.module.css';
import { useState, useEffect } from 'react';
import { 
  DarkMode, 
  LightMode, 
  Brush, 
  Code, 
  Layers,
  Work,
  School,
  Build,
  Storage,
  SmartToy,
  Cloud,
  Psychology,
  TaskAlt
} from '@mui/icons-material';

const Profile = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Maxsip Telecom',
      date: 'March 2022 - April 2025',
      points: [
        'Developed and maintained 5+ mobile apps using Flutter and Firebase, scaling downloads from 50K to over 1 million in just 4 months.',
        'Reduced data load times by 35% through advanced caching strategies and optimized queries.',
        'Improved backend efficiency by redesigning database schema, leading to faster user data retrieval.',
        'Integrated secure payment systems using encryption/decryption, processing over 150K+ transactions.',
        'Created and maintained RESTful APIs and built custom admin panels in React for internal tools and top-up workflows.',
        'Used caches, decreased lead-time by 20%, and minimized data storage inventory cost by 25%.',
        'Migrated legacy codebases to modern Flutter architecture, reducing the monthly crash rate.',
        'Collaborated across 3 agile teams to ship bi-weekly releases ahead of deadlines, with quality product.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Chirp-tech',
      date: 'May 2019 - December 2021',
      points: [
        'Developed responsive web apps using MVVM architecture, LiveData, and Navigation for UI flow.',
        'Integrated REST APIs, Firebase, and payment gateways, ensuring secure and scalable performance.',
        'Managed offline storage by implementing advanced caching to improve firebase data consumption.',
        'Collaborated across Scrum teams, contributing to sprint planning and reviews with delivery cycles.',
        'Used Trello for task tracking and GitHub for VC, maintenance, and collaborative codebases.',
        'Reduced lead time by 20% and cut cloud storage costs by 25% through code optimization and cache strategy.'
      ]
    },
    {
      title: 'Internship (Software Development)',
      company: 'E-tech lounge',
      date: 'June 2017 - October 2018',
      points: [
        'Contributed to 10+ front-end projects, building responsive UIs with React, HTML, CSS, and JS.',
        'Migrated legacy websites from Flutter to React, improving load speed and enhancing performance.',
        'Participated in full-cycle development, gaining experience in project planning, teamwork, and agile time management.',
        'Collaborated with senior developers to learn best practices in code optimization and debugging.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Maxsip App – Maxsip Telecom',
      link: 'Production link',
      techStack: 'Flutter, Agora, Kotlin, Firebase, Rest APIs, Provider',
      points: [
        'Developed and launched the Maxsip User App using Flutter, serving over one million users.',
        'Implemented a custom chatbot system handling 10K+ automated interactions per month.',
        'Integrated top-up APIs for seamless mobile recharge, processing over 150K transactions monthly.',
        'Set up Firebase Authentication, Firestore, and Cloud Messaging for real-time data.',
        'Created and optimized Firebase Cloud Functions, improving scalability by 30%.',
        'Integrated Agora API for in-app video calling with 99% reliability.',
        'Built complete chat system with real-time messaging and offline sync support.',
        'Handled Kotlin-Flutter bridging for improved app performance.',
        'Optimized Google Ads SDK, contributing to 15% revenue boost.',
        'Implemented background service, improving session persistence by 25%.'
      ]
    },
    {
      title: 'Pure Web – Responsive Company Website',
      link: 'Production link',
      techStack: 'React.js, Express.js, Firebase, Rest APIs, Redux, MonogoDB, JWT, Heroku, Azure',
      points: [
        'Created complete front-end interface using React.js with responsive components.',
        'Built backend using Express.js for routing and middleware integration.',
        'Implemented CRUD functionality with MongoDB for data management.',
        'Integrated Google APIs for authentication and calendar event syncing.',
        'Secured endpoints using JWT tokens and role-based access.',
        'Designed RESTful routes for scalable architecture.',
        'Deployed backend to Heroku with environment configurations.'
      ]
    },
    {
      title: 'Clusty AI – Self-Aware Social App',
      link: 'Progress link',
      techStack: 'Flutter, Firebase, Qdrant, MongoDB, OpenAI, Provider',
      points: [
        'Developed using Flutter with Qdrant vector DB and MongoDB.',
        'Integrated OpenAI embeddings for memory recall and semantic search.',
        'Captures text, voice, and video journals for rich user input.',
        'Featured digital twin system for user reflection and growth.',
        'Built real-time chat and personalized AI journaling assistant.',
        'Designed for future VR + AI persona simulation expansion.'
      ]
    }
  ];

  const skills = [
    {
      category: 'Languages',
      items: 'Dart, JavaScript, Kotlin, Python, C++, HTML5, CSS, and basic Java familiarity'
    },
    {
      category: 'Frameworks & Libraries',
      items: 'Flutter, React, React Native, Node.js, Express, Django'
    },
    {
      category: 'Databases & Cloud',
      items: 'PostgreSQL, MongoDB, Firebase, DigitalOcean, AWS'
    },
    {
      category: 'AI & Productivity Tools',
      items: 'WindSurf and ChatGPT - used for rapid prototyping, research, and code automation'
    },
    {
      category: 'DevOps & Platforms',
      items: 'Firebase Cloud Functions, Heroku, GitHub Actions, Azure DevOps, CI/CD basics'
    },
    {
      category: 'Other Knowledge',
      items: 'Computer Architecture, Data Modeling, JWT Auth, API Integration'
    },
    {
      category: 'Productivity Tools',
      items: 'Trello, Jira, Notion, Microsoft Office Suite (Excel, Word, PowerPoint)'
    }
  ];

  const education = [
    {
      school: 'Queens College, CUNY, New York',
      degree: 'BS Computer Science',
      date: 'Expected Graduation: Dec 2022'
    },
    {
      school: 'QCC, CUNY, New York',
      degree: 'Associate in Computer Science',
      date: 'Aug 2019 - Dec 2021'
    },
    {
      school: 'General Assembly, Seattle, WA',
      degree: 'Certificate in Software Engineering',
      date: 'July 2022 - October 2022'
    }
  ];

  return (
    <div className={styles.profile}>
      <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === 'light' ? <DarkMode /> : <LightMode />}
      </button>

      <header className={styles.header}>
        <h1 className={styles.name}>Farhan Yousaf</h1>
        <div className={styles.contact}>
          Hillside, New York | 929-231-8782 | 
          <a href="mailto:Farhanyousaf1996@gmail.com">Farhanyousaf1996@gmail.com</a> |
          <a href="#github">GitHub</a> |
          <a href="#linkedin">LinkedIn</a> |
          <a href="#profile">Profile</a>
        </div>
        <p className={styles.summary}>
          Full Stack Software Developer with 7+ years of experience in cross-platform app and web development. 
          Complete working and professional proficiency in Flutter and React. Coordinate with cross-functional 
          teams in Agile/Scrum environment. Experienced in GitHub workflow in team projects. Extensive knowledge 
          of different algorithms and notations, along with computer architecture development.
        </p>
        <img src="https://i.imgur.com/2r3PuyF.jpg" alt="Farhan Yousaf" className={styles.image} />
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>RELEVANT EXPERIENCE</h2>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experience}>
            <div className={styles.experienceHeader}>
              <div className={styles.companyTitle}>
                {exp.title} – {exp.company}
              </div>
              <div className={styles.date}>{exp.date}</div>
            </div>
            <ul className={styles.bulletPoints}>
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>RELATED PROJECTS</h2>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.projectHeader}>
              <div className={styles.projectTitle}>{project.title}</div>
              <a href={project.link} className={styles.projectLink}>View Project</a>
            </div>
            <div className={styles.techStack}>Tech Stack: {project.techStack}</div>
            <ul className={styles.bulletPoints}>
              {project.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCategory}>
              <div className={styles.skillTitle}>{skill.category}:</div>
              <div className={styles.skillList}>{skill.items}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>EDUCATION</h2>
        {education.map((edu, index) => (
          <div key={index} className={styles.education}>
            <div className={styles.school}>{edu.school}</div>
            <div className={styles.degree}>{edu.degree}</div>
            <div className={styles.date}>{edu.date}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Profile;
