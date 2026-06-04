'use client';

import { useEffect, useRef, useState } from 'react';
import type { MinistryStat } from '../../../_lib/ministries';

function Counter({ target, suffix, duration = 1400 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - p) ** 3;
            setCount(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={spanRef}>
      {count}{suffix}
    </span>
  );
}

export default function StatsRow({ stats }: { stats: MinistryStat[] }) {
  return (
    <section className="bg-white px-6 md:px-10 py-16 md:py-20 border-y border-gray-100">
      <div className="mx-auto max-w-5xl">
        <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-8 px-4 gap-2">
              <dd className="text-5xl md:text-6xl font-bold tabular-nums text-[#060773] leading-none">
                <Counter target={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#7B817F] text-center leading-tight mt-1">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
