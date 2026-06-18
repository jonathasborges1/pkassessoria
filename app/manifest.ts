import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alciellen — J&R Concretos",
    short_name: "Alciellen",
    description:
      "Atendimento comercial para concreto usinado e serviços para construção em Manaus.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1eb",
    theme_color: "#17191c",
    lang: "pt-BR",
    icons: [
      {
        src: "/images/alciellen/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/alciellen/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
