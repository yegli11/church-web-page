import ScrollReveal from '../../atoms/ScrollReveal/ScrollReveal';

interface OrganizationSectionProps {
  titleStart: string;
  titleHighlight: string;
  description: string;
}

export default function OrganizationSection({
  titleStart,
  titleHighlight,
  description,
}: OrganizationSectionProps) {
  return (
    <section className="bg-church-bg py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl font-light text-[#7B817F] mb-6">
            {titleStart}{' '}
            <span className="font-bold" style={{ color: '#060773' }}>
              {titleHighlight}
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <p className="text-sm md:text-base text-[#7B817F] leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
