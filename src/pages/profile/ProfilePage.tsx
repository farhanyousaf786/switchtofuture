import './ProfilePage.css';
import { useState, useEffect } from 'react';
import { DarkMode, LightMode, GitHub, LinkedIn, Email } from '@mui/icons-material';
import ExperienceTimeline from './Experince/Experience';



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
          <div>


            <ExperienceTimeline />
            <h1>Farhan Yousaf</h1>
            <h2>Full Stack Developer</h2>
            <p>
              7+ years building scalable, AI-enhanced mobile and web apps using Flutter, React, Firebase, and more.
            </p>
            <div className="contact-icons">
              <a href="https://github.com/farhanyousaf786" target="_blank" rel="noopener noreferrer"><GitHub /></a>
              <a href="https://www.linkedin.com/in/mfarhanyousaf/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
              <a href="mailto:farhanyousaf1996@gmail.com"><Email /></a>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default ProfilePage;
