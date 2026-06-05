import type { Metadata } from 'next';
import MainLayout from '../_components/templates/MainLayout/MainLayout';
import Heading from '../_components/atoms/Heading/Heading';
import Text from '../_components/atoms/Text/Text';

export const metadata: Metadata = {
  title: 'Enseñanzas',
  description:
    'Enseñanzas bíblicas de la Iglesia Evangélica Antorcha de Cristo: prédicas, estudios y recursos para crecer en la fe y conocer la Palabra de Dios.',
  alternates: { canonical: '/ensenanzas' },
  openGraph: {
    title: 'Enseñanzas | Iglesia Evangélica Antorcha de Cristo',
    description:
      'Prédicas, estudios bíblicos y recursos para crecer en la fe.',
    url: '/ensenanzas',
  },
};

export default function EnsenanzasPage() {
  return (
    <MainLayout>
      <section>
        <Heading level={1}>Enseñanzas</Heading>
        <Text>Contenido próximamente.</Text>
      </section>
    </MainLayout>
  );
}
