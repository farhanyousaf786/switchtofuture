import { ReactElement, useEffect } from 'react';
import { FaSync, FaHandshake, FaTools, FaLightbulb, FaRocket } from 'react-icons/fa';
import './About.css';

interface CoreValue {
  icon: ReactElement;
  title: string;
  description: string;
}

const coreValues: CoreValue[] = [
  { icon: <FaSync />, title: 'Agility', description: 'We move fast and adapt faster' },
  { icon: <FaHandshake />, title: 'Partnership', description: 'We treat your success like our own' },
  { icon: <FaTools />, title: 'Craftsmanship', description: 'Code with precision, design with purpose' },
  { icon: <FaLightbulb />, title: 'Innovation', description: "We build what's next, not what's trendy" },
];

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section landing-section">
      <div className="landing-section__container">
        <h2 className="landing-section__title fade-in">About Switch to Future</h2>

        <div className="about-text fade-in">
          <p>
            Switch to Future is a NYC-based software and AI development studio dedicated to helping
            founders, startups, and growing businesses bring their digital products to life. Led by
            Farhan — a software delivery leader with over 7 years of experience — we blend strategy,
            design, and code to create impactful, scalable solutions.
          </p>
        </div>

        <div className="core-values">
          <h3 className="fade-in">Our Core Values</h3>
          <div className="values-grid">
            {coreValues.map((value) => (
              <div key={value.title} className="value-card fade-in">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-cta fade-in">
          <button type="button" className="cta-button">
            <FaRocket />
            Let's Build Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
