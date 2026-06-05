import Image from 'next/image';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';

interface PastorSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  role: string;
  instagramUrl?: string;
}

export default function PastorSection({
  title,
  description,
  imageSrc,
  imageAlt,
  name,
  role,
  instagramUrl = '#',
}: PastorSectionProps) {
  return (
    <section className="px-4 py-4">
      <div
        className="relative rounded-2xl overflow-hidden px-10 md:px-20 py-16"
        style={{
          backgroundImage: 'url(/images/backgrounds/background-blue-grainy.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">

          {/* Text — left */}
          <ScrollReveal direction="left" className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
            <p className="text-base md:text-lg leading-relaxed text-white/85">{description}</p>
          </ScrollReveal>

          {/* Photo — right */}
          <ScrollReveal direction="right" delay={150} className="flex-shrink-0 flex flex-col items-center gap-3">
            <div className="relative w-72 md:w-120 aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-top"
              />
              {/* Instagram icon */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram de ${name}`}
                className="absolute bottom-3 right-3 bg-[#060773] rounded-full p-1.5 hover:opacity-80 transition-opacity"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p className="text-white text-base font-medium">{name}</p>
            <p className="text-white text-sm font-bold tracking-widest uppercase">{role}</p>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
