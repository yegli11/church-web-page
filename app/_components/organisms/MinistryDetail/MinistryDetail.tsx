import Image from 'next/image';
import Link from 'next/link';
import PageBanner from '../PageBanner/PageBanner';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';
import StatsRow from '../../molecules/StatsRow/StatsRow';
import MediaReel from '../MediaReel/MediaReel';
import GalleryLightbox from '../GalleryLightbox/GalleryLightbox';
import type { Ministry, MinistryIcon } from '../../../_lib/ministries';

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
