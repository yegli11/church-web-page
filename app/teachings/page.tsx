import MainLayout from '../_components/templates/MainLayout/MainLayout';
import Heading from '../_components/atoms/Heading/Heading';
import Text from '../_components/atoms/Text/Text';

export default function TeachingsPage() {
  return (
    <MainLayout currentPath="/teachings">
      <section>
        <Heading level={1}>Teachings</Heading>
        <Text>Content coming soon.</Text>
      </section>
    </MainLayout>
  );
}
