import { PROCESS } from '../data/site';

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="wrap">
        <header className="section__head">
          <p className="chip">How we work</p>
          <h2>From idea to launch</h2>
          <p className="process__hint">Swipe to see all steps →</p>
        </header>

        <div className="process__track">
          {PROCESS.map((item) => (
            <article key={item.step} className="process__card">
              <span className="process__num">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
