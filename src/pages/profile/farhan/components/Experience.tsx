import { Work, Close } from '@mui/icons-material';
import { useState, MouseEvent } from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 0.5rem 0;
  position: relative;
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
  padding: 0 2rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  gap: 3.5rem;
  padding-bottom: 1rem;
  justify-content: center;
  z-index: 1;
`;

const ExperienceCard = styled.div`
  position: relative;
  width: 250px;
  min-width: 250px;
  padding: 1.2rem;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &::after {
    content: '←';
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
`;

const CardHeader = styled.div`
  h3 {
    font-size: min(1.2rem, 3vw);
    color: var(--text-primary);
    margin-bottom: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Period = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(0, 112, 243, 0.1);
  color: var(--accent-color);
  border-radius: 12px;
  font-size: min(0.9rem, 2.5vw);
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
  width: 500px;
  max-width: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
            <CardHeader>
              <h3>{exp.company}</h3>
              <Period>{exp.period}</Period>
            </CardHeader>
          </ExperienceCard>
        ))}
      </Timeline>

      {selectedExp && (
        <ModalOverlay onClick={() => setSelectedExp(null)}>
          <ModalContent onClick={(e: MouseEvent) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedExp(null)}>
              <Close />
            </CloseButton>
            <h3>{selectedExp.company}</h3>
            <h4>{selectedExp.title}</h4>
            <Period>{selectedExp.period}</Period>
            <AchievementsList>
              {selectedExp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </AchievementsList>
          </ModalContent>
        </ModalOverlay>
      )}
    </ExperienceSection>
  );
};

export default Experience;
