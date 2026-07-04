import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '@/data/site';

const UPDATED = 'July 4, 2026';

export default function ClustyPrivacy() {
  return (
    <main className="clusty-main clusty-legal">
      <div className="clusty-wrap">
        <header className="clusty-legal__head">
          <p className="clusty-chip">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="clusty-legal__meta">Last updated: {UPDATED}</p>
          <p>
            Clusty (&quot;Clusty,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is operated by
            SwitchToFuture. This Privacy Policy explains how we collect, use, share, and protect
            information when you use the Clusty mobile app and related services.
          </p>
        </header>

        <article className="clusty-legal__body">
          <section id="intro">
            <h2>1. Introduction</h2>
            <p>
              Clusty is a location-aware social mood app. You share how you feel through
              &quot;Pulses&quot; — short mood posts placed on a map — follow others, chat one-on-one,
              and receive notifications about activity around you.
            </p>
            <p>
              By using Clusty, you agree to this Privacy Policy. If you do not agree, please do
              not use the app.
            </p>
          </section>

          <section id="collect">
            <h2>2. Information We Collect</h2>

            <h3>Account &amp; identity</h3>
            <ul>
              <li>Email address and/or phone number (via Firebase Authentication)</li>
              <li>Username, display name, and profile photo</li>
              <li>Password (hashed and stored by Firebase — we do not store plain-text passwords)</li>
              <li>Email verification status</li>
            </ul>

            <h3>Profile information (optional)</h3>
            <ul>
              <li>Bio, age, and gender</li>
              <li>Location (city/country or coordinates converted via Google Geocoding API)</li>
              <li>Profile statistics such as follower and following counts</li>
            </ul>

            <h3>User-generated content</h3>
            <ul>
              <li>Pulses: mood type, text, images, timestamp, and approximate location</li>
              <li>Comments, likes, and mentions on pulses</li>
              <li>Direct messages (text and images), reactions, and read receipts</li>
              <li>Reports you submit about content or users</li>
            </ul>

            <h3>Device &amp; technical data</h3>
            <ul>
              <li>Push notification tokens (Expo Push / Firebase Cloud Messaging)</li>
              <li>Device platform (iOS or Android)</li>
              <li>Online/presence status and last-seen timestamps</li>
              <li>Data necessary to operate core app functionality</li>
            </ul>

            <h3>Location data</h3>
            <ul>
              <li>Precise location when you grant permission (when-in-use only)</li>
              <li>Used to place pulses on the map and show nearby activity</li>
              <li>Location is not collected when permission is denied</li>
            </ul>

            <h3>Permissions we may request</h3>
            <ul>
              <li>Location (when in use)</li>
              <li>Camera and photo library (for pulses and chat images)</li>
              <li>Push notifications</li>
            </ul>
          </section>

          <section id="use">
            <h2>3. How We Use Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide, maintain, and improve Clusty</li>
              <li>Display nearby pulses, map features, and vibe summaries</li>
              <li>Enable messaging, social features, and notifications</li>
              <li>Moderate content, enforce safety tools (reports, blocks), and prevent fraud</li>
              <li>Generate aggregated or anonymous statistics for global mood map insights</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              Profile demographic data may contribute to anonymous aggregate insights as disclosed
              in the app. We do not use Clusty to provide medical or mental health diagnosis or treatment.
            </p>
          </section>

          <section id="share">
            <h2>4. How We Share Information</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul>
              <li><strong>Other users:</strong> Content you post publicly (pulses, profile info) is visible to others per your settings and app design</li>
              <li><strong>Service providers</strong> who help us operate Clusty, including:
                <ul>
                  <li>Firebase (Google): Authentication, Firestore, Cloud Messaging, storage</li>
                  <li>Google Maps / Geocoding API: map display and location-to-address conversion</li>
                  <li>Expo: push notification delivery</li>
                  <li>Email provider: verification and account-related emails</li>
                </ul>
              </li>
              <li><strong>Legal &amp; safety:</strong> When required by law or to protect users, rights, and safety</li>
            </ul>
          </section>

          <section id="location">
            <h2>5. Location Data</h2>
            <p>
              Location features require your explicit permission. When enabled, we use your
              location to place pulses on the map and show nearby mood activity. You can disable
              location access anytime in your device settings; some features may not work without it.
            </p>
          </section>

          <section id="retention">
            <h2>6. Data Retention</h2>
            <p>
              We retain account data while your account is active. When you delete your account
              (Account Settings → Delete Profile), we delete or anonymize your personal data within
              a reasonable period, except where retention is required for safety, moderation, legal
              compliance, or backup systems (typically up to 90 days for residual backups).
            </p>
            <p>
              Moderation and report records may be retained for a limited time to investigate abuse
              and comply with law.
            </p>
          </section>

          <section id="rights">
            <h2>7. Your Rights &amp; Controls</h2>
            <p>You can:</p>
            <ul>
              <li>Access and edit profile data in the app</li>
              <li>Delete your account permanently in Account Settings</li>
              <li>Block other users</li>
              <li>Report content or users</li>
              <li>Control notification, location, camera, and photo permissions in device settings</li>
            </ul>
            <p>
              Depending on where you live, you may have additional rights (see International Users).
              To exercise rights, contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section id="children">
            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Clusty is not intended for children under 13. In some jurisdictions (including parts
              of the EU/EEA), users must be 16 or older. We do not knowingly collect personal
              information from underage users. If you believe a child has provided us data, contact
              us and we will delete it.
            </p>
          </section>

          <section id="international">
            <h2>9. International Users</h2>
            <p>
              Clusty is operated from the United States. If you use Clusty from outside the U.S.,
              your information may be transferred to and processed in the U.S.
            </p>
            <p><strong>GDPR (EEA/UK):</strong> You may have rights to access, rectification, erasure,
              portability, restriction, and objection. You may lodge a complaint with your local authority.</p>
            <p><strong>CCPA/CPRA (California):</strong> California residents may request access,
              deletion, and correction of personal information, and opt out of sale/sharing (we do not sell data).</p>
          </section>

          <section id="security">
            <h2>10. Security</h2>
            <p>
              We use industry-standard measures including Firebase security rules and server-side
              validation. No method of transmission or storage is 100% secure. Use a strong password
              and keep your device secure.
            </p>
          </section>

          <section id="changes">
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated version
              with a new &quot;Last updated&quot; date and, for material changes, provide notice in the app
              or by email where appropriate.
            </p>
          </section>

          <section id="contact">
            <h2>12. Contact Us</h2>
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
