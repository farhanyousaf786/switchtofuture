import './Experience.css';

interface TimelineItemProps {
  org: string;
  period: string;
  desc: string;
  direction: 'l' | 'r';
}

const TimelineItem = ({ org, period, desc, direction }: TimelineItemProps) => (
  <div className={`timeline-item ${direction}`}>
    <div className="timeline-date">{period}</div>
    <div className="timeline-content">
      <div className="timeline-dot"></div>
      <div className="content-card">
        <h3>{org}</h3>
        <p>{desc}</p>
      </div>
    </div>
  </div>
);

const ExperienceTimeline = () => {
  const experiences: TimelineItemProps[] = [
    {
      org: 'Maxsip Telecom',
      period: 'Mar 2022 - Apr 2025',
      desc: 'Led mobile/web app development. 1M+ users. Payments, video calls, internal tools.',
      direction: 'l'
    },
    {
      org: 'Chirp-tech',
      period: 'May 2019 - Dec 2021',
      desc: 'Built React apps, integrated Firebase/APIs, optimized cloud costs.',
      direction: 'r'
    },
    {
      org: 'E-tech Lounge',
      period: 'Jun 2017 - Oct 2018',
      desc: 'Front-end support, React UI building, agile collaboration.',
      direction: 'l'
    }
  ];

  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
