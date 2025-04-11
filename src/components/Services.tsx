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
    description: 'We design and build high-performance mobile apps for both Android and iOS.',
    bullets: [
      'Custom-designed mobile interface with smooth UX',
      'Supports login, notifications, messaging, and more',
      'Integrated payment systems and secure data flows',
      'Works across phones, tablets, and modern devices',
      'Includes admin panel or backend if needed',
    ],
    link: '#contact',
    buttonLabel: 'Start My App',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'We create sleek, responsive websites and powerful online platforms.',
    bullets: [
      'Modern and mobile-friendly UI design',
      'SEO-friendly structure with lightning-fast load times',
      'Contact forms, animations, and newsletter signups',
      'Built to support e-commerce, blogs, and portals',
      'Includes dashboards or CMS features on request',
    ],
    link: '#contact',
    buttonLabel: 'Build My Website',
  },
  {
    icon: '🤖',
    title: 'AI Chatbots',
    description: 'We build intelligent chatbots that automate responses and improve engagement.',
    bullets: [
      'Personalized AI assistant tailored to your business',
      'Works on websites, apps, and popular messaging tools',
      'Answers FAQs, captures leads, and routes conversations',
      'Seamless integration with your existing workflow',
      'Includes analytics dashboard for performance tracking',
    ],
    link: '#contact',
    buttonLabel: 'Train My Bot',
  },
  {
    icon: '⚙️',
    title: 'Automation & Tools',
    description: 'We automate your repetitive tasks and build custom internal tools.',
    bullets: [
      'Connect your apps to eliminate manual work',
      'Create internal tools like admin panels & CRMs',
      'Set up dashboards to track business data in real time',
      'Automate reports, emails, form handling, and more',
      'Tailored to fit your existing process — no disruption',
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
                  <li key={i}>{point}</li>
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
