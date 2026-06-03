interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export default function SocialLinks({ links, className = '' }: SocialLinksProps) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.platform}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            {link.platform}
          </a>
        </li>
      ))}
    </ul>
  );
}
