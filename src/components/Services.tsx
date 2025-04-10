import './Services.css';
import { FiArrowUpRight } from 'react-icons/fi';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const Services = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://lottie.host/d32efc74-ab20-462c-8ed6-6c6994d17ae7/2h4KAtkAbw.lottie')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error));
  }, []);

  const services = [
    {
      title: "UX Research",
      description: "Deep research for your product vision. We help define user audience, work on user stories, and competitive analysis."
    },
    {
      title: "UX Auditing",
      description: "If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues."
    },
    {
      title: "UX Consultation",
      description: "Expert consultation on user experience design, interface optimization, and product strategy."
    },
    {
      title: "Front End Development",
      description: "Front End expertise with deep focus on HTML, CSS. Building responsive, accessible, and performant websites."
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile apps for iOS and Android. Seamless user experience with Flutter and React Native."
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure with AWS, Azure, and GCP. Expert DevOps and deployment solutions."
    }
  ];

  return (
    <section className="services-section">
      <div className="section-content">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae accusamus eaque necessitatibus modi facilis aspernatur ut natus caecat.</p>
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
        {animationData && (
          <div className="services-lottie">
            <Lottie
              animationData={animationData}
              loop={true}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
