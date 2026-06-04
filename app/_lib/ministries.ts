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
      { src: '/images/people/worship-image.jpg', alt: 'Equipo de adoración en el escenario' },
      { src: '/images/ministries/recreacion-image.jpg', alt: 'Servicio con luces y producción' },
      { src: '/images/ministries/conexion-image.jpg', alt: 'Transmisión de un evento' },
      { src: '/images/people/pastor2-image.jpg', alt: 'Predicación proyectada en pantalla' },
      { src: '/images/ministries/mujer-intercesora-image.jpg', alt: 'Cobertura de una reunión' },
      { src: '/images/ministries/vigilancia-image.jpg', alt: 'Equipo trabajando durante el culto' },
      { src: '/images/people/franklin-image.jpg', alt: 'Integrante del equipo de multimedia' },
      { src: '/images/ministries/infantil-image.jpg', alt: 'Registro de actividades de la iglesia' },
      { src: '/images/people/pastor1-image.jpg', alt: 'Momento de ministración en el culto' },
      { src: '/images/people/bladimir-image.jpg', alt: 'Miembro del equipo en servicio' },
      { src: '/images/people/marina-image.jpg', alt: 'Registro de un momento especial' },
      { src: '/images/people/yeniret-image.jpg', alt: 'Integrante del ministerio' },
      { src: '/images/people/roberto-image.jpg', alt: 'Captura durante un evento de la iglesia' },
      { src: '/images/ministries/protocolo-image.jpg', alt: 'Cobertura de protocolo en un servicio' },
      { src: '/images/people/ochi-image.jpg', alt: 'Momento capturado por el equipo' },
      { src: '/images/people/maylit-image.jpg', alt: 'Registro de actividades del ministerio' },
      { src: '/images/people/pedro-image.jpg', alt: 'Miembro del equipo de multimedia' },
      { src: '/images/people/maria-image.jpg', alt: 'Integrante durante un evento especial' },
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
