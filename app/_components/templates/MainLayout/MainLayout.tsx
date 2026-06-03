import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export default function MainLayout({ children, currentPath }: MainLayoutProps) {
  return (
    <>
      <Header currentPath={currentPath} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
