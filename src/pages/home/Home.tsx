import Header from '../../components/header/Header';
import MainContent from './MainContent';
import Projects from '../../components/Projects';
import Services from '../../components/Services';
import About from '../../components/About';
import Team from '../../components/Team';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <MainContent />
      <Services />
      <Projects />
      <About />
      <Team />
    </div>
  );
};

export default Home;
