import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MainLayout from '../../_components/templates/MainLayout/MainLayout';
import MinistryDetail from '../../_components/organisms/MinistryDetail/MinistryDetail';
import { getMinistry, getMinistrySlugs } from '../../_lib/ministries';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getMinistrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ministry = getMinistry(slug);

  if (!ministry) {
    return { title: 'Ministerio no encontrado' };
  }

  const description =
    ministry.description?.[0] ??
    `Conoce el ministerio de ${ministry.name} en la Iglesia Evangélica Antorcha de Cristo.`;

  return {
    title: `${ministry.name} | Ministerios`,
    description,
    alternates: { canonical: `/ministerios/${ministry.slug}` },
    openGraph: {
      title: `${ministry.name} | Iglesia Evangélica Antorcha de Cristo`,
      description,
      url: `/ministerios/${ministry.slug}`,
      images: [{ url: ministry.cover, alt: ministry.name }],
    },
  };
}

export default async function MinistryPage({ params }: PageProps) {
  const { slug } = await params;
  const ministry = getMinistry(slug);

  if (!ministry) {
    notFound();
  }

  return (
    <MainLayout>
      <MinistryDetail ministry={ministry} />
    </MainLayout>
  );
}
