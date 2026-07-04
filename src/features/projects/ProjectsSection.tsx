import { useMemo, useState } from 'react';
import CategoryFilter from './components/CategoryFilter';
import ProjectCard from './components/ProjectCard';
import { filterProjects } from './data';
import type { ProjectCategory } from './types';
import './projects.css';

type FilterValue = ProjectCategory | 'All';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('All');

  const visibleProjects = useMemo(
    () => filterProjects(activeCategory),
    [activeCategory]
  );

  return (
    <section id="projects" className="projects landing-section">
      <div className="landing-section__container">
        <p className="projects__eyebrow">Portfolio</p>
        <h2 className="landing-section__title">Our Projects</h2>
        <p className="landing-section__subtitle">
          Real products we've shipped — from mobile apps to AI-powered platforms.
        </p>

        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        <div className="projects__grid" key={activeCategory}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="projects__empty">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
