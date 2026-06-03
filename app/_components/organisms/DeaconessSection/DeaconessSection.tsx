import Image from 'next/image';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';

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
}

function MemberCard({ member, imageHeight, isDark }: {
  member: DeaconessMember;
  imageHeight: number;
  isDark: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-sm" style={{ height: `${imageHeight}px` }}>
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
      <p className={`text-lg font-semibold text-center ${isDark ? 'text-white' : 'text-[#7B817F]'}`}>
        {member.name}
      </p>
      <p className={`text-sm font-bold tracking-widest uppercase ${isDark ? 'text-white' : 'text-[#060773]'}`}>
        {member.role}
      </p>
    </div>
  );
}

export default function DeaconessSection({
  title,
  members,
  variant = 'light',
  imageHeight = 580,
}: DeaconessSectionProps) {
  const isDark = variant === 'dark';

  if (isDark) {
    return (
      <section className="px-4 py-4">
        <div
          className="rounded-2xl overflow-hidden px-8 md:px-12 py-10"
          style={{
            backgroundImage: 'url(/images/backgrounds/background-blue-grainy.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <ScrollReveal direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{title}</h2>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {members.map((member, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} className="w-full md:w-[580px] flex-shrink-0">
                <MemberCard member={member} imageHeight={imageHeight} isDark={true} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f4f4f4] py-12 px-6 md:px-14">
      <ScrollReveal direction="up">
        <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: '#060773' }}>
          {title}
        </h2>
      </ScrollReveal>
      <div className="flex flex-col md:flex-row gap-6">
        {members.map((member, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 100} className="flex-1">
            <MemberCard member={member} imageHeight={imageHeight} isDark={false} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
