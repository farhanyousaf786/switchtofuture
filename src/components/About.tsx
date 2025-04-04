import { ReactElement } from 'react';
import { FaSync, FaHandshake, FaTools, FaLightbulb } from 'react-icons/fa';
import './About.css';

interface CoreValue {
  icon: ReactElement;
  title: string;
  description: string;
}

const About = () => {
  const coreValues: CoreValue[] = [
    {
      icon: <FaSync />,
      title: 'Agility',
      description: 'We move fast and adapt faster'
    },
    {
      icon: <FaHandshake />,
      title: 'Partnership',
      description: 'We treat your success like our own'
    },
    {
      icon: <FaTools />,
      title: 'Craftsmanship',
      description: 'Code with precision, design with purpose'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: "We build what\u2019s next, not what\u2019s trendy"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-content">
        <div className="team-image">
          <img src="https://i.imgur.com/zmLULuM.png" alt="Switch to Future Team" />
        </div>
        
        <h2>About Switch to Future</h2>
        
        <div className="about-content">
          <div className="about-block who-we-are">
            <h3>Who We Are</h3>
            <p>
              Switch to Future is a NYC-based software and AI development studio dedicated to helping 
              founders, startups, and growing businesses bring their digital products to life. Led by 
              Farhan — a software delivery leader with over 7 years of experience — we blend strategy, 
              design, and code to create impactful, scalable solutions.
            </p>
          </div>

          <div className="about-block our-mission">
            <h3>Our Mission</h3>
            <p>
              To engineer tomorrow's technology — today. Whether it's a cross-platform mobile app, 
              a full-stack web solution, or an AI-powered chatbot, we make it real with speed, 
              quality, and vision.
            </p>
          </div>

          <div className="about-block why-us">
            <h3>Why Work With Us</h3>
            <p>
              We're not just developers — we're your tech partners. Local, responsive, and agile, 
              we bring delivery expertise and a fully equipped team of five to ensure your project 
              succeeds, on time and beyond expectations.
            </p>
          </div>

          <div className="core-values">
            <h3>Our Values</h3>
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-cta">
            <h3>Ready to Build Something Amazing?</h3>
            <button className="cta-button">Let's Build Together</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
