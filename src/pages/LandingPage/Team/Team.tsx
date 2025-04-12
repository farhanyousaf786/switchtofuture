import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { teamMembers } from '../../../data/teamMembers';
import './Team.css';

const Team = () => {
  return (
    <section className="team-section" id="team">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image">
              <img 
                src={member.image} 
                alt={member.name} 
                width={150} 
                height={150}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
              <div className="team-links">
                <div className="social-links">
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      className="social-link"
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      className="social-link"
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      className="social-link"
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  )}
                </div>
                <Link to={`/${member.id}`} className="portfolio-link">
                  View Profile <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
