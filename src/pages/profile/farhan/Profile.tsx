import { useState, useEffect } from 'react';
import { 
  DarkMode, 
  LightMode, 
  Code, 
  Work,
  School,
  Build,
  Storage,
  SmartToy,
  Cloud,
  Psychology,
  TaskAlt
} from '@mui/icons-material';
import './styles/Profile.css';

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
      period: 'March 2022 - April 2025',
      achievements: [
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
      period: 'May 2019 - December 2021',
      achievements: [
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
      period: 'June 2017 - October 2018',
      achievements: [
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
      techStack: ['Flutter', 'Agora', 'Kotlin', 'Firebase', 'Rest APIs', 'Provider'],
      description: [
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
      techStack: ['React.js', 'Express.js', 'Firebase', 'Rest APIs', 'Redux', 'MonogoDB', 'JWT', 'Heroku', 'Azure'],
      description: [
        'Created complete front-end interface using React.js with responsive components.',
        'Built backend using Express.js for routing and middleware integration.',
        'Implemented CRUD functionality with MongoDB for data management.',
        'Integrated Google APIs for authentication and calendar event syncing.',
        'Secured endpoints using JWT tokens and role-based access.',
        'Designed RESTful routes for scalable architecture.',
        'Deployed backend to Heroku with environment configurations.'
      ]
    }
  ];

  const skills = {
    languages: ['Dart', 'JavaScript', 'Kotlin', 'Python', 'C++', 'HTML5', 'CSS', 'Java (basic)'],
    frameworks: ['Flutter', 'React', 'React Native', 'Node.js', 'Express', 'Django'],
    databases: ['PostgreSQL', 'MongoDB', 'Firebase', 'DigitalOcean', 'AWS'],
    aiTools: ['WindSurf', 'ChatGPT'],
    devOps: ['Firebase Cloud Functions', 'Heroku', 'GitHub Actions', 'Azure DevOps', 'CI/CD'],
    other: ['Computer Architecture', 'Data Modeling', 'JWT Auth', 'API Integration'],
    productivity: ['Trello', 'Jira', 'Notion', 'Microsoft Office Suite']
  };

  const education = [
    {
      school: 'Queens College, CUNY, New York',
      degree: 'BS Computer Science',
      period: 'Expected Graduation: Dec 2022'
    },
    {
      school: 'QCC, CUNY, New York',
      degree: 'Associate in Computer Science',
      period: 'Aug 2019 - Dec 2021'
    },
    {
      school: 'General Assembly, Seattle, WA',
      degree: 'Certificate in Software Engineering',
      period: 'July 2022 - October 2022'
    }
  ];

  return (
    <div className="profile-container">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? <DarkMode /> : <LightMode />}
      </button>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Farhan<br/>Yousaf</h1>
            <h2>Full Stack Developer</h2>
            <p>7+ years of experience in cross-platform app and web development.<br/>Complete working and professional proficiency in Flutter and React.</p>
          </div>
          <div className="hero-image">
            <img src="https://i.imgur.com/2r3PuyF.jpg" alt="Farhan Yousaf" className="transparent" />
          </div>
        </div>
      </section>

      <div className="contact-info">
        <p>📍 Hillside, New York</p>
        <p>📞 929-231-8782</p>
        <p>✉️ <a href="mailto:Farhanyousaf1996@gmail.com">Farhanyousaf1996@gmail.com</a></p>
      </div>

      <main className="profile-main">
        <section className="section experience-section">
          <h2><Work /> RELEVANT EXPERIENCE</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h3>{exp.title} – {exp.company}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section">
          <h2><Code /> RELATED PROJECTS</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.link && (
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="project-achievements">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section skills-section">
          <h2><Build /> TECHNICAL SKILLS</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4><Code /> Languages</h4>
              <p>{skills.languages.join(", ")}</p>
            </div>
            <div className="skill-category">
              <h4><Code /> Frameworks & Libraries</h4>
              <p>{skills.frameworks.join(", ")}</p>
            </div>
            <div className="skill-category">
              <h4><Storage /> Databases & Cloud</h4>
              <p>{skills.databases.join(", ")}</p>
            </div>
            <div className="skill-category">
              <h4><SmartToy /> AI & Productivity Tools</h4>
              <p>{skills.aiTools.join(", ")} - used for rapid prototyping, research, and code automation</p>
            </div>
            <div className="skill-category">
              <h4><Cloud /> DevOps & Platforms</h4>
              <p>{skills.devOps.join(", ")}</p>
            </div>
            <div className="skill-category">
              <h4><Psychology /> Other Knowledge</h4>
              <p>{skills.other.join(", ")}</p>
            </div>
            <div className="skill-category">
              <h4><TaskAlt /> Productivity Tools</h4>
              <p>{skills.productivity.join(", ")}</p>
            </div>
          </div>
        </section>

        <section className="section education-section">
          <h2><School /> EDUCATION</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <h3>{edu.school}</h3>
                  <span className="period">{edu.period}</span>
                </div>
                <p className="degree">{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
