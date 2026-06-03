'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface DeaconessMember {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  email?: string;
}

interface DeaconessSectionProps {
  title: string;
  members: DeaconessMember[];
  variant?: 'light' | 'dark';
  imageHeight?: number;
  cardMaxWidth?: number;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return isMobile;
}

function MemberCard({ member, imageHeight, isDark }: {
  member: DeaconessMember;
  imageHeight: number;
  isDark: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-sm" style={{ height: `${imageHeight}px` }}>
        <Image src={member.imageSrc} alt={member.imageAlt} fill className="object-cover object-top" />
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
      <p className={`text-lg font-semibold text-center ${isDark ? 'text-white' : 'text-[#7B817F]'}`}>{member.name}</p>
      <p className={`text-sm font-bold tracking-widest uppercase ${isDark ? 'text-white' : 'text-[#060773]'}`}>{member.role}</p>
    </div>
  );
}

export default function DeaconessSection({
  title,
  members,
  variant = 'light',
  imageHeight = 580,
  cardMaxWidth = 500,
}: DeaconessSectionProps) {
  const isDark = variant === 'dark';
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = members.length - 1;

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  const sectionStyle = isDark ? {
    backgroundImage: 'url(/images/backgrounds/background-blue-grainy.png)',
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center' as const,
  } : {};

  const sectionClass = isDark
    ? 'px-4 py-4'
    : 'bg-church-bg py-12 px-6 md:px-14';

  const innerClass = isDark
    ? 'rounded-2xl overflow-hidden px-6 sm:px-8 md:px-12 py-10'
    : '';

  const titleClass = isDark
    ? 'text-2xl md:text-3xl font-bold text-white mb-8'
    : 'text-3xl md:text-4xl font-bold mb-10';

  const titleStyle = isDark ? {} : { color: '#060773' };

  const content = (
    <>
      <h2 className={titleClass} style={titleStyle}>{title}</h2>

      {/* Mobile carousel */}
      {isMobile ? (
        <div>
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${activeIndex} * (100% + 16px)))` }}
            >
              {members.map((member, i) => (
                <div key={i} className="flex-shrink-0 w-full">
                  <MemberCard member={member} imageHeight={imageHeight} isDark={isDark} />
                </div>
              ))}
            </div>
          </div>
          {/* Arrows + dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} disabled={activeIndex === 0} aria-label="Anterior"
              className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all disabled:opacity-30
                ${isDark ? 'border-white/50 text-white hover:bg-white/20' : 'border-[#060773]/50 text-[#060773] hover:bg-[#060773]/10'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {members.map((_, i) => (
                <button key={i} onClick={() => setActiveIndex(i)} aria-label={`Ir a ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300
                    ${i === activeIndex
                      ? `w-6 ${isDark ? 'bg-white' : 'bg-[#060773]'}`
                      : `w-2 ${isDark ? 'bg-white/40' : 'bg-[#060773]/30'}`}`}
                />
              ))}
            </div>
            <button onClick={next} disabled={activeIndex >= maxIndex} aria-label="Siguiente"
              className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all disabled:opacity-30
                ${isDark ? 'border-white/50 text-white hover:bg-white/20' : 'border-[#060773]/50 text-[#060773] hover:bg-[#060773]/10'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        /* Desktop grid */
        <div className={`flex flex-row gap-6 ${isDark ? 'justify-center' : ''}`}>
          {members.map((member, i) => (
            <div key={i} className={isDark ? 'flex-1' : 'flex-1'} style={isDark ? { maxWidth: `${cardMaxWidth}px` } : {}}>
              <MemberCard member={member} imageHeight={imageHeight} isDark={isDark} />
            </div>
          ))}
        </div>
      )}
    </>
  );

  if (isDark) {
    return (
      <section className={sectionClass}>
        <div className={innerClass} style={sectionStyle}>{content}</div>
      </section>
    );
  }

  return (
    <section className={sectionClass} style={sectionStyle}>
      {content}
    </section>
  );
}
