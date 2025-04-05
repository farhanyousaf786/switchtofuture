import { Code, Close } from '@mui/icons-material';
import { useState, MouseEvent } from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  position: relative;
  z-index: 1;
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
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background: var(--card-bg);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectLogo = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: -30px;
  left: 20px;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid var(--card-bg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 8px;
  }
`;

interface ProjectContentProps {
  hasLogo?: boolean;
}

const ProjectContent = styled.div<ProjectContentProps>`
  padding: 2rem;
  padding-top: ${props => props.hasLogo ? '2.5rem' : '2rem'};
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

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: center;
`;

const Button = styled.button`
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: min(0.9rem, 2.5vw);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
  max-width: 150px;

  &:hover {
    background: var(--accent-color-dark);
    transform: translateY(-2px);
  }

  &.outline {
    background: transparent;
    border: 1px solid var(--accent-color);
    color: var(--accent-color);

    &:hover {
      background: var(--accent-color);
      color: white;
    }
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
  z-index: 9999;
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
  logo?: string;
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
                {project.logo && (
                  <ProjectLogo>
                    <img src={project.logo} alt={`${project.title} logo`} />
                  </ProjectLogo>
                )}
              </ProjectImage>
            )}
            <ProjectContent hasLogo={Boolean(project.logo)}>
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
              <ButtonsContainer>
                <Button onClick={() => setSelectedProject(project)}>
                  <span>Achievements</span>
                </Button>
                {project.link && (
                  <Button 
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline"
                  >
                    <span>View Project</span>
                  </Button>
                )}
              </ButtonsContainer>
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
                {selectedProject.logo && (
                  <ProjectLogo style={{ width: '80px', height: '80px', bottom: '-40px' }}>
                    <img src={selectedProject.logo} alt={`${selectedProject.title} logo`} />
                  </ProjectLogo>
                )}
              </ModalImage>
            )}

            <ProjectTitle style={{ marginTop: selectedProject.logo ? '1rem' : 0 }}>
              {selectedProject.title}
            </ProjectTitle>
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
