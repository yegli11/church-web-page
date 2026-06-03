interface IconProps {
  name: string;
  size?: number;
  className?: string;
  alt?: string;
}

export default function Icon({ name, size = 24, className = '', alt = '' }: IconProps) {
  return (
    <span role="img" aria-label={alt} className={className} style={{ width: size, height: size }}>
      {name}
    </span>
  );
}
