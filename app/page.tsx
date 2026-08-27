"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

const products = [
  { id: 1, name: "PlayStation 5 Slim", tag: "New", price: 480, old: 510, category: "Consoles", condition: "New", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=85" },
  { id: 2, name: "PlayStation 4 Pro 1TB", tag: "Certified Pre-Owned", price: 165, old: 185, category: "Consoles", condition: "Pre-Owned", image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "DualSense Wireless Controller", tag: "Best Seller", price: 59, old: 65, category: "Accessories", condition: "New", image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=900&q=85" },
  { id: 4, name: "RGB Gaming Headset", tag: "Sale", price: 24, old: 30, category: "Accessories", condition: "New", image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=85" },
];
const navItems = [
  { label: "Offers", href: "#offers" }, { label: "PS5", href: "/shop/ps5" },
  { label: "PS4", href: "/shop/ps4" }, { label: "Xbox", href: "/shop/xbox" },
  { label: "Games", href: "/shop/games" }, { label: "Accessories", href: "/shop/accessories" },
  { label: "Pre-Owned", href: "/shop/pre-owned" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const visible = useMemo(() => products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()) && (filter === "All" || product.condition === filter)), [query, filter]);

  return <main>
    <div className="topbar"><span>Fast delivery across Jordan</span><span>Genuine warranty · Fully tested · After-sales support</span></div>
    <header className="header">
      <button className="menu" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <Link className="brand" href="/" aria-label="Al Afghani home"><span className="brand-mark">A</span><span><b>Al Afghani</b><small>GAMING & ELECTRONICS</small></span></Link>
      <label className="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search consoles, games and accessories" aria-label="Search products" /></label>
      <a className="call-link" href="tel:+962790874943"><small>Need help?</small><b>+962 7 9087 4943</b></a>
    </header>
    <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
    <section className="hero" id="offers"><div className="hero-inner wrap">
      <div className="hero-copy"><span className="eyebrow">SUMMER OFFERS ARE HERE</span><h1>Level up<br /><em>your game.</em></h1><p>New and pre-owned consoles, original games and accessories—with dependable warranty and delivery to your door.</p><div className="hero-actions"><a className="btn primary" href="#products">Shop best sellers <span>→</span></a><a className="btn ghost" href="https://wa.me/962790874943">Ask on WhatsApp</a></div><div className="trust"><span>✓ Genuine warranty</span><span>✓ Cash on delivery</span><span>✓ Jordan-wide delivery</span></div></div>
      <div className="hero-visual" aria-hidden="true"><div className="glow" /><div className="discount"><small>SAVE UP TO</small><strong>25%</strong></div><div className="console-card"><span className="ps-badge">PS5</span><div className="console-shape"><i /><i /></div><p>Starting from <b>JOD 420</b></p></div></div>
    </div></section>
    <section className="products-section" id="products"><div className="wrap">
      <div className="section-head"><div><span>HAND-PICKED FOR YOU</span><h2>Best sellers</h2><p>Customer favourites, ready for delivery.</p></div><div className="tabs" aria-label="Product filters">{["All", "New", "Pre-Owned"].map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      <div className="product-grid">{visible.map((product) => <article className="product" key={product.id}><div className="product-image"><img src={product.image} alt={product.name} /><span>{product.tag}</span></div><div className="product-body"><small>{product.category}</small><h3>{product.name}</h3><div className="price"><strong>JOD {product.price}</strong><del>JOD {product.old}</del></div><a href={`/shop/${product.category.toLowerCase()}`}>View product <span>→</span></a></div></article>)}</div>
      {visible.length === 0 && <p className="empty">No matching products found. Try another search.</p>}
    </div></section>
    <section className="used wrap" id="used"><div><span>SMARTER VALUE, SAME GREAT PLAY</span><h2>Pre-owned.<br />Tested. Guaranteed.</h2><p>Every console passes a complete inspection before it reaches you, backed by a written warranty and after-sales support.</p><Link className="btn primary" href="/shop/pre-owned">Explore pre-owned <span>→</span></Link></div><div className="checks"><b><i>01</i> Comprehensive inspection</b><b><i>02</i> Professionally cleaned</b><b><i>03</i> Warranty up to 12 months</b></div></section>
    <section className="services"><div className="wrap service-grid"><div><b>01</b><span><strong>Delivery across Jordan</strong><small>Fast, careful and secure</small></span></div><div><b>02</b><span><strong>Dependable warranty</strong><small>New and pre-owned devices</small></span></div><div><b>03</b><span><strong>Real customer support</strong><small>Before and after your purchase</small></span></div></div></section>
    <footer id="contact"><div className="wrap footer-grid"><div className="footer-brand"><Link className="brand light" href="/"><span className="brand-mark">A</span><span><b>Al Afghani</b><small>GAMING & ELECTRONICS</small></span></Link><p>Your destination for consoles, games and accessories in Jordan.</p></div><div><h4>Explore</h4><a href="#products">Best sellers</a><a href="#offers">Offers</a><a href="#used">Pre-Owned</a></div><div><h4>Contact</h4><a href="tel:+962790874943">+962 7 9087 4943</a><a href="https://instagram.com/alafgany_for_gaming">Instagram</a><a href="https://wa.me/962790874943">WhatsApp</a></div><div><h4>Follow us</h4><p>New arrivals and weekly offers.</p><a className="social" href="https://www.facebook.com/p/Al-Afghani-for-Gamming-61566604434299/">f</a></div></div><div className="copyright wrap"><span>© 2026 Al Afghani Gaming</span><span>Amman, Jordan</span></div></footer>
    <a className="whatsapp" href="https://wa.me/962790874943" aria-label="Chat on WhatsApp">Chat</a>
  </main>;
}
