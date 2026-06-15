import { useEffect, useRef, useState } from 'react';

export default function ProgressBar({ label, level }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="progress" ref={ref}>
      <div className="progress-text">
        <span>{label}</span> {level}%
      </div>
      <div className="progress-bar">
        <span
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            width: active ? `${level}%` : '0%',
            zIndex: active ? 2 : undefined,
            transition: 'width 0.8s ease',
          }}
        />
      </div>
    </div>
  );
}
