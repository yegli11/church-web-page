interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  className?: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  className = '',
}: EventCardProps) {
  return (
    <article className={className}>
      <h3>{title}</h3>
      <time dateTime={date}>{date}</time>
      {time && <span>{time}</span>}
      {location && <address>{location}</address>}
      {description && <p>{description}</p>}
    </article>
  );
}
