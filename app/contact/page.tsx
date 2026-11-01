export const metadata = {
  title: "Contact | PT. Sultana Agro Lestari",
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <section className="page-banner">
        <p className="eyebrow">WE&apos;RE HERE TO HELP</p>
        <h1>Contact Us</h1>
        <p>Talk to our team about our products and distribution.</p>
      </section>
      <section className="content-section contact-content">
        <div className="contact-intro">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let&apos;s start a conversation.</h2>
          <p>
            For product, wholesale, or foodservice enquiries, reach out to us using any of the
            contact details below.
          </p>
        </div>
        <div className="contact-cards">
          <a className="contact-card" href="tel:+62215600652">
            <span className="contact-card-icon"><i className="fas fa-phone" /></span>
            <span className="contact-card-label">Call our office</span>
            <strong>+62 21-5600 652</strong>
          </a>
          <a className="contact-card" href="https://wa.me/6287213665722" target="_blank" rel="noopener noreferrer">
            <span className="contact-card-icon"><i className="fab fa-whatsapp" /></span>
            <span className="contact-card-label">WhatsApp</span>
            <strong>+62 872 1366 5722</strong>
          </a>
          <a className="contact-card" href="mailto:marketing@ptsultanaagrolestari.id">
            <span className="contact-card-icon"><i className="fas fa-envelope" /></span>
            <span className="contact-card-label">Email</span>
            <strong>marketing@ptsultanaagrolestari.id</strong>
          </a>
        </div>
        <div className="contact-address">
          <h3><i className="fas fa-map-marker-alt" /> Headquarter</h3>
          <p>
            EightyEight@Kasablanka Office Tower, Lt. 10 Unit E, Jl. Casablanca Kav. 88,
            Menteng Dalam, Tebet, Jakarta Selatan 12870, DKI Jakarta, Indonesia
          </p>
          <a className="text-link" href="https://maps.app.goo.gl/Z5Fk8nCd3SY9Cyrg6" target="_blank" rel="noopener noreferrer">
            View on Maps <i className="fas fa-arrow-right" />
          </a>
        </div>
      </section>
    </main>
  );
}
