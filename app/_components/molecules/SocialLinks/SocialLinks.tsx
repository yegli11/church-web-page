type SocialPlatform = 'Facebook' | 'Instagram' | 'YouTube';

interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  iconClassName?: string;
}

function SocialIcon({ platform, className }: { platform: SocialPlatform; className?: string }) {
  const shared = { className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.5, 'aria-hidden': true as const };

  switch (platform) {
    case 'Facebook':
      return (
        <svg {...shared}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.5l.5-4H14V7a1 1 0 011-1h3V2z" />
        </svg>
      );
    case 'Instagram':
      return (
        <svg {...shared}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
        </svg>
      );
    case 'YouTube':
      return (
        <svg {...shared}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15.02l6.5-3.52-6.5-3.52v7.04z" />
        </svg>
      );
  }
}

export default function SocialLinks({ links, className = '', iconClassName = 'w-6 h-6' }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => (
        <li key={link.platform}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-white hover:text-white/80 transition-colors"
          >
            <SocialIcon platform={link.platform} className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export type { SocialLink, SocialPlatform };
