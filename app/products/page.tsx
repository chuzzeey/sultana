import Link from "next/link";

export const metadata = {
  title: "Products | PT. Sultana Agro Lestari",
};

const products = [
  {
    name: "Daawat Basmati Rice",
    category: "PREMIUM BASMATI RICE",
    description:
      "Premium basmati rice sourced from trusted global suppliers and included in our curated range for retail, wholesale, and foodservice clients.",
    image: "/assets/images/daawat-bg.png",
    className: "product-daawat",
  },
  {
    name: "Antebella Spread Cream",
    category: "SPREAD CREAM",
    description:
      "Spread cream from our curated product range, serving retail, wholesale, and foodservice clients across Indonesia.",
    image: "/assets/images/antebella-bg.png",
    className: "product-antebella",
  },
];

export default function ProductsPage() {
  return (
    <main className="inner-page">
      <section className="page-banner">
        <p className="eyebrow">CURATED WITH CARE</p>
        <h1>Our Products</h1>
        <p>Quality products from trusted global suppliers.</p>
      </section>
      <section className="content-section products-content">
        <div className="section-heading">
          <i className="fas fa-star star" aria-hidden="true" />
          <p className="eyebrow">A TASTE OF QUALITY</p>
          <h2>Our Premium Brands</h2>
          <div className="heading-rule" />
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div
                className={`product-image ${product.className}`}
                style={{ backgroundImage: `url("${product.image}")` }}
                role="img"
                aria-label={product.name}
              />
              <div className="product-copy">
                <p className="eyebrow">{product.category}</p>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Link className="text-link" href="/contact">
                  Contact us to enquire <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
