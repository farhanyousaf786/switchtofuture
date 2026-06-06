import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/projects';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const h1Ref   = useRef<HTMLHeadingElement>(null);
  const subRef  = useRef<HTMLParagraphElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = h1Ref.current?.querySelectorAll('.hw');
    if (words?.length) {
      gsap.fromTo(words,
        { yPercent: 105 },
        { yPercent: 0, duration: 1.1, stagger: 0.055, ease: 'power4.out', delay: 0.1 }
      );
    }
    gsap.fromTo([subRef.current, reelRef.current],
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.55 }
    );

    gsap.utils.toArray<Element>('.sr').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%' } }
      );
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const leftCards  = projects.filter((_, i) => i % 2 === 0).slice(0, 2);
  const rightCards = projects.filter((_, i) => i % 2 === 1).slice(0, 2);

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="h-hero">
        <div className="cb-wrapper">
          <h1 ref={h1Ref} className="h-hero__title">
            <span className="hw-wrap"><span className="hw">Digital design &amp;</span></span>
            <span className="hw-wrap"><span className="hw">development agency</span></span>
          </h1>
          <p ref={subRef} className="h-hero__sub">
            We help companies build scalable digital products with thoughtful
            design systems and carefully crafted development.
          </p>

          {/* Single reel showcase */}
          <div ref={reelRef} className="h-reel">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=85"
              alt="Project showcase"
              className="h-reel__img"
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="h-about sr">
        <div className="cb-wrapper">
          <div className="h-about__grid">
            <div className="h-about__visual">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=700&q=85"
                alt="3D abstract shapes"
              />
            </div>
            <div className="h-about__body">
              <p className="h-about__para">
                Since 2020, we have been helping our clients find exceptional
                solutions for their businesses, creating memorable websites and
                digital products.
              </p>
              <p className="h-about__para">
                Switch to Future doesn't do cookie-cutter solutions and we build
                products exactly as they were during the design phase — no
                shortcuts, no simplifications.
              </p>
              <Link to="/services" className="h-about__btn">What we do</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="h-fp" data-dark>
        <div className="cb-wrapper">
          <h2 className="h-fp__heading sr">Featured projects</h2>

          <div className="h-fp__grid">
            {/* Left column */}
            <div className="h-fp__col">
              {leftCards.map(p => (
                <Link to={p.link} key={p.id} className="h-fp__card sr" data-cursor="explore">
                  <div className="h-fp__card-img">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <p className="h-fp__card-label">
                    <strong>{p.title}</strong> – {p.subtitle}
                  </p>
                </Link>
              ))}
            </div>

            {/* Right column — offset down */}
            <div className="h-fp__col h-fp__col--right">
              {rightCards.map(p => (
                <Link to={p.link} key={p.id} className="h-fp__card sr" data-cursor="explore">
                  <div className="h-fp__card-img">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <p className="h-fp__card-label">
                    <strong>{p.title}</strong> – {p.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="h-fp__footer sr">
            <Link to="/projects" className="h-fp__btn">View all projects</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
