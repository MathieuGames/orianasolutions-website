import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app"),
  title: {
    default: "Oriana Solutions | Développement d'applications web et mobiles à Montréal",
    template: "%s | Oriana Solutions",
  },
  description:
    "Oriana Solutions — agence de développement logiciel à Montréal. Applications mobiles iOS/Android, web, SaaS et sites web sur mesure.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/icon.png" }],
  },
  openGraph: {
    title: "Oriana Solutions | Développement d'applications web et mobiles à Montréal",
    description:
      "Agence de développement logiciel à Montréal — applications mobiles, web, SaaS et sites sur mesure.",
    url: "https://orianasolutions-site-mathieumorinlamy-8447s-projects.vercel.app",
    siteName: "Oriana Solutions",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Oriana Solutions — Développement d'applications web et mobiles sur mesure",
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oriana Solutions | Développement d'applications web et mobiles à Montréal",
    description:
      "Agence de développement logiciel à Montréal — applications mobiles, web, SaaS et sites sur mesure.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased scroll-smooth scroll-pt-[95px]`} suppressHydrationWarning>
      <body className={`${inter.className} min-h-full flex flex-col`} suppressHydrationWarning>
        <div className="w-full flex flex-col min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
