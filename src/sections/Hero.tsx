import { CONTACT_EMAIL } from '../data/site';

export default function Hero() {
  const goProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  const stats = [
    { value: '7+', label: 'Years shipping' },
    { value: '1M+', label: 'Users reached' },
    { value: '50+', label: 'Projects delivered' },
  ];

  return (
    <section id="home" className="hero">
      <div className="wrap hero__layout">
        <div className="hero__copy">
          <p className="chip">NYC · Software & AI Studio</p>
          <h1>
            Build products
            <span className="hero__accent"> that define tomorrow</span>
          </h1>
          <p className="hero__lead">
            We design and ship mobile apps, web platforms, and AI systems for founders
            who move fast.
          </p>
        </div>

        <div className="hero__block">
          <div className="hero__panel">
            <p className="hero__panel-label">Impact</p>
            <div className="hero__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero__stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__actions">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--solid">
              Start a Project
            </a>
            <button type="button" className="btn btn--ghost" onClick={goProjects}>
              View Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
