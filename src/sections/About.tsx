import logo from '../assets/icon.png';
import { CONTACT_EMAIL } from '../data/site';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap about__layout">
        <div className="about__visual">
          <div className="about__ring">
            <img src={logo} alt="Switch to Future" />
          </div>
        </div>
        <div className="about__copy">
          <p className="chip">About us</p>
          <h2>Switch to Future</h2>
          <p>
            We&apos;re a NYC-based studio led by engineers and designers who care about
            craft. We partner with startups and teams to turn ambitious ideas into
            products people actually use — mobile, web, and AI.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn--solid">
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
