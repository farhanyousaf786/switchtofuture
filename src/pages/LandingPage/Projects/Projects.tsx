import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faChrome } from '@fortawesome/free-brands-svg-icons';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  platforms: {
    text: string;
    icons: any[];
  };
  tags: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    title: "Mobile Recharge & Support Platform",
    subtitle: "1 Million+ Users",
    description: "Complete mobile recharge and customer support solution with real-time transaction processing.",
    image: "https://i.imgur.com/zmLULuM.png",
    platforms: {
      text: "Multi-Platform",
      icons: [faApple, faAndroid]
    },
    tags: ["Mobile", "Payments", "Support"],
    link: "/projects/mobile-recharge"
  },
  {
    title: "Meddy App",
    subtitle: "HEALTHCARE SOLUTION",
    description: "Comprehensive healthcare app facilitating communication and managing medical data.",
    image: "https://i.imgur.com/zmLULuM.png",
    platforms: {
      text: "Multi-Platform",
      icons: [faAndroid, faChrome]
    },
    tags: ["Healthcare", "Appointments", "Chat"],
    link: "/projects/meddy-app"
  },
  {
    title: "DevFlow",
    subtitle: "DEVELOPER TOOLKIT",
    description: "A suite of powerful development tools to streamline your coding workflow and boost productivity.",
    image: "https://i.imgur.com/zmLULuM.png",
    platforms: {
      text: "Multi-Platform",
      icons: [faChrome]
    },
    tags: ["Development", "Tools", "Productivity"],
    link: "/projects/devflow"
  },
  {
    title: "EduTech Platform",
    subtitle: "LEARNING MANAGEMENT",
    description: "Modern learning management system with interactive courses, live sessions, and progress tracking.",
    image: "https://i.imgur.com/zmLULuM.png",
    platforms: {
      text: "Multi-Platform",
      icons: [faApple, faChrome]
    },
    tags: ["Education", "E-Learning", "Tech"],
    link: "/projects/edutech"
  },
  {
    title: "AI Analytics Hub",
    subtitle: "DATA INTELLIGENCE",
    description: "Advanced analytics platform using AI to transform business data into actionable insights.",
    image: "https://i.imgur.com/zmLULuM.png",
    platforms: {
      text: "Multi-Platform",
      icons: [faChrome]
    },
    tags: ["Analytics", "AI", "Business"],
    link: "/projects/ai-analytics"
  },
  {
    title: "Smart IoT Platform",
    subtitle: "IOT SOLUTION",
    description: "Comprehensive IoT platform for managing and monitoring connected devices in real-time.",
    image: "https://i.imgur.com/zmLULuM.png",
    platforms: {
      text: "Multi-Platform",
      icons: [faApple, faAndroid, faChrome]
    },
    tags: ["IoT", "Real-time", "Monitoring"],
    link: "/projects/smart-iot"
  }
];

const Projects = () => (
  <section className="projects-section">
    <div className="projects-container">
      <h2 className="section-title">Our Projects</h2>
      <div className="project-cards">
        {projectsData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="image-overlay"></div>
              <div className="card-info">
                <div className="platforms">
                  <span className="platform-text">{project.platforms.text}</span>
                  <div className="platform-icons">
                    {project.platforms.icons.map((icon, i) => (
                      <div key={i} className="icon-container">
                        <FontAwesomeIcon icon={icon} className="platform-icon" />
                        <span className="icon-label">
                          {icon.iconName === 'apple' ? 'iOS' :
                           icon.iconName === 'android' ? 'Android' : 'Web'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <div className="button-container">
                <a href={project.link} className="project-button">
                  See Full Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
