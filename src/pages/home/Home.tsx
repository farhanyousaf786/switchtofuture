import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  const teamMembers = [
    {
      name: 'Farhan',
      role: 'Team Member',
      link: '/profile/farhan'
    }
  ];

  return (
    <div className="home-container">
      <header className="header">
        <nav className="nav">
          <div 
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </div>
          <div 
            className={`nav-item ${activeTab === 'teams' ? 'active' : ''}`}
            onClick={() => setActiveTab('teams')}
          >
            Teams
          </div>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'home' && (
          <section className="home-section">
            <h1>Welcome to Our Website</h1>
            <p>Discover our amazing team and projects.</p>
          </section>
        )}

        {activeTab === 'teams' && (
          <section className="teams-section">
            <h2>Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <Link to={member.link} key={index} className="team-member-link">
                  <div className="team-member">
                    <div className="member-avatar">
                      <img src="https://i.imgur.com/2r3PuyF.jpg" alt="Farhan Yousaf" />
                    </div>
                    <h3>Farhan Yousaf</h3>
                    <p>Senior Full Stack Developer</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Home;
