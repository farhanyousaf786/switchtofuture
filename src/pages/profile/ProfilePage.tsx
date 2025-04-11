import './ProfilePage.css';
import { useState, useEffect } from 'react';
import { DarkMode, LightMode, GitHub, LinkedIn, Email } from '@mui/icons-material';
import ExperienceTimeline from './Experince/Experience';
import FrontPage from './FrontPage/FrontPage';



const ProfilePage = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

 

  return (
    <div className="profile-page-container">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? <DarkMode /> : <LightMode />}
      </button>

      
      <section className="intro-section">
        <div className="profile-header">
          <img src="https://i.imgur.com/2r3PuyF.jpg" alt="Farhan Yousaf" className="profile-img" />
          


            <FrontPage />
            <ExperienceTimeline />
          
        </div>
      </section>

     
    </div>
  );
};

export default ProfilePage;
