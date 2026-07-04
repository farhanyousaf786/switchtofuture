import { FaMobileAlt, FaGlobe, FaRobot, FaCloud } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { SERVICES, TECH } from '../data/site';
import type { ServiceIcon } from '../data/site';

const SERVICE_ICONS: Record<ServiceIcon, IconType> = {
  mobile: FaMobileAlt,
  web: FaGlobe,
  ai: FaRobot,
  cloud: FaCloud,
};

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="wrap">
        <header className="section__head">
          <p className="chip">Services</p>
          <h2>What we build</h2>
          <p className="services__lead">
            End-to-end product development across mobile, web, AI, and cloud.
          </p>
        </header>

        <div className="bento">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <article key={s.title} className={`bento__cell bento__cell--${s.span}`}>
                <div className="bento__icon-wrap" aria-hidden>
                  <Icon />
                </div>
                <div className="bento__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </article>
            );
          })}
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
