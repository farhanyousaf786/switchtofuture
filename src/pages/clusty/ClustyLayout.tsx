import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CONTACT_EMAIL } from '@/data/site';
import logo from '../../assets/icon.png';
import './clusty.css';

const NAV = [
  { to: '/clusty', label: 'Home', end: true },
  { to: '/clusty/privacy-policy', label: 'Privacy' },
  { to: '/clusty/terms-and-conditions', label: 'Terms' },
] as const;

export default function ClustyLayout() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="clusty">
      <header className="clusty-hdr">
        <div className="clusty-wrap clusty-hdr__inner">
          <Link to="/clusty" className="clusty-hdr__brand" onClick={() => setOpen(false)}>
            <img src={logo} alt="" className="clusty-hdr__logo" />
            <span>Clusty</span>
          </Link>

          <nav className="clusty-hdr__nav clusty-hdr__nav--desktop" aria-label="Clusty">
            {NAV.map(({ to, label, ...rest }) => (
              <NavLink
                key={to}
                to={to}
                end={'end' in rest ? rest.end : false}
                className={({ isActive }) =>
                  `clusty-hdr__link${isActive ? ' clusty-hdr__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="clusty-hdr__burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </header>

      <div
        className={`clusty-hdr__backdrop ${open ? 'clusty-hdr__backdrop--open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside className={`clusty-hdr__drawer ${open ? 'clusty-hdr__drawer--open' : ''}`} aria-hidden={!open}>
        <div className="clusty-hdr__drawer-top">
          <Link to="/clusty" className="clusty-hdr__brand" onClick={() => setOpen(false)}>
            <img src={logo} alt="" className="clusty-hdr__logo" />
            <span>Clusty</span>
          </Link>
          <button
            type="button"
            className="clusty-hdr__drawer-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="clusty-hdr__drawer-nav" aria-label="Clusty mobile">
          <NavLink
            to="/clusty"
            end
            className={({ isActive }) =>
              `clusty-hdr__drawer-link${isActive ? ' clusty-hdr__drawer-link--active' : ''}`
            }
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/clusty/privacy-policy"
            className={({ isActive }) =>
              `clusty-hdr__drawer-link${isActive ? ' clusty-hdr__drawer-link--active' : ''}`
            }
            onClick={() => setOpen(false)}
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/clusty/terms-and-conditions"
            className={({ isActive }) =>
              `clusty-hdr__drawer-link${isActive ? ' clusty-hdr__drawer-link--active' : ''}`
            }
            onClick={() => setOpen(false)}
          >
            Terms &amp; Conditions
          </NavLink>
        </nav>
      </aside>

      <Outlet />

      <footer className="clusty-ftr">
        <div className="clusty-wrap clusty-ftr__inner">
          <p>© {new Date().getFullYear()} Clusty · A product of SwitchToFuture</p>
          <div className="clusty-ftr__links">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <Link to="/clusty/privacy-policy">Privacy</Link>
            <Link to="/clusty/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
