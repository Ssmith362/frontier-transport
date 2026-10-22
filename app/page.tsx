const phone = "(509) 380-3603";
const tel = "+15093803603";
const facebook = "https://www.facebook.com/profile.php?id=61569230100533";

const services = [
  { id: "transportation", number: "01", title: "West Coast freight", text: "Freight transportation from Washington to California and Arizona, with poultry hauling among Frontier’s specialties.", image: "/images/we-haul-it.webp", alt: "Frontier Transport truck ready for a West Coast freight run", href: "/transport-with-us/", action: "Explore transportation" },
  { id: "storage", number: "02", title: "Dry & cold storage", text: "Pasco warehouse space for staging freight, including dry and cold storage for loads that need it.", image: "/images/store-it.webp", alt: "Freight and storage operation at Frontier Transport’s Pasco warehouse", href: "/storage/", action: "Explore storage" },
  { id: "backhauls", number: "03", title: "Return backhauls", text: "Backhaul loads on the return leg help keep freight moving in both directions.", image: "/images/we-bring-it-back.webp", alt: "Freight being prepared for a return backhaul", href: "/transport-with-us/", action: "Plan a shipment" },
];

const steps = [
  ["01", "Stage in Pasco", "Loads are stored and prepared at the warehouse."],
  ["02", "Load the trailer", "The warehouse team gets trailers loaded and ready."],
  ["03", "Pick up in Burbank", "Drivers pick up trucks and trailers at the Burbank yard."],
  ["04", "Deliver out West", "Freight travels to destinations across California and Arizona."],
  ["05", "Bring it back", "A return backhaul helps keep freight moving both ways."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TransportationService",
  name: "Frontier Transport",
  url: "https://ftacquisition.com/",
  telephone: tel,
  description: "West Coast freight and poultry transportation, dry and cold storage in Pasco, Washington, and return backhauls.",
  areaServed: ["Washington", "Northern California", "Southern California", "Arizona"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "381 S 2nd St",
    addressLocality: "Burbank",
    addressRegion: "WA",
    postalCode: "99323",
    addressCountry: "US",
  },
  sameAs: [facebook],
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Frontier Transport home"><img src="/images/frontier-logo.webp" alt="Frontier Transport" /></a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#services">Services</a><a href="#process">How it works</a><a href="#company">Company</a><a href="#drivers">Careers</a>
      </nav>
      <a className="header-phone" href={`tel:${tel}`}>{phone}</a>
      <a className="button button-small" href="#quote">Request a Quote <span aria-hidden="true">↗</span></a>
    </header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src="/images/truck-hero.webp" alt="Frontier Transport truck on the road in the Pacific Northwest" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light"><span className="eyebrow-rule" /> Washington · California · Arizona</p>
          <h1 id="hero-title">Freight that keeps<br /><em>the West moving.</em></h1>
          <p className="hero-summary">Dependable West Coast transportation, poultry hauling, and dry and cold storage in the Tri-Cities.</p>
          <div className="hero-actions"><a className="button" href="#quote">Request Transportation <span aria-hidden="true">↗</span></a><a className="button button-ghost" href="#drivers">Join Our Team <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-caption"><span>01 / THE ROAD AHEAD</span><span>Serving the West Coast from Washington</span></div>
      </section>

      <section className="proof" aria-label="Frontier Transport at a glance">
        <div><span className="proof-value">WA <i>→</i> CA <i>→</i> AZ</span><span className="proof-label">West Coast routes</span></div>
        <div><span className="proof-value">20<span className="plus">+</span></span><span className="proof-label">Dedicated employees</span></div>
        <div><span className="proof-value">Pasco <i>·</i> Burbank</span><span className="proof-label">Two Tri-Cities locations</span></div>
        <div><span className="proof-value">Dry <i>+</i> Cold</span><span className="proof-label">Storage in Pasco</span></div>
      </section>

      <section className="section services" id="services">
        <div className="section-top"><div><p className="eyebrow"><span className="eyebrow-rule" /> What Frontier does</p><h2>One partner for the<br /><em>whole freight journey.</em></h2></div><p className="section-intro">From pickup and storage to delivery and the return trip, Frontier connects the steps that keep your freight moving.</p></div>
        <div className="service-grid">{services.map(service => <article className="service-card" id={service.id} key={service.number}>
          <a href={service.href} className="service-image"><img src={service.image} alt={service.alt} loading="lazy" /><span className="service-index">{service.number}</span><span className="image-arrow" aria-hidden="true">↗</span></a>
          <div className="service-copy"><p className="card-kicker">FRONTIER SERVICE / {service.number}</p><h3>{service.title}</h3><p>{service.text}</p><a className="text-link" href={service.href}>{service.action}<span aria-hidden="true"> →</span></a></div>
        </article>)}</div>
      </section>

      <section className="process" id="process">
        <div className="process-photo"><img src="/images/truck-haul.webp" alt="Frontier Transport freight truck prepared for pickup" loading="lazy" /><div className="photo-tag"><span>TRI-CITIES, WASHINGTON</span><b>Staged in Pasco.<br />Moving from Burbank.</b></div></div>
        <div className="process-copy"><p className="eyebrow light"><span className="eyebrow-rule" /> A coordinated route</p><h2>From warehouse<br />to West Coast.</h2><p className="process-lead">A clear handoff between Frontier’s Pasco warehouse and Burbank truck yard keeps every shipment moving toward its destination.</p>
          <ol className="steps">{steps.map(([n, title, body]) => <li key={n}><span className="step-number">{n}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="company section" id="company">
        <div className="company-copy"><p className="eyebrow"><span className="eyebrow-rule" /> About Frontier</p><h2>Local roots.<br /><em>West Coast reach.</em></h2><p>Based in Washington’s Tri-Cities, Frontier Transport brings together the people and places behind each load. Freight is staged and prepared at the Pasco warehouse, then picked up by drivers at the Burbank truck yard for delivery across Northern California, Southern California, and Arizona.</p><p>A team of more than 20 includes drivers, warehouse professionals, an experienced mechanic, and office staff—working together with a personal touch.</p><a className="text-link" href="#quote">Talk with our team <span aria-hidden="true">→</span></a></div>
        <div className="company-visual"><img src="/images/team-yard.webp" alt="Frontier Transport team and trucks at the Burbank yard" loading="lazy" /><div className="company-note"><span>BASED IN THE TRI-CITIES</span><b>Built around<br />people and freight.</b></div></div>
      </section>

      <section className="quote-band" id="quote"><div className="quote-text"><p className="eyebrow light"><span className="eyebrow-rule" /> Start a conversation</p><h2>Have freight to move<br /><em>or space to store?</em></h2><p>Tell Frontier what you need. Call the team to discuss transportation, poultry hauling, or Pasco storage.</p></div><div className="quote-action"><span>GET IN TOUCH</span><a className="phone-large" href={`tel:${tel}`}>{phone}</a><a className="button button-light" href="/transport-with-us/">Request Transportation <span aria-hidden="true">↗</span></a><a className="button button-outline" href="/storage/">Ask About Storage <span aria-hidden="true">↗</span></a></div></section>

      <section className="driver" id="drivers"><div className="driver-photo"><img src="/images/why-choose-detail.webp" alt="A Frontier Transport truck at the yard" loading="lazy" /></div><div className="driver-copy"><p className="eyebrow"><span className="eyebrow-rule" /> Drive with Frontier</p><h2>Good people.<br /><em>Good miles.</em></h2><p>Join a team of drivers, warehouse professionals, mechanics, and office staff keeping West Coast freight moving.</p><a className="button" href="/join-our-team/">Become a Frontier Driver <span aria-hidden="true">↗</span></a></div></section>
    </main>
    <footer className="site-footer" id="contact"><div className="footer-main"><a className="footer-logo" href="#top"><img src="/images/frontier-logo.webp" alt="Frontier Transport" /></a><div className="footer-address"><span>FIND FRONTIER</span><a href="https://maps.google.com/?q=381+S+2nd+St+Burbank+WA+99323" target="_blank" rel="noreferrer">381 S 2nd St<br />Burbank, WA 99323</a></div><div className="footer-contact"><span>CALL THE TEAM</span><a href={`tel:${tel}`}>{phone}</a><a href={facebook} target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a></div><a className="back-top" href="#top">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© 2026 Frontier Transport</span><span>Keeping the West Coast Moving.</span><span>Washington · California · Arizona</span></div></footer>
  </>;
}
