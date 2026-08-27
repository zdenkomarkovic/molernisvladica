import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_HREF,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
} from "@/lib/constants";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Moler Niš`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "moler Niš",
    "moleraj Niš",
    "gletovanje Niš",
    "krečenje Niš",
    "dekorativni premazi Niš",
    "adaptacija stanova Niš",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Moler Niš`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            image: `${SITE_URL}/logo.jpg`,
            telephone: CONTACT_PHONE_HREF,
            email: CONTACT_EMAIL,
            areaServed: "Niš",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Niš",
              addressCountry: "RS",
            },
            sameAs: [SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM],
            url: SITE_URL,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
