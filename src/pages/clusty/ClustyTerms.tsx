import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '@/data/site';

const UPDATED = 'July 4, 2026';

export default function ClustyTerms() {
  return (
    <main className="clusty-main clusty-legal">
      <div className="clusty-wrap">
        <header className="clusty-legal__head">
          <p className="clusty-chip">Legal</p>
          <h1>Terms of Service</h1>
          <p className="clusty-legal__meta">Last updated: {UPDATED}</p>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Clusty mobile application
            and related services operated by SwitchToFuture (&quot;Clusty,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            By creating an account or using Clusty, you agree to these Terms.
          </p>
        </header>

        <article className="clusty-legal__body">
          <section id="agreement">
            <h2>1. Agreement</h2>
            <p>
              Clusty is a location-based social platform where users share mood &quot;Pulses&quot; on a map,
              interact socially (follow, like, comment), and send direct messages. These Terms form a
              binding agreement between you and SwitchToFuture.
            </p>
          </section>

          <section id="eligibility">
            <h2>2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Clusty. If you are in a jurisdiction that
              requires a higher minimum age (such as 16 in some regions), you must meet that requirement.
              By using Clusty, you represent that you meet these age requirements.
            </p>
          </section>

          <section id="account">
            <h2>3. Your Account</h2>
            <ul>
              <li>Sign up via email (with verification) or phone OTP</li>
              <li>Choose a unique username during onboarding</li>
              <li>One account per person; provide accurate registration information</li>
              <li>You are responsible for account security and all activity under your account</li>
              <li>Notify us immediately at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you suspect unauthorized access</li>
            </ul>
          </section>

          <section id="content">
            <h2>4. User Content &amp; License</h2>
            <p>
              You retain ownership of content you post. By posting content on Clusty, you grant us a
              non-exclusive, worldwide, royalty-free license to host, store, display, and distribute
              your content solely to operate and improve the service.
            </p>
            <p>
              Pulses may include mood type, text, images, and location. Chat messages are private
              between participants but may be reviewed when reported or as required for safety and legal compliance.
            </p>
          </section>

          <section id="acceptable">
            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Harass, bully, threaten, or use hate speech against others</li>
              <li>Post illegal, sexually exploitative, or violent content</li>
              <li>Spam, impersonate others, or scrape the service</li>
              <li>Share others&apos; private information without consent</li>
              <li>Attempt to hack, reverse engineer, or disrupt Clusty</li>
              <li>Use the app for unauthorized commercial solicitation</li>
            </ul>
          </section>

          <section id="safety">
            <h2>6. Safety &amp; Moderation</h2>
            <p>
              Clusty provides report tools for pulses, profiles, messages, and conversations, plus
              block functionality. We may remove content, suspend, or terminate accounts at our discretion.
              We are not obligated to monitor all content but may do so for community safety.
            </p>
            <p>
              Report categories include spam, harassment, inappropriate content, and other violations
              described in the app.
            </p>
          </section>

          <section id="location">
            <h2>7. Location Services</h2>
            <p>
              Map and pulse features require location permission. When you post a Pulse, approximate
              location may be attached. You are responsible for what you share. Clusty is not responsible
              for the accuracy of user-submitted location or mood data.
            </p>
          </section>

          <section id="messaging">
            <h2>8. Messaging</h2>
            <p>
              Clusty currently supports one-on-one chat only. Do not use messaging for unlawful purposes.
              Deleted conversations may be hidden from your view but retained as described in our{' '}
              <Link to="/clusty/privacy-policy">Privacy Policy</Link> for safety and legal reasons.
            </p>
          </section>

          <section id="ip">
            <h2>9. Intellectual Property</h2>
            <p>
              The Clusty name, logo, app design, and related materials belong to SwitchToFuture.
              You may not copy, modify, or misuse Clusty branding without written permission.
            </p>
          </section>

          <section id="disclaimers">
            <h2>10. Disclaimers</h2>
            <p>
              <strong>Clusty is not a medical, mental health, or crisis service.</strong> Mood data
              and map insights are for social connection and self-expression only — not diagnosis,
              treatment, or emergency support. If you are in crisis, contact local emergency services
              or a qualified professional.
            </p>
            <p>
              Clusty is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind, to the
              fullest extent permitted by law. We do not guarantee uninterrupted or error-free service.
            </p>
          </section>

          <section id="liability">
            <h2>11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, SwitchToFuture and its affiliates will not be
              liable for indirect, incidental, special, consequential, or punitive damages, or for
              user-generated content or the actions of other users. Our total liability for any claim
              relating to Clusty is limited to the greater of (a) amounts you paid us in the twelve
              months before the claim, or (b) one hundred U.S. dollars ($100), if you have not paid us.
            </p>
          </section>

          <section id="indemnity">
            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless SwitchToFuture from claims, damages, and expenses
              (including reasonable legal fees) arising from your content, your use of Clusty, or your
              violation of these Terms.
            </p>
          </section>

          <section id="termination">
            <h2>13. Termination</h2>
            <p>
              You may delete your account anytime in Account Settings → Delete Profile. We may suspend
              or terminate your access for violations of these Terms or for other legitimate reasons.
              Sections that by nature should survive (including IP, disclaimers, liability, indemnity,
              and governing law) will survive termination.
            </p>
          </section>

          <section id="changes">
            <h2>14. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will post the updated Terms with a new
              &quot;Last updated&quot; date and provide notice in the app or by email for material changes.
              Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section id="law">
            <h2>15. Governing Law &amp; Disputes</h2>
            <p>
              These Terms are governed by the laws of the State of New York, United States, without
              regard to conflict-of-law principles. You agree to attempt informal resolution by
              contacting <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> before filing a claim.
            </p>
            <p>
              Where enforceable, you agree that disputes will be resolved individually and not as part
              of a class action. Either party may bring claims in small claims court if eligible.
            </p>
          </section>

          <section id="contact">
            <h2>16. Contact</h2>
            <ul>
              <li>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li>Company: SwitchToFuture</li>
              <li>Website: <Link to="/clusty">switchtofuture.com/clusty</Link></li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
