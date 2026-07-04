import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Process from '../sections/Process';
import Services from '../sections/Services';
import Projects from '../sections/Projects';
import About from '../sections/About';

export default function Home() {
  return (
    <div className="page">
      <div className="page__glow page__glow--a" aria-hidden />
      <div className="page__glow page__glow--b" aria-hidden />
      <div className="page__grid" aria-hidden />
      <Header />
      <main>
        <Hero />
        <Process />
        <Services />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}
