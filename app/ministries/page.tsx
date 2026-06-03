import MainLayout from '../_components/templates/MainLayout/MainLayout';
import Heading from '../_components/atoms/Heading/Heading';
import Text from '../_components/atoms/Text/Text';

export default function MinistriesPage() {
  return (
    <MainLayout currentPath="/ministries">
      <section>
        <Heading level={1}>Ministries</Heading>
        <Text>Content coming soon.</Text>
      </section>
    </MainLayout>
  );
}
