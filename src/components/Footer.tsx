import { CONTACT_EMAIL } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr">
      <div className="wrap ftr__inner">
        <p className="ftr__copy">© {year} Switch to Future. Built for what&apos;s next.</p>
        <div className="ftr__links">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
