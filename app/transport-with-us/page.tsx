import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "West Coast Freight & Poultry Hauling | Frontier Transport",
  description: "Request freight or poultry transportation from Washington to California and Arizona with Frontier Transport.",
};

export default function Transportation() {
  return <main className="service-page">
    <a className="service-page-brand" href="/"><img src="/images/frontier-logo.webp" alt="Frontier Transport" /></a>
    <p className="eyebrow"><span className="eyebrow-rule" /> Frontier transportation</p>
    <h1>Freight moving<br /><em>across the West.</em></h1>
    <p>Frontier Transport hauls freight and poultry from Washington to destinations across Northern California, Southern California, and Arizona. Loads can be staged and prepared at the Pasco warehouse before drivers pick up trucks and trailers at the Burbank yard.</p>
    <div className="service-page-actions"><a className="button" href="tel:+15093803603">Call (509) 380-3603 <span aria-hidden="true">↗</span></a><a className="text-link" href="/storage/">Explore dry &amp; cold storage <span aria-hidden="true">→</span></a></div>
    <a className="service-page-back" href="/#services">← Back to Frontier Transport</a>
  </main>;
}
