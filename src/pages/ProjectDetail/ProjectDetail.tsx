import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="project-detail-page">
      <div className="detail-container">
        
        <Link to="/" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </Link>
        
        <div className="detail-hero">
          <div className="hero-text">
            <h1>{project.title}</h1>
            <h2>{project.subtitle}</h2>
            <div className="tech-stack">
              {project.platforms.icons.map((icon, i) => (
                <FontAwesomeIcon key={i} icon={icon} className="tech-icon" title={project.platforms.text} />
              ))}
              {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
            </div>
          </div>
        </div>

        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {project.images.map((img, idx) => (
              <div key={idx} className="carousel-slide">
                <img src={img} alt={`${project.title} screenshot ${idx + 1}`} />
                <div className="slide-overlay"></div>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className="carousel-indicators">
            {project.images.map((_, idx) => (
              <button 
                key={idx} 
                className={`indicator ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>

        <div className="detail-body">
          <div className="description-card">
            <h3>Project Overview</h3>
            <p>{project.description}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectDetail;
