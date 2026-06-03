import Link from 'next/link';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';

const EMAIL = 'iglesiaantorchadc@gmail.com';

const SOCIAL_LINKS = [
  { platform: 'Facebook' as const, href: '#', label: 'Visítanos en Facebook' },
  { platform: 'Instagram' as const, href: '#', label: 'Visítanos en Instagram' },
  { platform: 'YouTube' as const, href: '#', label: 'Visítanos en YouTube' },
];

const FOOTER_NAV = [
  { label: 'HOME', href: '/' },
  { label: 'CONTÁCTANOS', href: `mailto:${EMAIL}` },
];

const columnHeading = 'text-base font-bold text-white mb-3';
const columnBody = 'text-sm text-white/90 leading-relaxed';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full bg-[#1a1a1b] text-white rounded-t-[2rem] md:rounded-t-[2.5rem]">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12 lg:py-14">
        {/* Columnas principales */}
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:text-left lg:grid-cols-3 lg:gap-10">
          {/* Contáctanos */}
          <section id="contactanos" className="flex flex-col items-center md:items-start">
            <h3 className={columnHeading}>Contáctanos</h3>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-white underline underline-offset-2 hover:text-white/80 transition-colors"
            >
              {EMAIL}
            </a>
            <SocialLinks links={SOCIAL_LINKS} className="mt-4 justify-center md:justify-start" />
          </section>

          {/* Dirección */}
          <section className="flex flex-col items-center md:items-center lg:items-center">
            <h3 className={columnHeading}>Dirección</h3>
            <address className={`${columnBody} not-italic text-center`}>
              <span className="block">Carretera E, Av 18. Tia Juana. 4017</span>
              <span className="block">Tía Juana, Venezuela</span>
            </address>
          </section>

          {/* Horario */}
          <section className="flex flex-col items-center md:col-span-2 md:items-center lg:col-span-1">
            <h3 className={columnHeading}>Horario</h3>
            <div className={`${columnBody} text-center`}>
              <p>Domingo</p>
              <p>10:00 am - 12:00 pm</p>
            </div>
          </section>
        </div>

        {/* Navegación y copyright */}
        <div className="mt-10 md:mt-12 flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <nav aria-label="Enlaces del pie de página">
            <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-start text-xs font-bold tracking-widest uppercase">
              {FOOTER_NAV.map((item, index) => (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-white/50 select-none" aria-hidden="true">
                      |
                    </span>
                  )}
                  <Link
                    href={item.href}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-xs text-white/60">
            Iglesia Evangélica Antorcha de Cristo© {year} - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
