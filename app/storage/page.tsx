import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dry & Cold Storage in Pasco, WA | Frontier Transport",
  description: "Ask Frontier Transport about dry and cold storage in Pasco, Washington, and West Coast freight transportation.",
};

export default function Storage() {
  return <main className="service-page">
    <a className="service-page-brand" href="/"><img src="/images/frontier-logo.webp" alt="Frontier Transport" /></a>
    <p className="eyebrow"><span className="eyebrow-rule" /> Frontier storage</p>
    <h1>Dry &amp; cold storage<br /><em>in Pasco, Washington.</em></h1>
    <p>Frontier’s Pasco warehouse stages and prepares loads for West Coast delivery. The operation offers dry and cold storage as part of its freight and poultry hauling services across Washington, California, and Arizona.</p>
    <div className="service-page-actions"><a className="button" href="tel:+15093803603">Ask about storage <span aria-hidden="true">↗</span></a><a className="text-link" href="/transport-with-us/">Explore transportation <span aria-hidden="true">→</span></a></div>
    <a className="service-page-back" href="/#services">← Back to Frontier Transport</a>
  </main>;
}
