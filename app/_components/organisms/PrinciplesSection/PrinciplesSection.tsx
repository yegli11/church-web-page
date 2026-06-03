import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';

interface PrinciplesSectionProps {
  title: string;
  description: string;
}

export default function PrinciplesSection({ title, description }: PrinciplesSectionProps) {
  return (
    <section className="px-4 py-6">
      <div
        className="relative rounded-2xl overflow-hidden min-h-[420px] flex flex-col items-center justify-start pt-16 px-6 text-white text-center"
        style={{
          backgroundImage: 'url(/images/backgrounds/background-blue-grainy.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <p className="text-sm md:text-base max-w-lg leading-relaxed text-white/90">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
