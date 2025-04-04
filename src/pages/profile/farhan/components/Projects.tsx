import { Code, Close } from '@mui/icons-material';
import { useState, MouseEvent } from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 2rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-size: min(2rem, 4vw);
  width: 100%;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

const ProjectCard = styled.div`
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: min(1.3rem, 3vw);
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: min(1rem, 2.5vw);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(0, 112, 243, 0.1);
  color: var(--accent-color);
  border-radius: 12px;
  font-size: min(0.9rem, 2.5vw);
`;

const ViewDetailsButton = styled.button`
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: min(0.9rem, 2.5vw);
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: var(--accent-color-dark);
    transform: translateY(-2px);
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--accent-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: min(0.9rem, 2.5vw);
  transition: background 0.2s ease;

  &:hover {
    background: var(--accent-color-dark);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
`;

const ModalImage = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AchievementsList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  margin-top: 1rem;
  color: var(--text-secondary);

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

export interface ProjectItem {
  title: string;
  description?: string;
  company?: string;
  subtitle?: string;
  technologies: string[];
  link?: string;
  image?: string;
  achievements?: string[];
  status?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <ProjectsSection>
      <Title><Code /> PROJECTS</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            {project.image && (
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
            )}
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              {project.subtitle && (
                <ProjectDescription>{project.subtitle}</ProjectDescription>
              )}
              <TechStack>
                {project.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>
              {project.company && (
                <ProjectDescription>Company: {project.company}</ProjectDescription>
              )}
              <ViewDetailsButton onClick={() => setSelectedProject(project)}>
                <span>View Details</span>
                <Code fontSize="small" />
              </ViewDetailsButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {selectedProject && (
        <ModalOverlay onClick={() => setSelectedProject(null)}>
          <ModalContent onClick={(e: MouseEvent) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedProject(null)}>
              <Close />
            </CloseButton>
            
            {selectedProject.image && (
              <ModalImage>
                <img src={selectedProject.image} alt={selectedProject.title} />
              </ModalImage>
            )}

            <ProjectTitle>{selectedProject.title}</ProjectTitle>
            {selectedProject.subtitle && (
              <ProjectDescription>{selectedProject.subtitle}</ProjectDescription>
            )}
            {selectedProject.company && (
              <ProjectDescription>Company: {selectedProject.company}</ProjectDescription>
            )}
            
            <TechStack>
              {selectedProject.technologies.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </TechStack>

            {selectedProject.achievements && (
              <>
                <ProjectTitle style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>
                  Key Achievements
                </ProjectTitle>
                <AchievementsList>
                  {selectedProject.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </AchievementsList>
              </>
            )}

            {selectedProject.link && (
              <ProjectLink 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </ProjectLink>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </ProjectsSection>
  );
};

export default Projects;
