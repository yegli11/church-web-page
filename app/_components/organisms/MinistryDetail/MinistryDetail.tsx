import Image from 'next/image';
import Link from 'next/link';
import PageBanner from '../PageBanner/PageBanner';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';
import StatsRow from '../../molecules/StatsRow/StatsRow';
import MediaReel from '../MediaReel/MediaReel';
import GalleryLightbox from '../GalleryLightbox/GalleryLightbox';
import TeamSection from '../TeamSection/TeamSection';
import JoinSteps from '../JoinSteps/JoinSteps';
import type { Ministry, MinistryIcon, MinistrySocial } from '../../../_lib/ministries';

const blueBackground = {
  backgroundImage: 'url(/images/backgrounds/background-blue-grainy.png)',
  backgroundSize: 'cover' as const,
  backgroundPosition: 'center' as const,
};

const eyebrow = 'text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#060773]';

const ICON_PATHS: Record<MinistryIcon, React.ReactNode> = {
  broadcast: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 000 12.728m12.728 0a9 9 0 000-12.728M8.464 8.464a5 5 0 000 7.072m7.072 0a5 5 0 000-7.072M12 12h.01" />
  ),
  projector: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M4 5v10a2 2 0 002 2h12a2 2 0 002-2V5M9 21h6m-3-4v4" />
  ),
  design: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3.536 3.536-6 6L9 17l-3 .5.5-3L9 11z" />
  ),
  social: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
  ),
  camera: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm9 3a3 3 0 100 6 3 3 0 000-6z" />
  ),
  team: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a3 3 0 10-2.5-1.34" />
  ),
  sparkles: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5L13 1z" />
  ),
};

function FeatureIcon({ icon }: { icon: MinistryIcon }) {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      {ICON_PATHS[icon]}
    </svg>
  );
}

