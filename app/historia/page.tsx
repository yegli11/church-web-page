import type { Metadata } from 'next';
import MainLayout from '../_components/templates/MainLayout/MainLayout';
import Heading from '../_components/atoms/Heading/Heading';
import Text from '../_components/atoms/Text/Text';

export const metadata: Metadata = {
  title: 'Historia',
  description:
    'Conoce la historia de la Iglesia Evangélica Antorcha de Cristo en Tía Juana, Venezuela: nuestros inicios, nuestra visión y el llamado que nos dio origen.',
  alternates: { canonical: '/historia' },
  openGraph: {
    title: 'Historia | Iglesia Evangélica Antorcha de Cristo',
    description:
      'Conoce la historia y la visión de la Iglesia Evangélica Antorcha de Cristo en Tía Juana, Venezuela.',
    url: '/historia',
  },
};

export default function HistoriaPage() {
  return (
    <MainLayout>
      <section>
        <Heading level={1}>Historia</Heading>
        <Text>Contenido próximamente.</Text>
      </section>
    </MainLayout>
  );
}
