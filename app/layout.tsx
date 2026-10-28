import type { Metadata } from "next";
import { Inter, Montserrat, JetBrains_Mono, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kore Web Studio | Presencia Digital que Vende y Convierte",
  description:
    "Construimos tu presencia digital con ingeniería web y diseño de alto impacto. Clientes reales, no solo visitas. Arquitectura moderna, velocidad extrema y conversión garantizada.",
  keywords: [
    "diseño web profesional",
    "desarrollo web a medida",
    "kore web studio",
    "páginas web alta conversión",
    "desarrollo nextjs",
    "tiendas ecommerce",
    "diseño ui ux",
    "seo ai search",
  ],
  authors: [{ name: "Kore Web Studio" }],
  openGraph: {
    title: "Kore Web Studio | Presencia Digital que Vende y Convierte",
    description:
      "Construimos el sitio que hace que te elijan a ti, sin plantillas lentas y con arquitectura cloud de última generación.",
    type: "website",
    locale: "es_LA",
    siteName: "Kore Web Studio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kore Web Studio",
  image: "https://korewebstudio.com/kore-icon.png",
  description:
    "Estudio especializado en desarrollo web de alta conversión, tiendas ecommerce y plataformas digitales con estándares de ingeniería.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
  },
  priceRange: "$$$",
  openingHours: "Mo-Fr 09:00-19:00",
  telephone: "+52 55 9100 8761",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} ${workSans.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#08090C] text-[#F1F3F9] font-sans antialiased selection:bg-[#0052FF] selection:text-white relative min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
