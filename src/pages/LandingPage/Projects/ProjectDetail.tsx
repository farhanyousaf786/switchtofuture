import { useParams } from 'react-router-dom';
import { projectsData } from './Projects';
import { projectDetailsData } from '../../../data/projectDetailsData';
import './ProjectDetail.css';
import { useEffect, useState } from 'react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.link === slug);
  const details = slug ? projectDetailsData[slug] : null;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || !details) return (
    <div className="project-detail-container">
      <h2>Project not found</h2>
    </div>
  );

  return (
    <div className="project-detail-container">
      <div className="project-hero">
        <div className="carousel-container">
          <div className="carousel-main-image" style={{ backgroundImage: `url(${details.gallery[activeImage]})` }} />
          <div className="carousel-thumbnails">
            {details.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Screenshot ${i + 1}`}
                className={`thumbnail ${activeImage === i ? 'active' : ''}`}
                onClick={() => setActiveImage(i)}
              />
            ))}
          </div>
        </div>
        <div className=".hero-content-project">
          <h1 className="hero-title">{project.title}</h1>
          <h2 className="hero-subtitle">{project.subtitle}</h2>
        </div>
      </div>

      <div className="project-content">
        <div className="project-main">
          <div className="project-section">
            <h3>Overview</h3>
            <p>{details.overview}</p>
          </div>

          <div className="project-section">
            <h3>Key Features</h3>
            <ul className="feature-list">
              {details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-section">
            <h3>Technologies Used</h3>
            <div className="tech-stack">
              {details.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-section challenges-solutions">
            <div className="challenges">
              <h3>Challenges</h3>
              <ul>
                {details.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div className="solutions">
              <h3>Solutions</h3>
              <ul>
                {details.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-section">
            <h3>Results & Impact</h3>
            <div className="results-grid">
              {details.results.map((result, index) => (
                <div key={index} className="result-card">
                  {result}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside>
          <div className="project-section">
            <h3>Project Timeline</h3>
            <div className="timeline">
              {details.timeline.map((item, index) => (
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
              {details.team.map((member, index) => (
                <div key={index} className="team-member">
                  <h4>{member.name}</h4>
                  <div className="role">{member.role}</div>
                  <p>{member.contribution}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="testimonials">
        <h3>Client Testimonials</h3>
        {details.testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="feedback">{testimonial.text}</p>
            <p className="author">- {testimonial.author}, {testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
