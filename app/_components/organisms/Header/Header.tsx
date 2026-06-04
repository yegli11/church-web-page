'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../atoms/Logo/Logo';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const NAV_LINKS: NavLink[] = [
  { label: 'Somos IADC', href: '/' },
  { label: 'Historia', href: '/historia' },
  { label: 'Enseñanzas', href: '/ensenanzas' },
  {
    label: 'Departamentos',
    href: '/departamentos',
    dropdown: [
      { label: 'Ver todos', href: '/departamentos' },
    ],
  },
  { label: 'Ministerios', href: '/ministerios' },
];

const navBase = 'text-sm font-bold tracking-wide uppercase transition-colors';
const navInactive = 'text-[#7B817F] hover:text-[#4a4f4d]';
const navActive = 'text-[#4a4f4d] border-b-2 border-[#7B817F] pb-0.5';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="bg-[#e8e8e8] shadow-sm sticky top-0 z-50">
      <div className="w-full px-6 h-16 flex items-center">

        {/* Logo — left edge */}
        <Link href="/" aria-label="Ir al inicio" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav — centered */}
        <nav aria-label="Navegación principal" className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                {link.dropdown ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      aria-expanded={openDropdown === link.href}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 ${navBase} ${isActive(link.href) ? navActive : navInactive}`}
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform ${openDropdown === link.href ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openDropdown === link.href && (
                      <ul
                        role="menu"
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[180px] bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50"
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.href} role="none">
                            <Link
                              href={item.href}
                              role="menuitem"
                              className={`block px-4 py-2 ${navBase} text-[#7B817F] hover:bg-gray-50 hover:text-[#4a4f4d]`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`${navBase} ${isActive(link.href) ? navActive : navInactive}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger — right */}
        <button
          className="md:hidden ml-auto p-2 rounded text-[#7B817F] hover:text-[#4a4f4d] hover:bg-gray-200 transition-colors"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="md:hidden border-t border-gray-300 bg-[#e8e8e8]"
        >
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-3 ${navBase} ${isActive(link.href) ? 'text-[#4a4f4d] bg-gray-200' : 'text-[#7B817F] hover:bg-gray-200 hover:text-[#4a4f4d]'}`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <ul className="bg-gray-100">
                    {link.dropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`block pl-10 pr-6 py-2 ${navBase} text-[#7B817F] hover:bg-gray-200 hover:text-[#4a4f4d] transition-colors`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
