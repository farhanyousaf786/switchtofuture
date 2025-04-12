import { useRef, useEffect } from 'react';
import './FloatingIcon.css';

interface FloatingIconProps {
  icon: React.ReactElement;
}

const FloatingIcon = ({ icon }: FloatingIconProps) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      const el = iconRef.current;

      // Generate random transform values
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const scale = 0.8 + Math.random() * 0.6;
      const duration = 10 + Math.random() * 5;
      const delay = Math.random() * 5;

      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
      el.style.setProperty('--scale', `${scale}`);
      el.style.setProperty('--duration', `${duration}s`);
      el.style.setProperty('--delay', `${delay}s`);
    }
  }, []);

  return (
    <div
      ref={iconRef}
      className="floating-tech-icon-new"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      {icon}
    </div>
  );
};

export default FloatingIcon;
