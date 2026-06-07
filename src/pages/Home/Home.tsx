import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/projects';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'Brand Identity',
    text: 'Strategic design that positions products for trust and clarity.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80',
    tall: true,
  },
  {
    id: 2,
    title: 'AI-enhanced UX/UI design',
    text: 'Interfaces that adapt, predict, and respond intelligently.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80',
    tall: false,
  },
  {
    id: 3,
    title: 'Custom development',
    text: 'Frontend + backend + AI integrations — built for performance and scalability.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80',
    tall: false,
  },
];

const blogPosts = [
  {
    id: 1,
    category: 'DESIGN COURSE',
    title: 'How to Make UI/UX website // Frontend development',
    date: '10/23/2024',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=900&q=80',
    link: '/blog',
  },
  {
    id: 2,
    category: 'DESIGN COURSE',
    title: 'How to Cook an Emotional Site // Web Development',
    date: '10/21/2024',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80',
    link: '/blog',
  },
  {
    id: 3,
    category: 'CASE STUDY',
    title: 'Building scalable design systems for enterprise',
    date: '10/15/2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80',
    link: '/blog',
  },
];

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

  const leftCards  = projects.filter((_, i) => i % 2 === 0).slice(0, 3);
  const rightCards = projects.filter((_, i) => i % 2 === 1).slice(0, 3);

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="h-hero">
        <div className="cb-wrapper">
          <div className="h-hero__inner">
            <h1 ref={h1Ref} className="h-hero__title">
              <span className="hw-wrap"><span className="hw">Digital design &amp;</span></span>
              <span className="hw-wrap"><span className="hw">development agency</span></span>
            </h1>
            <p ref={subRef} className="h-hero__sub">
              We help companies build scalable digital products with thoughtful
              design systems and carefully crafted development.
            </p>
          </div>
        </div>
      </section>

      {/* ── REEL ── */}
      <div className="h-reel-wrap" ref={reelRef}>
        <div className="cb-wrapper">
          <div className="h-reel">
            <video
              className="h-reel__video"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1800&q=85"
            >
              <source
                src="https://videos.pexels.com/video-files/854053/854053-hd_1280_720_25fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="h-about sr">
        <div className="cb-wrapper">
          <div className="h-about__inner">
            <div className="h-about__grid">
              <div className="h-about__fig-col">
                <div className="h-about__fig">
                  <img
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=85"
                    alt="3D render"
                  />
                </div>
              </div>
              <div className="h-about__body-col">
                <p className="h-about__brief">
                  Since 2020, we have been helping our clients find exceptional
                  solutions for their businesses, creating memorable websites and
                  digital products.
                </p>
                <p className="h-about__brief">
                  Switch to Future doesn't do cookie-cutter solutions — we build
                  products exactly as they were during the design phase. No
                  shortcuts, no simplifications.
                </p>
                <Link to="/services" className="h-section-btn">
                  <span className="h-section-btn__border" />
                  <span className="h-section-btn__ripple"><span /></span>
                  <span className="h-section-btn__title"><span data-text="What we do">What we do</span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="h-fp" data-dark>
        <div className="cb-wrapper">
          <div className="h-section-inner">
            <h2 className="h-section-heading sr">Featured projects</h2>
            <div className="h-fp__grid">
              <div className="h-fp__col">
                {leftCards.map(p => (
                  <Link to={p.link} key={p.id} className="h-fp__card sr" data-cursor="explore">
                    <div className="h-fp__card-img">
                      <img src={p.image} alt={p.title} />
                    </div>
                    <p className="h-fp__card-caption">
                      <strong>{p.title}</strong> – {p.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="h-fp__col h-fp__col--right">
                {rightCards.map(p => (
                  <Link to={p.link} key={p.id} className="h-fp__card sr" data-cursor="explore">
                    <div className="h-fp__card-img">
                      <img src={p.image} alt={p.title} />
                    </div>
                    <p className="h-fp__card-caption">
                      <strong>{p.title}</strong> – {p.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="h-fp__footer sr">
              <Link to="/projects" className="h-section-btn h-section-btn--inv">
                <span className="h-section-btn__border" />
                <span className="h-section-btn__ripple"><span /></span>
                <span className="h-section-btn__title"><span data-text="View all projects">View all projects</span></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="h-services">
        <div className="cb-wrapper">
          <div className="h-section-inner">
            <h2 className="h-section-heading sr">Our services</h2>
            <div className="h-services__grid">
              <div className="h-services__col">
                <div className="h-svc-intro sr">
                  <p className="h-svc-intro__text">
                    From motion design to AI-powered products — we design and build
                    interfaces for the next generation.
                  </p>
                </div>
                <div className="h-svc-card sr">
                  <div className="h-svc-card__preview h-svc-card__preview--tall">
                    <img src={services[0].image} alt={services[0].title} />
                  </div>
                  <div className="h-svc-card__title">{services[0].title}</div>
                  <div className="h-svc-card__text">{services[0].text}</div>
                </div>
              </div>
              <div className="h-services__col">
                {services.slice(1).map(s => (
                  <div key={s.id} className="h-svc-card sr">
                    <div className="h-svc-card__preview">
                      <img src={s.image} alt={s.title} />
                    </div>
                    <div className="h-svc-card__title">{s.title}</div>
                    <div className="h-svc-card__text">{s.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="h-blog" data-dark>
        <div className="cb-wrapper">
          <div className="h-section-inner">
            <h2 className="h-section-heading sr">Blog</h2>
            <div className="h-blog__entries">
              {blogPosts.map(post => (
                <Link to={post.link} key={post.id} className="h-blog__entry sr">
                  <div className="h-blog__entry-grid">
                    <div className="h-blog__thumb">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="h-blog__meta">
                      <div className="h-blog__category">{post.category}</div>
                      <div className="h-blog__title">{post.title}</div>
                      <div className="h-blog__date">{post.date}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="h-blog__footer sr">
              <Link to="/blog" className="h-section-btn h-section-btn--inv">
                <span className="h-section-btn__border" />
                <span className="h-section-btn__ripple"><span /></span>
                <span className="h-section-btn__title"><span data-text="View all posts">View all posts</span></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTRO ── */}
      <section className="h-outro">
        <div className="h-outro__bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1800&q=85"
            alt=""
          />
        </div>
        <div className="cb-wrapper">
          <div className="h-outro__inner">
            <div className="h-outro__header">Have an idea?</div>
            <Link to="/contact" className="h-outro__cta">TELL US</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
