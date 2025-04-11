import './FrontPage.css';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const FrontPage = () => {
  return (
    <section className="front-container">
      <div className="left">
        <p className="label">FARHAN YOUSAF</p>
        <h1 className="title">
          Full Stack <br /> App & AI Developer
        </h1>
        <p className="bio">
          Over the past 7 years, I’ve developed mobile and web apps, led AI integration, and built systems used by 1M+ users. 
          From Maxsip to Switch to Future — I design with performance, purpose, and precision.
        </p>
        <div className="actions">
          <a href="#projects" className="btn-link">View Projects</a>
          <span className="or">or</span>
          <a href="#about" className="btn-link">Read About Me</a>
        </div>
        <div className="icons">
          <a href="mailto:farhanyousaf1996@gmail.com"><Email /></a>
          <a href="https://github.com/farhanyousaf786" target="_blank"><GitHub /></a>
          <a href="https://linkedin.com/in/mfarhanyousaf" target="_blank"><LinkedIn /></a>
        </div>
      </div>
      <div className="right">
        <img src="https://i.imgur.com/2r3PuyF.jpg" alt="Farhan Yousaf" />
      </div>
    </section>
  );
};

export default FrontPage;
