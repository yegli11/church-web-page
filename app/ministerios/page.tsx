import type { Metadata } from 'next';
import MainLayout from '../_components/templates/MainLayout/MainLayout';
import Heading from '../_components/atoms/Heading/Heading';
import Text from '../_components/atoms/Text/Text';

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

export default function MinisteriosPage() {
  return (
    <MainLayout>
      <section>
        <Heading level={1}>Ministerios</Heading>
        <Text>Contenido próximamente.</Text>
      </section>
    </MainLayout>
  );
}
