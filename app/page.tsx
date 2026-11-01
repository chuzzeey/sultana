import Link from "next/link";

export default function Home() {
  return (
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
                <Link className="button button-primary" href="/products">
                  <i className="fas fa-shopping-bag" /> View Products
                </Link>
                <Link className="button button-outline" href="/about">
                  <i className="fas fa-info-circle" /> About Us
                </Link>
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
                <Link className="brand-button daawat-button" href="/products">
                  Explore Daawat <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </article>
            <article className="brand-panel antebella">
              <div className="panel-art" />
              <div className="panel-shade" />
              <div className="panel-copy">
                <span className="panel-label">A LITTLE MOMENT OF JOY</span>
                <Link className="brand-button antebella-button" href="/products">
                  Explore Antebella <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
  );
}
