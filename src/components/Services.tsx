import { ReactElement } from 'react';
import { FaRocket, FaCode, FaLaptopCode, FaMobileAlt, FaTools } from 'react-icons/fa';
import './Services.css';

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  features: string[];
  tech: string;
}

const Services = () => {
  const services: Service[] = [
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

  return (
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
  );
};

export default Services;