const SOCIAL_META: Record<MinistrySocial['platform'], { label: string; color: string; path: string }> = {
  youtube: {
    label: 'YouTube',
    color: '#FF0000',
    path: 'M23.5 6.19a3 3 0 0 0-2.1-2.12C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.4.57a3 3 0 0 0-2.1 2.12C0 8.08 0 12 0 12s0 3.92.5 5.81a3 3 0 0 0 2.1 2.12C4.49 20.5 12 20.5 12 20.5s7.51 0 9.4-.57a3 3 0 0 0 2.1-2.12C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
  },
  instagram: {
    label: 'Instagram',
    color: '#E1306C',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  facebook: {
    label: 'Facebook',
    color: '#1877F2',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  tiktok: {
    label: 'TikTok',
    color: '#000000',
    path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z',
  },
};

function SocialLinks({ socials }: { socials: MinistrySocial[] }) {
  return (
    <section className="bg-white px-6 md:px-10 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal direction="up">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#060773] mb-10">
            Síguenos en redes
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s, i) => {
            const meta = SOCIAL_META[s.platform];
            return (
              <ScrollReveal key={s.platform} direction="up" delay={i * 80}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  style={{ '--brand': meta.color } as React.CSSProperties}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-[#9CA3AF] transition-colors duration-300 group-hover:text-[var(--brand)]"
                    aria-hidden="true"
                  >
                    <path d={meta.path} />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#9CA3AF] leading-none mb-0.5">
                      {meta.label}
                    </p>
                    <p className="text-sm font-semibold text-[#1a1a1b]">{s.handle}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 ml-1 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ script, title }: { script: string; title: string }) {
  return (
    <ScrollReveal direction="up">
      <p className={eyebrow}>{script}</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1b]">{title}</h2>
    </ScrollReveal>
  );
}

export default function MinistryDetail({ ministry }: { ministry: Ministry }) {
  const heroImages = ministry.gallery?.length
    ? ministry.gallery
    : [{ src: ministry.cover, alt: ministry.name }];

  const [lead, ...rest] = ministry.description ?? [];
  const hasContent = Boolean(lead);

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

      {/* ── Introducción ── */}
      {hasContent ? (
        <section className="bg-church-bg px-6 md:px-10 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            {ministry.tagline && (
              <ScrollReveal direction="up">
                <p className={eyebrow}>{ministry.tagline}</p>
              </ScrollReveal>
            )}
            <ScrollReveal direction="up" delay={100}>
              <p className="mt-5 text-2xl md:text-[2rem] font-light leading-snug tracking-tight text-[#1a1a1b]">
                {lead}
              </p>
            </ScrollReveal>
            {rest.map((paragraph, i) => (
              <ScrollReveal key={i} direction="up" delay={200 + i * 100}>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-[#7B817F]">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </section>
      ) : (
        <section className="bg-church-bg px-6 py-24 text-center">
          <div className="mx-auto max-w-xl">
            <p className={eyebrow}>Muy pronto</p>
            <h2 className="mt-3 mb-4 text-2xl md:text-3xl font-bold text-[#1a1a1b]">
              {ministry.name}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#7B817F]">
              Estamos preparando el contenido de este ministerio. ¡Pronto
              conocerás más sobre cómo servimos y cómo puedes ser parte!
            </p>
          </div>
        </section>
      )}

      {/* ── Stats animados ── */}
      {ministry.stats?.length ? (
        <StatsRow stats={ministry.stats} />
      ) : null}

      {/* ── ¿Qué hacemos? — card grid ── */}
      {ministry.features?.length ? (
        <section className="bg-white px-6 md:px-10 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <SectionLabel script="Nuestro trabajo" title="¿Qué hacemos?" />
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {ministry.features.map((feature, i) => (
                <li key={feature.title}>
                  <ScrollReveal direction="up" delay={(i % 3) * 80}>
                    <article className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#060773]/20">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#060773]/[0.07] text-[#060773] transition-all duration-300 group-hover:bg-[#060773] group-hover:text-white group-hover:scale-110">
                        <FeatureIcon icon={feature.icon} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#1a1a1b] mb-1.5">{feature.title}</h3>
                        <p className="text-sm leading-relaxed text-[#7B817F]">{feature.description}</p>
                      </div>
                    </article>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ── Frase + Versículo ── */}
      {(ministry.quote || ministry.verse) && (
        <section className="bg-church-bg px-6 md:px-10 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            {ministry.quote && (
              <ScrollReveal direction="up">
                <p className="relative text-2xl md:text-3xl font-light leading-snug tracking-tight text-[#1a1a1b]">
                  <span className="absolute -top-6 -left-2 text-7xl font-serif leading-none text-[#060773]/10 select-none" aria-hidden="true">
                    "
                  </span>
                  {ministry.quote}
                </p>
              </ScrollReveal>
            )}
            {ministry.verse && (
              <ScrollReveal direction="up" delay={150}>
                <div className={`${ministry.quote ? 'mt-12 pt-12 border-t border-gray-200' : ''}`}>
                  <p className="text-xl md:text-2xl font-light italic leading-relaxed text-[#1a1a1b]/80">
                    &ldquo;{ministry.verse.text}&rdquo;
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-[#060773]">
                    {ministry.verse.reference}
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* ── Equipo ── */}
      {ministry.team?.length ? (
        <TeamSection members={ministry.team} />
      ) : null}

      {/* ── Media Reel — franja de fotos ── */}
      {ministry.reel?.length ? (
        <MediaReel images={ministry.reel} label="Momentos capturados" />
      ) : null}

      {/* ── Galería con lightbox ── */}
      {ministry.gallery?.length ? (
        <section className="bg-church-bg px-6 md:px-10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <SectionLabel script="Momentos" title="Galería" />
            </div>
            <GalleryLightbox images={ministry.gallery} />
          </div>
        </section>
      ) : null}

      {/* ── ¿Cómo ser parte? ── */}
      {ministry.steps?.length ? (
        <JoinSteps steps={ministry.steps} />
      ) : null}

      {/* ── Redes sociales ── */}
      {ministry.socials?.length ? (
        <SocialLinks socials={ministry.socials} />
      ) : null}

      {/* ── CTA ── */}
      {ministry.cta ? (
        <section className="px-4 pb-16 md:pb-24">
          <div
            style={blueBackground}
            className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-16 md:px-16 md:py-24 text-center text-white shadow-lg"
          >
            <ScrollReveal direction="up">
              <h2 className="mx-auto mb-6 max-w-2xl text-3xl md:text-5xl font-bold tracking-tight">
                ¿Quieres formar parte?
              </h2>
              <p className="mx-auto max-w-xl text-base md:text-lg text-white/85 leading-relaxed">
                {ministry.cta}
              </p>
            </ScrollReveal>
          </div>
        </section>
      ) : null}

      {/* ── Volver ── */}
      <div className="bg-church-bg pb-16 text-center">
        <Link
          href="/ministerios"
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#060773]"
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
