/**
 * Configuración central del sitio para SEO.
 * IMPORTANTE: actualiza SITE_URL con el dominio real en producción
 * (o define la variable de entorno NEXT_PUBLIC_SITE_URL).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://www.antorchadecristo.com';

export const SITE_NAME = 'Iglesia Evangélica Antorcha de Cristo';
export const SITE_SHORT_NAME = 'Antorcha de Cristo';
export const SITE_DESCRIPTION =
  'Iglesia Evangélica Antorcha de Cristo en Tía Juana, Venezuela. Una comunidad de fe, esperanza y amor. Únete a nuestros cultos, ministerios y enseñanzas bíblicas.';
export const SITE_LOCALE = 'es_VE';
export const SITE_EMAIL = 'iglesiaantorchadc@gmail.com';

export const SITE_ADDRESS = {
  street: 'Carretera E, Av 18. Tía Juana. 4017',
  locality: 'Tía Juana',
  region: 'Zulia',
  country: 'VE',
};

export const SOCIAL_PROFILES = [
  'https://www.instagram.com/antorchadecristoven',
];

/**
 * Imagen usada para previsualizaciones al compartir (Open Graph / Twitter).
 * Debe vivir en /public. Ajusta la ruta si subes una imagen dedicada.
 */
export const SITE_OG_IMAGE = '/images/logos/logo-antorcha-no-info.png';

/** Rutas principales del sitio (en español para mejor SEO). */
export const ROUTES = [
  { path: '/', label: 'Inicio' },
  { path: '/historia', label: 'Historia' },
  { path: '/ensenanzas', label: 'Enseñanzas' },
  { path: '/departamentos', label: 'Departamentos' },
  { path: '/ministerios', label: 'Ministerios' },
] as const;
