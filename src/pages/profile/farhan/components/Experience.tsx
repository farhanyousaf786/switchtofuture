import { Work, Close } from '@mui/icons-material';
import { useState, MouseEvent } from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-size: min(2rem, 4vw);
  width: 100%;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 3.5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

const ExperienceCard = styled.div`
  position: relative;
  width: 220px;
  min-width: 220px;
  padding: 1.2rem;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }

  &::after {
    content: '→';
    position: absolute;
    right: -2.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--accent-color);
    font-size: 2rem;
    font-weight: bold;
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    padding: 1rem;
    font-size: 0.9rem;

    &::after {
      display: none;
    }
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin: 0 0 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ExperienceSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0 0 0.5rem;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ExperiencePeriod = styled.p`
  font-size: 0.9rem;
  color: var(--text-tertiary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const ExperienceModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
    font-size: 0.95rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    &:before {
      content: "•";
      color: var(--accent-color);
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <ExperienceSection>
      <Title><Work /> WORKED AT</Title>
      <Timeline>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} onClick={() => setSelectedExp(exp)}>
            <ExperienceTitle>{exp.company}</ExperienceTitle>
            <ExperiencePeriod>{exp.period}</ExperiencePeriod>
          </ExperienceCard>
        ))}
      </Timeline>

      {selectedExp && (
        <ExperienceModal isOpen={true} onClick={() => setSelectedExp(null)}>
          <ModalContent onClick={(e: MouseEvent) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedExp(null)}>
              <Close />
            </CloseButton>
            <ExperienceTitle>{selectedExp.title}</ExperienceTitle>
            <ExperienceSubtitle>{selectedExp.company}</ExperienceSubtitle>
            <ExperiencePeriod>{selectedExp.period}</ExperiencePeriod>
            
            <ExperienceSubtitle style={{ marginTop: '1.5rem', color: 'var(--accent-color)' }}>Key Achievements</ExperienceSubtitle>
            <AchievementsList>
              {selectedExp.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </AchievementsList>
          </ModalContent>
        </ExperienceModal>
      )}
    </ExperienceSection>
  );
};

export default Experience;
