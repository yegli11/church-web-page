import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageUrl?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  backgroundImageUrl,
}: HeroSectionProps) {
  return (
    <section aria-label="Hero">
      <div>
        <Heading level={1}>{title}</Heading>
        {subtitle && <Text>{subtitle}</Text>}
        {ctaLabel && ctaHref && (
          <a href={ctaHref}>
            <Button>{ctaLabel}</Button>
          </a>
        )}
      </div>
    </section>
  );
}
