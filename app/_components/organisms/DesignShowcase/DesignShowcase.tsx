'use client';

import { useRef } from 'react';
import Image from 'next/image';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';
import type { MinistryDesign } from '../../../_lib/ministries';

const CARD_SCROLL = 272; // card width (256px) + gap (16px)

export default function DesignShowcase({ designs }: { designs: MinistryDesign[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'prev' | 'next') => {
    trackRef.current?.scrollBy({
      left: dir === 'next' ? CARD_SCROLL : -CARD_SCROLL,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="py-20 md:py-28"
      style={{
        backgroundImage: 'url(/images/backgrounds/background-black.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between px-6 md:px-10 mb-10">
          <ScrollReveal direction="up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/35 mb-2">
              Creatividad al servicio del evangelio
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Galería de Diseños
            </h2>
          </ScrollReveal>

          {/* Flechas — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0 ml-8 mb-1">
            <button
              onClick={() => scroll('prev')}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('next')}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 md:pl-10 pr-6 md:pr-10"
        >
          {designs.map((design, i) => (
            <div
              key={i}
              className="group snap-start flex-shrink-0 w-56 md:w-64"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white/5" style={{ aspectRatio: '3 / 4' }}>
                <Image
                  src={design.src}
                  alt={design.alt}
                  fill
                  sizes="256px"
                  quality={90}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Hover overlay con ícono */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full bg-white/20 backdrop-blur-sm p-3 border border-white/30">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer final para que la última card no quede pegada al borde */}
          <div className="flex-shrink-0 w-2 md:w-4" aria-hidden="true" />
        </div>

        {/* Flechas — mobile */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-8">
          <button
            onClick={() => scroll('prev')}
            aria-label="Anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-white/50 hover:text-white transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('next')}
            aria-label="Siguiente"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-white/50 hover:text-white transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
