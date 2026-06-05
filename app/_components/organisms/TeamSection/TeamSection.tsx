import Image from 'next/image';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';
import type { MinistryTeamMember } from '../../../_lib/ministries';

function getInitials(name: string) {
  return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

function TeamCard({
  member,
  delay = 0,
}: {
  member: MinistryTeamMember;
  delay?: number;
}) {
  const bg = member.color ?? '#E5E7EB';

  return (
    <ScrollReveal direction="up" delay={delay}>
      <div className="group flex flex-col">
        {/* Foto con fondo de color */}
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ backgroundColor: bg, aspectRatio: '3/4' }}
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full items-end justify-center pb-6">
              <span className="select-none text-6xl font-bold text-black/20">
                {getInitials(member.name)}
              </span>
            </div>
          )}


        </div>

        {/* Info debajo */}
        <div className="mt-4 px-1">
          <h3 className="text-base font-bold leading-tight text-[#1a1a1b]">
            {member.name}
          </h3>
          <p className="mt-0.5 text-sm text-[#9CA3AF]">{member.role}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function TeamSection({ members }: { members: MinistryTeamMember[] }) {
  return (
    <section className="bg-white px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Encabezado */}
        <div className="mb-14 text-center">
          <ScrollReveal direction="up">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#060773]">
              Las personas detrás del ministerio
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1b]">
              Conoce nuestro equipo
            </h2>
          </ScrollReveal>
        </div>

        {/* Grid unificado — líderes primero */}
        <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          {members.map((member, i) => (
            <li key={member.name}>
              <TeamCard member={member} delay={(i % 5) * 60} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
