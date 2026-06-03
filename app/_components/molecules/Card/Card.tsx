interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  children,
  className = '',
}: CardProps) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
