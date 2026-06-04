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
            'Nuestro deseo es que cada persona no solo conozca a Dios, sino que aprenda a vivir conforme a sus principios en lo cotidiano: en el hogar, en el trabajo, en las relaciones y en cada decisión. Creemos que la Biblia tiene respuestas reales para la vida real, y por eso enseñamos una fe práctica, capaz de transformar y dar propósito.',
            'Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra. (2 Timoteo 3:16-17)',
        ]}
      />

      <ContentSection
        title="Misión:"
        subtitle="Reconciliar al mundo con Dios."
        imageSrc="/images/people/worship-image.jpg"
        imageAlt="Congregación adorando a Dios"
        imagePosition="right"
        paragraphs={[
          'Nuestra misión es acercar a las personas a Dios, anunciando el mensaje de reconciliación que encontramos en Cristo y mostrando, con hechos y palabras, el amor que transforma vidas.',
          'Buscamos ser un puente entre Dios y quienes aún no lo conocen, abriendo las puertas a todo aquel que desea un nuevo comienzo. Amamos profundamente a Dios y procuramos reflejar ese amor en cada persona, sin importar su historia, restaurando corazones, familias y comunidades a través del poder del evangelio.',
        ]}
      />

      <PrinciplesSection
        title="Nuestros principios"
        principles={[
          {
            title: 'Fidelidad a la Palabra de Dios',
            description: 'La Biblia es nuestra máxima autoridad y la guía para cada decisión, enseñanza y área de nuestra vida.',
          },
          {
            title: 'Amor a Dios y al prójimo',
            description: 'Todo lo que hacemos nace del amor: amamos a Dios sobre todas las cosas y servimos a los demás como reflejo de ese amor.',
          },
          {
            title: 'Integridad',
            description: 'Vivimos con honestidad y transparencia, siendo coherentes entre lo que creemos, lo que decimos y lo que hacemos.',
          },
          {
            title: 'Servicio',
            description: 'Seguimos el ejemplo de Jesús, que vino a servir y no a ser servido, entregándonos por el bienestar de los demás.',
          },
          {
            title: 'Unidad',
            description: 'Somos una familia espiritual que camina junta, en armonía y respeto, fortaleciéndonos los unos a los otros.',
          },
          {
            title: 'Discipulado',
            description: 'No solo buscamos que las personas conozcan a Dios, sino que crezcan, maduren en la fe y formen a otros.',
          },
          {
            title: 'Oración',
            description: 'Creemos en el poder de la oración como base de toda nuestra vida y ministerio, buscando siempre la dirección de Dios.',
          },
          {
            title: 'Excelencia',
            description: 'Damos lo mejor de nosotros en cada cosa que hacemos, porque entendemos que todo lo hacemos para la gloria de Dios.',
          },
        ]}
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
