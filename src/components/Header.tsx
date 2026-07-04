import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/icon.png';
import { NAV } from '../data/site';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--hdr-h'),
      10,
    ) + 16;

    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`hdr ${scrolled ? 'hdr--scrolled' : ''}`}>
        <div className="hdr__bar">
          <button type="button" className="hdr__brand" onClick={() => go('home')}>
            <img src={logo} alt="" className="hdr__logo" />
            <span className="hdr__name">Switch to Future</span>
          </button>

          <nav className="hdr__nav hdr__nav--desktop" aria-label="Main">
            {NAV.map(({ id, label }) => (
              <button key={id} type="button" className="hdr__link" onClick={() => go(id)}>
                {label}
              </button>
            ))}
          </nav>

          <div className="hdr__tools">
            <button
              type="button"
              className={`hdr__theme ${theme === 'dark' ? 'hdr__theme--dark' : ''}`}
              onClick={toggle}
              aria-label="Toggle theme"
            >
              <FaSun className="hdr__theme-sun" />
              <FaMoon className="hdr__theme-moon" />
              <span className="hdr__theme-knob" />
            </button>
            <button
              type="button"
              className="hdr__burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`hdr__backdrop ${open ? 'hdr__backdrop--open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside className={`hdr__drawer ${open ? 'hdr__drawer--open' : ''}`} aria-hidden={!open}>
        <div className="hdr__drawer-top">
          <button type="button" className="hdr__brand" onClick={() => go('home')}>
            <img src={logo} alt="" className="hdr__logo" />
            <span className="hdr__drawer-title">Switch to Future</span>
          </button>
          <button type="button" className="hdr__drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>

        <nav className="hdr__drawer-nav" aria-label="Mobile">
          {NAV.map(({ id, label }) => (
            <button key={id} type="button" className="hdr__drawer-link" onClick={() => go(id)}>
              {label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
