import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ftacquisition.com/"),
  title: "West Coast Freight & Poultry Hauling | Frontier Transport",
  description: "West Coast freight transportation and poultry hauling, with dry and cold storage in Pasco, Washington. Serving Washington, California, and Arizona.",
  openGraph: {
    title: "West Coast Freight & Poultry Hauling | Frontier Transport",
    description: "Dependable West Coast transportation, poultry hauling, and dry and cold storage in the Tri-Cities.",
    url: "https://ftacquisition.com/",
    siteName: "Frontier Transport",
    images: [{ url: "/images/truck-hero.webp", alt: "Frontier Transport truck on a West Coast freight route" }],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
