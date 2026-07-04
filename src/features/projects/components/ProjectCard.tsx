import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { Project, Platform } from '../types';

const PLATFORM_ICONS: Record<Platform, typeof faApple> = {
  ios: faApple,
  android: faAndroid,
  web: faChrome,
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
    <div className="project-card__media">
      <img
        src={project.images[0]}
        alt={project.title}
        className="project-card__image"
        loading="lazy"
      />
      <div className="project-card__media-overlay" />
      <span className="project-card__category">{project.category}</span>
      {project.featured && <span className="project-card__badge">Featured</span>}
    </div>

    <div className="project-card__body">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <span className="project-card__subtitle">{project.subtitle}</span>
      </div>

      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card__tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-card__footer">
        <div className="project-card__platforms" aria-label="Supported platforms">
          {project.platforms.map((platform) => (
            <FontAwesomeIcon key={platform} icon={PLATFORM_ICONS[platform]} />
          ))}
        </div>
        <Link to={`/projects/${project.slug}`} className="project-card__link">
          View Project
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  </article>
);

export default ProjectCard;
