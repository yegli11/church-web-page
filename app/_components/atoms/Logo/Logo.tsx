interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={className}>
      <span>Antorcha</span>
    </div>
  );
}
