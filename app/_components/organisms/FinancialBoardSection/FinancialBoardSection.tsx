'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface FinancialMember {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  email?: string;
}

interface FinancialBoardSectionProps {
  title: string;
  members: FinancialMember[];
  imageHeight?: { mobile?: number; tablet?: number; desktop?: number };
}

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return count;
}

export default function FinancialBoardSection({ title, members, imageHeight }: FinancialBoardSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, members.length - visibleCount);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  // Reset index when visibleCount changes to avoid out-of-bounds
  useEffect(() => {
    setActiveIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const cardWidthPercent = 100 / visibleCount;

  return (
    <section className="px-4 py-4">
      <div
        className="rounded-2xl overflow-hidden px-4 sm:px-8 md:px-12 py-8"
        style={{
          backgroundImage: 'url(/images/backgrounds/background-blue-grainy.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{title}</h2>

          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Anterior"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white/50 flex items-center justify-center text-white
                         hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={activeIndex >= maxIndex}
              aria-label="Siguiente"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white/50 flex items-center justify-center text-white
                         hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${activeIndex} * (${cardWidthPercent}% + ${visibleCount === 1 ? 16 : 24}px / ${visibleCount})))` }}
          >
            {members.map((member, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center gap-3"
                style={{ width: `calc(${cardWidthPercent}% - ${visibleCount > 1 ? 16 : 0}px)` }}
              >
                <div
                  className="relative w-full rounded-2xl overflow-hidden"
                  style={{
                    height: visibleCount === 1
                      ? `${imageHeight?.mobile ?? 360}px`
                      : visibleCount === 2
                        ? `${imageHeight?.tablet ?? 340}px`
                        : `${imageHeight?.desktop ?? 340}px`,
                  }}
                >
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    fill
                    className="object-cover object-top"
                  />
                  <a
                    href={member.email ? `mailto:${member.email}` : '#'}
                    aria-label={`Email de ${member.name}`}
                    className="absolute bottom-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
                  >
                    <svg className="w-4 h-4 text-[#060773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
                <p className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center">{member.name}</p>
                <p className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Ir a la diapositiva ${i + 1}`}
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
