import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001"),
  title: "Alciellen | Concreto Usinado e Lajes Pre-Moldadas em Manaus",
  description:
    "Solicite orcamento de concreto usinado, lajes pre-moldadas, vigotas e bombeamento de concreto em Manaus com atendimento especializado.",
  keywords:
    "concreto usinado Manaus, laje pre moldada Manaus, vigotas para laje, bombeamento de concreto Manaus, J&R Concretos, Alciellen",
  openGraph: {
    title: "Alciellen | Concreto Usinado e Lajes Pre-Moldadas em Manaus",
    description:
      "Atendimento especializado para concreto usinado, lajes pre-moldadas, vigotas e bombeamento em Manaus.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/alciellen/alciellen-consultora-comercial.png",
        width: 1000,
        height: 1500,
        alt: "Alciellen, consultora comercial da J&R Concretos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alciellen | Concreto Usinado e Lajes Pre-Moldadas em Manaus",
    description:
      "Atendimento especializado para concreto usinado, lajes pre-moldadas, vigotas e bombeamento em Manaus.",
    images: ["/images/alciellen/alciellen-consultora-comercial.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/alciellen/alciellen-jr-concretos-logo.svg",
    shortcut: "/images/alciellen/alciellen-jr-concretos-logo.svg",
    apple: "/images/alciellen/alciellen-jr-concretos-logo.svg",
  },
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
      <body>{children}</body>
    </html>
  );
}
