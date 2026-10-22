const media = "https://spencersstrategies-hrwqt.wpcomstaging.com/wp-content/uploads/2025/09/";

export default function JoinOurTeam() {
  return <>
    <header className="topbar"><a className="brand" href="/" aria-label="Frontier Transport home"><img src={`${media}logo-1-1-1024x640.png`} alt="Frontier Transport" /></a><a className="phone" href="tel:+15093803603">(509) 380-3603</a></header>
    <main className="form-page"><p className="eyebrow">Frontier Transport</p><h1>Join our team</h1><form className="lead-form">
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Email Address<input type="email" name="email" autoComplete="email" required /></label>
      <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
      <label>Resume<input type="file" name="resume" /></label>
      <label>Years of expierince?<input name="experience" /></label>
      <label>Ideal routs?<input name="routes" /></label>
      <label>Start date?<input name="start-date" /></label>
      <button className="button button-orange" type="submit">Submit <span>↗</span></button>
    </form></main>
    <footer><div className="footer-top"><div><a className="footer-brand" href="/">FRONTIER<br /><span>TRANSPORT</span></a></div><div className="footer-contact"><a href="https://maps.google.com/?q=381+S+2nd+St+Burbank+WA+99323">381 S 2nd St, Burbank, WA, United States, 99323</a><a href="tel:+15093803603">(509) 380-3603</a><a href="https://www.facebook.com/">Facebook</a></div></div><div className="footer-bottom"><span>© 2025 Frontier Transport – Keeping the West Coast Moving.</span></div></footer>
  </>;
}
