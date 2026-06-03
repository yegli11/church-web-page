import MainLayout from './_components/templates/MainLayout/MainLayout';
import HeroSection from './_components/organisms/HeroSection/HeroSection';
import IntroSection from './_components/organisms/IntroSection/IntroSection';
import ContentSection from './_components/organisms/ContentSection/ContentSection';
import PrinciplesSection from './_components/organisms/PrinciplesSection/PrinciplesSection';
import OrganizationSection from './_components/organisms/OrganizationSection/OrganizationSection';
import PastorSection from './_components/organisms/PastorSection/PastorSection';
import PastoralBoardSection from './_components/organisms/PastoralBoardSection/PastoralBoardSection';
import FinancialBoardSection from './_components/organisms/FinancialBoardSection/FinancialBoardSection';
import DeaconessSection from './_components/organisms/DeaconessSection/DeaconessSection';

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection
        imageSrc="/images/backgrounds/a-place-you-belong.jpg"
        imageAlt="Congregación de la Iglesia Evangélica Antorcha de Cristo"
        topText="Un lugar donde tú"
        scriptText="perteneces"
      />

      <IntroSection
        headline={
          <>
            <strong>¡Hola!</strong> Queremos presentarnos y compartir
            contigo el <strong>fundamento</strong> de esta iglesia:
          </>
        }
        body="En Antorcha de Cristo creemos en Jesús como nuestra esperanza y salvación.
              Amamos profundamente a Dios y buscamos reflejar ese amor en cada persona."
      />

      <ContentSection
        title="Propósito Ministerial:"
        subtitle="Responder bíblicamente a la vida"
        imageSrc="/images/people/pastor2-image.jpg"
        imageAlt="Pastor predicando en Antorcha de Cristo"
        imagePosition="left"
        paragraphs={[
          'En Antorcha de Cristo creemos en Jesús como nuestra esperanza y salvación. Amamos profundamente a Dios y buscamos reflejar ese amor en cada persona. En Antorcha de Cristo creemos en Jesús como nuestra esperanza y sal.',
          'En Antorcha de Cristo creemos en Jesús como nuestra esperanza y salvación. Amamos profundamente a Dios y buscamos reflejar ese amor en cada persona. En Antorcha de Cristo creemos en Jesús como nuestra esperanza y sal.',
        ]}
      />

      <ContentSection
        title="Misión:"
        subtitle="Reconciliar al mundo con Dios."
        imageSrc="/images/people/worship-image.jpg"
        imageAlt="Congregación adorando a Dios"
        imagePosition="right"
        paragraphs={[
          'En Antorcha de Cristo creemos en Jesús como nuestra esperanza y salvación. Amamos profundamente a Dios y buscamos reflejar ese amor en cada persona. En Antorcha de Cristo creemos en Jesús como nuestra esperanza y sal.',
          'En Antorcha de Cristo creemos en Jesús como nuestra esperanza y salvación. Amamos profundamente a Dios y buscamos reflejar ese amor en cada persona. En Antorcha de Cristo creemos en Jesús como nuestra esperanza y sal.',
        ]}
      />

      <PrinciplesSection
        title="Nuestros principios"
        description="Transformados por su gracia, vivimos para adorar con autenticidad, edificar la iglesia local y llevar el mensaje de su reino a cada rincón de la tierra."
      />

      <OrganizationSection
        titleStart="Conoce cómo nos"
        titleHighlight="organizamos"
        description="La Iglesia Evangélica Antorcha de Cristo está formada por diferentes equipos y ministerios que trabajan juntos para servir y compartir el amor de Cristo. Cada área tiene su propio enfoque y forma parte de nuestra visión general de llevar el evangelio a todas las personas."
      />

      <PastorSection
        title="Pastor Principal"
        description="Toda gran historia de fe comienza con un sí. El pastor Danny Sierra, junto a su amada esposa Maylit de Sierra y sus hijos —Danny José Sierra, Danny David Sierra y Mayinot Sierra—, vivían en otro lugar cuando Dios habló a sus corazones con un propósito claro: dejar lo conocido para responder a un llamado mayor.
