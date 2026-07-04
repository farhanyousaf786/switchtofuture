import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';
import logo from '../../assets/icon.png';

const NAV_ITEMS = ['home', 'services', 'projects', 'team', 'about'] as const;

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const triggerPoint = window.innerHeight * 0.35;
      const current = NAV_ITEMS.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const { top, bottom } = element.getBoundingClientRect();
        return top <= triggerPoint && bottom >= triggerPoint;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a
          className="site-header__brand"
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          <img src={logo} alt="Switch to Future" className="site-header__logo" />
          <span className="site-header__title">Switch to Future</span>
        </a>

        <nav className={`site-header__nav ${isMenuOpen ? 'site-header__nav--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              className={`site-header__link ${activeSection === item ? 'site-header__link--active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className={`site-header__theme ${theme === 'dark' ? 'site-header__theme--dark' : ''}`}
            onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className="site-header__theme-track">
              <FaSun className="site-header__theme-icon site-header__theme-icon--sun" />
              <FaMoon className="site-header__theme-icon site-header__theme-icon--moon" />
            </span>
            <span className="site-header__theme-thumb" />
          </button>

          <button
            type="button"
            className="site-header__menu-btn"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
