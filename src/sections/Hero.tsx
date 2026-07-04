export default function Hero() {
  const goProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

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

        <div className="hero__panel">
          <p className="hero__panel-label">Impact</p>
          <div className="hero__stats">
            <div>
              <strong>7+</strong>
              <span>Years shipping</span>
            </div>
            <div>
              <strong>1M+</strong>
              <span>Users reached</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Projects delivered</span>
            </div>
          </div>
        </div>

        <div className="hero__actions">
          <a href="mailto:contact@switchtofuture.com" className="btn btn--solid">
            Start a Project
          </a>
          <button type="button" className="btn btn--ghost" onClick={goProjects}>
            View Work
          </button>
        </div>
      </div>
    </section>
  );
}
