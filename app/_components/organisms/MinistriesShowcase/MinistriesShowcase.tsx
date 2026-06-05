import MinistryCard from '../../molecules/MinistryCard/MinistryCard';

interface MinistryItem {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

interface MinistriesShowcaseProps {
  heading: React.ReactNode;
  ministries: MinistryItem[];
}

export default function MinistriesShowcase({ heading, ministries }: MinistriesShowcaseProps) {
  return (
    <section className="bg-church-bg px-4 md:px-8 lg:px-14 py-12 md:py-16">
      <h2 className="mx-auto mb-10 max-w-2xl text-center text-lg md:text-xl leading-relaxed text-[#7B817F]">
        {heading}
      </h2>

      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {ministries.map((ministry) => (
          <li key={ministry.title}>
            <MinistryCard
              title={ministry.title}
              imageSrc={ministry.imageSrc}
              imageAlt={ministry.imageAlt}
              href={ministry.href}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
