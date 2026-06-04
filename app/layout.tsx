import type { Metadata, Viewport } from "next";
import { Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_OG_IMAGE,
  SITE_ADDRESS,
  SITE_EMAIL,
  SOCIAL_PROFILES,
} from "./_lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Tía Juana, Venezuela`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "iglesia",
    "iglesia evangélica",
    "Antorcha de Cristo",
    "Tía Juana",
    "Zulia",
    "Venezuela",
    "cristianos",
    "evangelio",
    "cultos",
    "ministerios",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Tía Juana, Venezuela`,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Tía Juana, Venezuela`,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#060773",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: SITE_EMAIL,
  image: `${SITE_URL}${SITE_OG_IMAGE}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_ADDRESS.street,
    addressLocality: SITE_ADDRESS.locality,
    addressRegion: SITE_ADDRESS.region,
    addressCountry: SITE_ADDRESS.country,
  },
  sameAs: SOCIAL_PROFILES,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "12:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${greatVibes.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-montserrat)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
