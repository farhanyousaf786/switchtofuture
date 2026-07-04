import { FaSearch, FaPaintBrush, FaCode, FaRocket, FaChartLine, FaPhone, FaProjectDiagram } from 'react-icons/fa';
import './MainContent.css';

const developmentCycle = [
  { icon: <FaSearch />, title: 'Discover', description: 'Understand & plan your vision clearly' },
  { icon: <FaPaintBrush />, title: 'Design', description: 'Crafting delightful UI/UX' },
  { icon: <FaCode />, title: 'Develop', description: 'Writing scalable, efficient code' },
  { icon: <FaRocket />, title: 'Deploy', description: 'Launch your solution smoothly' },
  { icon: <FaChartLine />, title: 'Optimize', description: 'Continuous improvement and support' },
];

const MainContent = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="main-content">
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="text-gradient">We Build the Future</h1>
          <p className="hero-subtitle">
            Delivering cutting-edge apps, powerful websites, and intelligent AI solutions
          </p>

          <div className="dev-cycle">
            <p className="dev-cycle__hint">Swipe to explore our process →</p>
            <div className="dev-cycle__track">
              {developmentCycle.map((step, index) => (
                <article key={step.title} className="cycle-step">
                  <span className="step-tag">Phase {index + 1}</span>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-cta">
            <button type="button" className="hero-btn hero-btn--primary">
              <FaPhone className="hero-btn__icon" />
              Book a Free Strategy Call
            </button>
            <button type="button" className="hero-btn hero-btn--secondary" onClick={scrollToProjects}>
              <FaProjectDiagram className="hero-btn__icon" />
              View Our Projects
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
