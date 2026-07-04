import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/icon.png';
import './clusty.css';

export default function ClustyLayout() {
  return (
    <div className="clusty">
      <header className="clusty-hdr">
        <div className="clusty-wrap clusty-hdr__inner">
          <Link to="/clusty" className="clusty-hdr__brand">
            <img src={logo} alt="Clusty" className="clusty-hdr__logo" />
            <span>Clusty</span>
          </Link>
          <nav className="clusty-hdr__nav" aria-label="Clusty">
            <Link to="/clusty">Home</Link>
            <Link to="/clusty/privacy-policy">Privacy Policy</Link>
            <Link to="/clusty/terms-and-conditions">Terms &amp; Conditions</Link>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="clusty-ftr">
        <div className="clusty-wrap clusty-ftr__inner">
          <p>© {new Date().getFullYear()} Clusty · A product of SwitchToFuture</p>
          <div className="clusty-ftr__links">
            <a href="mailto:support@clusty.app">support@clusty.app</a>
            <Link to="/clusty/privacy-policy">Privacy Policy</Link>
            <Link to="/clusty/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
