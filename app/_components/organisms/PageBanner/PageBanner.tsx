'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  images: { src: string; alt: string }[];
  crumbs: Crumb[];
  intervalMs?: number;
}

export default function PageBanner({
  title,
  subtitle,
  images,
  crumbs,
  intervalMs = 5000,
}: PageBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <section className="relative mx-4 mt-4 rounded-2xl overflow-hidden h-[360px] md:h-[480px] lg:h-[560px]">
      {/* Bucle de imágenes con desvanecido */}
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Capa oscura para legibilidad y baja opacidad */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Título + breadcrumb abajo a la izquierda */}
      <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">{title}</h1>
        {subtitle && (
          <p className="mt-2 max-w-xl text-base md:text-lg text-white/90 drop-shadow">
            {subtitle}
          </p>
        )}
        <nav aria-label="Ruta de navegación" className="mt-3">
          <ol className="flex flex-wrap items-center gap-x-2 text-xs md:text-sm font-bold tracking-widest uppercase">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-2 text-white/60 select-none" aria-hidden="true">
                    |
                  </span>
                )}
                {crumb.href ? (
                  <Link href={crumb.href} className="text-white/90 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
