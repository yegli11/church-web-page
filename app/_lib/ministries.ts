export type MinistryIcon =
  | 'broadcast'
  | 'projector'
  | 'design'
  | 'social'
  | 'camera'
  | 'team'
  | 'sparkles';

export interface MinistryFeature {
  title: string;
  description: string;
  icon: MinistryIcon;
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
  quote?: string;
  verse?: MinistryVerse;
  team?: MinistryTeamMember[];
  designs?: MinistryDesign[];
  steps?: MinistryStep[];
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
    steps: [
      {
        number: '01',
        title: 'Sirve para Dios, no para los aplausos',
        description: 'Todo lo que hacemos es un acto de adoración. La tecnología es el medio; glorificar a Dios es el propósito. Aquí no buscamos reconocimiento humano.',
      },
      {
        number: '02',
        title: 'Ven con un corazón dispuesto',
        description: 'No necesitas ser experto. Necesitas actitud. Si tienes humildad y ganas de aprender, el equipo hace el resto.',
      },
      {
        number: '03',
        title: 'Comprométete con disciplina',
        description: 'Servir en multimedia requiere puntualidad, constancia y responsabilidad en cada servicio y evento.',
      },
      {
        number: '04',
        title: 'Trabaja con amor',
        description: 'Somos familia. Nos apoyamos, nos corregimos y crecemos juntos. El amor entre el equipo se refleja en todo lo que producimos.',
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
    cta: '¿Te apasiona la tecnología, el diseño o la creación de contenido? Únete al equipo de Multimedia y pon tus talentos al servicio de Dios.',
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
