import { PROJECTS } from '../data/site';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <header className="section__head">
          <p className="chip">Portfolio</p>
          <h2>Selected projects</h2>
        </header>

        <div className="projects__list">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="proj">
              <span className="proj__index">{String(i + 1).padStart(2, '0')}</span>
              <div className="proj__body">
                <div className="proj__top">
                  <span className="proj__cat">{p.category}</span>
                  <span className="proj__tag">{p.tag}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
