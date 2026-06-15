import { useEffect } from 'react';

export function useSunFollow() {
  useEffect(() => {
    const sun = document.querySelector('.sun');
    if (!sun) return undefined;

    const onMove = (event) => {
      if (window.innerWidth <= 700) return;
      sun.style.left = `${event.pageX - 300}px`;
      sun.style.top = `${event.pageY - 300}px`;
    };

    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);
}
