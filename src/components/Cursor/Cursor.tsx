import { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = -100, y = -100;
    let isLarge = false;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onEnter = () => {
      if (isLarge) return;
      isLarge = true;
      cursor.classList.add('cb-cursor--lg');
    };
    const onLeave = () => {
      isLarge = false;
      cursor.classList.remove('cb-cursor--lg');
    };

    const bind = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', move);
    bind();

    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="cb-cursor" />;
};

export default Cursor;
