'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../atoms/Logo/Logo';
import { MINISTRIES } from '../../../_lib/ministries';

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
      { label: 'Educación Cristiana (E.B.D)', href: '/departamentos#educacion-cristiana' },
      { label: 'Fundación Nehemías', href: '/departamentos#fundacion-nehemias' },
      { label: 'Grupos de Propósito y Servicios (GPS)', href: '/departamentos#gps' },
      { label: 'Junta Financiera', href: '/departamentos#junta-financiera' },
      { label: 'Junta Pastoral', href: '/departamentos#junta-pastoral' },
      { label: 'Cuerpo Directivo', href: '/departamentos#cuerpo-directivo' },
      { label: 'ALFA - Altar Familiar', href: '/departamentos#alfa' },
    ],
  },
  {
    label: 'Ministerios',
    href: '/ministerios',
    dropdown: [
      { label: 'Ver todos', href: '/ministerios' },
      ...MINISTRIES.map((m) => ({ label: m.name, href: `/ministerios/${m.slug}` })),
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: 'WhatsApp',
    href: 'https://chat.whatsapp.com/COLOCA-TU-LINK-AQUI',
    hoverColor: '#25D366',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@antorchadc',
    hoverColor: '#FF0000',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/antorchadc',
    hoverColor: '#1877F2',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/antorchadc',
    hoverColor: '#E1306C',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'Correo electrónico',
    href: 'mailto:iglesiaantorchadc@gmail.com',
    hoverColor: '#EA4335',
    path: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z',
  },
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

  const toggleDropdown = (href: string) =>
    setOpenDropdown((prev) => (prev === href ? null : href));

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <header className="bg-[#e8e8e8] shadow-sm sticky top-0 z-50">
      {/* Capa invisible para cerrar dropdown al hacer click fuera */}
      {openDropdown && (
        <div className="fixed inset-0 z-40" onClick={closeDropdown} aria-hidden="true" />
      )}

      <div className="w-full px-6 h-16 flex items-center gap-4">

        {/* Logo — left */}
        <Link href="/" aria-label="Ir al inicio" className="flex-shrink-0" onClick={closeDropdown}>
          <Logo />
        </Link>

        {/* Desktop nav — centered */}
        <nav aria-label="Navegación principal" className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative z-50">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.href)}
                      aria-expanded={openDropdown === link.href}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 ${navBase} ${isActive(link.href) ? navActive : navInactive}`}
                    >
                      {link.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.href ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openDropdown === link.href && (() => {
                      const isLong = (link.dropdown?.length ?? 0) > 10;
                      return (
                        <ul
                          role="menu"
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50 min-w-[260px] ${
                            isLong ? 'max-h-72 overflow-y-auto' : ''
                          }`}
                        >
                          {link.dropdown.map((item, idx) => (
                            <li
                              key={item.href}
                              role="none"
                              className={idx === 0 && isLong ? 'border-b border-gray-100' : ''}
                            >
                              <Link
                                href={item.href}
                                role="menuitem"
                                onClick={closeDropdown}
                                className={`block px-4 ${isLong ? 'py-1.5 text-[11px]' : 'py-2 whitespace-nowrap'} ${navBase} ${
                                  idx === 0 && isLong
                                    ? 'text-center text-[#060773]'
                                    : 'text-[#7B817F] hover:bg-gray-50 hover:text-[#4a4f4d]'
                                }`}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      );
                    })()}
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

        {/* Desktop social icons — right */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              className="text-[#9CA3AF] transition-all duration-200 hover:text-[var(--brand)] hover:scale-125"
              style={{ '--brand': s.hoverColor } as React.CSSProperties}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

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

          {/* Mobile social icons */}
          <div className="flex items-center justify-center gap-6 py-4 border-t border-gray-300">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="text-[#9CA3AF] hover:text-[#4a4f4d] transition-all duration-200 hover:scale-125"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
