import Link from "next/link";

export const metadata = {
  title: "Updates | PT. Sultana Agro Lestari",
};

export default function UpdatesPage() {
  return (
    <main className="inner-page">
      <section className="page-banner">
        <p className="eyebrow">WHAT&apos;S NEW</p>
        <h1>Updates</h1>
        <p>News and announcements from Sultana Agro Lestari.</p>
      </section>
      <section className="content-section updates-content">
        <div className="updates-card">
          <span className="updates-icon"><i className="fas fa-newspaper" /></span>
          <p className="eyebrow">STAY TUNED</p>
          <h2>There are no updates to share just yet.</h2>
          <p>
            We&apos;re always working to bring quality products to our partners. Get in touch if
            you&apos;d like to learn more about our brands and distribution.
          </p>
          <Link className="button button-primary content-button" href="/contact">
            Contact Us <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </section>
    </main>
  );
}
