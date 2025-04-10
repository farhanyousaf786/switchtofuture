import Header from '../../components/header/Header';
import MainContent from './MainContent';
import Projects from '../../components/Projects';
import Team from '../../components/Team';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <MainContent />
      <Projects />
      <Team />
    </div>
  );
};

export default Home;
