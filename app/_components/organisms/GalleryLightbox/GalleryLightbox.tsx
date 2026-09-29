'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';
import type { MinistryImage } from '../../../_lib/ministries';

export default function GalleryLightbox({ images }: { images: MinistryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  );
  const next = useCallback(
    () => setActive((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close, prev, next]);

  return (
    <>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {images.map((image, i) => {
          const featured = i === 0 || i === 5;
          return (
            <ScrollReveal
              key={image.src}
              direction="fade"
              delay={i * 60}
              className={featured ? 'col-span-2 row-span-2' : ''}
            >
              <button
                onClick={() => setActive(i)}
                aria-label={`Ver ${image.alt}`}
                className="group relative h-full w-full overflow-hidden rounded-2xl shadow-sm cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#060773]"
                style={featured ? { backgroundColor: '#111' } : undefined}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={`transition-all duration-700 ${
                    featured
                      ? 'object-contain object-center group-hover:scale-[1.03]'
                      : 'object-cover object-top group-hover:scale-105'
                  }`}
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/40 backdrop-blur-sm rounded-full p-2.5">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </span>
                </span>
              </button>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ── Lightbox ── */}
      {isOpen && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotos"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          {/* Cerrar */}
          <button
            onClick={close}
            aria-label="Cerrar galería"
            className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Contador */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-bold tracking-[0.25em] uppercase select-none">
            {active + 1} / {images.length}
          </div>

          {/* Anterior */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Foto anterior"
            className="absolute left-3 md:left-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Imagen */}
          <div
            className="relative w-[88vw] h-[78vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              className="object-contain"
              sizes="88vw"
            />
          </div>

          {/* Siguiente */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Foto siguiente"
            className="absolute right-3 md:right-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Caption */}
          {images[active].alt && (
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-sm text-center max-w-sm px-4 select-none">
              {images[active].alt}
            </p>
          )}
        </div>
      )}
    </>
  );
}
