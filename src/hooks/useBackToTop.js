import { useEffect } from 'react';

export function useBackToTop() {
  useEffect(() => {
    const button = document.querySelector('.back-to-top');
    if (!button) return undefined;

    const showAfter = window.innerHeight;

    const onScroll = () => {
      if (window.scrollY > showAfter) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    };

    const onClick = (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    button.style.display = 'none';
    window.addEventListener('scroll', onScroll, { passive: true });
    button.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      button.removeEventListener('click', onClick);
    };
  }, []);
}
