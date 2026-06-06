import { useState } from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../../data/careers';
import './Careers.css';

export default function CareersPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="cb-main">

      <section className="cb-page-hero">
        <div className="cb-wrapper">
          <p className="cb-page-hero__tag">Join us</p>
          <h1 className="cb-page-hero__title">Careers</h1>
          <p className="cb-page-hero__sub">Work on products that matter</p>
        </div>
      </section>

      <section className="cb-careers-intro">
        <div className="cb-wrapper">
          <div className="cb-careers-intro__grid">
            <h2 className="cb-careers-intro__heading">
              Build great products<br />with great people.
            </h2>
            <div className="cb-careers-intro__body">
              <p>We're a small, fully remote team that cares deeply about craft. If you obsess over details, love hard problems, and want to work on real products used by real people — let's talk.</p>
              <div className="cb-careers-perks">
                {['100% Remote', 'Flexible hours', 'Competitive pay', 'Real products'].map(p => (
                  <span key={p} className="cb-perk">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cb-jobs">
        <div className="cb-wrapper">
          <h2 className="cb-jobs__heading">Open positions</h2>
          <div className="cb-jobs__list">
            {jobs.map(job => (
              <div key={job.id} className={`cb-job${open === job.id ? ' -open' : ''}`}>
                <button className="cb-job__header" onClick={() => setOpen(open === job.id ? null : job.id)}>
                  <div>
                    <h3 className="cb-job__title">{job.title}</h3>
                    <p className="cb-job__meta">{job.department} · {job.location} · {job.type}</p>
                  </div>
                  <span className="cb-job__icon">{open === job.id ? '−' : '+'}</span>
                </button>
                {open === job.id && (
                  <div className="cb-job__body">
                    <p className="cb-job__desc">{job.description}</p>
                    <h4 className="cb-job__req-title">Requirements</h4>
                    <ul className="cb-job__reqs">
                      {job.requirements.map(r => <li key={r}>{r}</li>)}
                    </ul>
                    <a href={`mailto:hello@switchtofuture.com?subject=Application: ${job.title}`} className="cb-btn-apply">
                      Apply for this role ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cb-cta">
        <div className="cb-wrapper">
          <p className="cb-cta__label">Work with us</p>
          <h2 className="cb-cta__heading">No open roles?</h2>
          <a href="mailto:hello@switchtofuture.com" className="cb-cta__link">Drop us a line ↗</a>
        </div>
      </section>

    </main>
  );
}
