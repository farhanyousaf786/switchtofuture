import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaLaptopCode, FaMobileAlt, FaTools, FaBars, FaTimes } from 'react-icons/fa';
import { 
  SiReact, SiFlutter, SiFirebase, SiNodedotjs, SiTailwindcss, 
  SiMongodb, SiTypescript, SiPython, SiDocker, SiKubernetes,
  SiPostgresql, SiRedis, SiGraphql, SiAmazon, SiGooglecloud,
  SiJavascript, SiSwift, SiKotlin, SiTensorflow, SiPrisma
} from 'react-icons/si';
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

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'We build fast, responsive, and secure websites and web apps — whether it\'s your business site, dashboard, or full SaaS platform.',
      features: ['Business Websites', 'Admin Panels & Dashboards', 'eCommerce Platforms', 'Web Portals & Custom Web Apps'],
      tech: 'React, Next.js, Node.js, Firebase, TailwindCSS'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Launch sleek, high-performing mobile apps across platforms with a single, powerful codebase.',
      features: ['MVP App Development', 'Full-Feature Native & Cross-platform Apps', 'API-Connected Apps'],
      tech: 'Flutter, Dart, Firebase, Kotlin, Swift, REST APIs'
    },
    {
      icon: <FaRocket />,
      title: 'AI & Automation Solutions',
      description: 'Integrate AI into your product — or build AI-first tools that make your business smarter.',
      features: ['GPT/Chatbot Integrations', 'AI-Powered Features (text, voice, image)', 'Workflow Automation with OpenAI or LangChain'],
      tech: 'Python, OpenAI, LangChain, Qdrant, Firebase Functions'
    },
    {
      icon: <FaCode />,
      title: 'UI/UX Design',
      description: 'Modern designs that feel natural. We prototype, design, and test interfaces that work — beautifully.',
      features: ['App & Web UI Design', 'Wireframes & Prototypes', 'UX Research + Testing'],
      tech: 'Figma, Adobe XD, Framer'
    },
    {
      icon: <FaTools />,
      title: 'Product Delivery & Tech Leadership',
      description: 'Not just code — we help manage and deliver your tech project from start to finish.',
      features: ['Agile Project Management', 'Full-Stack Team Outsourcing', 'MVP Roadmapping & Delivery'],
      tech: 'Jira, Slack, Notion, Trello'
    }
  ];

  const additionalServices = [
    'App Maintenance & Support',
    'API Integrations',
    'Cloud Hosting & Firebase Setup',
    'SEO-Ready Web Pages',
    'Deployment & Launch Help'
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

        <section id="services" className="services-section">
          <div className="section-content">
            <h2>What We Do</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    <h4>Includes:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-tech">
                    <h4>Tech:</h4>
                    <p>{service.tech}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="additional-services">
              <h3>We Also Offer</h3>
              <div className="additional-services-grid">
                {additionalServices.map((service, index) => (
                  <div key={index} className="additional-service-item">
                    {service}
                  </div>
                ))}
              </div>
            </div>
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
