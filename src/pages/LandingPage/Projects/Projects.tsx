import { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectsData } from '../../../data/projectsData';
import { Link } from 'react-router-dom';

const categories = ["All", "Mobile Apps", "Web Apps", "AI Apps"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Our Projects</h2>
        
        <div className="projects-tabs">
          {categories.map((category) => (
            <button 
              key={category} 
              className={`tab-btn ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-cards">
          {filteredProjects.map((project, idx) => (
            <div className="project-card" key={project.title}>
              <div className="card-image-container">
                <div className="card-image" style={{ backgroundImage: `url(${project.images[0]})` }}></div>
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                </div>
                <p>{project.description}</p>
                
                <div className="tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>

                <div className="card-footer">
                  <div className="platform-icons">
                    {project.platforms.icons.map((icon, i) => (
                      <FontAwesomeIcon key={i} icon={icon} className="platform-icon" title={project.platforms.text} />
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`} className="project-button">
                    Details
                  </Link>
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
