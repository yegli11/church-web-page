'use client';
import { useState } from 'react';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';
import type { MinistryPillar } from '../../../_lib/ministries';

const eyebrow = 'text-xs font-bold uppercase tracking-[0.25em] text-[#060773]';

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  mision: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  ),
  vision: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
  alcance: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  proposito: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  ),
  funciones: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />
    </svg>
  ),
};

export default function MissionPillars({ pillars }: { pillars: MinistryPillar[] }) {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <section className="bg-white px-6 md:px-10 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-14">
          <ScrollReveal direction="up">
            <p className={eyebrow}>Nuestra identidad</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1b]">
              Lo que nos define
            </h2>
          </ScrollReveal>
        </div>

        {/* Tab grid — 2×2 on mobile, dynamic cols on md+ */}
        <ScrollReveal direction="up" delay={100}>
          <div className={`grid gap-3 mb-10 grid-cols-2 ${pillars.length === 5 ? 'sm:grid-cols-3 md:grid-cols-5' : 'md:grid-cols-4'}`}>
            {pillars.map((pillar, i) => (
              <button
                key={pillar.id}
                onClick={() => setActive(i)}
                className={`group flex flex-col items-center gap-2.5 rounded-2xl border p-5 text-center transition-all duration-300 cursor-pointer ${
                  active === i
                    ? 'bg-[#060773] border-[#060773] text-white shadow-lg shadow-[#060773]/20 scale-[1.02]'
                    : 'bg-[#F8F8F8] border-gray-100 text-[#1a1a1b] hover:border-[#060773]/30 hover:bg-[#060773]/5 hover:-translate-y-0.5'
                }`}
              >
                <span className={`transition-colors duration-300 ${active === i ? 'text-white' : 'text-[#060773]'}`}>
                  {PILLAR_ICONS[pillar.id] ?? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </span>
                <span className="font-bold text-sm tracking-tight leading-tight">
                  {pillar.title}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content panel */}
        <ScrollReveal direction="up" delay={150}>
          <div className="relative rounded-3xl bg-[#F8F9FF] border border-[#060773]/10 px-8 py-10 md:px-14 md:py-14 overflow-hidden min-h-[220px]">

            {/* Decorative background number */}
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-2 text-[10rem] font-black text-[#060773]/[0.045] leading-none select-none pointer-events-none"
            >
              {`0${active + 1}`}
            </span>

            {/* Animated content — key forces remount → re-runs CSS animation */}
            <div key={active} className="animate-content-fade-up relative">
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#060773] text-white shadow-md">
                  {PILLAR_ICONS[current.id] ?? null}
                </div>
                <div>
                  {current.tagline && (
                    <p className={`${eyebrow} mb-1`}>{current.tagline}</p>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1b]">
                    {current.title}
                  </h3>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-[#7B817F] max-w-2xl">
                {current.description}
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
