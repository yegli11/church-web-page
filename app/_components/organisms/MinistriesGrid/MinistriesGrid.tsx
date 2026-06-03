import Card from '../../molecules/Card/Card';

interface Ministry {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface MinistriesGridProps {
  ministries: Ministry[];
  className?: string;
}

export default function MinistriesGrid({ ministries, className = '' }: MinistriesGridProps) {
  return (
    <section aria-label="Ministries" className={className}>
      <ul>
        {ministries.map((ministry) => (
          <li key={ministry.id}>
            <Card title={ministry.title} description={ministry.description} />
          </li>
        ))}
      </ul>
    </section>
  );
}
