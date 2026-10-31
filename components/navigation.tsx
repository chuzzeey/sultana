"use client";

import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a className="brand-lockup" href="https://sultana-agro.id/" aria-label="Sultana Agro Lestari home">
          <img src="/assets/images/sal-logo.png" alt="Sultana Agro Lestari" />
          <span>PT. SULTANA AGRO LESTARI</span>
        </a>

        <div className="desktop-links">
          <a className="nav-link active" href="https://sultana-agro.id/"><i className="fas fa-home" /> Home</a>
          <a className="nav-link" href="https://sultana-agro.id/about.php"><i className="fas fa-building" /> About Us</a>
          <a className="nav-link" href="https://sultana-agro.id/products.php"><i className="fas fa-box-open" /> Products</a>
          <a className="nav-link" href="https://sultana-agro.id/updates.php"><i className="fas fa-newspaper" /> Updates</a>
          <a className="nav-contact" href="https://sultana-agro.id/contact.php"><i className="fas fa-envelope" /> Contact</a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars" />
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-links">
          <a href="https://sultana-agro.id/" onClick={closeMenu}><i className="fas fa-home" /> Home</a>
          <a href="https://sultana-agro.id/about.php" onClick={closeMenu}><i className="fas fa-building" /> About Us</a>
          <a href="https://sultana-agro.id/products.php" onClick={closeMenu}><i className="fas fa-box-open" /> Products</a>
          <a href="https://sultana-agro.id/updates.php" onClick={closeMenu}><i className="fas fa-newspaper" /> Updates</a>
          <a className="mobile-contact" href="https://sultana-agro.id/contact.php" onClick={closeMenu}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}
