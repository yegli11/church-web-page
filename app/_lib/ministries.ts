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
  color?: string;
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
  reelBg?: string;
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
  musical: {
    cover: '/images/people/worship-image.jpg',
    tagline: 'La voz de adoración de la iglesia',
    description: [
      'El Ministerio Musical es el equipo de alabanza de la iglesia — los músicos, cantantes y sonidistas que cada semana preparan la atmósfera para que la congregación encuentre a Dios en adoración.',
      'Más que músicos, somos adoradores. Creemos que la alabanza tiene el poder de transformar corazones, liberar cautivos y abrir los cielos. Nuestro mayor instrumento no es la guitarra ni el teclado — es un corazón rendido y sensible al Espíritu Santo.',
    ],
    pillars: [
      {
        id: 'mision',
        title: 'Misión',
        tagline: 'Por qué existimos',
        description: 'Preparar la atmósfera para que la congregación encuentre a Dios en adoración, llevando a cada persona a un encuentro genuino con el Espíritu Santo a través de la música y la alabanza.',
      },
      {
        id: 'vision',
        title: 'Visión',
        tagline: 'Hacia dónde vamos',
        description: 'Ser un equipo de adoradores íntegros, musicalemente excelentes y espiritualmente maduros, que inspiren a toda la congregación a vivir una vida de adoración permanente, no solo dentro del templo sino en cada área de su vida.',
      },
      {
        id: 'alcance',
        title: 'Alcance',
        tagline: 'A quién llegamos',
        description: 'Llegamos a cada persona que participa en los servicios — creyentes que necesitan renovar su fe, visitantes que llegan por primera vez y corazones que buscan a Dios sin saber todavía cómo encontrarlo.',
      },
      {
        id: 'proposito',
        title: 'Propósito',
        tagline: 'El corazón de todo',
        description: 'Glorificar a Dios con excelencia artística y pureza espiritual. Cada nota, cada letra y cada arreglo tiene un único objetivo: que Cristo sea exaltado y que los corazones sean transformados.',
      },
    ],
    features: [
      {
        title: 'Alabanza en los servicios',
        description: 'Dirigimos el tiempo de adoración en cada culto dominical y servicio de la semana, creando un ambiente propicio para la presencia de Dios.',
        icon: 'sparkles',
      },
      {
        title: 'Ensayos semanales',
        description: 'Nos preparamos con disciplina y dedicación cada semana para ofrecer lo mejor a Dios y a la congregación.',
        icon: 'broadcast',
      },
      {
        title: 'Eventos especiales',
        description: 'Cubrimos musicalmente los eventos especiales de la iglesia: noches de alabanza, retiros, aniversarios y actividades generales.',
        icon: 'camera',
      },
      {
        title: 'Formación de músicos',
        description: 'Impulsamos el desarrollo de nuevos músicos y cantantes dentro de la iglesia, abriendo espacio para que los talentos crezcan y sirvan.',
        icon: 'team',
      },
      {
        title: 'Cobertura espiritual',
        description: 'Además de tocar, intercedemos por los servicios y la congregación, entendiendo que la adoración es también una herramienta de guerra espiritual.',
        icon: 'heart',
      },
      {
        title: 'Repertorio y arreglos',
        description: 'Seleccionamos y preparamos el repertorio de alabanza buscando siempre letras que edifiquen, enseñen y lleven a la congregación a adorar en espíritu y en verdad.',
        icon: 'book',
      },
    ],
    reel: [
      '/images/people/worship-image.jpg',
      '/images/people/pastor1-image.jpg',
      '/images/people/bladimir-image.jpg',
      '/images/people/franklin-image.jpg',
      '/images/people/roberto-image.jpg',
      '/images/people/pedro-image.jpg',
      '/images/ministries/conexion-image.jpg',
      '/images/people/marina-image.jpg',
      '/images/people/yeniret-image.jpg',
      '/images/ministries/recreacion-image.jpg',
      '/images/people/joseMarin-image.jpg',
      '/images/people/pastor2-image.jpg',
    ],
    team: [
      { name: 'Gabriel Morales',   role: 'Director de Alabanza',  isLeader: true, photo: '/images/people/pastor1-image.jpg'   },
      { name: 'Valentina Reyes',   role: 'Cantante Principal',                    photo: '/images/people/yeniret-image.jpg'   },
      { name: 'Diego Suárez',      role: 'Guitarra',                              photo: '/images/people/bladimir-image.jpg'  },
      { name: 'Camila Ortiz',      role: 'Teclado',                               photo: '/images/people/marina-image.jpg'    },
      { name: 'Andrés Fuentes',    role: 'Bajo',                                  photo: '/images/people/roberto-image.jpg'   },
      { name: 'Sofía Mendoza',     role: 'Coros',                                 photo: '/images/people/maylit-image.jpg'    },
    ],
    quote: 'Antes de tocar una nota, primero debemos adorar desde el corazón.',
    verse: {
      text: 'Cantad a Jehová cántico nuevo; cantad a Jehová, toda la tierra.',
      reference: 'Salmos 96:1',
    },
  },
  'hombres-intercesores': {
    cover: '/images/people/worship-image.jpg',
    tagline: 'Hombres que doblan la rodilla y mueven el cielo',
    description: [
      'El Ministerio de Hombres Intercesores es un grupo de hombres comprometidos que se reúnen semanalmente para orar, interceder y buscar juntos el rostro de Dios. Creemos que la oración de un hombre justo puede mucho, y que cuando nos reunimos en Su nombre, el cielo se mueve.',
      'Nuestros encuentros son espacios de profundidad espiritual donde clamamos por la iglesia, las familias, la ciudad y las naciones. Cada semana, levantamos nuestra voz en unidad, creyendo que Dios oye y responde.',
    ],
    pillars: [
      {
        id: 'mision',
        title: 'Misión',
        tagline: 'Por qué existimos',
        description: 'Reunirnos semanalmente como hombres de fe para orar, interceder y buscar el rostro de Dios en unidad, creyendo que nuestras oraciones tienen poder para transformar vidas, familias, la iglesia y la ciudad entera.',
      },
      {
        id: 'vision',
        title: 'Visión',
        tagline: 'Hacia dónde vamos',
        description: 'Ser un grupo de hombres intercesores que sostengan con oración cada área de la iglesia — un muro de protección espiritual que cuide a las familias, respalde al liderazgo y abra camino para que el avivamiento llegue a nuestra ciudad.',
      },
      {
        id: 'alcance',
        title: 'Alcance',
        tagline: 'Por quién intercedemos',
        description: 'Intercedemos por la iglesia local, el pastor y el liderazgo, las familias de la congregación, los jóvenes, la ciudad, el país y las naciones. Nuestro altar de oración no tiene fronteras.',
      },
      {
        id: 'proposito',
        title: 'Propósito',
        tagline: 'El corazón de todo',
        description: 'Levantar hombres de oración que sean pilares espirituales en su hogar y en la iglesia — hombres que entiendan que la batalla más importante no se pelea con armas físicas, sino de rodillas en la presencia de Dios.',
      },
    ],
    features: [
      {
        title: 'Reunión semanal de oración',
        description: 'Nos reunimos cada semana para orar juntos — un espacio de encuentro con Dios donde cada hombre trae su corazón y su fe.',
        icon: 'sparkles',
      },
      {
        title: 'Intercesión por la iglesia',
        description: 'Cubrimos en oración al pastor, los líderes, los ministerios y cada área de la iglesia para que todo funcione bajo la dirección del Espíritu Santo.',
        icon: 'broadcast',
      },
      {
        title: 'Intercesión por las familias',
        description: 'Alzamos en oración a cada familia de la congregación, creyendo que Dios sana, restaura y protege los hogares cuando hay hombres que interceden.',
        icon: 'heart',
      },
      {
        title: 'Intercesión por la ciudad',
        description: 'Extendemos nuestra oración más allá de las cuatro paredes de la iglesia, clamando por la ciudad, el país y las naciones que Dios ponga en nuestro corazón.',
        icon: 'social',
      },
      {
        title: 'Comunión entre hermanos',
        description: 'El ministerio también es un espacio de compañerismo genuino donde los hombres se apoyan, animan y caminan juntos en la fe.',
        icon: 'team',
      },
      {
        title: 'Crecimiento espiritual',
        description: 'Cada encuentro profundiza la vida de oración personal de cada hombre, formando creyentes más maduros, firmes y sensibles al Espíritu.',
        icon: 'book',
      },
    ],
    steps: [
      {
        number: '01',
        title: 'Alabanza y adoración',
        description: 'Iniciamos con un tiempo de adoración para entrar en la presencia de Dios y preparar nuestros corazones para interceder con fe.',
      },
      {
        number: '02',
        title: 'Confesión y rendición',
        description: 'Nos vaciamos delante de Dios, confesamos y rendimos nuestros corazones para que el Espíritu Santo obre libremente entre nosotros.',
      },
      {
        number: '03',
        title: 'Intercesión corporativa',
        description: 'Oramos juntos con fervor por la iglesia, las familias, la ciudad y los temas que Dios pone en nuestro corazón esa semana.',
      },
      {
        number: '04',
        title: 'Proclamación y cierre',
        description: 'Cerramos declarando las promesas de Dios, proclamando Su victoria y agradeciéndole por las oraciones que ya están respondidas.',
      },
    ],
    stepsEyebrow: 'Cada semana',
    stepsTitle: '¿Cómo es nuestra reunión de oración?',
    gallery: [
      { src: '/images/people/worship-image.jpg',       alt: 'Hombres en tiempo de oración' },
      { src: '/images/people/pastor1-image.jpg',       alt: 'Intercesión en el templo' },
      { src: '/images/people/bladimir-image.jpg',      alt: 'Integrante del ministerio' },
      { src: '/images/people/roberto-image.jpg',       alt: 'Hombre intercediendo' },
      { src: '/images/people/franklin-image.jpg',      alt: 'Reunión de oración' },
      { src: '/images/people/pedro-image.jpg',         alt: 'Hombre de fe en oración' },
      { src: '/images/people/joseMarin-image.jpg',     alt: 'Miembro del grupo de intercesión' },
      { src: '/images/ministries/conexion-image.jpg',  alt: 'Encuentro espiritual de la iglesia' },
    ],
    team: [
      { name: 'Roberto Hernández', role: 'Líder Principal',          isLeader: true, photo: '/images/people/pastor1-image.jpg'   },
      { name: 'Marcos Vidal',      role: 'Coordinador de Oración',                  photo: '/images/people/bladimir-image.jpg'  },
      { name: 'Luis Alberto Soto', role: 'Intercesor',                              photo: '/images/people/roberto-image.jpg'   },
      { name: 'Gustavo Paredes',   role: 'Intercesor',                              photo: '/images/people/franklin-image.jpg'  },
      { name: 'Fernando Díaz',     role: 'Intercesor',                              photo: '/images/people/pedro-image.jpg'     },
      { name: 'José Ramírez',      role: 'Intercesor',                              photo: '/images/people/joseMarin-image.jpg' },
    ],
    quote: 'No hay nada más poderoso que un grupo de hombres de rodillas delante de Dios.',
    verse: {
      text: 'Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho.',
      reference: 'Santiago 5:16',
    },
  },
  protocolo: {
    cover: '/images/ministries/protocolo-image.jpg',
    tagline: 'La primera sonrisa que la iglesia le da al mundo',
    description: [
      'El Ministerio de Protocolo es el equipo que da la bienvenida a cada persona que llega a la iglesia. Somos quienes cuidan la experiencia desde el primer segundo: orientando al visitante, manteniendo el orden, y asegurándonos de que nadie se sienta perdido o solo.',
      'Servimos dentro y fuera del templo, coordinando el flujo del servicio, apoyando en eventos especiales y representando el amor de Dios con una sonrisa, una palabra amable y una disposición de corazón.',
    ],
    pillars: [
      {
        id: 'mision',
        title: 'Misión',
        tagline: 'Por qué existimos',
        description: 'Crear la primera experiencia de amor de la iglesia para cada persona que llega, asegurándonos de que cada visitante, miembro y familia sean recibidos con calidez, orientados con claridad y atendidos con excelencia en todo momento.',
      },
      {
        id: 'vision',
        title: 'Visión',
        tagline: 'Hacia dónde vamos',
        description: 'Ser un equipo que eleve el estándar de hospitalidad cristiana — donde cada persona que entre por primera vez sienta que fue esperada, bienvenida y valorada, y salga con el deseo de regresar y hacer de esta iglesia su hogar.',
      },
      {
        id: 'alcance',
        title: 'Alcance',
        tagline: 'A quién servimos',
        description: 'Atendemos a cada persona que llega a la iglesia: visitantes de primera vez, familias con niños, personas de la tercera edad y a todo aquel que necesite orientación o apoyo durante el servicio. Nadie pasa desapercibido para nosotros.',
      },
      {
        id: 'proposito',
        title: 'Propósito',
        tagline: 'El corazón de todo',
        description: 'Reflejar el carácter de Cristo desde la puerta de entrada. Entendemos que servir en protocolo no es solo una función logística — es un acto de amor y adoración que prepara el terreno para que Dios obre en cada corazón.',
      },
    ],
    features: [
      {
        title: 'Bienvenida y recepción',
        description: 'Recibimos a cada persona con una sonrisa genuina y una palabra de bienvenida, haciendo que desde el primer segundo se sienta parte de la familia.',
        icon: 'heart',
      },
      {
        title: 'Orientación al visitante',
        description: 'Guiamos a los nuevos visitantes a encontrar su lugar, conocer las instalaciones y sentirse cómodos y seguros dentro del templo.',
        icon: 'team',
      },
      {
        title: 'Orden en el servicio',
        description: 'Coordinamos el flujo de personas durante la entrada, salida y momentos especiales del servicio para que todo se desarrolle con fluidez.',
        icon: 'broadcast',
      },
      {
        title: 'Apoyo en eventos',
        description: 'Organizamos y apoyamos el protocolo en eventos especiales, bodas, graduaciones y actividades generales de la iglesia con profesionalismo.',
        icon: 'sparkles',
      },
      {
        title: 'Coordinación interna',
        description: 'Comunicamos necesidades al equipo de liderazgo y trabajamos junto a los demás ministerios para que cada servicio sea una experiencia integral.',
        icon: 'social',
      },
      {
        title: 'Atención permanente',
        description: 'Estamos atentos dentro y fuera del templo durante todo el servicio — anticipando necesidades y respondiendo con prontitud y amor.',
        icon: 'camera',
      },
    ],
    stats: [
      { value: 5,   suffix: '+', label: 'Años sirviendo' },
      { value: 100, suffix: '+', label: 'Servicios atendidos' },
      { value: 500, suffix: '+', label: 'Visitantes recibidos' },
      { value: 10,  suffix: '+', label: 'Eventos especiales' },
    ],
    gallery: [
      { src: '/images/ministries/protocolo-image.jpg',  alt: 'Equipo de Protocolo en servicio' },
      { src: '/images/people/marina-image.jpg',         alt: 'Recibiendo a los visitantes' },
      { src: '/images/people/yeniret-image.jpg',        alt: 'Miembro de protocolo en acción' },
      { src: '/images/people/ochi-image.jpg',           alt: 'Bienvenida en el templo' },
      { src: '/images/people/worship-image.jpg',        alt: 'Ambiente del servicio' },
      { src: '/images/ministries/conexion-image.jpg',   alt: 'Evento especial de la iglesia' },
      { src: '/images/people/roberto-image.jpg',        alt: 'Coordinación del equipo' },
      { src: '/images/ministries/recreacion-image.jpg', alt: 'Actividad especial con protocolo' },
    ],
    team: [
      { name: 'Isabel Rodríguez',  role: 'Líder Principal',        isLeader: true, photo: '/images/people/marina-image.jpg'    },
      { name: 'Carlos Vera',       role: 'Coordinador de Turno',                  photo: '/images/people/roberto-image.jpg'   },
      { name: 'Sofía Ramírez',     role: 'Recepción y Bienvenida',                photo: '/images/people/yeniret-image.jpg'   },
      { name: 'Andrés Molina',     role: 'Orientación y Orden',                   photo: '/images/people/joseMarin-image.jpg' },
      { name: 'Valentina Torres',  role: 'Apoyo a Visitantes',                    photo: '/images/people/maylit-image.jpg'    },
      { name: 'Marcos Gutiérrez',  role: 'Protocolo en Eventos',                  photo: '/images/people/bladimir-image.jpg'  },
    ],
    quote: 'Cada persona que entra merece sentir que fue esperada.',
    verse: {
      text: 'Practicad la hospitalidad entre vosotros, sin murmuraciones.',
      reference: '1 Pedro 4:9',
    },
  },
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
    cover: '/images/ministries/infantil/principal/1.jpg',
    gallery: [
      { src: '/images/ministries/infantil/principal/1.jpg', alt: 'Ministerio Infantil' },
      { src: '/images/ministries/infantil/principal/2.jpg', alt: 'Ministerio Infantil' },
      { src: '/images/ministries/infantil/principal/3.jpg', alt: 'Ministerio Infantil' },
      { src: '/images/ministries/infantil/principal/4.jpg', alt: 'Ministerio Infantil' },
      { src: '/images/ministries/infantil/principal/5.jpg', alt: 'Ministerio Infantil' },
      { src: '/images/ministries/infantil/principal/6.jpg', alt: 'Ministerio Infantil' },
      { src: '/images/ministries/infantil/principal/7.jpg', alt: 'Ministerio Infantil' },
    ],
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
      { name: 'Mayinot Sierra',      role: 'Ayudante',                         photo: '/images/ministries/infantil/integrantes/mayinot-infantil.jpg',    color: '#563CF3' },
      { name: 'Daniel Montiel',      role: 'Ayudante',                         photo: '/images/people/joseMarin-image.jpg', color: '#A6FE5A' },
      { name: 'Alejandro Montiel',   role: 'Ayudante',                         photo: '/images/people/pedro-image.jpg',     color: '#FF9700' },
      { name: 'Jesús Perozo',        role: 'Ayudante',                         photo: '/images/ministries/multimedia/integrantes/jesus-multimedia.jpg',  color: '#00DBEE' },
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
  femenil: {
    cover: '/images/ministries/mujer-intercesora-image.jpg',
    tagline: 'Mujeres que brillan con la luz de Dios',
    description: [
      'El Ministerio Femenil es un espacio creado especialmente para las mujeres de la iglesia: un lugar donde pueden encontrarse, crecer en la fe, sanar y descubrir el llamado que Dios tiene para cada una de ellas.',
      'Organizamos encuentros, retiros, estudios bíblicos y momentos de comunión donde el amor de Dios se manifiesta de manera especial en el corazón de cada mujer. Creemos que ninguna mujer debe enfrentar sus batallas sola.',
    ],
    pillars: [
      {
        id: 'mision',
        title: 'Misión',
        tagline: 'Por qué existimos',
        description: 'Fortalecer la fe, el carácter y la identidad de las mujeres de la iglesia a través de la Palabra de Dios, la oración y la comunión, para que cada una viva plenamente el propósito que Dios tiene para su vida.',
        color: '#F2619C',
      },
      {
        id: 'vision',
        title: 'Visión',
        tagline: 'Hacia dónde vamos',
        description: 'Ser un ministerio que forme mujeres íntegras, llenas del Espíritu Santo, capaces de transformar su familia, su comunidad y su generación con el amor y la verdad de Dios. Soñamos con mujeres que iluminen cada espacio donde estén.',
        color: '#D6BEEA',
      },
      {
        id: 'alcance',
        title: 'Alcance',
        tagline: 'A quién llegamos',
        description: 'Llegar a cada mujer de la iglesia y extender la invitación a mujeres de la comunidad, para que ninguna enfrente sus batallas sola. Juntas somos más fuertes, y cada mujer que llega transforma el ambiente a su alrededor.',
        color: '#93ABD9',
      },
      {
        id: 'proposito',
        title: 'Propósito',
        tagline: 'El corazón de todo',
        description: 'Crear un ambiente de amor, confianza y crecimiento donde las mujeres puedan ser auténticas, sanar sus heridas, desarrollar sus dones y apoyarse mutuamente como verdaderas hermanas en la fe.',
        color: '#F98BA9',
      },
      {
        id: 'funciones',
        title: 'Funciones',
        tagline: 'Lo que hacemos',
        description: 'Organizar encuentros, retiros espirituales, estudios bíblicos, actividades de comunión y espacios de consejería diseñados para que cada mujer crezca, sane y desarrolle todo el potencial que Dios puso en ella.',
        color: '#F4D77A',
      },
    ],
    stats: [
      { value: 60,  suffix: '+', label: 'Mujeres conectadas' },
      { value: 12,  suffix: '+', label: 'Eventos realizados' },
      { value: 4,   suffix: '+', label: 'Años de ministerio' },
      { value: 3,   suffix: '+', label: 'Retiros espirituales' },
    ],
    features: [
      {
        title: 'Encuentros y retiros',
        description: 'Espacios de reflexión, oración y adoración exclusivos para mujeres, donde el Espíritu Santo trabaja profundamente en cada corazón.',
        icon: 'sparkles',
        color: '#F2619C',
      },
      {
        title: 'Estudio bíblico',
        description: 'Profundizamos juntas en la Palabra de Dios para crecer en sabiduría y aplicar su verdad a cada área de la vida cotidiana.',
        icon: 'book',
        color: '#93ABD9',
      },
      {
        title: 'Actividades de comunión',
        description: 'Momentos de compañerismo, dinámicas y celebraciones que fortalecen los lazos entre las hermanas y construyen amistad genuina.',
        icon: 'team',
        color: '#F4D77A',
      },
      {
        title: 'Apoyo y consejería',
        description: 'Un espacio seguro donde las mujeres pueden hablar, ser escuchadas y recibir orientación y amor basado en la Palabra de Dios.',
        icon: 'heart',
        color: '#D6BEEA',
      },
      {
        title: 'Formación de líderes',
        description: 'Identificamos y desarrollamos el potencial de liderazgo en cada mujer, preparándolas para servir con excelencia y propósito.',
        icon: 'broadcast',
        color: '#F98BA9',
      },
      {
        title: 'Conexión familiar',
        description: 'Actividades que fortalecen el rol de la mujer como pilar del hogar, inspirando a cada mamá, hija y hermana a brillar.',
        icon: 'social',
        color: '#B7C96A',
      },
    ],
    gallery: [
      { src: '/images/people/marina-image.jpg',                    alt: 'Momento femenil en la iglesia' },
      { src: '/images/people/yeniret-image.jpg',                   alt: 'Hermana en tiempo de adoración' },
      { src: '/images/people/maylit-image.jpg',                    alt: 'Reunión del ministerio femenil' },
      { src: '/images/people/ochi-image.jpg',                      alt: 'Tiempo de oración femenil' },
      { src: '/images/people/maria-image.jpg',                     alt: 'Actividad especial de mujeres' },
      { src: '/images/ministries/mujer-intercesora-image.jpg',     alt: 'Mujer en intercesión' },
      { src: '/images/ministries/conexion-image.jpg',              alt: 'Encuentro femenil especial' },
      { src: '/images/ministries/recreacion-image.jpg',            alt: 'Actividad de comunión femenil' },
    ],
    team: [
      { name: 'María Elena Suárez', role: 'Directora Principal',      isLeader: true, photo: '/images/people/marina-image.jpg',   color: '#F2619C' },
      { name: 'Gloria Mendoza',     role: 'Coordinadora de Eventos',                  photo: '/images/people/yeniret-image.jpg',  color: '#D6BEEA' },
      { name: 'Carmen Rosa Díaz',   role: 'Estudio Bíblico',                          photo: '/images/people/maylit-image.jpg',   color: '#F4D77A' },
      { name: 'Daniela Flores',     role: 'Apoyo y Consejería',                       photo: '/images/people/ochi-image.jpg',     color: '#93ABD9' },
      { name: 'Patricia Mora',      role: 'Comunicación y Diseño',                    photo: '/images/people/maria-image.jpg',    color: '#F98BA9' },
      { name: 'Valentina Cruz',     role: 'Conexión Juvenil Femenil',                 photo: '/images/people/worship-image.jpg',  color: '#B7C96A' },
    ],
    reel: [
      '/images/people/marina-image.jpg',
      '/images/people/yeniret-image.jpg',
      '/images/people/maylit-image.jpg',
      '/images/people/ochi-image.jpg',
      '/images/people/maria-image.jpg',
      '/images/ministries/mujer-intercesora-image.jpg',
      '/images/ministries/conexion-image.jpg',
      '/images/ministries/recreacion-image.jpg',
      '/images/people/worship-image.jpg',
      '/images/people/pastor2-image.jpg',
      '/images/people/franklin-image.jpg',
      '/images/people/roberto-image.jpg',
    ],
    reelColors: ['#F2619C', '#E7BEF8', '#F98BA9', '#D6BEEA', '#F4D77A', '#B7C96A', '#93ABD9', '#FF8F45'],
    reelBg: 'linear-gradient(135deg, #7B1548 0%, #C04B80 60%, #E9628F 100%)',
    quote: 'No somos las mismas después de haber estado en la presencia de Dios juntas.',
    verse: {
      text: 'Engañosa es la gracia, y vana la hermosura; la mujer que teme a Jehová, ésa será alabada.',
      reference: 'Proverbios 31:30',
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
      { name: 'Daniel González',   role: 'Líder Principal · Fotografía',        isLeader: true, photo: '/images/ministries/multimedia/integrantes/you-multimedia.jpg',   color: '#93C5FD' },
      { name: 'Yeglimar Montanez', role: 'Líder Secundaria · Diseño y Redes Sociales', isLeader: true, photo: '/images/ministries/multimedia/integrantes/yeglimar-multimedia.jpg',               color: '#FDA4AF' },
      { name: 'Alejandro Montiel', role: 'Fotografía y Diseño',                                                                                                               color: '#FDE68A' },
      { name: 'Fabiola Sayago',    role: 'Diseño y Redes Sociales',                             photo: '/images/ministries/multimedia/integrantes/fabiola-multimedia.jpg',   color: '#C4B5FD' },
      { name: 'Kendriana Oviedo',  role: 'Diseño y Redes Sociales',                                                                                                           color: '#86EFAC' },
      { name: 'Lohisbell Díaz',    role: 'Proyección y Transmisión',                            photo: '/images/ministries/multimedia/integrantes/lohisbell-multimedia.jpg', color: '#FCA5A1' },
      { name: 'Leonel Fabelo',     role: 'Proyección y Transmisión',                            photo: '/images/ministries/multimedia/integrantes/leonel-multimedia.jpg',                                                                              color: '#7DD3FC' },
      { name: 'Sebastián García',  role: 'Proyección y Transmisión',                            photo: '/images/ministries/multimedia/integrantes/sebastian-multimedia.jpg', color: '#F9A8D4' },
      { name: 'Jesús Perozo',      role: 'Proyección y Transmisión',                            photo: '/images/ministries/multimedia/integrantes/jesus-multimedia.jpg',     color: '#A7F3D0' },
      { name: 'Daniel Montiel',    role: 'Proyección y Transmisión',                                                                                                          color: '#FCD34D' },
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
