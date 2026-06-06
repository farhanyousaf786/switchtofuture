import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import './Services.css';

const benefits = [
  { icon: '01', title: 'Time-zone friendly', text: 'We work with clients worldwide and adapt to your schedule with no friction.' },
  { icon: '02', title: 'No shortcuts',       text: 'Quality without compromise — we never simplify at the expense of the product.' },
  { icon: '03', title: 'Flexible models',    text: 'Fixed budget or Time & Materials — choose what works for your project.' },
  { icon: '04', title: 'End-to-end',         text: 'From strategy and design to launch and support — we own the whole thing.' },
];

export default function ServicesPage() {
  return (
    <main className="cb-main">

      <section className="cb-page-hero">
        <div className="cb-wrapper">
          <p className="cb-page-hero__tag">What we do</p>
          <h1 className="cb-page-hero__title">Our services</h1>
          <p className="cb-page-hero__sub">Going beyond what's possible</p>
        </div>
      </section>

      <section className="cb-svc-list">
        <div className="cb-wrapper">
          {services.map((s, i) => (
            <div key={s.id} id={s.slug} className="cb-svc-item">
              <div className="cb-svc-item__num">0{i + 1}</div>
              <div className="cb-svc-item__body">
                <h2 className="cb-svc-item__title">{s.title}</h2>
                <p className="cb-svc-item__desc">{s.description}</p>
                <ul className="cb-svc-item__bullets">
                  {s.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <Link to="/contact" className="cb-btn-outline">Start a project ↗</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cb-benefits">
        <div className="cb-wrapper">
          <h2 className="cb-benefits__title">Why Switch to Future</h2>
          <div className="cb-benefits__grid">
            {benefits.map(b => (
              <div key={b.title} className="cb-benefit">
                <span className="cb-benefit__num">{b.icon}</span>
                <h3 className="cb-benefit__title">{b.title}</h3>
                <p className="cb-benefit__text">{b.text}</p>
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
