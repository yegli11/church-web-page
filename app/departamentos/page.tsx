import type { Metadata } from 'next';
import MainLayout from '../_components/templates/MainLayout/MainLayout';
import Heading from '../_components/atoms/Heading/Heading';
import Text from '../_components/atoms/Text/Text';

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

export default function DepartamentosPage() {
  return (
    <MainLayout>
      <section>
        <Heading level={1}>Departamentos</Heading>
        <Text>Contenido próximamente.</Text>
      </section>
    </MainLayout>
  );
}
