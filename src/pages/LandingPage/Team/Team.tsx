import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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

const Team = () => {
  const navigate = useNavigate();
  
  const teamMembers: TeamMember[] = [
    {
      name: 'Farhan',
      role: 'Senior Developer',
      image: 'https://i.imgur.com/zmLULuM.png',
      bio: 'Full-stack developer with 7+ years of experience in React, Node.js, and cloud technologies.',
      profilePath: '/profile/farhan',
      social: {
        github: 'https://github.com/farhanyousaf786',
        linkedin: 'https://linkedin.com/in/farhanyousaf786',
        twitter: 'https://twitter.com/farhanyousaf786'
      }
    },
    {
      name: 'Kamran',
      role: 'Senior Developer',
      image: 'https://i.imgur.com/zmLULuM.png',
      bio: 'Backend expert specializing in scalable architectures and cloud infrastructure.',
      profilePath: '/profile/kamran',
      social: {
        github: 'https://github.com/kamran',
        linkedin: 'https://linkedin.com/in/kamran'
      }
    },
    {
      name: 'Usama',
      role: 'Senior Developer',
      image: 'https://i.imgur.com/zmLULuM.png',
      bio: 'Frontend specialist with expertise in React, Flutter, and modern UI frameworks.',
      profilePath: '/profile/usama',
      social: {
        github: 'https://github.com/usama',
        linkedin: 'https://linkedin.com/in/usama',
        twitter: 'https://twitter.com/usama'
      }
    },
    {
      name: 'Michael',
      role: 'Senior Developer',
      image: 'https://i.imgur.com/zmLULuM.png',
      bio: 'Full-stack developer focused on AI integration and cloud solutions.',
      profilePath: '/profile/michael',
      social: {
        github: 'https://github.com/michael',
        linkedin: 'https://linkedin.com/in/michael'
      }
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="section-content">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card" onClick={() => navigate(member.profilePath)}>
              <div className="team-card-inner">
                <div className="team-card-front">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                </div>
                <div className="team-card-back">
                  <p className="bio">{member.bio}</p>
                  <div className="social-links">
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <FaGithub />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <FaTwitter />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
