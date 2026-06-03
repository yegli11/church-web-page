import MainLayout from '../_components/templates/MainLayout/MainLayout';
import Heading from '../_components/atoms/Heading/Heading';
import Text from '../_components/atoms/Text/Text';

export default function DepartmentsPage() {
  return (
    <MainLayout currentPath="/departments">
      <section>
        <Heading level={1}>Departments</Heading>
        <Text>Content coming soon.</Text>
      </section>
    </MainLayout>
  );
}
