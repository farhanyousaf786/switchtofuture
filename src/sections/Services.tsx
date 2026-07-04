import { SERVICES, TECH } from '../data/site';

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="wrap">
        <header className="section__head">
          <p className="chip">Services</p>
          <h2>What we build</h2>
        </header>

        <div className="bento">
          {SERVICES.map((s) => (
            <article key={s.title} className={`bento__cell bento__cell--${s.span}`}>
              <span className="bento__icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="marquee">
          <div className="marquee__track">
            {[...TECH, ...TECH].map((t, i) => (
              <span key={`${t}-${i}`} className="marquee__item">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
