import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaBrain, FaRobot, FaMobile, FaCloud, FaLaptopCode } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpenai } from 'react-icons/si';
import './Home.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const sections = ['home', 'about', 'services', 'team', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= 300;
          }
          return false;
        });
        if (current) {
          setActiveSection(current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const teamMembers = [
    {
      name: 'Farhan Yousaf',
      role: 'Lead AI Engineer',
      image: 'https://i.imgur.com/2r3PuyF.jpg',
      link: '/profile/farhan'
    }
  ];

  const technologies = [
    { icon: <FaReact />, name: 'React' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <SiPytorch />, name: 'PyTorch' },
    { icon: <SiOpenai />, name: 'OpenAI' },
    { icon: <FaCloud />, name: 'Cloud AI' },
    { icon: <FaMobile />, name: 'Mobile AI' }
  ];

  const services = [
    {
      icon: <FaBrain />,
      title: 'AI Integration',
      description: 'Seamlessly integrate cutting-edge AI solutions into your existing systems'
    },
    {
      icon: <FaRobot />,
      title: 'Custom AI Models',
      description: 'Develop tailored AI models specific to your business needs'
    },
    {
      icon: <FaLaptopCode />,
      title: 'AI-Powered Development',
      description: 'Build next-gen applications with AI-driven features and capabilities'
    }
  ];

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <span className="gradient-text">Switch To Future</span>
        </div>
        <nav className="nav">
          {['home', 'about', 'services', 'team', 'contact'].map((section) => (
            <button
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1 className="gradient-text">Innovating the Future with AI</h1>
            <p>We transform businesses through cutting-edge AI solutions and innovative tech development</p>
            <div className="tech-showcase">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
            <button className="cta-button" onClick={() => scrollToSection('contact')}>
              Get Started
            </button>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>Switch To Future is a pioneering AI technology company specializing in developing intelligent solutions that bridge the gap between human creativity and artificial intelligence. Our team of experts combines cutting-edge AI research with practical applications to deliver innovative solutions that drive business growth.</p>
          <div className="stats-container">
            <div className="stat-item">
              <h3>50+</h3>
              <p>AI Projects</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <Link to={member.link} key={index} className="team-member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Ready to switch to the future? Let's discuss how we can help transform your business with AI.</p>
              <div className="contact-details">
                <p>📍 Hillside, New York</p>
                <p>📞 929-231-8782</p>
                <p>✉️ contact@switchtofuture.com</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
