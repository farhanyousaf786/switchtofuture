import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Cursor       from './components/Cursor/Cursor';
import Navbar       from './components/Navbar/Navbar';
import Footer       from './components/Footer/Footer';
import OutroCTA     from './components/OutroCTA/OutroCTA';
import ContactBadge from './components/ContactBadge/ContactBadge';
import Home     from './pages/Home/Home';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Company  from './pages/Company/Company';
import Blog     from './pages/Blog/Blog';
import Careers  from './pages/Careers/Careers';
import Contact  from './pages/Contact/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function AppInner() {
  const { pathname } = useLocation();
  const isContact = pathname === '/contact';

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  return (
    <>
      <Cursor />
      <ContactBadge />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company"  element={<Company />}  />
        <Route path="/blog"     element={<Blog />}     />
        <Route path="/careers"  element={<Careers />}  />
        <Route path="/contact"  element={<Contact />}  />
      </Routes>
      {/* Outro CTA on every page except /contact */}
      {!isContact && <OutroCTA />}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
