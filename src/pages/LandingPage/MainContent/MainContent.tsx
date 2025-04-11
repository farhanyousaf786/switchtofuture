import { 
  SiReact, SiFlutter, SiFirebase, SiNodedotjs, SiTailwindcss, 
  SiMongodb, SiTypescript, SiPython, SiDocker, SiKubernetes,
  SiPostgresql, SiRedis, SiGraphql, SiAmazon, SiGooglecloud,
  SiJavascript, SiSwift, SiKotlin, SiTensorflow, SiPrisma
} from 'react-icons/si';
import { FaSync, FaHandshake, FaTools, FaLightbulb, FaSearch, FaPaintBrush, FaCode, FaRocket, FaChartLine, FaPhone, FaProjectDiagram } from 'react-icons/fa';
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

 
  const developmentCycle = [
    {
      icon: <FaSearch />,
      title: 'Discover',
      description: 'Understand & Plan your vision clearly'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Design',
      description: 'Crafting delightful UI/UX'
    },
    {
      icon: <FaCode />,
      title: 'Develop',
      description: 'Writing scalable, efficient code'
    },
    {
      icon: <FaRocket />,
      title: 'Deploy',
      description: 'Launch your solution smoothly'
    },
    {
      icon: <FaChartLine />,
      title: 'Optimize',
      description: 'Continuous improvement and support'
    }
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    // Add your logic here
  };

  const handleProjectsClick = () => {
    scrollToProjects();
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
                {technologies.map((tech, index) => (
                  <div key={index} className="tech-icon">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

     

          <div className="dev-cycle">
            {window.innerWidth <= 768 ? (
              <div className="cycle-steps">
                {developmentCycle.map((step, index) => (
                  <div key={index} className="cycle-step">
                    <div className="step-tag">Phase {index + 1}</div>
                    <div className="step-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    {index < developmentCycle.length - 1 && <div className="step-arrow">→</div>}
                  </div>
                ))}
                {developmentCycle.map((step, index) => (
                  <div key={`clone-${index}`} className="cycle-step">
                    <div className="step-tag">Phase {index + 1}</div>
                    <div className="step-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    {index < developmentCycle.length - 1 && <div className="step-arrow">→</div>}
                  </div>
                ))}
              </div>
            ) : (
              developmentCycle.map((step, index) => (
                <div key={index} className="cycle-step">
                  <div className="step-tag">Phase {index + 1}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index < developmentCycle.length - 1 && <div className="step-arrow">→</div>}
                </div>
              ))
            )}
          </div>

          <div className="hero-cta">
            <button className="primary-btn" onClick={handleContactClick}>
              <FaPhone className="btn-icon" />
              Book a Free Strategy Call
            </button>
            <button className="secondary-btn" onClick={handleProjectsClick}>
              <FaProjectDiagram className="btn-icon" />
              View Our Projects
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
