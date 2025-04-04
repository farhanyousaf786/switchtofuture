import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaLaptopCode, FaMobileAlt, FaTools, FaUserFriends } from 'react-icons/fa';
import { SiFlutter, SiReact, SiFirebase, SiNodedotjs, SiTailwindcss } from 'react-icons/si';
import './Home.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'projects', 'team', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "MVP Development",
      description: "Turn ideas into working apps fast — full stack, scalable, mobile or web"
    },
    {
      icon: <FaUserFriends />,
      title: "Dedicated Tech Team",
      description: "Expand your capabilities with our NYC-based dev team"
    },
    {
      icon: <FaTools />,
      title: "Project Rescue",
      description: "Got a stuck or broken project? We'll fix it, fast"
    },
    {
      icon: <FaMobileAlt />,
      title: "Web & App Dev",
      description: "Modern UI/UX, fast builds, cloud-ready"
    }
  ];

  const technologies = [
    { icon: <SiReact />, name: 'React' },
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiNodedotjs />, name: 'Node.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind' }
  ];

  const projects = [
    {
      title: 'HealthTrack',
      description: 'Built a health monitoring MVP with real-time sync and appointment booking. Delivered in 6 weeks using Flutter, Firebase, and Node.js.',
      tech: ['Flutter', 'Firebase', 'Node.js'],
      image: '/projects/healthtrack.jpg'
    }
  ];

  return (
    <div className="home-page">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src="https://i.imgur.com/zmLULuM.png" alt="Switch to Future Logo" />
          <span className="gradient-text">Switch to Future</span>
        </div>
        <nav className="nav">
          {['home', 'services', 'projects', 'team', 'about'].map((item) => (
            <button
              key={item}
              className={`nav-item ${activeSection === item ? 'active' : ''}`}
              onClick={() => {
                const element = document.getElementById(item);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
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
              <span className="gradient-text">Switch to Future:</span>
              <br />
              Build Software That Moves You Forward
            </h1>
            <p>US-based development & delivery team helping startups launch faster and smarter.</p>
            <div className="hero-cta">
              <button className="cta-button primary">Book a Free Strategy Call</button>
              <button className="cta-button secondary">See Our Work</button>
            </div>
            <div className="tech-showcase">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>What We Do</h2>
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

        <section id="projects" className="portfolio-section">
          <h2>Projects We've Delivered</h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="about-section">
          <h2>About Us</h2>
          <div className="about-content">
            <p>
              We're a small but mighty team of tech professionals led by Farhan — a NYC-based software 
              delivery expert with 7+ years of experience. We've helped startups, agencies, and founders 
              bring their visions to life with speed, quality, and heart.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <h3>7+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-card">
            <p>
              "Farhan and the team at Switch to Future helped us go from idea to launch in under 2 months. 
              Highly professional and always responsive."
            </p>
            <div className="testimonial-author">
              <h4>John Smith</h4>
              <p>CEO, HealthTrack</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Let's Build Something Amazing</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Ready to take your idea to the next level? Let's talk about your project.</p>
              <div className="contact-details">
                <p> hi@switchtofuture.com</p>
                <p> New York City, NY</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Tell us about your project" required></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
