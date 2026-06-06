import { useState } from 'react';
import './Contact.css';

const SERVICES = ['Site from scratch','UX/UI design','Mobile app','AI integration','Branding','Automation'];
const BUDGETS  = ['< $10k','$10–30k','$30–50k','$50–100k','> $100k'];

export default function ContactPage() {
  const [svc, setSvc]   = useState('');
  const [bdg, setBdg]   = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <main className="cb-main">

      <section className="cb-page-hero">
        <div className="cb-wrapper">
          <p className="cb-page-hero__tag">Let's talk</p>
          <h1 className="cb-page-hero__title">
            Hey! Tell us<br />all the things
          </h1>
        </div>
      </section>

      <section className="cb-contact">
        <div className="cb-wrapper">
          <div className="cb-contact__grid">

            {/* Form */}
            <div className="cb-contact__form-wrap">
              {sent ? (
                <div className="cb-contact__success">
                  <p className="cb-contact__success-label">Sent ✓</p>
                  <h2>Thanks for reaching out!</h2>
                  <p>We'll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <form className="cb-form" onSubmit={submit}>
                  <div className="cb-form__group">
                    <label>I'm interested in</label>
                    <div className="cb-chips">
                      {SERVICES.map(s => (
                        <button type="button" key={s}
                          className={`cb-chip${svc === s ? ' -active' : ''}`}
                          onClick={() => setSvc(s)}>{s}</button>
                      ))}
                    </div>
                  </div>
                  <div className="cb-form__group">
                    <label htmlFor="name">Your name</label>
                    <input id="name" type="text" placeholder="John Smith" required />
                  </div>
                  <div className="cb-form__group">
                    <label htmlFor="email">Email address</label>
                    <input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="cb-form__group">
                    <label>Project budget</label>
                    <div className="cb-chips">
                      {BUDGETS.map(b => (
                        <button type="button" key={b}
                          className={`cb-chip${bdg === b ? ' -active' : ''}`}
                          onClick={() => setBdg(b)}>{b}</button>
                      ))}
                    </div>
                  </div>
                  <div className="cb-form__group">
                    <label htmlFor="msg">About your project</label>
                    <textarea id="msg" rows={5} placeholder="What are you building?" required />
                  </div>
                  <button type="submit" className="cb-btn-submit">Send message ↗</button>
                </form>
              )}
            </div>

            {/* Info */}
            <aside className="cb-contact__info">
              <div className="cb-contact__info-block">
                <p className="cb-contact__info-label">Email us</p>
                <a href="mailto:hello@switchtofuture.com">hello@switchtofuture.com</a>
              </div>
              <div className="cb-contact__info-block">
                <p className="cb-contact__info-label">Call us</p>
                <a href="tel:+13015499309">+1 301 549 9309</a>
              </div>
              <div className="cb-contact__info-block">
                <p className="cb-contact__info-label">Offices</p>
                <address>
                  <p><strong>Alexandria, VA</strong><br />901 N Pitt Street, 22314</p>
                  <p><strong>Remote</strong><br />Worldwide</p>
                </address>
              </div>
            </aside>

          </div>
        </div>
      </section>

    </main>
  );
}
