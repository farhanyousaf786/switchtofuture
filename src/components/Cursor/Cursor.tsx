import { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onExploreEnter = () => {
      el.classList.remove('cb-cursor--hover');
      el.classList.add('cb-cursor--explore');
    };
    const onHoverEnter = () => {
      if (!el.classList.contains('cb-cursor--explore'))
        el.classList.add('cb-cursor--hover');
    };
    const onLeave = () => {
      el.classList.remove('cb-cursor--explore', 'cb-cursor--hover');
    };

    const bind = () => {
      document.querySelectorAll('[data-cursor="explore"]').forEach(t => {
        t.addEventListener('mouseenter', onExploreEnter);
        t.addEventListener('mouseleave', onLeave);
      });
      document.querySelectorAll('a:not([data-cursor="explore"]), button').forEach(t => {
        t.addEventListener('mouseenter', onHoverEnter);
        t.addEventListener('mouseleave', onLeave);
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

  return (
    <div ref={cursorRef} className="cb-cursor">
      <div className="cb-cursor__inner">
        <span className="cb-cursor__label">Explore</span>
      </div>
    </div>
  );
};

export default Cursor;
