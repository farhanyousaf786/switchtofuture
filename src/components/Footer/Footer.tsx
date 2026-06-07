import { Link } from 'react-router-dom';
import './Footer.css';

const nav = [
  { label: 'Services',  to: '/services' },
  { label: 'Projects',  to: '/projects' },
  { label: 'Company',   to: '/company'  },
  { label: 'Blog',      to: '/blog'     },
  { label: 'Careers',   to: '/careers'  },
  { label: 'Contacts',  to: '/contact'  },
];

export default function Footer() {
  return (
    <footer className="cb-footer">
      <div className="cb-wrapper">
        <div className="cb-footer__grid">

          <div className="cb-footer__left">
            <div className="cb-footer__location">
              <a href="mailto:hello@switchtofuture.com" className="cb-footer__email">
                hello@switchtofuture.com
              </a>
              <p className="cb-footer__office-label">MAIN OFFICE</p>
              <p className="cb-footer__address">901 N Pitt Street<br />Alexandria, VA 22314</p>
            </div>
            <div className="cb-footer__location">
              <p className="cb-footer__office-label">REMOTE</p>
              <p className="cb-footer__address">Worldwide</p>
            </div>
          </div>

          <div className="cb-footer__right">
            <nav className="cb-footer__nav">
              {nav.map(n => (
                <Link key={n.to} to={n.to} className="cb-footer__nav-link">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        <div className="cb-footer__bottom">
          <span>© {new Date().getFullYear()} Switch to Future</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
