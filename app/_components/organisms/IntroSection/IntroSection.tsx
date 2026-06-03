import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';

interface IntroSectionProps {
  headline: React.ReactNode;
  body: string;
}

export default function IntroSection({ headline, body }: IntroSectionProps) {
  return (
    <section className="bg-[#f4f4f4] py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <ScrollReveal direction="up">
          <p className="text-lg md:text-xl text-[#7B817F] leading-relaxed mb-4">
            {headline}
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <p className="text-sm md:text-base text-[#7B817F] leading-relaxed">
            {body}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
