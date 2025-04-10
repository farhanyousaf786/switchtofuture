import './Services.css';
import { FiArrowUpRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: "AI Solutions & Automation",
      description: "We build intelligent systems using OpenAI, GPT models, LangChain, and custom machine learning models. From AI chatbots to smart recommendation engines — we’ve got you covered."
    },
    {
      title: "Full-Stack Web Development",
      description: "End-to-end web apps using React, Next.js, Node.js, Express, Firebase, PostgreSQL, and MongoDB. Clean architecture, robust APIs, and pixel-perfect UIs."
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps using Flutter and React Native. Beautiful, high-performance apps that run on both Android and iOS."
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "We set up scalable infrastructure using AWS, GCP, Docker, and CI/CD pipelines. Speed, security, and uptime — guaranteed."
    },
    {
      title: "UX Research & Product Strategy",
      description: "User personas, journey mapping, and product-market alignment. We design experiences based on real data, not just guesswork."
    },
    {
      title: "UI/UX Design & Auditing",
      description: "Detailed UX audits and design systems. We improve usability, accessibility, and visual appeal using Figma and industry best practices."
    }
  ];

  return (
    <section className="services-section">
      <div className="section-content">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            We specialize in AI-driven software, full-stack development, and cross-platform mobile apps. Our team delivers
            secure, scalable, and intelligent digital products — from ideation to deployment.
          </p>
          <p className="tech-stack">
            <strong>Tech We Use:</strong> GPT, LangChain, OpenAI APIs, Python, Node.js, React, Next.js, Firebase, PostgreSQL,
            MongoDB, Flutter, Docker, AWS, GitHub Actions, and more.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-link">
                <FiArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
