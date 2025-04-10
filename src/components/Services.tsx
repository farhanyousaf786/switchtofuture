import { ReactElement } from 'react';
import { FaCode, FaMobile, FaCloud, FaRobot, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import './Services.css';

interface Service {
  title: string;
  description: string;
  icon: ReactElement;
}

const servicesData: Service[] = [
  {
    title: "Web Development",
    description: "Modern web applications using React, Next.js, and Node.js. Fast, responsive, and user-friendly solutions.",
    icon: <FaCode />
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile apps for iOS and Android. Seamless user experience with Flutter and React Native.",
    icon: <FaMobile />
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure with AWS, Azure, and GCP. Expert DevOps and deployment solutions.",
    icon: <FaCloud />
  },
  {
    title: "AI Integration",
    description: "Custom AI solutions and machine learning models. Smart automation for your business needs.",
    icon: <FaRobot />
  },
  {
    title: "Analytics",
    description: "Real-time data analytics and visualization. Smart dashboards and business intelligence tools.",
    icon: <FaChartLine />
  },
  {
    title: "Cybersecurity",
    description: "Complete security solutions with testing, audits, and best practices implementation.",
    icon: <FaShieldAlt />
  }
];

const additionalServices = [
  'App Maintenance & Support',
  'API Integrations',
  'Cloud Hosting & Firebase Setup',
  'SEO-Ready Web Pages',
  'Deployment & Launch Help'
];

const Services = () => {
  return (
    <div className="services-section" id="services">
      <div className="section-content">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card" role="article">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
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
    </div>
  );
};

export default Services;
