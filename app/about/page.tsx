import Link from "next/link";

export const metadata = {
  title: "About Us | PT. Sultana Agro Lestari",
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <section className="page-banner">
        <p className="eyebrow">GET TO KNOW US</p>
        <h1>About Sultana Agro Lestari</h1>
        <p>Supplying Excellence, Delivering Quality.</p>
      </section>
      <section className="content-section about-content">
        <div className="content-copy">
          <p className="eyebrow">OUR STORY</p>
          <h2>A trusted link between global producers and local markets.</h2>
          <p>
            Located in Jakarta, Indonesia, we are an importer and distributor of high-quality food
            products, serving a diverse range of clients across retail, wholesale, and foodservice
            sectors.
          </p>
          <p>
            With a strategic focus on sourcing exceptional products from trusted global suppliers,
            we deliver a curated selection of premium products including basmati rice and spread
            cream.
          </p>
          <p>
            We are committed to fostering long-term partnerships, driving innovation in the food
            industry, and delivering value-added solutions that enhance our clients&apos; competitive
            advantage. Our mission is to be the trusted link between global food producers and local
            markets, consistently exceeding expectations through reliability, integrity, and
            exceptional service.
          </p>
          <Link className="button button-primary content-button" href="/products">
            Explore Our Products <i className="fas fa-arrow-right" />
          </Link>
        </div>
        <div className="about-mark">
          <div className="about-mark-halo" />
          <img src="/assets/images/sal-logo.png" alt="PT. Sultana Agro Lestari logo" />
          <p>Trusted quality, thoughtfully sourced.</p>
        </div>
      </section>
    </main>
  );
}
