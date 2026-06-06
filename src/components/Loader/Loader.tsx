import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

interface Props { onComplete: () => void; }

const Loader = ({ onComplete }: Props) => {
  const fillRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    // Fade in backdrop slightly
    tl.to(backdropRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }, 0.3);

    // Slide the fill curtain UP out of view
    tl.to(fillRef.current, {
      yPercent: -100,
      duration: 1.1,
      ease: 'power4.inOut',
    }, 0.5);

    // Fade backdrop out
    tl.to(backdropRef.current, {
      opacity: 0,
      duration: 0.4,
    }, '-=0.2');

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div className="cb-loader">
      <div ref={backdropRef} className="cb-loader-backdrop" />
      <div ref={fillRef} className="cb-loader-fill" />
    </div>
  );
};

export default Loader;
