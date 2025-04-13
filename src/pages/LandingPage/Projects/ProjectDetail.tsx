import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faChrome } from '@fortawesome/free-brands-svg-icons';
import { projectsData } from './Projects';
import { projectDetailsData } from '../../../data/projectDetailsData';
import './Projects.css';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.link === slug);
  const details = slug ? projectDetailsData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || !details) return (
    <div className="projects-section">
      <div className="project-detail-container">
        <h2>Project not found</h2>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    </div>
  );

  return (
    <section className="projects-section">
      <div className="project-detail-container">
        <Link to="/" className="back-button">← Back to Projects</Link>
        <div className="project-card single">
          <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="image-overlay"></div>
            <div className="card-info">
              <div className="platforms">
                <span className="platform-text">Platforms</span>
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
                {project.tags.map((tag: string) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>
          <div className="card-content">
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <p>{details.overview}</p>
            
            <div className="project-section">
              <h3>Key Features</h3>
              <ul className="feature-list">
                {details.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h3>Technologies Used</h3>
              <div className="tech-stack">
                {details.technologies.map((tech: string, index: number) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-section challenges-solutions">
              <div className="challenges">
                <h3>Challenges</h3>
                <ul>
                  {details.challenges.map((challenge: string, index: number) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div className="solutions">
                <h3>Solutions</h3>
                <ul>
                  {details.solutions.map((solution: string, index: number) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-section">
              <h3>Results & Impact</h3>
              <div className="results-grid">
                {details.results.map((result: string, index: number) => (
                  <div key={index} className="result-card">
                    {result}
                  </div>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h3>Project Timeline</h3>
              <div className="timeline">
                {details.timeline.map((item: { date: string; milestone: string }, index: number) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-content">{item.milestone}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h3>Team</h3>
              <div className="team-grid">
                {details.team.map((member: { name: string; role: string; contribution: string }, index: number) => (
                  <div key={index} className="team-member">
                    <h4>{member.name}</h4>
                    <div className="role">{member.role}</div>
                    <p>{member.contribution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <h3>Client Testimonials</h3>
          {details.testimonials.map((testimonial: { text: string; author: string; position: string }, index: number) => (
            <div key={index} className="testimonial">
              <p className="feedback">{testimonial.text}</p>
              <p className="author">- {testimonial.author}, {testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
