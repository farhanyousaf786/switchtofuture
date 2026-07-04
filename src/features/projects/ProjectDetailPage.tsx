import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getProjectBySlug } from './data';
import type { Platform } from './types';
import './ProjectDetailPage.css';

const PLATFORM_ICONS = {
  ios: faApple,
  android: faAndroid,
  web: faChrome,
} as const;

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) return <Navigate to="/" replace />;

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <div className="project-detail">
      <div className="project-detail__container">
        <Link to="/#projects" className="project-detail__back">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Projects
        </Link>

        <header className="project-detail__hero">
          <span className="project-detail__category">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="project-detail__subtitle">{project.subtitle}</p>
          <div className="project-detail__meta">
            {project.platforms.map((p: Platform) => (
              <FontAwesomeIcon key={p} icon={PLATFORM_ICONS[p]} />
            ))}
            {project.tags.map((tag) => (
              <span key={tag} className="project-detail__tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className="project-detail__carousel">
          <div
            className="project-detail__track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {project.images.map((img, idx) => (
              <div key={idx} className="project-detail__slide">
                <img src={img} alt={`${project.title} screenshot ${idx + 1}`} />
              </div>
            ))}
          </div>

          {project.images.length > 1 && (
            <>
              <button type="button" className="project-detail__nav project-detail__nav--prev" onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button type="button" className="project-detail__nav project-detail__nav--next" onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <div className="project-detail__dots">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`project-detail__dot ${idx === currentSlide ? 'project-detail__dot--active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="project-detail__body">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
