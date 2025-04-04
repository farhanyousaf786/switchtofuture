import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { 
  SiReact, SiFlutter, SiFirebase, SiNodedotjs, SiTailwindcss, 
  SiMongodb, SiTypescript, SiPython, SiDocker, SiKubernetes,
  SiPostgresql, SiRedis, SiGraphql, SiAmazon, SiGooglecloud,
  SiJavascript, SiSwift, SiKotlin, SiTensorflow, SiPrisma
} from 'react-icons/si';
import Projects from '../../components/Projects';
import Services from '../../components/Services';
import About from '../../components/About';
import Team from '../../components/Team';
import './Home.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'projects', 'team', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const triggerPoint = windowHeight * 0.3; // 30% from the top
          return rect.top <= triggerPoint && rect.bottom >= triggerPoint;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="home-page">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src="https://i.imgur.com/zmLULuM.png" alt="Switch to Future Logo" />
          <span className="gradient-text">Switch to Future</span>
        </div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {['home', 'services', 'projects', 'team', 'about'].map((item) => (
            <button
              key={item}
              className={`nav-item ${activeSection === item ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1>
              Build What's Next
              <br />
              <span className="gradient-text">Switch to Future</span>
            </h1>
            <div className="hero-subcontent">
              <h2>Web Applications & Mobile Apps</h2>
              <h2>Develop AI Technologies</h2>
            </div>
            <div className="tech-stack">
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
              <button className="cta-button secondary">VIEW OUR PROJECTS</button>
            </div>
          </div>
        </section>

        <Services />
        <Projects />
        <About />
        <Team />
      </main>
    </div>
  );
};

export default Home;
