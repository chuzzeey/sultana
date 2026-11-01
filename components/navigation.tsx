"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);
  const linkClass = (href: string) => `nav-link${pathname === href ? " active" : ""}`;

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link className="brand-lockup" href="/" aria-label="Sultana Agro Lestari home">
          <img src="/assets/images/sal-logo.png" alt="Sultana Agro Lestari" />
          <span>PT. SULTANA AGRO LESTARI</span>
        </Link>

        <div className="desktop-links">
          <Link className={linkClass("/")} href="/"><i className="fas fa-home" /> Home</Link>
          <Link className={linkClass("/about")} href="/about"><i className="fas fa-building" /> About Us</Link>
          <Link className={linkClass("/products")} href="/products"><i className="fas fa-box-open" /> Products</Link>
          <Link className={linkClass("/updates")} href="/updates"><i className="fas fa-newspaper" /> Updates</Link>
          <Link className={`nav-contact${pathname === "/contact" ? " active" : ""}`} href="/contact"><i className="fas fa-envelope" /> Contact</Link>
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
          <Link className={linkClass("/")} href="/" onClick={closeMenu}><i className="fas fa-home" /> Home</Link>
          <Link className={linkClass("/about")} href="/about" onClick={closeMenu}><i className="fas fa-building" /> About Us</Link>
          <Link className={linkClass("/products")} href="/products" onClick={closeMenu}><i className="fas fa-box-open" /> Products</Link>
          <Link className={linkClass("/updates")} href="/updates" onClick={closeMenu}><i className="fas fa-newspaper" /> Updates</Link>
          <Link className={`mobile-contact${pathname === "/contact" ? " active" : ""}`} href="/contact" onClick={closeMenu}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
