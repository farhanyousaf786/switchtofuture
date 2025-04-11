import React from 'react';
import './Services.css';
import { FiArrowRight } from 'react-icons/fi';

type Service = {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  link: string;
  buttonLabel: string;
};

const services: Service[] = [
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'We design and build high-performance mobile apps for Android and iOS.',
    bullets: [
      'Custom UI with secure login, chat, and payments',
      'Admin dashboard or backend tools included',
    ],
    link: '#contact',
    buttonLabel: 'Start My App',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'We create modern websites that are fast, responsive, and built for conversion.',
    bullets: [
      'SEO-ready design with forms and animations',
      'Works on mobile, tablets, and all browsers',
    ],
    link: '#contact',
    buttonLabel: 'Build My Website',
  },
  {
    icon: '🤖',
    title: 'AI Chatbots',
    description: 'Smart chatbots that automate responses, support, and lead capture.',
    bullets: [
      'Integrates with your site or app',
      'Analytics & training support included',
    ],
    link: '#contact',
    buttonLabel: 'Train My Bot',
  },
  {
    icon: '⚙️',
    title: 'Automation & Tools',
    description: 'Automate workflows, dashboards, reports, and internal tools.',
    bullets: [
      'Custom admin tools & dashboards',
      'Connect apps, auto-send emails, process data',
    ],
    link: '#contact',
    buttonLabel: 'Automate My Business',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Powerful tools to launch your app, automate your business, and scale smart.
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
                {service.buttonLabel} <FiArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
