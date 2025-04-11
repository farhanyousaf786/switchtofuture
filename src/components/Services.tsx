import React from 'react';
import './Services.css';
import { FiArrowRight } from 'react-icons/fi';

type Service = {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  link: string;
};

const services: Service[] = [
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross-platform MVPs built with Flutter.',
    bullets: [
      'Launch on Android & iOS',
      'Includes chat, auth, and payments',
      '2–4 week delivery time',
    ],
    link: '#contact',
  },
  {
    icon: '🤖',
    title: 'AI Chatbots',
    description: 'Custom GPT chatbots trained for your brand.',
    bullets: [
      'OpenAI + LangChain integration',
      'Website, app & CRM support',
      'Fast + friendly automation',
    ],
    link: '#contact',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Modern, responsive, blazing-fast websites.',
    bullets: [
      'React / Next.js + Tailwind',
      'Fully responsive & SEO-ready',
      'Landing pages & dashboards',
    ],
    link: '#contact',
  },
  {
    icon: '⚙️',
    title: 'Automation & Tools',
    description: 'Time-saving systems built for your business.',
    bullets: [
      'Zapier, Slack, Notion workflows',
      'Custom APIs and admin panels',
      'Full-stack dashboard logic',
    ],
    link: '#contact',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          High-performance tech for startups, founders, and businesses ready to scale.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.bullets.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
              <a href={service.link} className="service-link">
                Learn More <FiArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
