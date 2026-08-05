import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://volveratievento.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Volver a Ti | Evento de Bienestar y Crecimiento",
    template: "%s | Volver a Ti",
  },
  description:
    "Volver a Ti es un evento de reconexión, bienestar y transformación. Un espacio para respirar, sanar y crecer. Reserva tu boleto hoy.",
  keywords: [
    "evento de bienestar",
    "retiro de bienestar República Dominicana",
    "meditación",
    "crecimiento personal",
    "Volver a Ti",
  ],
  authors: [{ name: "Volver a Ti" }],
  openGraph: {
    title: "Volver a Ti | Evento de Bienestar y Crecimiento",
    description:
      "Un espacio para reconectar contigo. Meditación, conferencias, networking y bienestar en un solo día.",
    url: siteUrl,
    siteName: "Volver a Ti",
    locale: "es_DO",
    type: "website",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volver a Ti | Evento de Bienestar y Crecimiento",
    description:
      "Un espacio para reconectar contigo. Reserva tu boleto para Volver a Ti.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF9FB" },
    { media: "(prefers-color-scheme: dark)", color: "#1B1120" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${manrope.variable} font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#contenido"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-mauve-600 focus:px-5 focus:py-2 focus:text-white"
          >
            Saltar al contenido
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
