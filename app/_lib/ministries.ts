export type MinistryIcon =
  | 'broadcast'
  | 'projector'
  | 'design'
  | 'social'
  | 'camera'
  | 'team'
  | 'sparkles'
  | 'book'
  | 'heart';

export interface MinistryFeature {
  title: string;
  description: string;
  icon: MinistryIcon;
  color?: string;
}

export interface MinistryImage {
  src: string;
  alt: string;
}

export interface MinistryStat {
  value: number;
  suffix: string;
  label: string;
}

export interface MinistryVerse {
  text: string;
  reference: string;
}

export interface MinistryDesign {
  src: string;
  alt: string;
  category?: string;
}

export interface MinistryStep {
  number: string;
  title: string;
  description: string;
  color?: string;
}

export interface MinistryPillar {
  id: string;
  title: string;
  tagline?: string;
  description: string;
}

export interface MinistrySection {
  eyebrow?: string;
  title: string;
  text: string;
  image: string;
  imageAlt?: string;
}

export interface MinistrySocial {
  platform: 'youtube' | 'instagram' | 'facebook' | 'tiktok';
  url: string;
  handle: string;
}

export interface MinistryTeamMember {
  name: string;
  role: string;
  photo?: string;
  color?: string;
  isLeader?: boolean;
}

export interface Ministry {
  slug: string;
  name: string;
  cover: string;
  tagline?: string;
  description?: string[];
  features?: MinistryFeature[];
  gallery?: MinistryImage[];
  stats?: MinistryStat[];
  reel?: string[];
  reelColors?: string[];
  quote?: string;
  verse?: MinistryVerse;
  team?: MinistryTeamMember[];
  designs?: MinistryDesign[];
  sections?: MinistrySection[];
  steps?: MinistryStep[];
  stepsEyebrow?: string;
  stepsTitle?: string;
  pillars?: MinistryPillar[];
  socials?: MinistrySocial[];
  cta?: string;
}

// Fotos de personas usadas como portadas provisionales.
const PEOPLE_IMAGES = [
  '/images/people/pastor1-image.jpg',
  '/images/people/pastor2-image.jpg',
  '/images/people/pedro-image.jpg',
  '/images/people/worship-image.jpg',
  '/images/people/bladimir-image.jpg',
  '/images/people/marina-image.jpg',
  '/images/people/franklin-image.jpg',
  '/images/people/yeniret-image.jpg',
  '/images/people/roberto-image.jpg',
  '/images/people/maylit-image.jpg',
  '/images/people/joseMarin-image.jpg',
  '/images/people/ochi-image.jpg',
  '/images/people/maria-image.jpg',
];

const NAMES_SLUGS: { name: string; slug: string }[] = [
  { name: 'Protocolo', slug: 'protocolo' },
  { name: 'Ujieres', slug: 'ujieres' },
  { name: 'Vigilancia', slug: 'vigilancia' },
  { name: 'Transporte', slug: 'transporte' },
  { name: 'Musical', slug: 'musical' },
  { name: 'Ayuno y oración', slug: 'ayuno-y-oracion' },
  { name: 'Hombres intercesores', slug: 'hombres-intercesores' },
  { name: 'Mujeres intercesoras', slug: 'mujeres-intercesoras' },
  { name: 'Evangelismo estratégico', slug: 'evangelismo-estrategico' },
  { name: 'Recreación con propósito', slug: 'recreacion-con-proposito' },
  { name: 'Sonido', slug: 'sonido' },
  { name: 'Conexión juvenil', slug: 'conexion-juvenil' },
  { name: 'Femenil', slug: 'femenil' },
  { name: 'Crecimiento y desarrollo espiritual', slug: 'crecimiento-y-desarrollo-espiritual' },
  { name: 'Infantil', slug: 'infantil' },
  { name: 'Consejería', slug: 'consejeria' },
  { name: 'Restauración y crecimiento espiritual', slug: 'restauracion-y-crecimiento-espiritual' },
  { name: 'Eventos especiales', slug: 'eventos-especiales' },
  { name: 'Multimedia', slug: 'multimedia' },
];

