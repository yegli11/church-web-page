'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import PageBanner from '../PageBanner/PageBanner';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';
import MediaReel from '../MediaReel/MediaReel';
import TeamSection from '../TeamSection/TeamSection';
import MissionPillars from '../MissionPillars/MissionPillars';
import JoinSteps from '../JoinSteps/JoinSteps';
import type { Ministry, MinistryIcon } from '../../../_lib/ministries';

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = ['#FF5A00', '#FFCC00', '#FF62D7', '#2495FF', '#A6FE5A', '#00DBEE', '#FF9700', '#563CF3'];

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.58;
}

// ─── Animated counter ───────────────────────────────────────────────────────
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / 1400, 1);
            setCount(Math.round((1 - (1 - p) ** 3) * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Feature SVG icons ──────────────────────────────────────────────────────
const ICON_PATHS: Record<MinistryIcon, React.ReactNode> = {
  broadcast: <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 000 12.728m12.728 0a9 9 0 000-12.728M8.464 8.464a5 5 0 000 7.072m7.072 0a5 5 0 000-7.072M12 12h.01" />,
  projector: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M4 5v10a2 2 0 002 2h12a2 2 0 002-2V5M9 21h6m-3-4v4" />,
  design: <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3.536 3.536-6 6L9 17l-3 .5.5-3L9 11z" />,
  social: <path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />,
  camera: <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm9 3a3 3 0 100 6 3 3 0 000-6z" />,
  team: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a3 3 0 10-2.5-1.34" />,
  sparkles: <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5L13 1z" />,
  book: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />,
  heart: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />,
};

// ─── Decorative blobs ───────────────────────────────────────────────────────
function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-[0.10]" style={{ backgroundColor: '#FF62D7' }} />
      <div className="absolute top-1/2 -left-28 w-72 h-72 rounded-full opacity-[0.07]" style={{ backgroundColor: '#2495FF' }} />
      <div className="absolute -bottom-16 right-1/3 w-56 h-56 rounded-full opacity-[0.10]" style={{ backgroundColor: '#FFCC00' }} />
      <div className="absolute top-10 left-1/4 w-16 h-16 rounded-full opacity-25 animate-float-slow" style={{ backgroundColor: '#A6FE5A' }} />
      <div className="absolute bottom-20 left-14 w-11 h-11 rounded-full opacity-35 animate-float-slow-delay" style={{ backgroundColor: '#FF5A00' }} />
      <div className="absolute top-1/3 right-14 w-9 h-9 rounded-full opacity-30 animate-float-slow" style={{ backgroundColor: '#00DBEE' }} />
      <div className="absolute bottom-12 right-1/4 w-7 h-7 rounded-full opacity-40 animate-float-fast" style={{ backgroundColor: '#563CF3' }} />
    </div>
  );
}

