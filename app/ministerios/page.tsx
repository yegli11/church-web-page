import type { Metadata } from 'next';
import MainLayout from '../_components/templates/MainLayout/MainLayout';
import PageBanner from '../_components/organisms/PageBanner/PageBanner';
import MinistriesShowcase from '../_components/organisms/MinistriesShowcase/MinistriesShowcase';

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

// Fotos de personas usadas como portadas provisionales de cada ministerio.
const PEOPLE_IMAGES = [
  '/images/people/pastor1-image.jpg',
  '/images/people/pastor2-image.jpg',
  '/images/people/pedro-image.jpg',
  '/images/people/worship-image.jpg',
  '/images/people/bladimir-image.jpg',
  '/images/people/marina-image.jpg',
  '/images/people/franklin-image.jpg',
  '/images/people/yeniret-image.jpg',
  '/images/people/roberto-image.jpg',
  '/images/people/maylit-image.jpg',
  '/images/people/joseMarin-image.jpg',
  '/images/people/ochi-image.jpg',
  '/images/people/maria-image.jpg',
];

const MINISTRY_NAMES = [
  'Protocolo',
  'Ujieres',
  'Vigilancia',
  'Transporte',
  'Musical',
  'Ayuno y oración',
  'Hombres intercesores',
  'Mujeres intercesoras',
  'Evangelismo estratégico',
  'Recreación con propósito',
  'Sonido',
  'Conexión juvenil',
  'Femenil',
  'Crecimiento y desarrollo espiritual',
  'Infantil',
  'Consejería',
  'Restauración y crecimiento espiritual',
  'Eventos especiales',
  'Multimedia',
];

const MINISTRIES = MINISTRY_NAMES.map((title, i) => ({
  title,
  imageSrc: PEOPLE_IMAGES[i % PEOPLE_IMAGES.length],
  imageAlt: `Ministerio de ${title}`,
  href: '#',
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
        ministries={MINISTRIES}
      />
    </MainLayout>
  );
}
