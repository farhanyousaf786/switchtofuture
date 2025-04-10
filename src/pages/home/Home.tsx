import Header from '../../components/header/Header';
import MainContent from './MainContent';
import Services from '../../components/Services';
import Projects from '../../components/Projects';
import Team from '../../components/Team';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <MainContent />
      <Services />
      <Projects />
      <Team />
    </div>
  );
};

export default Home;
