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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`hdr ${scrolled ? 'hdr--scrolled' : ''}`}>
      <div className="hdr__bar">
        <button type="button" className="hdr__brand" onClick={() => go('home')}>
          <img src={logo} alt="" className="hdr__logo" />
          <span className="hdr__name">Switch to Future</span>
        </button>

        <nav className={`hdr__nav ${open ? 'hdr__nav--open' : ''}`}>
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
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
