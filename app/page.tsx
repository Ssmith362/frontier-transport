const media = "https://spencersstrategies-hrwqt.wpcomstaging.com/wp-content/uploads/2025/09/";

const services = [
  { title: "We haul it", body: "Reliable West Coast trucking services from WA to CA & AZ.", image: `${media}we-haul-it-819x1024.png` },
  { title: "We store it", body: "Dry and cold storage in Pasco, keeping loads fresh and secure.", image: `${media}Store-it.png` },
  { title: "We bring it back", body: "Smart backhauls to keep our trucks full and your freight moving.", image: `${media}logo-1-1-1024x640.png` },
];
const process = ["Loads stored & prepped in Pasco.", "Trailers loaded & ready.", "Drivers pick-up trucks/trailers in Burbank.", "Delivery to destination.", "Backhaul secured & return trip."];
const benefits = ["20+ employees dedicated to service.", "Experienced drivers & support staff.", "Reliable, on-time deliveries.", "Family like company Culture."];

export default function Home() {
  return <>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Frontier Transport home"><img src={`${media}logo-1-1-1024x640.png`} alt="Frontier Transport" /></a>
      <a className="phone" href="tel:+15093803603">(509) 380-3603</a>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="eyebrow"><i /> Reliable West Coast Transportation &amp; Storage Solutions</p>
          <h1>Specializing in hauling poultry and freight across the West Coast, with dry and cold storage facilities in the Tri-Cities</h1>
        </div>
      </section>
      <section className="intro" id="services">
        <div className="section-heading"><p className="eyebrow">What we do best:</p><h2>What we do best</h2></div>
        <div className="service-grid">{services.map((item, i) => <article className="service-card" key={item.title}>
          <div className="service-photo"><img src={item.image} alt={item.title} /><span className="service-num">0{i + 1}</span></div>
          <div className="service-copy"><h3>{item.title}</h3><p>{item.body}</p></div>
        </article>)}</div>
      </section>
      <section className="about" id="about">
        <div className="about-image"><img src={`${media}467896829_122097715880641003_7148217890054845123_n.jpg`} alt="Frontier Transport" /><div className="image-label"><b>Keeping the<br />West Coast Moving</b></div></div>
        <div className="about-copy"><p className="eyebrow">Who we are:</p><h2>Keeping the<br /><em>West Coast Moving</em></h2>
          <p>At Frontier Transport, we provide reliable West Coast trucking and freight transportation services. Based in the Tri-Cities of Washington, we specialize in hauling meats and handling a wide range of freight with our secure dry and cold storage solutions.</p>
          <p>With two key locations, a warehouse in Pasco, WA and a truck yard in Burbank, WA, our operation is built for speed and efficiency. Shipments are staged and stored in Pasco, where our warehouse team carefully prepares and loads trailers. From there, our drivers head out of Burbank to destinations across Northern California, Southern California, and Arizona. On the return, we secure backhaul loads, maximizing efficiency while delivering dependable service both ways.</p>
          <p>Our team of 20 + dedicated employees include skilled truck drivers, warehouse professionals, an experienced mechanic, and a supportive office staff. Together, we combine professionalism with a personal touch, offering safe, on time, and cost-effective transportation and storage services that our partners can trust.</p>
          <p>At Frontier Transport, we are committed to reliability, safety, and efficiency, making sure every shipment arrives on time, every mile of the way.</p>
        </div>
      </section>
      <section className="process" id="process"><div className="process-title"><h2>Our Process:</h2></div><div className="steps">{process.map((step, i) => <div className="step" key={step}><span className="step-num">0{i + 1}</span><span className="step-dot" /><p>{step}</p></div>)}</div></section>
      <section className="why"><div className="why-image"><img src={`${media}Spencers-strategies-1080-x-1080-px-1280-x-1080-px-1024x864.png`} alt="Frontier Transport" /></div><div className="why-copy"><p className="eyebrow">Why choose us</p><h2>Why choose us</h2><ul>{benefits.map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ul></div></section>
      <section className="cta" id="careers"><div className="cta-mark">FT<span>•</span></div><div><p className="eyebrow">Let’s hit the road together —</p><h2>Let’s hit the road<br /><em>together!</em></h2><p>Join our team or transport with us!</p></div><div className="cta-links"><a href="https://spencersstrategies-hrwqt.wpcomstaging.com/join-our-team/" className="button button-orange">Become a Frontier Driver <span>↗</span></a><a href="https://spencersstrategies-hrwqt.wpcomstaging.com/transport-with-us/" className="button button-outline">Request Transport or Storage <span>↗</span></a></div></section>
    </main>
    <footer id="contact"><div className="footer-top"><div><a className="footer-brand" href="#top">FRONTIER<br /><span>TRANSPORT</span></a><p>Keeping the West Coast Moving.</p></div><div className="footer-contact"><span>GET IN TOUCH</span><a href="tel:+15093803603">(509) 380-3603</a><a href="https://maps.google.com/?q=381+S+2nd+St+Burbank+WA+99323">381 S 2nd St, Burbank, WA, United States, 99323</a></div></div><div className="footer-bottom"><span>© 2025 Frontier Transport – Keeping the West Coast Moving.</span><span>WA · CA · AZ</span></div></footer>
  </>;
}
