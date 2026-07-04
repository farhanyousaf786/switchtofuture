import { CONTACT_EMAIL, TEAM } from '../data/site';

export default function Team() {
  return (
    <section id="team" className="section team">
      <div className="wrap">
        <header className="section__head">
          <p className="chip">Team</p>
          <h2>People behind the work</h2>
          <p className="team__lead">
            Leadership and engineering focused on shipping products that last.
          </p>
        </header>

        <div className="team__grid">
          {TEAM.map((member) => (
            <article key={member.name} className="team__card">
              <div className="team__avatar" aria-hidden>
                {member.initials}
              </div>
              <div className="team__info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="team__contact">
          Want to build with us?{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
