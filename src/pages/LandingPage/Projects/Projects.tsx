import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    title: "Cascade AI",
    description: "An intelligent assistant that helps developers write cleaner code with smart suggestions and refactoring.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["AI Assistant", "Real-Time Help", "Refactoring"],
    link: "/projects/cascade-ai"
  },
  {
    title: "Meddy App",
    description: "Healthcare app connecting patients with doctors via appointments, records, and chat.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["Telemedicine", "Chat", "Health Records"],
    link: "/projects/meddy-app"
  },
  {
    title: "Crypto Dashboard",
    description: "Track crypto prices, view trends, and manage your portfolio in real-time.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["Crypto", "Charts", "Portfolio"],
    link: "/projects/crypto-dashboard"
  },
  {
    title: "Smart Home Hub",
    description: "Manage your smart devices, schedule automations, and monitor usage from one place.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["IoT", "Smart Devices", "Energy"],
    link: "/projects/smart-home-hub"
  },
  {
    title: "AI Content Generator",
    description: "Generate blog posts, product descriptions, and ad copy in seconds using AI.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["Content", "Marketing", "AI"],
    link: "/projects/ai-content-generator"
  },
  {
    title: "Fitness Tracker",
    description: "Track your workouts, calories, and progress with smart recommendations.",
    image: "https://i.imgur.com/zmLULuM.png",
    tech: ["Fitness", "Tracking", "AI Coach"],
    link: "/projects/fitness-tracker"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <a key={index} href={project.link} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
