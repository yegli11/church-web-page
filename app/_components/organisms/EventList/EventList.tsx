import EventCard from '../../molecules/EventCard/EventCard';

interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
}

interface EventListProps {
  events: Event[];
  className?: string;
}

export default function EventList({ events, className = '' }: EventListProps) {
  if (events.length === 0) {
    return <p>No upcoming events.</p>;
  }

  return (
    <section aria-label="Events" className={className}>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <EventCard
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
