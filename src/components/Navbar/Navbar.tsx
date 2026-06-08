import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV = [
  { label: 'Services',  to: '/services' },
  { label: 'Projects',  to: '/projects' },
  { label: 'Company',   to: '/company'  },
  { label: 'Blog',      to: '/blog'     },
  { label: 'Careers',   to: '/careers'  },
  { label: 'Contacts',  to: '/contact'  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Hide on scroll-down, show on scroll-up
  useEffect(() => {
    const onScroll = () => {
      if (open) return;                          // never hide while menu is open
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 80) {
        setHidden(true);                         // scrolling down → hide
      } else {
        setHidden(false);                        // scrolling up / near top → show
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  return (
    <nav ref={navRef} className={`cb-navbar${open ? ' -open' : ''}${hidden ? ' -hidden' : ''}`}>
      <div className="cb-wrapper cb-navbar__inner">
        {/* Logo */}
        <Link to="/" className="cb-navbar__logo" aria-label="Switch to Future">
          switch to future
        </Link>

        {/* Desktop links */}
        <ul className="cb-navbar__nav">
          {NAV.map(n => (
            <li key={n.to}>
              <Link
                to={n.to}
                className={`cb-navbar__link${location.pathname.startsWith(n.to) ? ' -active' : ''}`}
              >
                <span className="cb-navbar__link-inner" data-text={n.label}>{n.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="cb-navbar__toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="cb-navbar__toggle-label">{open ? 'Close' : 'Menu'}</span>
          <span className="cb-navbar__toggle-icon">
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <div className="cb-navbar__menu">
        <div className="cb-wrapper cb-navbar__menu-inner">
          <ul className="cb-navbar__menu-list">
            {NAV.map(n => (
              <li key={n.to}>
                <Link to={n.to} className="cb-navbar__menu-link">{n.label}</Link>
              </li>
            ))}
          </ul>
          <a href="mailto:hello@switchtofuture.com" className="cb-navbar__menu-email">
            hello@switchtofuture.com
          </a>
        </div>
      </div>
    </nav>
  );
}
