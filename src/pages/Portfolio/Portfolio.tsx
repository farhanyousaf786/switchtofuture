import { useParams } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { teamMembers } from '../../data/teamMembers';
import './Portfolio.css';

const Portfolio = () => {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="portfolio-error">
        <h2>Profile not found</h2>
        <p>The requested profile does not exist.</p>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="profile-image">
          <img src={member.image} alt={member.name} />
        </div>
        <div className="profile-info">
          <h1>{member.name}</h1>
          <div className="contact-info">
            <p><FaMapMarkerAlt /> {member.location}</p>
            <p><FaPhone /> {member.contact.phone}</p>
            <p><FaEnvelope /> {member.contact.email}</p>
          </div>
          <p className="bio">{member.bio}</p>
          <div className="social-links">
            {member.social.github && (
              <a href={member.social.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="portfolio-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {member.skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="portfolio-section">
        <h2>Experience</h2>
        <div className="timeline">
          {member.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="duration">{exp.duration}</p>
                <ul className="experience-list">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {member.projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="portfolio-section">
        <h2>Education</h2>
        <div className="education-grid">
          {member.education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="portfolio-section">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          {member.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
