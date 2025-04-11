import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Team.css';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  profilePath: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Farhan',
    role: 'Team Lead',
    image: 'https://imgur.com/AftbaTl.png',
    bio: 'Visionary full-stack lead. Loves innovation, cloud, and clean UI.',
    profilePath: '/profile/farhan',
    social: {
      github: 'https://github.com/farhanyousaf786',
      linkedin: 'https://linkedin.com/in/farhanyousaf786',
      twitter: 'https://twitter.com/farhanyousaf786',
    },
  },
  {
    name: 'Kamran',
    role: 'Backend Architect',
    image: 'https://imgur.com/AftbaTl.png',
    bio: 'Master of APIs, databases, and scalable infrastructures.',
    profilePath: '/profile/kamran',
    social: {
      github: 'https://github.com/kamran',
      linkedin: 'https://linkedin.com/in/kamran',
    },
  },
  {
    name: 'Usman',
    role: 'Frontend Wizard',
    image: 'https://imgur.com/AftbaTl.png',
    bio: 'Transforms UI ideas into production-grade apps.',
    profilePath: '/profile/usman',
    social: {
      github: 'https://github.com/usman',
      linkedin: 'https://linkedin.com/in/usman',
      twitter: 'https://twitter.com/usman',
    },
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
