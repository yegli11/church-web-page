export interface Departamento {
  name: string;
  slug: string;
  cover: string;
  description: string;
}

export const DEPARTAMENTOS: Departamento[] = [
  {
    name: 'Educación Cristiana (E.B.D)',
    slug: 'educacion-cristiana',
    cover: '/images/people/pastor1-image.jpg',
    description: 'Formación bíblica y espiritual para toda la congregación.',
  },
  {
    name: 'Fundación Nehemías',
    slug: 'fundacion-nehemias',
    cover: '/images/people/roberto-image.jpg',
    description: 'Iniciativas de impacto social y comunitario al servicio del prójimo.',
  },
  {
    name: 'Grupos de Propósito y Servicios (GPS)',
    slug: 'gps',
    cover: '/images/ministries/recreacion-image.jpg',
    description: 'Grupos pequeños para crecer en fe, amistad y comunidad.',
  },
  {
    name: 'Junta Financiera',
    slug: 'junta-financiera',
    cover: '/images/people/joseMarin-image.jpg',
    description: 'Administración transparente y responsable de los recursos de la iglesia.',
  },
  {
    name: 'Junta Pastoral',
    slug: 'junta-pastoral',
    cover: '/images/people/pastor2-image.jpg',
    description: 'Liderazgo espiritual y dirección de la congregación.',
  },
  {
    name: 'Cuerpo Directivo',
    slug: 'cuerpo-directivo',
    cover: '/images/people/pedro-image.jpg',
    description: 'Dirección y gobierno de la iglesia al servicio de la visión.',
  },
  {
    name: 'ALFA - Altar Familiar',
    slug: 'alfa',
    cover: '/images/ministries/conexion-image.jpg',
    description: 'Fortaleciendo la fe desde el hogar y la familia.',
  },
];
