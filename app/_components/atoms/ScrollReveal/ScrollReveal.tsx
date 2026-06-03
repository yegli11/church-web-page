'use client';

import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const directionStyles: Record<Direction, string> = {
  up:    'translate-y-10 opacity-0',
  down:  '-translate-y-10 opacity-0',
  left:  'translate-x-10 opacity-0',
  right: '-translate-x-10 opacity-0',
  fade:  'opacity-0',
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out
        ${visible ? 'translate-x-0 translate-y-0 opacity-100' : directionStyles[direction]}
        ${className}`}
    >
      {children}
    </div>
  );
}
