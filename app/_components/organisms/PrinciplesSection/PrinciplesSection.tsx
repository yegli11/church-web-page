'use client';

import { useState } from 'react';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';

interface Principle {
  title: string;
  description: string;
}

interface PrinciplesSectionProps {
  title: string;
  principles: Principle[];
}

export default function PrinciplesSection({ title, principles }: PrinciplesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = principles.length - 1;

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  const formatNumber = (i: number) => `0.${i + 1}`;

  return (
    <section className="px-4 py-6">
      <div
        className="relative rounded-2xl overflow-hidden min-h-[420px] flex flex-col items-center justify-start pt-16 px-6 text-white text-center"
        style={{
          backgroundImage: 'url(/images/backgrounds/background-blue-grainy.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{title}</h2>
        </ScrollReveal>

        <div className="flex items-center justify-center gap-4 md:gap-8 w-full max-w-3xl">
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Principio anterior"
            className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/60 flex items-center justify-center text-white transition-all hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide */}
          <div className="flex-1 min-h-[200px] flex flex-col items-center justify-start">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              {formatNumber(activeIndex)} {principles[activeIndex].title}
            </h3>
            <p className="text-sm md:text-base max-w-lg leading-relaxed text-white/90">
              {principles[activeIndex].description}
            </p>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={activeIndex >= maxIndex}
            aria-label="Siguiente principio"
            className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/60 flex items-center justify-center text-white transition-all hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-8">
          {principles.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Ir al principio ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
