import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "./site-config";

const title = "Alciellen | Concreto Usinado e Lajes Pré-Moldadas em Manaus";
const description =
  "Solicite orçamento de concreto usinado, lajes pré-moldadas, vigotas, bombeamento, piso polido e piso discado em Manaus.";
const ogImage = `${SITE_URL}/images/alciellen/og-alciellen-jr-concretos.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "PK Assessoria",
  authors: [{ name: "Alciellen — J&R Concretos", url: SITE_URL }],
  creator: "PK Assessoria",
  publisher: "PK Assessoria",
  category: "Construção civil",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "PK Assessoria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/alciellen/og-alciellen-jr-concretos.jpg",
        width: 1200,
        height: 630,
        alt: "Alciellen — concreto usinado e lajes pré-moldadas em Manaus",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/alciellen/og-alciellen-jr-concretos.jpg"],
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
  icons: {
    icon: [
      {
        url: "/images/alciellen/alciellen-jr-concretos-logo.svg",
        type: "image/svg+xml",
      },
      {
        url: "/images/alciellen/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "32x32",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/images/alciellen/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "PK Assessoria",
      description,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: "Alciellen — J&R Concretos",
      url: SITE_URL,
      image: ogImage,
      logo: `${SITE_URL}/images/alciellen/alciellen-jr-concretos-logo.svg`,
      telephone: ["+55 92 99356-4052", "+55 92 99253-7721"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Elias Ramiro Bentes, 918B",
        addressLocality: "Manaus",
        addressRegion: "AM",
        postalCode: "69018-567",
        addressCountry: "BR",
      },
      areaServed: {
        "@type": "City",
        name: "Manaus",
      },
      employee: { "@id": `${SITE_URL}/#alciellen` },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55 92 99356-4052",
          contactType: "vendas",
          areaServed: "BR-AM",
          availableLanguage: "pt-BR",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Produtos e serviços para construção",
        itemListElement: [
          "Concreto usinado",
          "Lajes pré-moldadas",
          "Vigotas para laje",
          "Bombeamento de concreto",
          "Piso polido",
          "Piso discado",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            areaServed: "Manaus, AM",
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#alciellen`,
      name: "Alciellen",
      jobTitle: "Consultora comercial",
      image: `${SITE_URL}/images/alciellen/alciellen-consultora-comercial.png`,
      worksFor: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Como solicitar orçamento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Envie uma mensagem pelo WhatsApp informando o produto desejado, endereço da obra, volume aproximado e, se tiver, medidas ou projeto.",
          },
        },
        {
          "@type": "Question",
          name: "Vocês atendem Manaus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O atendimento é direcionado para Manaus, Amazonas, com base na operação da J&R Concretos.",
          },
        },
        {
          "@type": "Question",
          name: "Trabalham com bombeamento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O bombeamento de concreto pode ser orientado conforme volume, acesso e etapa da obra.",
          },
        },
      ],
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#17191c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
