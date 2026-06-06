import { Link } from 'react-router-dom';
import { team } from '../../data/team';
import './Company.css';

const stats = [
  { val: '5+',   label: 'Years of experience' },
  { val: '50+',  label: 'Projects delivered'  },
  { val: '1M+',  label: 'End users reached'   },
  { val: '100%', label: 'Remote-friendly'      },
];

export default function CompanyPage() {
  return (
    <main className="cb-main">

      <section className="cb-page-hero">
        <div className="cb-wrapper">
          <p className="cb-page-hero__tag">Who we are</p>
          <h1 className="cb-page-hero__title">We are Switch<br />to Future</h1>
          <p className="cb-page-hero__sub">A small team with a big vision</p>
        </div>
      </section>

      {/* About */}
      <section className="cb-about">
        <div className="cb-wrapper">
          <div className="cb-about__grid">
            <div className="cb-about__text">
              <h2 className="cb-about__heading">We don't<br />follow formulas.</h2>
              <p>Switch to Future is a digital design and development agency founded on the belief that great software starts with deep thinking. We work with startups and growing companies to build mobile apps, web platforms, and AI-powered tools that people love.</p>
              <p>Every project is a collaboration. We embed ourselves in your problem space, challenge assumptions, and build things that last.</p>
            </div>
            <div className="cb-stats">
              {stats.map(s => (
                <div key={s.label} className="cb-stat">
                  <span className="cb-stat__val">{s.val}</span>
                  <span className="cb-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="cb-team">
        <div className="cb-wrapper">
          <h2 className="cb-team__heading">Meet the team</h2>
          <div className="cb-team__grid">
            {team.map(m => (
              <div key={m.id} className="cb-member">
                <div className="cb-member__img-wrap">
                  <img src={m.image} alt={m.name} className="cb-member__img" />
                </div>
                <h3 className="cb-member__name">{m.name}</h3>
                <p className="cb-member__role">{m.role}</p>
                <p className="cb-member__bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cb-cta">
        <div className="cb-wrapper">
          <p className="cb-cta__label">Start a project</p>
          <h2 className="cb-cta__heading">Have an idea?</h2>
          <Link to="/contact" className="cb-cta__link">Tell us ↗</Link>
        </div>
      </section>

    </main>
  );
}
