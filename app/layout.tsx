import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import {
  GOOGLE_SITE_VERIFICATION,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";
import { localBusinessSchema, websiteSchema } from "@/lib/structured-data";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Moler Niš | Moleraj, gletovanje i krečenje`,
    template: `%s | ${SITE_NAME} – Moler Niš`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: "Next.js",
  category: "Home & Construction",
  keywords: [
    "moler Niš",
    "moleraj Niš",
    "molerski radovi Niš",
    "gletovanje Niš",
    "krečenje Niš",
    "dekorativni premazi Niš",
    "dekorativne tehnike Niš",
    "marmorino Niš",
    "venecijanski malter Niš",
    "adaptacija stanova Niš",
    "farbanje stolarije Niš",
    "moler cena Niš",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Moler Niš | Moleraj, gletovanje i krečenje`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Moler Niš`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  ...(GOOGLE_SITE_VERIFICATION && {
    verification: { google: GOOGLE_SITE_VERIFICATION },
  }),
};

export const viewport: Viewport = {
  themeColor: "#f2793a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr-RS" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
