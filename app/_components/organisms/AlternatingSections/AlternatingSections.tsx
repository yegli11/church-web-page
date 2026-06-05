import Image from 'next/image';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';
import type { MinistrySection } from '../../../_lib/ministries';

const eyebrow = 'text-xs font-bold uppercase tracking-[0.25em] text-[#060773] mb-3';

export default function AlternatingSections({ sections }: { sections: MinistrySection[] }) {
  return (
    <div>
      {sections.map((section, i) => {
        const flip = i % 2 === 1;
        const bg = i % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F8]';

        return (
          <section key={section.title} className={`${bg} px-6 md:px-10 py-16 md:py-24`}>
            <div
              className={`mx-auto max-w-5xl flex flex-col gap-10 md:gap-16 md:items-center md:flex-row ${
                flip ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* ── Text ── */}
              <div className="flex-1">
                <ScrollReveal direction={flip ? 'right' : 'left'}>
                  {section.eyebrow && (
                    <p className={eyebrow}>{section.eyebrow}</p>
                  )}
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1a1a1b] leading-snug mb-5">
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-[#7B817F]">
                    {section.text}
                  </p>
                </ScrollReveal>
              </div>

              {/* ── Image ── */}
              <div className="w-full md:w-[46%] flex-shrink-0">
                <ScrollReveal direction={flip ? 'left' : 'right'}>
                  <div
                    className="relative w-full rounded-3xl overflow-hidden shadow-lg"
                    style={{ aspectRatio: '3 / 4' }}
                  >
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? section.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
