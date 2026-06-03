import MainLayout from '../_components/templates/MainLayout/MainLayout';
import Heading from '../_components/atoms/Heading/Heading';
import Text from '../_components/atoms/Text/Text';

export default function HistoryPage() {
  return (
    <MainLayout currentPath="/history">
      <section>
        <Heading level={1}>Our History</Heading>
        <Text>Content coming soon.</Text>
      </section>
    </MainLayout>
  );
}
