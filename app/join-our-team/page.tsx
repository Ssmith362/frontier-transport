import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Driving Opportunities | Frontier Transport",
  description: "Learn about joining the Frontier Transport team serving West Coast freight routes from Washington.",
};

export default function JoinOurTeam() {
  return <main className="service-page driver-page">
    <a className="service-page-brand" href="/"><img src="/images/frontier-logo.webp" alt="Frontier Transport" /></a>
    <p className="eyebrow"><span className="eyebrow-rule" /> Work with Frontier</p>
    <h1>Join the team<br /><em>moving the West.</em></h1>
    <p>Frontier’s Tri-Cities team includes drivers, warehouse professionals, an experienced mechanic, and office staff. Call to learn about opportunities with the company.</p>
    <div className="service-page-actions"><a className="button" href="tel:+15093803603">Call (509) 380-3603 <span aria-hidden="true">↗</span></a><a className="text-link" href="/">Return to the homepage <span aria-hidden="true">→</span></a></div>
    <a className="service-page-back" href="/#drivers">← Back to Frontier Transport</a>
  </main>;
}
