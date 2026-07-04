import { Link } from 'react-router-dom';
import {
  FaMapMarkedAlt,
  FaHeart,
  FaComments,
  FaUserFriends,
  FaShieldAlt,
} from 'react-icons/fa';
import { CONTACT_EMAIL } from '@/data/site';
import ClustyHeroArt from './ClustyHeroArt';

const FEATURES = [
  {
    icon: FaMapMarkedAlt,
    title: 'Map & nearby vibes',
    desc: 'See mood activity around you on a live map with filters and local vibe summaries.',
  },
  {
    icon: FaHeart,
    title: 'Drop a Pulse',
    desc: 'Pick a mood, add optional text and photos, and share how you feel at your location.',
  },
  {
    icon: FaComments,
    title: 'Feed & discovery',
    desc: 'Browse nearby and trending pulses. Like, comment, and mention others.',
  },
  {
    icon: FaUserFriends,
    title: 'Profiles & social',
    desc: 'Public profiles with bio, vibe summary, followers, and pulse history.',
  },
  {
    icon: FaComments,
    title: 'Direct messaging',
    desc: '1:1 chat with text, images, reactions, read status, and presence.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safety built in',
    desc: 'Block, report, and delete your account anytime. Community guidelines enforced.',
  },
];

export default function ClustyHome() {
  return (
    <main className="clusty-main">
      <section className="clusty-hero">
        <div className="clusty-wrap clusty-hero__inner">
          <div className="clusty-hero__copy">
            <p className="clusty-chip">Location-aware social mood</p>
            <h1>Share how you feel, right where you are</h1>
            <p className="clusty-hero__lead">
              Clusty is a location-aware social mood app. Drop Pulses — short mood posts
              on a live map — and discover that others nearby feel things too.
            </p>
            <div className="clusty-hero__actions">
              <span className="clusty-store clusty-store--soon">App Store — coming soon</span>
              <span className="clusty-store clusty-store--soon">Google Play — coming soon</span>
            </div>
            <p className="clusty-hero__legal">
              By using Clusty you agree to our{' '}
              <Link to="/clusty/terms-and-conditions">Terms &amp; Conditions</Link> and{' '}
              <Link to="/clusty/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>

          <ClustyHeroArt />
        </div>
      </section>

      <section className="clusty-section">
        <div className="clusty-wrap">
          <header className="clusty-section__head">
            <h2>Feel less alone in the moment</h2>
            <p>
              Clusty is for connection and expression — not therapy. See real moods
              around you, share yours, and stay connected with people nearby.
            </p>
          </header>

          <div className="clusty-features">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="clusty-feature">
                <div className="clusty-feature__icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clusty-section clusty-section--muted">
        <div className="clusty-wrap clusty-about">
          <div>
            <p className="clusty-chip">About Clusty</p>
            <h2>Warm, human, and privacy-respectful</h2>
            <p>
              Built by SwitchToFuture for iOS and Android. Clusty helps you express
              how you feel in the moment — happy, sad, stressed, loved, low, or
              cooked — and see that others nearby are feeling things too.
            </p>
            <ul className="clusty-values">
              <li>Empathetic community, not clinical or corporate</li>
              <li>Location when you choose — permission always in your control</li>
              <li>Report, block, and account deletion in settings</li>
            </ul>
          </div>
          <div className="clusty-about__meta">
            <p><strong>Bundle ID</strong> com.clusty.stf</p>
            <p><strong>Contact</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
        </div>
      </section>

      <section className="clusty-cta">
        <div className="clusty-wrap clusty-cta__inner">
          <h2>Ready to drop your first Pulse?</h2>
          <p>Download Clusty when it launches on the App Store and Google Play.</p>
          <div className="clusty-cta__links">
            <Link to="/clusty/privacy-policy" className="clusty-btn clusty-btn--ghost">Privacy Policy</Link>
            <Link to="/clusty/terms-and-conditions" className="clusty-btn clusty-btn--solid">Terms &amp; Conditions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