// ─── Wavy SVG divider ───────────────────────────────────────────────────────
function WaveDivider({ topColor, bottomColor }: { topColor: string; bottomColor: string }) {
  return (
    <div className="relative overflow-hidden leading-none" style={{ height: 56, backgroundColor: bottomColor }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <path d="M0,0 C480,56 960,0 1440,56 L1440,0 L0,0 Z" fill={topColor} />
      </svg>
    </div>
  );
}

// ─── Intro section ──────────────────────────────────────────────────────────
function KidsIntro({ ministry }: { ministry: Ministry }) {
  const [lead, ...rest] = ministry.description ?? [];
  return (
    <section className="relative bg-white px-6 md:px-10 py-20 md:py-28 overflow-hidden">
      <FloatingBlobs />
      <div className="relative mx-auto max-w-3xl text-center z-10">
        <ScrollReveal direction="up">
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] mb-8 text-white shadow-lg"
            style={{ backgroundColor: '#FF62D7' }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Ministerio Infantil
          </span>
        </ScrollReveal>
        {lead && (
          <ScrollReveal direction="up" delay={80}>
            <p className="text-2xl md:text-[2rem] font-light leading-snug tracking-tight text-[#1a1a1b]">
              {lead}
            </p>
          </ScrollReveal>
        )}
        {rest.map((p, i) => (
          <ScrollReveal key={i} direction="up" delay={180 + i * 100}>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#7B817F]">{p}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// ─── Stats as colored circles ───────────────────────────────────────────────
const STAT_COLORS = ['#FF5A00', '#2495FF', '#A6FE5A', '#FF62D7'];

function KidsStats({ stats }: { stats: NonNullable<Ministry['stats']> }) {
  return (
    <section className="px-6 py-16 md:py-20 overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="mx-auto max-w-4xl">
        <ScrollReveal direction="up">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] mb-12" style={{ color: '#2495FF' }}>
            Nuestro impacto
          </p>
        </ScrollReveal>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => {
            const color = STAT_COLORS[i % STAT_COLORS.length];
            const light = isLight(color);
            const fg = light ? '#1a1a1b' : '#ffffff';
            const fgMuted = light ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)';
            return (
              <li key={stat.label}>
                <ScrollReveal direction="up" delay={i * 100}>
                  <div
                    className="flex flex-col items-center justify-center aspect-square rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default"
                    style={{ backgroundColor: color }}
                  >
                    <dd className="text-3xl md:text-4xl font-black leading-none tabular-nums" style={{ color: fg }}>
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </dd>
                    <dt className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-center px-3 leading-snug" style={{ color: fgMuted }}>
                      {stat.label}
                    </dt>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// ─── Two-tone feature cards ─────────────────────────────────────────────────
function KidsFeatures({ features }: { features: NonNullable<Ministry['features']> }) {
  return (
    <section className="bg-white px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <ScrollReveal direction="up">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: '#FF9700' }}>
              Nuestro ministerio
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1b]">
              ¿Qué hacemos?
            </h2>
          </ScrollReveal>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const color = feature.color ?? PALETTE[i % PALETTE.length];
            const light = isLight(color);
            const fg = light ? '#1a1a1b' : '#ffffff';
            const iconBg = light ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.22)';
            return (
              <li key={feature.title}>
                <ScrollReveal direction="up" delay={(i % 3) * 80}>
                  <article className="group overflow-hidden rounded-3xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    {/* Colored top half */}
                    <div
                      className="flex flex-col items-center justify-center gap-3 px-6 py-8"
                      style={{ backgroundColor: color }}
                    >
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{ backgroundColor: iconBg }}
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={fg} strokeWidth={1.5} aria-hidden="true">
                          {ICON_PATHS[feature.icon]}
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-center" style={{ color: fg }}>
                        {feature.title}
                      </h3>
                    </div>
                    {/* White bottom half */}
                    <div className="px-6 py-5 bg-white">
                      <p className="text-sm leading-relaxed text-[#7B817F] text-center">{feature.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// ─── Quote + verse on purple bg ─────────────────────────────────────────────
function KidsVerse({ quote, verse }: { quote?: string; verse?: Ministry['verse'] }) {
  if (!quote && !verse) return null;
  return (
    <section className="relative px-6 md:px-10 py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#563CF3' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full opacity-20" style={{ backgroundColor: '#FF62D7' }} />
        <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full opacity-15" style={{ backgroundColor: '#FFCC00' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 bg-white" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center z-10">
        {quote && (
          <ScrollReveal direction="up">
            <span className="block text-7xl font-serif leading-none text-white/20 select-none mb-2" aria-hidden="true">"</span>
            <p className="text-2xl md:text-3xl font-light leading-snug tracking-tight text-white">
              {quote}
            </p>
          </ScrollReveal>
        )}
        {verse && (
          <ScrollReveal direction="up" delay={150}>
            <div className={quote ? 'mt-12 pt-12 border-t border-white/20' : ''}>
              <p className="text-xl md:text-2xl font-light italic leading-relaxed text-white/90">
                &ldquo;{verse.text}&rdquo;
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                {verse.reference}
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function KidsMinistryDetail({ ministry }: { ministry: Ministry }) {
  const heroImages = ministry.gallery?.length
    ? ministry.gallery
    : [{ src: ministry.cover, alt: ministry.name }];

  return (
    <>
      <PageBanner
        title={ministry.name}
        subtitle={ministry.tagline}
        images={heroImages}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Ministerios', href: '/ministerios' },
          { label: ministry.name },
        ]}
      />

      <KidsIntro ministry={ministry} />

      <WaveDivider topColor="#ffffff" bottomColor="#F7F7F7" />

      {ministry.stats?.length ? <KidsStats stats={ministry.stats} /> : null}

      <WaveDivider topColor="#F7F7F7" bottomColor="#ffffff" />

      {ministry.features?.length ? <KidsFeatures features={ministry.features} /> : null}

      <KidsVerse quote={ministry.quote} verse={ministry.verse} />

      {ministry.team?.length ? <TeamSection members={ministry.team} /> : null}

      {ministry.reel?.length ? (
        <MediaReel images={ministry.reel} label="Momentos capturados" colors={ministry.reelColors} />
      ) : null}

      {ministry.pillars?.length ? <MissionPillars pillars={ministry.pillars} /> : null}

      {ministry.steps?.length ? (
        <JoinSteps
          steps={ministry.steps}
          eyebrow={ministry.stepsEyebrow}
          title={ministry.stepsTitle}
        />
      ) : null}

      {/* Back link */}
      <div className="pt-16 pb-20 text-center" style={{ backgroundColor: '#F7F7F7' }}>
        <Link
          href="/ministerios"
          className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          style={{ backgroundColor: '#FF62D7' }}
        >
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Ver todos los ministerios
        </Link>
      </div>
    </>
  );
}
