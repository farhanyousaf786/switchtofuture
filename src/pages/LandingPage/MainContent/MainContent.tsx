import { 
  SiReact, SiFlutter, SiFirebase, SiNodedotjs, SiTailwindcss, 
  SiMongodb, SiTypescript, SiPython, SiDocker, SiKubernetes,
  SiPostgresql, SiRedis, SiGraphql, SiAmazon, SiGooglecloud,
  SiJavascript, SiSwift, SiKotlin, SiTensorflow, SiPrisma
} from 'react-icons/si';
import './MainContent.css';

const MainContent = () => {
  const technologies = [
    { icon: <SiReact />, name: 'React' },
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiNodedotjs />, name: 'Node.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiDocker />, name: 'Docker' },
    { icon: <SiKubernetes />, name: 'Kubernetes' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiRedis />, name: 'Redis' },
    { icon: <SiGraphql />, name: 'GraphQL' },
    { icon: <SiAmazon />, name: 'AWS' },
    { icon: <SiGooglecloud />, name: 'GCP' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiSwift />, name: 'Swift' },
    { icon: <SiKotlin />, name: 'Kotlin' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <SiPrisma />, name: 'Prisma' }
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="main-content">
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>
          We Build the Future
            <br />
          </h1>
          <p className="subtitle">
            Delivering Cutting-Edge Apps, Powerful Websites, and Intelligent AI Solutions
          </p>
          <div className="tech-stack" style={{ padding: '1rem 2rem' }}>
          <div className="tech-scroll">
              <div className="tech-track">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div key={index} className="tech-icon">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-cta">
            <button className="cta-button primary">BOOK A FREE STRATEGY CALL</button>
            <button onClick={scrollToProjects} className="cta-button secondary">VIEW OUR PROJECTS</button>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default MainContent;
