import './Projects.css';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    title: "Cascade AI",
    description: "An intelligent coding assistant that helps developers write better code faster. Features real-time suggestions, code analysis, and automated refactoring.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["React", "TypeScript", "Node.js", "OpenAI", "Firebase"],
    link: "https://cascade.io"
  },
  {
    title: "Meddy App",
    description: "A comprehensive healthcare platform connecting patients with doctors. Includes appointment scheduling, medical records, and telemedicine features.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/meddy-app"
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with advanced analytics, portfolio management, and market predictions using AI.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["React", "TailwindCSS", "Node.js", "TensorFlow"],
    link: "https://crypto-dash.app"
  },
  {
    title: "Smart Home Hub",
    description: "IoT platform for managing smart home devices with automation rules, energy monitoring, and voice control integration.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["React Native", "Python", "AWS", "MongoDB"],
    github: "https://github.com/yourusername/smart-home"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered platform for generating marketing content, blog posts, and social media updates with SEO optimization.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["Next.js", "GPT-3", "Node.js", "PostgreSQL"],
    link: "https://ai-content.app"
  },
  {
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts, nutrition, and health metrics with AI-powered personalized recommendations.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["Flutter", "Firebase", "TensorFlow", "Node.js"],
    github: "https://github.com/yourusername/fitness-tracker"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section" aria-label="Projects Section">
      <div className="section-content">
        <h2>Our Projects</h2>
        <div className="projects-grid" role="list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card" role="listitem">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
