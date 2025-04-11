import Header from '../../../components/header/Header';
import MainContent from '../MainContent/MainContent';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Team from '../Team/Team';
import About from '../About/About';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <MainContent />
      <Services />
      <Projects />
      <Team />
      <About />
    </div>
  );
};

export default Home;
