import { Link } from 'react-router-dom';
import './Footer.css';

const socials = [
  { label: 'Instagram', url: 'https://instagram.com' },
  { label: 'LinkedIn',  url: 'https://linkedin.com'  },
  { label: 'GitHub',    url: 'https://github.com'    },
  { label: 'Dribbble',  url: 'https://dribbble.com'  },
  { label: 'Behance',   url: 'https://behance.net'   },
];

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

        {/* Top: email CTA */}
        <div className="cb-footer__top">
          <p className="cb-footer__label">Get in touch</p>
          <a href="mailto:hello@switchtofuture.com" className="cb-footer__email">
            hello@switchtofuture.com
          </a>
        </div>

        {/* Middle grid */}
        <div className="cb-footer__grid">
          <div className="cb-footer__col">
            <p className="cb-footer__col-title">Navigation</p>
            <ul>
              {nav.map(n => (
                <li key={n.to}>
                  <Link to={n.to} className="cb-footer__nav-link">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="cb-footer__col">
            <p className="cb-footer__col-title">Offices</p>
            <address>
              <p>901 N Pitt Street<br />Alexandria, VA 22314</p>
              <p>Remote — Worldwide</p>
            </address>
          </div>

          <div className="cb-footer__col">
            <p className="cb-footer__col-title">Follow us</p>
            <ul className="cb-footer__socials">
              {socials.map(s => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="cb-footer__social-link">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="cb-footer__bottom">
          <span>© {new Date().getFullYear()} Switch to Future</span>
          <span>Privacy Policy</span>
        </div>

      </div>
    </footer>
  );
}
