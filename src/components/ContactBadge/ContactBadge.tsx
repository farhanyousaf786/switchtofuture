import { Link } from 'react-router-dom';
import './ContactBadge.css';

// 5 repetitions + textLength forces even distribution around the full 360°
const TEXT = 'contact · contact · contact · contact · contact · ';

// Circumference of r=63 circle ≈ 395.8 SVG units
const PATH_LENGTH = 395.8;

export default function ContactBadge() {
  return (
    <Link to="/contact" className="cb-badge" aria-label="Contact us">

      {/* Spinning text ring */}
      <svg className="cb-badge__ring" viewBox="0 0 150 150" aria-hidden="true">
        <path
          id="cb-circle-path"
          d="M 75,75 m -63,0 a 63,63 0 1,1 126,0 a 63,63 0 1,1 -126,0"
          fill="none"
        />
        <text className="cb-badge__text">
          {/* textLength stretches the text to fill the entire circumference */}
          <textPath href="#cb-circle-path" startOffset="0%" textLength={PATH_LENGTH}>
            {TEXT}
          </textPath>
        </text>
      </svg>

      {/* Avatar — Cuberto's intouch animated 3D character video */}
      <span className="cb-badge__inner">
        <video
          className="cb-badge__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/videos/intouch.mp4" type="video/mp4" />
        </video>
      </span>

    </Link>
  );
}
