import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  className?: string;
}

export default function NavItem({ label, href, active = false, className = '' }: NavItemProps) {
  return (
    <li className={className}>
      <Link href={href} aria-current={active ? 'page' : undefined}>
        {label}
      </Link>
    </li>
  );
}