Fue así como, en el año 2012, esta familia obediente fue establecida al frente de la Iglesia Evangélica Antorcha de Cristo, ubicada en Tía Juana, estado Zulia. No llegaron buscando comodidad, sino dispuestos a servir, a entregarse por completo y a guiar al pueblo de Dios con amor y fidelidad."
        imageSrc="/images/people/pastor1-image.jpg"
        imageAlt="Pastor principal de Antorcha de Cristo"
        name="Danny Sierra"
        role="Pastor"
      />

      <PastoralBoardSection
        title="Junta Pastoral"
        paragraphs={[
          'La Junta Pastoral es el equipo de liderazgo que acompaña y respalda al pastor en el cuidado y la dirección de la iglesia. Conformada por personas de probada fidelidad, madurez espiritual y compromiso con la obra, esta junta funciona como la mano derecha del pastor: vela por el buen funcionamiento de la congregación, apoya en la toma de decisiones, supervisa los distintos ministerios y se asegura de que todo se realice con orden, integridad y conforme a los principios de la Palabra de Dios.',
          'Más que un cargo, ser parte de la Junta Pastoral es un llamado al servicio. Sus integrantes están comprometidos a orar, aconsejar y trabajar en unidad para que la visión de la iglesia se cumpla, sosteniendo al pastor en su labor y sirviendo de ejemplo para toda la congregación.',
        ]}
        members={[
          {
            name: 'Nemcar Gutiérrez',
            role: 'Miembro',
            imageSrc: '/images/people/roberto-image.jpg',
            imageAlt: 'Nemcar Gutiérrez, miembro de la junta pastoral',
          },
          {
            name: 'Roberto Montiel',
            role: 'Miembro',
            imageSrc: '/images/people/roberto-image.jpg',
            imageAlt: 'Roberto Montiel, miembro de la junta pastoral',
          },
        ]}
      />

      <FinancialBoardSection
        title="Junta Financiera"
        imageHeight={{ mobile: 360, tablet: 340, desktop: 580}}
        members={[
          { name: 'Nemcar Gutiérrez',  role: 'Miembro', imageSrc: '/images/people/roberto-image.jpg',   imageAlt: 'Nemcar Gutiérrez' },
          { name: 'Roberto Montiel',   role: 'Miembro', imageSrc: '/images/people/roberto-image.jpg',   imageAlt: 'Roberto Montiel' },
          { name: 'José Daniel Marín', role: 'Miembro', imageSrc: '/images/people/joseMarin-image.jpg', imageAlt: 'José Daniel Marín' },
          { name: 'Marina Trillo',     role: 'Miembro', imageSrc: '/images/people/marina-image.jpg',    imageAlt: 'Marina Trillo' },
          { name: 'Franklin Rondón',   role: 'Miembro', imageSrc: '/images/people/franklin-image.jpg',  imageAlt: 'Franklin Rondón' },
        ]}
      />

      <OrganizationSection
        titleStart="Conoce el cuerpo"
        titleHighlight="directivo"
        description="La Iglesia Evangélica Antorcha de Cristo está formada por diferentes equipos y ministerios que trabajan juntos para servir y compartir el amor de Cristo. Cada área tiene su propio enfoque y forma parte de nuestra visión general de llevar el evangelio a todas las personas."
      />

      <FinancialBoardSection
        title="Diáconos"
        imageHeight={{ mobile: 360, tablet: 340, desktop: 580}}
        members={[
          { name: 'Bladimir Hernández', role: 'Diácono', imageSrc: '/images/people/bladimir-image.jpg', imageAlt: 'Bladimir Hernández' },
          { name: 'Pedro Pereira',      role: 'Diácono', imageSrc: '/images/people/pedro-image.jpg',    imageAlt: 'Pedro Pereira' },
          { name: 'Franklin Rondón',    role: 'Diácono', imageSrc: '/images/people/franklin-image.jpg', imageAlt: 'Franklin Rondón' },
          { name: 'Edixon Rincón',    role: 'Diácono', imageSrc: '/images/people/franklin-image.jpg', imageAlt: 'Franklin Rondón' },

        ]}
      />

      <DeaconessSection
        title="Diaconisas"
        imageHeight={580}
        members={[
          { name: 'María de Pérez',     role: 'Diaconisa', imageSrc: '/images/people/maria-image.jpg',  imageAlt: 'María de Pérez' },
          { name: 'Mirla de Montiel',   role: 'Diaconisa', imageSrc: '/images/people/ochi-image.jpg',   imageAlt: 'Mirla de Montiel' },
          { name: 'Teodora de Caldera', role: 'Diaconisa', imageSrc: '/images/people/marina-image.jpg', imageAlt: 'Teodora de Caldera' },
        ]}
      />

      <DeaconessSection
        title="Tesorería"
        variant="dark"
        imageHeight={580}
        members={[
          { name: 'Marina Trillo',     role: 'Tesorera',     imageSrc: '/images/people/marina-image.jpg',    imageAlt: 'Marina Trillo' },
          { name: 'José Daniel Marín', role: 'Sub-tesorero', imageSrc: '/images/people/joseMarin-image.jpg', imageAlt: 'José Daniel Marín' },
        ]}
      />

      <DeaconessSection
        title="Secretaría"
        imageHeight={750}
        members={[
          { name: 'Yennire de Pérez',    role: 'Secretaria',     imageSrc: '/images/people/yeniret-image.jpg', imageAlt: 'Yennire de Pérez' },
          { name: 'Yanina de Gutiérrez', role: 'Sub-secretaria', imageSrc: '/images/people/ochi-image.jpg',    imageAlt: 'Yanina de Gutiérrez' },
        ]}
      />

      <DeaconessSection
        title="Departamento de Educación Cristiana"
        variant="dark"
        imageHeight={580}
        cardMaxWidth={500}
        members={[
          { name: 'Maylit de Sierra', role: 'Directora', imageSrc: '/images/people/maylit-image.jpg', imageAlt: 'Maylit de Sierra' },
        ]}
      />
    </MainLayout>
  );
}
