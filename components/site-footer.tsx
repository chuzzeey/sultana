export default function SiteFooter() {
  return (
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
            <a href="tel:+62215600652"><span className="contact-icon"><i className="fas fa-phone" /></span> +62 21-5600 652</a>
            <a href="https://wa.me/6287213665722" target="_blank" rel="noopener noreferrer"><span className="contact-icon"><i className="fab fa-whatsapp" /></span> +62 872 1366 5722</a>
            <a href="mailto:marketing@ptsultanaagrolestari.id"><span className="contact-icon"><i className="fas fa-envelope" /></span> marketing@ptsultanaagrolestari.id</a>
            <span className="connect-social"><i className="fab fa-instagram social-icon" /> @daawatindonesia</span>
            <span className="connect-social"><i className="fab fa-instagram social-icon" /> @antebella.id</span>
          </section>
        </div>
        <div className="footer-bottom">
          <p>© 2026 PT. Sultana Agro Lestari. All rights reserved.</p>
          <p>Supplying Excellence, Delivering Quality</p>
        </div>
      </div>
    </footer>
  );
}
