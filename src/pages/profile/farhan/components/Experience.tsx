import { Work, Close } from '@mui/icons-material';
import { useState } from 'react';
import './Experience.css';

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
    <section className="experience-section">
      <h2><Work /> RELEVANT EXPERIENCE</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} 
               className="experience-item"
               onClick={() => setSelectedExp(exp)}>
            <div className="experience-header">
              <h3>{exp.company}</h3>
              <span className="period">{exp.period}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedExp && (
        <div className="modal-overlay" onClick={() => setSelectedExp(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedExp(null)}>
              <Close />
            </button>
            <h3>{selectedExp.company}</h3>
            <h4>{selectedExp.title}</h4>
            <span className="period">{selectedExp.period}</span>
            <ul className="achievements-list">
              {selectedExp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
