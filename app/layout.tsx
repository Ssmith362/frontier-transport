import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontier Transport | Keeping the West Coast Moving",
  description: "Reliable West Coast transportation and storage. Poultry and freight hauling, dry and cold storage in Pasco, Washington, and dependable backhaul service.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
