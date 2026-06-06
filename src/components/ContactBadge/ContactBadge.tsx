import { Link } from 'react-router-dom';
import './ContactBadge.css';

const TEXT = 'contact · contact · contact · contact · ';

export default function ContactBadge() {
  return (
    <Link to="/contact" className="cb-badge" aria-label="Contact us">
      <svg className="cb-badge__ring" viewBox="0 0 120 120">
        <path id="circle" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
        <text className="cb-badge__text">
          <textPath href="#circle" startOffset="0%">{TEXT}</textPath>
        </text>
      </svg>
      <span className="cb-badge__inner">✦</span>
    </Link>
  );
}