// Contenido detallado por ministerio (se irá completando con el tiempo).
const DETAILS: Record<string, Partial<Ministry>> = {
  vigilancia: {
    cover: '/images/ministries/vigilancia-image.jpg',
    tagline: 'Cuidando la casa de Dios con excelencia',
    description: [
      'Somos el equipo que vela por el orden y la seguridad de la iglesia. Desde el estacionamiento hasta el perímetro del templo, estamos presentes para que cada servicio se desarrolle con paz y confianza.',
    ],
    sections: [
      {
        eyebrow: '¿Por qué existimos?',
        title: 'Nuestra Misión',
        text: 'Velar por el orden, la seguridad y el buen flujo de personas y vehículos en cada servicio y evento, para que toda la congregación pueda llegar, participar y retirarse con total tranquilidad. Servimos con dedicación y compromiso, cuidando el bienestar y la paz de cada miembro de la familia de Dios.',
        image: '/images/ministries/vigilancia/vigilancia5.jpg',
        imageAlt: 'Equipo de vigilancia en servicio',
      },
      {
        eyebrow: 'Hacia dónde vamos',
        title: 'Nuestra Visión',
        text: 'Ser más que un equipo de seguridad: ser el primer reflejo del amor de Dios desde la entrada. Anhelamos que cada persona que nos visita por primera vez se sienta tan bien recibida y segura, que desee regresar y hacer de esta iglesia su hogar.',
        image: '/images/ministries/vigilancia/vigilancia4.jpg',
        imageAlt: 'Servicio de vigilancia en la iglesia',
      },
      {
        eyebrow: 'El porqué de todo',
        title: 'Nuestro Propósito',
        text: 'Para nosotros, servir en el estacionamiento es un acto de adoración. Cada indicación y cada saludo reflejan a Cristo, porque entendemos que este es el primer lugar donde alguien se encuentra con la iglesia, y ese primer paso debe estar lleno de amor y bienvenida.',
        image: '/images/ministries/vigilancia/vigilancia3.jpg',
        imageAlt: 'Miembros de vigilancia en acción',
      },
      {
        eyebrow: '¿Cómo lo vivimos?',
        title: 'Compromiso y Servicio',
        text: 'Servimos con disciplina, puntualidad y un corazón dispuesto. Sabemos que nuestra labor no se trata solo de organizar el estacionamiento, sino de cuidar a las personas y aportar a un ambiente donde cada miembro de la familia de Dios se sienta tranquilo, seguro y bienvenido.',
        image: '/images/ministries/vigilancia/vigilancia6.jpg',
        imageAlt: 'Dedicación del equipo de vigilancia',
      },
    ],
    features: [
      {
        title: 'Control de acceso',
        description: 'Supervisamos el ingreso de personas y vehículos en todos los accesos durante los servicios e eventos especiales.',
        icon: 'broadcast',
      },
      {
        title: 'Orientación vehicular',
        description: 'Guiamos a cada conductor hacia los lugares disponibles, manteniendo el orden y la fluidez del tráfico.',
        icon: 'team',
      },
      {
        title: 'Seguridad perimetral',
        description: 'Patrullamos el perímetro de las instalaciones para garantizar la tranquilidad de toda la congregación.',
        icon: 'camera',
      },
      {
        title: 'Comunicación interna',
        description: 'Coordinamos con los demás ministerios para asegurar que cada servicio se desarrolle sin contratiempos.',
        icon: 'social',
      },
      {
        title: 'Servicio con amor',
        description: 'Somos el primer reflejo del amor de la iglesia — cada guardia recibe con una sonrisa y una palabra amable.',
        icon: 'heart',
      },
      {
        title: 'Apoyo en emergencias',
        description: 'Estamos preparados para responder con calma y eficiencia ante cualquier situación imprevista.',
        icon: 'sparkles',
      },
    ],
    team: [
      { name: 'Pedro Villalobos',  role: 'Líder Principal',        isLeader: true, photo: '/images/people/pastor1-image.jpg',   color: '#93C5FD' },
      { name: 'Ramón Castillo',    role: 'Coordinador de Turno',                   photo: '/images/people/bladimir-image.jpg',  color: '#FDE68A' },
      { name: 'Héctor Medina',     role: 'Seguridad Perimetral',                   photo: '/images/people/roberto-image.jpg',   color: '#86EFAC' },
      { name: 'Frank Rondón',      role: 'Control de Acceso',                      photo: '/images/people/franklin-image.jpg',  color: '#FCA5A1' },
      { name: 'Omar Delgado',      role: 'Orientación Vehicular',                  photo: '/images/people/joseMarin-image.jpg', color: '#C4B5FD' },
      { name: 'Gilberto Mora',     role: 'Apoyo y Logística',                      photo: '/images/people/ochi-image.jpg',      color: '#6EE7B7' },
    ],
    quote: 'No solo cuidamos el estacionamiento — cuidamos la primera impresión de la casa de Dios.',
    verse: {
      text: '"Todo lo que hagan, háganlo de corazón, como para el Señor."',
      reference: 'Colosenses 3:23',
    },
  },
  infantil: {
    cover: '/images/ministries/infantil-image.jpg',
    tagline: 'Donde los pequeños crecen grandes en fe',
    description: [
      'El Ministerio Infantil es el corazón tierno de la iglesia: un espacio creado especialmente para que los más pequeños disfruten, se conecten y descubran el amor de Dios de una manera divertida y memorable.',
      'Organizamos eventos llenos de juegos, dinámicas, manualidades y enseñanza bíblica. Creemos que los niños no son el futuro de la iglesia — son parte de ella hoy, y merecen vivir esa experiencia con toda la alegría del mundo.',
    ],
    features: [
      {
        title: 'Eventos especiales',
        description: 'Concentraciones, celebraciones y fechas especiales diseñadas para que cada niño viva momentos únicos e inolvidables.',
        icon: 'sparkles',
        color: '#FF62D7',
      },
      {
        title: 'Enseñanza bíblica',
        description: 'La Biblia cobra vida con historias, dramatizaciones y dinámicas que los niños entienden, disfrutan y llevan al corazón.',
        icon: 'book',
        color: '#2495FF',
      },
      {
        title: 'Juegos y dinámicas',
        description: 'Actividades grupales que fomentan la amistad, el trabajo en equipo y la alegría de estar juntos en la casa de Dios.',
        icon: 'team',
        color: '#A6FE5A',
      },
      {
        title: 'Arte y manualidades',
        description: 'Cada lección tiene una actividad creativa que los niños llevan a casa como recordatorio vivo de lo que aprendieron.',
        icon: 'design',
        color: '#FFCC00',
      },
      {
        title: 'Un ambiente seguro',
        description: 'Un espacio de amor, respeto y cuidado donde cada niño se siente valorado, protegido y parte de la familia de la iglesia.',
        icon: 'heart',
        color: '#FF9700',
      },
      {
        title: 'Familias conectadas',
        description: 'Involucramos a los padres y familias en la vida del ministerio, porque la fe se construye también en el hogar.',
        icon: 'social',
        color: '#00DBEE',
      },
    ],
    stats: [
      { value: 50, suffix: '+', label: 'Niños alcanzados' },
      { value: 10, suffix: '+', label: 'Eventos realizados' },
      { value: 3,  suffix: '+', label: 'Años de ministerio' },
      { value: 30, suffix: '+', label: 'Familias conectadas' },
    ],
    reel: [
      '/images/ministries/infantil/1.jpg',
      '/images/ministries/infantil/2.jpg',
      '/images/ministries/infantil/3.jpg',
      '/images/ministries/infantil/4.jpg',
      '/images/ministries/infantil/5.jpg',
      '/images/ministries/infantil/6.jpg',
      '/images/ministries/infantil/7.jpg',
      '/images/ministries/infantil/8.jpg',
      '/images/ministries/infantil/9.jpg',
      '/images/ministries/infantil/10.jpg',
      '/images/ministries/infantil/11.jpg',
      '/images/ministries/infantil/12.jpg',
      '/images/ministries/infantil/13.jpg',
      '/images/ministries/infantil/14.jpg',
      '/images/ministries/infantil/15.jpg',
      '/images/ministries/infantil/16.jpg',
    ],
    reelColors: ['#FF5A00', '#FFCC00', '#FF62D7', '#2495FF', '#A6FE5A', '#00DBEE', '#FF9700', '#563CF3'],
    team: [
      { name: 'Maylit de Sierra',    role: 'Líder Principal',  isLeader: true, photo: '/images/people/maylit-image.jpg',    color: '#FFCC00' },
      { name: 'Mayinot Sierra',      role: 'Ayudante',                         photo: '/images/people/marina-image.jpg',    color: '#563CF3' },
      { name: 'Daniel Montiel',      role: 'Ayudante',                         photo: '/images/people/joseMarin-image.jpg', color: '#A6FE5A' },
      { name: 'Alejandro Montiel',   role: 'Ayudante',                         photo: '/images/people/pedro-image.jpg',     color: '#FF9700' },
      { name: 'Jesús Perozo',        role: 'Ayudante',                         photo: '/images/people/franklin-image.jpg',  color: '#00DBEE' },
    ],
    steps: [
      {
        number: '01',
        title: 'Bienvenida y dinámicas',
        description: 'Comenzamos con juegos y actividades para que todos rompan el hielo, se rían y se conecten desde el primer momento.',
        color: '#FF62D7',
      },
      {
        number: '02',
        title: 'Tiempo de la Palabra',
        description: 'La Biblia cobra vida con historias, dramatizaciones y enseñanzas diseñadas para que los niños entiendan y amen la Palabra de Dios.',
        color: '#2495FF',
      },
      {
        number: '03',
        title: 'Arte y manualidades',
        description: 'Cada enseñanza tiene una actividad creativa que los niños se llevan a casa como recordatorio vivo de lo que aprendieron.',
        color: '#A6FE5A',
      },
      {
        number: '04',
        title: 'Oración y cierre',
        description: 'Terminamos con un momento de oración donde los niños aprenden que pueden hablar con Dios en cualquier momento.',
        color: '#FFCC00',
      },
    ],
    pillars: [
      {
        id: 'mision',
        title: 'Misión',
        tagline: 'Por qué existimos',
        description: 'Llevar el amor de Dios al corazón de los niños mediante experiencias divertidas, creativas y llenas de fe, que los formen como personas íntegras desde su primera infancia.',
      },
      {
        id: 'vision',
        title: 'Visión',
        tagline: 'Hacia dónde vamos',
        description: 'Ser un ministerio de referencia donde cada niño conozca a Jesús, crezca en su fe y se convierta en una luz para su familia y su generación.',
      },
      {
        id: 'proposito',
        title: 'Propósito',
        tagline: 'El porqué de todo',
        description: 'Crear espacios seguros y llenos de alegría donde los niños aprendan que Dios los ama, los conoce por nombre y tiene un plan maravilloso para cada uno de ellos.',
      },
      {
        id: 'funciones',
        title: 'Funciones',
        tagline: 'Lo que hacemos',
        description: 'Organizar eventos, concentraciones y actividades especiales que combinen enseñanza bíblica, juego y creatividad para el desarrollo integral de los niños de la iglesia.',
      },
      {
        id: 'alcance',
        title: 'Alcance',
        tagline: 'A quién llegamos',
        description: 'Llegar a cada niño de la iglesia y a sus familias, extendiendo la invitación a la comunidad para que más pequeños puedan experimentar el amor de Dios en un ambiente cálido y seguro.',
      },
    ],
    stepsEyebrow: 'Cada encuentro',
    stepsTitle: '¿Cómo son nuestros eventos?',
    quote: 'Los niños no son el futuro de la iglesia — son parte de ella hoy.',
    verse: {
      text: 'Dejad a los niños venir a mí y no se lo impidáis, porque de los que son como éstos es el reino de Dios.',
      reference: 'Marcos 10:14',
    },
  },
  multimedia: {
    cover: '/images/people/worship-image.jpg',
    tagline: 'Tecnología al servicio del Reino',
    description: [
      'El ministerio de Multimedia es el equipo encargado de toda la parte tecnológica de la iglesia: transmisión, proyección, diseño y redes sociales. Hacemos que cada servicio y cada mensaje trascienda las paredes del templo.',
      'Somos un equipo de jóvenes apasionados por servir a Dios con nuestros talentos, usando la creatividad y la tecnología para que el evangelio llegue cada vez más lejos.',
    ],
    features: [
      {
        title: 'Transmisión en vivo',
        description: 'Llevamos cada culto a los hogares mediante transmisiones en vivo por nuestras redes sociales.',
        icon: 'broadcast',
      },
      {
        title: 'Proyección',
        description: 'Acompañamos la adoración y la predicación con letras, versículos y recursos visuales en pantalla.',
        icon: 'projector',
      },
      {
        title: 'Diseño gráfico',
        description: 'Creamos el arte, flyers y piezas visuales que comunican la identidad de la iglesia.',
        icon: 'design',
      },
      {
        title: 'Redes sociales',
        description: 'Gestionamos las plataformas digitales para mantener conectada e informada a la comunidad.',
        icon: 'social',
      },
      {
        title: 'Fotografía y video',
        description: 'Capturamos los momentos especiales de la vida de la iglesia para contar nuestra historia.',
        icon: 'camera',
      },
      {
        title: 'Equipo joven',
        description: 'Un grupo de jóvenes enfocados en trabajar unidos en la obra de Dios con excelencia.',
        icon: 'team',
      },
    ],
    gallery: [
      { src: '/images/ministries/multimedia/generales/general1.jpg', alt: 'Equipo de Multimedia en servicio' },
      { src: '/images/ministries/multimedia/generales/general2.jpg', alt: 'Transmisión en vivo del culto' },
      { src: '/images/ministries/multimedia/generales/general3.jpg', alt: 'Equipo durante un evento especial' },
      { src: '/images/ministries/multimedia/generales/general4.jpg', alt: 'Cobertura fotográfica y de video' },
      { src: '/images/people/worship-image.jpg',                     alt: 'Momento de adoración en el culto' },
      { src: '/images/ministries/conexion-image.jpg',                alt: 'Evento de conexión juvenil' },
      { src: '/images/people/franklin-image.jpg',                    alt: 'Integrante del equipo en acción' },
      { src: '/images/ministries/recreacion-image.jpg',              alt: 'Actividad especial de la iglesia' },
      { src: '/images/people/bladimir-image.jpg',                    alt: 'Miembro del ministerio' },
      { src: '/images/ministries/vigilancia-image.jpg',              alt: 'Cobertura de un servicio especial' },
      { src: '/images/people/roberto-image.jpg',                     alt: 'Registro de un momento del equipo' },
      { src: '/images/ministries/protocolo-image.jpg',               alt: 'Protocolo en un evento de la iglesia' },
    ],
    stats: [
      { value: 200, suffix: '+', label: 'Servicios transmitidos' },
      { value: 150, suffix: '+', label: 'Diseños creados' },
      { value: 3,   suffix: '+', label: 'Años sirviendo' },
      { value: 500, suffix: '+', label: 'Seguidores en redes' },
    ],
    reel: [
      '/images/people/worship-image.jpg',
      '/images/people/franklin-image.jpg',
      '/images/people/pastor1-image.jpg',
      '/images/ministries/conexion-image.jpg',
      '/images/ministries/recreacion-image.jpg',
      '/images/people/bladimir-image.jpg',
      '/images/ministries/vigilancia-image.jpg',
      '/images/people/yeniret-image.jpg',
      '/images/people/roberto-image.jpg',
      '/images/ministries/infantil-image.jpg',
      '/images/people/marina-image.jpg',
      '/images/ministries/protocolo-image.jpg',
      '/images/people/pedro-image.jpg',
      '/images/ministries/mujer-intercesora-image.jpg',
      '/images/people/pastor2-image.jpg',
      '/images/people/joseMarin-image.jpg',
      '/images/people/ochi-image.jpg',
      '/images/people/maylit-image.jpg',
      '/images/people/maria-image.jpg',
    ],
    team: [
      { name: 'Daniel González',   role: 'Líder Principal · Fotografía',          isLeader: true, photo: '/images/people/pastor1-image.jpg',  color: '#93C5FD' },
      { name: 'Yeglimar Montañez', role: 'Líder Secundaria · Diseño y Redes',   isLeader: true, photo: '/images/ministries/multimedia/yeglimar-multimedia.jpg', color: '#FDA4AF' },
      { name: 'Alejandro Montiel', role: 'Fotografía y Diseño',                                  photo: '/images/people/pedro-image.jpg',    color: '#FDE68A' },
      { name: 'Fabiola Sayago',    role: 'Diseño y Redes Sociales',                              photo: '/images/people/yeniret-image.jpg',  color: '#C4B5FD' },
      { name: 'Kendriana Oviedo',  role: 'Diseño y Redes Sociales',                              photo: '/images/people/maylit-image.jpg',   color: '#86EFAC' },
      { name: 'Lohisbell Díaz',    role: 'Proyección y Transmisión',                             photo: '/images/people/maria-image.jpg',    color: '#FCA5A1' },
      { name: 'Leonel Fabelo',     role: 'Proyección y Transmisión',                             photo: '/images/people/bladimir-image.jpg', color: '#7DD3FC' },
      { name: 'Sebastián García',  role: 'Proyección y Transmisión',                             photo: '/images/people/roberto-image.jpg',  color: '#F9A8D4' },
      { name: 'Jesús Perozo',      role: 'Proyección y Transmisión',                             photo: '/images/people/franklin-image.jpg', color: '#A7F3D0' },
      { name: 'Daniel Montiel',    role: 'Proyección y Transmisión',                             photo: '/images/people/joseMarin-image.jpg',color: '#FCD34D' },
    ],
    designs: [
      { src: '/images/ministries/multimedia/dise%C3%B1os/galeria1.jpg', category: 'Diseño', alt: 'Diseño del ministerio de Multimedia' },
      { src: '/images/ministries/multimedia/dise%C3%B1os/galeria2.jpg', category: 'Diseño', alt: 'Arte creado por el equipo de Multimedia' },
      { src: '/images/ministries/multimedia/dise%C3%B1os/galeria3.jpg', category: 'Diseño', alt: 'Pieza visual del ministerio' },
      { src: '/images/ministries/multimedia/dise%C3%B1os/galeria4.jpg', category: 'Diseño', alt: 'Arte para redes sociales' },
      { src: '/images/ministries/multimedia/dise%C3%B1os/galeria5.jpg', category: 'Diseño', alt: 'Diseño gráfico del equipo' },
      { src: '/images/ministries/multimedia/dise%C3%B1os/galeria6.jpg', category: 'Diseño', alt: 'Publicación creada por Multimedia' },
      { src: '/images/ministries/multimedia/dise%C3%B1os/galeria7.jpg', category: 'Diseño', alt: 'Flyer del ministerio de Multimedia' },
      { src: '/images/ministries/multimedia/dise%C3%B1os/galeria8.jpg', category: 'Diseño', alt: 'Arte gráfico para la iglesia' },
      { src: '/images/ministries/multimedia/dise%C3%B1os/galeria9.jpg', category: 'Diseño', alt: 'Pieza creativa del equipo' },
    ],
    pillars: [
      {
        id: 'mision',
        title: 'Misión',
        tagline: 'Por qué existimos',
        description: 'Servir a la iglesia con tecnología, arte y creatividad como actos de adoración. Somos el equipo que facilita que cada servicio, cada mensaje y cada momento de la iglesia trascienda las cuatro paredes del templo y llegue a quienes más lo necesitan.',
      },
      {
        id: 'vision',
        title: 'Visión',
        tagline: 'Hacia dónde vamos',
        description: 'Ser un equipo de excelencia técnica y espiritual, reconocido por usar el arte digital y la tecnología como puentes de transformación. Soñamos con una iglesia cuya voz llegue sin fronteras, alcanzando comunidades locales e internacionales con el poder del evangelio.',
      },
      {
        id: 'alcance',
        title: 'Alcance',
        tagline: 'A quién llegamos',
        description: 'Conectar a cientos de personas que por distancia, enfermedad o circunstancias no pueden estar presentes físicamente. Cada transmisión en vivo, cada diseño y cada publicación en redes es una semilla sembrada en el corazón de alguien que nos observa desde cualquier rincón del mundo.',
      },
      {
        id: 'proposito',
        title: 'Propósito',
        tagline: 'El porqué de todo',
        description: 'Glorificar a Dios con cada talento tecnológico que Él mismo nos ha dado. Creemos que la creatividad es un acto de adoración y que el evangelio debe aprovechar todas las herramientas disponibles para tocar corazones, transformar vidas y llevar esperanza a quienes más la necesitan.',
      },
    ],
    socials: [
      { platform: 'youtube',   url: 'https://youtube.com/@antorchadc',   handle: '@antorchadc' },
      { platform: 'instagram', url: 'https://instagram.com/antorchadc',  handle: '@antorchadc' },
      { platform: 'facebook',  url: 'https://facebook.com/antorchadc',   handle: 'Antorcha DC' },
    ],
    quote: 'No son solo cámaras y pantallas — es el evangelio llegando más lejos.',
    verse: {
      text: 'Proclamad entre las naciones su gloria, en todos los pueblos sus maravillas.',
      reference: 'Salmos 96:3',
    },
  },
};

export const MINISTRIES: Ministry[] = NAMES_SLUGS.map((m, i) => ({
  slug: m.slug,
  name: m.name,
  cover: PEOPLE_IMAGES[i % PEOPLE_IMAGES.length],
  ...DETAILS[m.slug],
}));

export function getMinistry(slug: string): Ministry | undefined {
  return MINISTRIES.find((m) => m.slug === slug);
}

export function getMinistrySlugs(): string[] {
  return MINISTRIES.map((m) => m.slug);
}
