import MainLayout from './_components/templates/MainLayout/MainLayout';
import HeroSection from './_components/organisms/HeroSection/HeroSection';

export default function HomePage() {
  return (
    <MainLayout currentPath="/">
      <HeroSection
        title="Welcome to Antorcha"
        subtitle="A community of faith, hope, and love."
        ctaLabel="Join Us"
        ctaHref="/history"
      />
    </MainLayout>
  );
}
