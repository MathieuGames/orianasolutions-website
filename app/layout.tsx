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
  title: "Oriana Solutions",
  description:
    "Oriana Solutions, votre expert en applications mobiles, web, SaaS et automatisation.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Oriana Solutions",
    description:
      "Oriana Solutions, votre expert en applications mobiles, web, SaaS et automatisation.",
    url: "https://orianasolutions.com",
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
    title: "Oriana Solutions",
    description:
      "Oriana Solutions, votre expert en applications mobiles, web, SaaS et automatisation.",
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
