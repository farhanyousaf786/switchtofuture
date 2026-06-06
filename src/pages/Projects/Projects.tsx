import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, type Project } from '../../data/projects';
import './Projects.css';

type Filter = 'all' | 'websites' | 'applications' | 'ai' | 'branding';

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All projects',    value: 'all'          },
  { label: 'Websites',        value: 'websites'     },
  { label: 'Applications',    value: 'applications' },
  { label: 'AI',              value: 'ai'           },
  { label: 'Branding',        value: 'branding'     },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>('all');
  const list = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <main className="cb-main">

      <section className="cb-page-hero">
        <div className="cb-wrapper">
          <p className="cb-page-hero__tag">Our work</p>
          <h1 className="cb-page-hero__title">Projects</h1>
          <p className="cb-page-hero__sub">{projects.length} projects delivered</p>
        </div>
      </section>

      <section className="cb-proj-section">
        <div className="cb-wrapper">
          <div className="cb-proj-filters">
            {FILTERS.map(f => (
              <button
                key={f.value}
                className={`cb-proj-filter${active === f.value ? ' -active' : ''}`}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="cb-proj-grid">
            {list.map(p => (
              <Link to={p.link} key={p.id} className="cb-card">
                <div className="cb-card__preview">
                  <img src={p.image} alt={p.title} className="cb-card__img" />
                </div>
                <p className="cb-card__caption">{p.subtitle}</p>
                <h3 className="cb-card__title">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cb-cta">
        <div className="cb-wrapper">
          <p className="cb-cta__label">Start a project</p>
          <h2 className="cb-cta__heading">Have an idea?</h2>
          <Link to="/contact" className="cb-cta__link">Tell us ↗</Link>
        </div>
      </section>

    </main>
  );
}
