import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="hero-glow glow-three" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">PT. SULTANA AGRO LESTARI</p>
              <h1><span>Supplying Excellence,</span><strong>Delivering Quality</strong></h1>
              <p className="hero-description">
                We are a trusted importer and distributor of high-quality food products in Jakarta, Indonesia.
                Specializing in premium Basmati Rice and Spread Creams from trusted global suppliers.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://sultana-agro.id/products.php">
                  <i className="fas fa-shopping-bag" /> View Products
                </a>
                <a className="button button-outline" href="https://sultana-agro.id/about.php">
                  <i className="fas fa-info-circle" /> About Us
                </a>
              </div>
            </div>
            <div className="hero-mark">
              <div className="logo-halo" />
              <img src="/assets/images/sal-logo.png" alt="Sultana Agro Lestari logo" />
            </div>
          </div>
          <a className="scroll-hint" href="#brands" aria-label="Scroll to premium brands"><span /></a>
        </section>

        <section className="brands" id="brands">
          <header className="section-heading">
            <i className="fas fa-star star" aria-hidden="true" />
            <p className="eyebrow">CURATED WITH CARE</p>
            <h2>Our Premium Brands</h2>
            <div className="heading-rule" />
          </header>
          <div className="brand-panels">
            <article className="brand-panel daawat">
              <div className="panel-art" />
              <div className="panel-shade" />
              <div className="panel-copy">
                <span className="panel-label">A WORLD OF GOODNESS</span>
                <a className="brand-button daawat-button" href="https://sultana-agro.id/products.php">
                  Explore Daawat <i className="fas fa-arrow-right" />
                </a>
              </div>
            </article>
            <article className="brand-panel antebella">
              <div className="panel-art" />
              <div className="panel-shade" />
              <div className="panel-copy">
                <span className="panel-label">A LITTLE MOMENT OF JOY</span>
                <a className="brand-button antebella-button" href="https://sultana-agro.id/products.php">
                  Explore Antebella <i className="fas fa-arrow-right" />
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <section className="footer-brand">
              <div className="footer-brand-heading">
                <img src="/assets/images/sal-logo.png" alt="" />
                <h2>PT. SULTANA AGRO LESTARI</h2>
              </div>
              <p>Supplying Excellence, Delivering Quality since 2020.</p>
              <p className="footer-muted">Premium importer and distributor of high-quality food products, serving a diverse range of clients across Indonesia.</p>
            </section>
            <section>
              <h3><i className="fas fa-map-marker-alt" /> Headquarter</h3>
              <p className="footer-muted">EightyEight@Kasablanka Office Tower, Lt. 10 Unit E, Jl. Casablanca Kav. 88, Menteng Dalam, Tebet, Jakarta Selatan 12870, DKI Jakarta, Indonesia</p>
              <a className="map-link" href="https://maps.app.goo.gl/Z5Fk8nCd3SY9Cyrg6" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt" /> &nbsp; View on Maps
              </a>
            </section>
            <section className="connect">
              <h3><i className="fas fa-headset" /> Connect</h3>
              <a href="tel:+62216500552"><span className="contact-icon"><i className="fas fa-phone" /></span> +62 21 - 6500 552</a>
              <a href="https://wa.me/6285212667822" target="_blank" rel="noopener noreferrer"><span className="contact-icon"><i className="fab fa-whatsapp" /></span> +62 852 1266 7822</a>
              <a href="mailto:ptsultanalestari@gmail.com"><span className="contact-icon"><i className="fas fa-envelope" /></span> ptsultanalestari@gmail.com</a>
              <a href="https://instagram.com/daawatindonesia" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram social-icon" /> @daawatindonesia</a>
              <a href="https://instagram.com/antebella.id" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram social-icon" /> @antebella.id</a>
            </section>
          </div>
          <div className="footer-bottom">
            <p>© 2026 PT. Sultana Agro Lestari. All rights reserved.</p>
            <p>Supplying Excellence, Delivering Quality</p>
          </div>
        </div>
      </footer>
    </>
  );
}
