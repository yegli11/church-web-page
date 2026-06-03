import MainLayout from './_components/templates/MainLayout/MainLayout';
import HeroSection from './_components/organisms/HeroSection/HeroSection';

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection
        title="Bienvenidos a Antorcha de Cristo"
        subtitle="Una comunidad de fe, esperanza y amor."
        ctaLabel="Conócenos"
        ctaHref="/history"
      />
    </MainLayout>
  );
}
