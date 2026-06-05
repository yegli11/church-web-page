import type { Metadata } from 'next';
import MainLayout from '../_components/templates/MainLayout/MainLayout';
import PageBanner from '../_components/organisms/PageBanner/PageBanner';
import MinistriesShowcase from '../_components/organisms/MinistriesShowcase/MinistriesShowcase';
import { MINISTRIES } from '../_lib/ministries';

export const metadata: Metadata = {
  title: 'Ministerios',
  description:
    'Conoce los ministerios de la Iglesia Evangélica Antorcha de Cristo: espacios para servir, congregarnos y compartir el amor de Cristo con la comunidad.',
  alternates: { canonical: '/ministerios' },
  openGraph: {
    title: 'Ministerios | Iglesia Evangélica Antorcha de Cristo',
    description:
      'Espacios para servir, congregarnos y compartir el amor de Cristo.',
    url: '/ministerios',
  },
};

const BANNER_IMAGES = [
  { src: '/images/ministries/mujer-intercesora-image.jpg', alt: 'Ministerio de mujeres intercesoras' },
  { src: '/images/ministries/recreacion-image.jpg', alt: 'Ministerio de recreación' },
  { src: '/images/ministries/vigilancia-image.jpg', alt: 'Ministerio de vigilancia' },
  { src: '/images/ministries/protocolo-image.jpg', alt: 'Ministerio de protocolo' },
  { src: '/images/ministries/conexion-image.jpg', alt: 'Ministerio de conexión' },
  { src: '/images/ministries/infantil-image.jpg', alt: 'Ministerio infantil' },
];

const SHOWCASE_MINISTRIES = MINISTRIES.map((m) => ({
  title: m.name,
  imageSrc: m.cover,
  imageAlt: `Ministerio de ${m.name}`,
  href: `/ministerios/${m.slug}`,
}));

export default function MinisteriosPage() {
  return (
    <MainLayout>
      <PageBanner
        title="Ministerios"
        images={BANNER_IMAGES}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Ministerios' },
        ]}
      />

      <MinistriesShowcase
        heading={
          <>
            Descubre el lugar donde Dios quiere usarte. Conoce nuestros{' '}
            <strong>ministerios</strong> y encuentra dónde crecer, servir y
            conectar con tu <strong>familia</strong> en la fe.
          </>
        }
        ministries={SHOWCASE_MINISTRIES}
      />
    </MainLayout>
  );
}
