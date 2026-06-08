import { Link } from 'react-router-dom';
import './Footer.css';

const navCol1 = [
  { label: 'Services',  to: '/services' },
  { label: 'Projects',  to: '/projects' },
  { label: 'Company',   to: '/company'  },
];

const navCol2 = [
  { label: 'Blog',      to: '/blog'     },
  { label: 'Workflow',  to: '/workflow' },
  { label: 'Contacts',  to: '/contact'  },
];

const socials = [
  {
    name: 'instagram', href: '#',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    name: 'youtube', href: '#',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>,
  },
  {
    name: 'github', href: '#',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  },
  {
    name: 'facebook', href: '#',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    name: 'dribbble', href: '#',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.316 3.046-4.49 8.33-6.18.138-.045.28-.088.42-.128-.27-.615-.56-1.228-.857-1.83C6.8 11.893 2.017 11.92 1.612 11.9c-.004.09-.013.18-.013.273 0 2.643 1.004 5.053 2.667 6.864l-.004-.01zM1.867 9.736c.41.01 4.53-.012 9.624-1.977.51-.19 1.02-.392 1.534-.605C11.638 4.97 9.982 2.928 9.82 2.726 7.01 3.91 4.81 6.55 3.866 9.736h-.002zM11.56 1.895c.181.226 1.86 2.272 3.45 5.326 3.293-1.234 4.687-3.112 4.854-3.36-1.695-1.51-3.905-2.42-6.33-2.42-.665 0-1.315.072-1.944.206l-.03-.002v.25z"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer className="cb-footer">
      <div className="cb-wrapper">

        {/* ── Top: locations + nav ── */}
        <div className="cb-footer__top">

          {/* Left: two location columns */}
          <div className="cb-footer__locations">

            <div className="cb-footer__location">
              <div className="cb-footer__location-action">
                <a href="mailto:hello@switchtofuture.com" className="cb-footer__pill">
                  <span className="cb-footer__pill-border" />
                  <span className="cb-footer__pill-ripple"><span /></span>
                  <span className="cb-footer__pill-label"><span data-text="hello@switchtofuture.com">hello@switchtofuture.com</span></span>
                </a>
              </div>
              <div className="cb-footer__location-body">
                <span className="cb-footer__location-caption">Main office</span>
                <span className="cb-footer__location-addr">901 N Pitt Street<br />Alexandria VA, 22314</span>
              </div>
            </div>

            <div className="cb-footer__location">
              <div className="cb-footer__location-action">
                <a href="tel:+13015499309" className="cb-footer__pill">
                  <span className="cb-footer__pill-border" />
                  <span className="cb-footer__pill-ripple"><span /></span>
                  <span className="cb-footer__pill-label"><span data-text="+1 301 549 9309">+1 301 549 9309</span></span>
                </a>
              </div>
              <div className="cb-footer__location-body">
                <span className="cb-footer__location-caption">Second office</span>
                <span className="cb-footer__location-addr">Remote<br />Worldwide</span>
              </div>
            </div>

          </div>

          {/* Right: nav links in 2 columns */}
          <div className="cb-footer__nav">
            <div className="cb-footer__nav-col">
              {navCol1.map(n => (
                <Link key={n.to} to={n.to} className="cb-footer__nav-link">{n.label}</Link>
              ))}
            </div>
            <div className="cb-footer__nav-col">
              {navCol2.map(n => (
                <Link key={n.to} to={n.to} className="cb-footer__nav-link">{n.label}</Link>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="cb-footer__bottom">
          <div className="cb-footer__legal">
            <Link to="/privacy" className="cb-footer__legal-link">Privacy Policy</Link>
            <span className="cb-footer__copy">{new Date().getFullYear()}, Switch to Future</span>
          </div>
          <div className="cb-footer__socials">
            {socials.map(s => (
              <a key={s.name} href={s.href} className="cb-footer__social" aria-label={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
