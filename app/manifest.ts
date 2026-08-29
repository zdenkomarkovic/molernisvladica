import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} – Moler Niš`,
    short_name: SITE_NAME,
    description:
      "Molerski radovi u Nišu – gletovanje, krečenje, dekorativne tehnike i adaptacija stanova.",
    start_url: "/",
    display: "browser",
    lang: "sr-RS",
    background_color: "#faf6ee",
    theme_color: "#f2793a",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
