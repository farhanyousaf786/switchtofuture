import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CSSProperties } from 'react';
import './profile.css';

const styles: { [key: string]: CSSProperties } = {
  profileContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    color: 'var(--home-text)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    margin: '0 auto 2rem',
    border: '3px solid var(--home-primary)',
    overflow: 'hidden',
  },
  name: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: 'var(--home-text)',
  },
  title: {
    fontSize: '1.2rem',
    color: 'var(--home-primary)',
    marginBottom: '1.5rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  socialIcon: {
    fontSize: '1.5rem',
    color: 'var(--home-text-secondary)',
    transition: 'all 0.3s ease',
    padding: '0.5rem',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.05)',
  },
  section: {
    marginBottom: '4rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: 'var(--home-text)',
    borderBottom: '2px solid var(--home-primary)',
    paddingBottom: '0.5rem',
  },
  content: {
    color: 'var(--home-text-secondary)',
    lineHeight: 1.8,
    fontSize: '1.1rem',
    marginBottom: '2rem',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  skillCategory: {
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  categoryTitle: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    color: 'var(--home-text)',
  },
  skillsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  skillItem: {
    color: 'var(--home-text-secondary)',
    marginBottom: '0.5rem',
    paddingLeft: '1.5rem',
    position: 'relative' as const,
  },
  experienceItem: {
    marginBottom: '2rem',
  },
  experienceTitle: {
    fontSize: '1.5rem',
    color: 'var(--home-text)',
    marginBottom: '0.5rem',
  },
  experienceCompany: {
    color: 'var(--home-primary)',
    marginBottom: '1rem',
  },
  experienceDuration: {
    color: 'var(--home-text-secondary)',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
};

const KamranProfile = () => {
  return (
    <div style={styles.profileContainer}>
      <div style={styles.header}>
        <div style={styles.profileImage}>
          <img src="https://i.imgur.com/zmLULuM.png" alt="Kamran" />
        </div>
        <h1 style={styles.name}>Kamran</h1>
        <p style={styles.title}>Senior Developer</p>
        <div style={styles.socialLinks}>
          <a href="https://github.com/kamran" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kamran" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <p style={styles.content}>
            Backend expert with over 5 years of experience in building scalable cloud infrastructure 
            and microservices. Passionate about system architecture and performance optimization.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={styles.skillsGrid}>
            <div style={styles.skillCategory}>
              <h3 style={styles.categoryTitle}>Backend</h3>
              <ul style={styles.skillsList}>
                <li style={styles.skillItem} className="skill-item">Node.js</li>
                <li style={styles.skillItem} className="skill-item">Python</li>
                <li style={styles.skillItem} className="skill-item">Java</li>
                <li style={styles.skillItem} className="skill-item">GraphQL</li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h3 style={styles.categoryTitle}>Cloud & DevOps</h3>
              <ul style={styles.skillsList}>
                <li style={styles.skillItem} className="skill-item">AWS</li>
                <li style={styles.skillItem} className="skill-item">Docker</li>
                <li style={styles.skillItem} className="skill-item">Kubernetes</li>
                <li style={styles.skillItem} className="skill-item">CI/CD</li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h3 style={styles.categoryTitle}>Databases</h3>
              <ul style={styles.skillsList}>
                <li style={styles.skillItem} className="skill-item">MongoDB</li>
                <li style={styles.skillItem} className="skill-item">PostgreSQL</li>
                <li style={styles.skillItem} className="skill-item">Redis</li>
                <li style={styles.skillItem} className="skill-item">Elasticsearch</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          <div style={styles.experienceItem}>
            <h3 style={styles.experienceTitle}>Senior Backend Developer</h3>
            <p style={styles.experienceCompany}>Switch to Future</p>
            <p style={styles.experienceDuration}>2020 - Present</p>
            <ul style={styles.skillsList}>
              <li style={styles.skillItem} className="skill-item">Lead backend development for enterprise-scale applications</li>
              <li style={styles.skillItem} className="skill-item">Design and implement microservices architecture</li>
              <li style={styles.skillItem} className="skill-item">Optimize database performance and query efficiency</li>
              <li style={styles.skillItem} className="skill-item">Mentor junior developers and conduct code reviews</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KamranProfile;
