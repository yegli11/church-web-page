'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../../atoms/Logo/Logo';
import NavItem from '../../molecules/NavItem/NavItem';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'History', href: '/history' },
  { label: 'Teachings', href: '/teachings' },
  { label: 'Departments', href: '/departments' },
  { label: 'Ministries', href: '/ministries' },
];

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = '/' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div>
        <Link href="/" aria-label="Go to homepage">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.href}
                label={link.label}
                href={link.href}
                active={currentPath === link.href}
              />
            ))}
          </ul>
        </nav>

        {/* Hamburger button */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.href}
                label={link.label}
                href={link.href}
                active={currentPath === link.href}
              />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
