import Image from 'next/image';

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  topText: string;
  scriptText: string;
}

export default function HeroSection({ imageSrc, imageAlt, topText, scriptText }: HeroSectionProps) {
  return (
    <section className="relative mx-4 mt-4 rounded-2xl overflow-hidden h-[480px] md:h-[560px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-top"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text overlay — centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="flex flex-col items-center font-semibold">
          <span className="text-3xl md:text-4xl drop-shadow-md leading-none mb-0">
            {topText}
          </span>
          <span
            className="text-8xl md:text-[120px] font-normal leading-none drop-shadow-lg -mt-5"
            style={{ fontFamily: 'var(--font-great-vibes)' }}
          >
            {scriptText}
          </span>
        </h1>
      </div>
    </section>
  );
}
