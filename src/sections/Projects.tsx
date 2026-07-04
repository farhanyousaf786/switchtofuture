import { useCallback, useEffect, useState } from 'react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';
import { PROJECTS } from '../data/site';
import type { Project } from '../data/site';

const INITIAL_COUNT = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);

  const openDetail = useCallback((project: Project) => {
    setSelected(project);
  }, []);

  const closeDetail = useCallback(() => {
    setSelected(null);
  }, []);

  useEffect(() => {
    if (!selected) return undefined;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDetail();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected, closeDetail]);

  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <header className="section__head">
          <p className="chip">Portfolio</p>
          <h2>Selected projects</h2>
          <p className="projects__lead">
            Product work across mobile, web, AI, and cloud — tap a project for the full story.
          </p>
        </header>

        <div className="projects__list">
          {visible.map((project, index) => (
            <article
              key={project.title}
              className="proj"
              onClick={() => openDetail(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openDetail(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
            >
              <span className="proj__index">{String(index + 1).padStart(2, '0')}</span>
              <div className="proj__body">
                <div className="proj__top">
                  <span className="proj__cat">{project.category}</span>
                  <span className="proj__tag">{project.tag}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              <button
                type="button"
                className="proj__detail"
                onClick={(event) => {
                  event.stopPropagation();
                  openDetail(project);
                }}
              >
                Details
                <FaArrowRight aria-hidden />
              </button>
            </article>
          ))}
        </div>

        {PROJECTS.length > INITIAL_COUNT && (
          <div className="projects__footer">
            <button
              type="button"
              className="btn btn--ghost projects__toggle"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? 'Show less' : `Show all ${PROJECTS.length} projects`}
            </button>
          </div>
        )}
      </div>

      {selected && (
        <div className="proj-modal" role="dialog" aria-modal="true" aria-labelledby="proj-modal-title">
          <button type="button" className="proj-modal__backdrop" onClick={closeDetail} aria-label="Close dialog" />
          <div className="proj-modal__panel">
            <button type="button" className="proj-modal__close" onClick={closeDetail} aria-label="Close">
              <FaTimes />
            </button>

            <div className="proj-modal__top">
              <span className="proj__cat">{selected.category}</span>
              <span className="proj__tag">{selected.tag}</span>
            </div>

            <h3 id="proj-modal-title">{selected.title}</h3>
            <p className="proj-modal__desc">{selected.detail}</p>

            <div className="proj-modal__features">
              <p className="proj-modal__label">Key deliverables</p>
              <ul>
                {selected.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
