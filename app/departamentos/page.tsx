import type { Metadata } from 'next';
import MainLayout from '../_components/templates/MainLayout/MainLayout';
import PageBanner from '../_components/organisms/PageBanner/PageBanner';
import MinistriesShowcase from '../_components/organisms/MinistriesShowcase/MinistriesShowcase';
import { DEPARTAMENTOS } from '../_lib/departamentos';

export const metadata: Metadata = {
  title: 'Departamentos',
  description:
    'Descubre los departamentos de la Iglesia Evangélica Antorcha de Cristo: equipos que sirven en la educación cristiana, la administración y el cuidado de la congregación.',
  alternates: { canonical: '/departamentos' },
  openGraph: {
    title: 'Departamentos | Iglesia Evangélica Antorcha de Cristo',
    description:
      'Conoce los equipos y departamentos que sirven en nuestra iglesia.',
    url: '/departamentos',
  },
};

const BANNER_IMAGES = [
  { src: '/images/people/pastor1-image.jpg',      alt: 'Liderazgo de la iglesia' },
  { src: '/images/ministries/recreacion-image.jpg', alt: 'Comunidad en acción' },
  { src: '/images/ministries/conexion-image.jpg',  alt: 'Conexión y familia' },
];

export default function DepartamentosPage() {
  return (
    <MainLayout>
      <PageBanner
        title="Departamentos"
        subtitle="Los equipos que hacen posible la visión de la iglesia"
        images={BANNER_IMAGES}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Departamentos' },
        ]}
      />

      <MinistriesShowcase
        heading={
          <>
            Cada departamento es un pilar que sostiene la obra de Dios.
            Conoce los <strong>equipos</strong> que sirven con excelencia
            en nuestra <strong>iglesia</strong>.
          </>
        }
        ministries={DEPARTAMENTOS.map((d) => ({
          title: d.name,
          imageSrc: d.cover,
          imageAlt: d.name,
          href: `/departamentos#${d.slug}`,
        }))}
      />
    </MainLayout>
  );
}
