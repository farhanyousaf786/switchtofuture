import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
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

const UsamaProfile = () => {
  return (
    <div style={styles.profileContainer}>
      <div style={styles.header}>
        <div style={styles.profileImage}>
          <img src="https://i.imgur.com/zmLULuM.png" alt="Usama" />
        </div>
        <h1 style={styles.name}>Usama</h1>
        <p style={styles.title}>Senior Developer</p>
        <div style={styles.socialLinks}>
          <a href="https://github.com/usama" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/usama" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/usama" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-icon">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <p style={styles.content}>
            Frontend specialist with a passion for creating beautiful, responsive, and user-friendly 
            interfaces. Expert in modern JavaScript frameworks and mobile development with Flutter.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={styles.skillsGrid}>
            <div style={styles.skillCategory}>
              <h3 style={styles.categoryTitle}>Frontend</h3>
              <ul style={styles.skillsList}>
                <li style={styles.skillItem} className="skill-item">React</li>
                <li style={styles.skillItem} className="skill-item">Next.js</li>
                <li style={styles.skillItem} className="skill-item">TypeScript</li>
                <li style={styles.skillItem} className="skill-item">TailwindCSS</li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h3 style={styles.categoryTitle}>Mobile</h3>
              <ul style={styles.skillsList}>
                <li style={styles.skillItem} className="skill-item">Flutter</li>
                <li style={styles.skillItem} className="skill-item">React Native</li>
                <li style={styles.skillItem} className="skill-item">iOS</li>
                <li style={styles.skillItem} className="skill-item">Android</li>
              </ul>
            </div>
            <div style={styles.skillCategory}>
              <h3 style={styles.categoryTitle}>UI/UX</h3>
              <ul style={styles.skillsList}>
                <li style={styles.skillItem} className="skill-item">Figma</li>
                <li style={styles.skillItem} className="skill-item">Adobe XD</li>
                <li style={styles.skillItem} className="skill-item">Responsive Design</li>
                <li style={styles.skillItem} className="skill-item">Animation</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          <div style={styles.experienceItem}>
            <h3 style={styles.experienceTitle}>Senior Frontend Developer</h3>
            <p style={styles.experienceCompany}>Switch to Future</p>
            <p style={styles.experienceDuration}>2021 - Present</p>
            <ul style={styles.skillsList}>
              <li style={styles.skillItem} className="skill-item">Lead frontend development for web and mobile applications</li>
              <li style={styles.skillItem} className="skill-item">Implement responsive designs and smooth animations</li>
              <li style={styles.skillItem} className="skill-item">Develop cross-platform mobile apps using Flutter</li>
              <li style={styles.skillItem} className="skill-item">Create reusable component libraries and design systems</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UsamaProfile;
