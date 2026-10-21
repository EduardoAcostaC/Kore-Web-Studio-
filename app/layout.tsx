import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kore Web Studio | Sitios y Plataformas Web que Enamoran y Multiplican tus Clientes",
  description:
    "Diseño premium y desarrollo a medida para marcas y profesionales que buscan proyectar una imagen de clase mundial, generar confianza inmediata y multiplicar sus resultados.",
  keywords: [
    "diseño web profesional",
    "desarrollo web a medida",
    "kore web studio",
    "páginas web alta conversión",
    "plataformas web",
    "diseño ui ux",
  ],
  authors: [{ name: "Kore Web Studio" }],
  openGraph: {
    title: "Kore Web Studio | Sitios y Plataformas Web de Alta Conversión",
    description:
      "Diseño premium y desarrollo a medida para marcas y profesionales que buscan proyectar una imagen de clase mundial.",
    type: "website",
    locale: "es_LA",
    siteName: "Kore Web Studio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${plusJakartaSans.variable} dark scroll-smooth`}
    >
      <body className="font-sans antialiased selection:bg-brand-blue selection:text-white relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
