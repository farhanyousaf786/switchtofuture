import { Link } from 'react-router-dom';
import './OutroCTA.css';

export default function OutroCTA() {
  return (
    <section className="outro">
      {/* Ropes video background */}
      <div className="outro__bg" aria-hidden="true">
        <video autoPlay muted loop playsInline>
          <source src="/assets/videos/ropes.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="cb-wrapper">
        <div className="outro__inner">
          <div className="outro__header">Have<br />an idea?</div>
          <Link to="/contact" className="outro__cta">
            <span className="outro__cta-border" />
            <span className="outro__cta-ripple"><span /></span>
            <span className="outro__cta-label"><span data-text="TELL US">TELL US</span></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
