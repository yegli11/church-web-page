import Image from 'next/image';
import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';

interface ContentSectionProps {
  title: string;
  subtitle: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

export default function ContentSection({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
}: ContentSectionProps) {
  const isLeft = imagePosition === 'left';

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className={`max-w-5xl mx-auto flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>

        {/* Image */}
        <ScrollReveal direction={isLeft ? 'left' : 'right'} className="w-full md:w-2/5 flex-shrink-0">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-top"
            />
          </div>
        </ScrollReveal>

        {/* Text */}
        <ScrollReveal direction={isLeft ? 'right' : 'left'} delay={150} className="w-full md:w-3/5">
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-1"
            style={{ color: '#060773' }}
          >
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-[#7B817F] font-medium mb-6">
            {subtitle}
          </p>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base text-[#7B817F] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
