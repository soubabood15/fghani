import { notFound } from "next/navigation";
import { catalog, departments, type DepartmentSlug } from "../catalog";
import ShopClient from "./ShopClient";

export function generateStaticParams(){return Object.keys(departments).map(category=>({category}));}

export default async function DepartmentPage({params}:{params:Promise<{category:string}>}){
 const {category}=await params;
 if(!(category in departments)) notFound();
 const slug=category as DepartmentSlug; const department=departments[slug];
 return <main>
  <div className="topbar"><span>Fast delivery across Jordan</span><span>Genuine warranty / Cash on delivery / After-sales support</span></div>
  <header className="header shop-header"><a className="brand" href="/"><span className="brand-mark">A</span><span><b>Al Afghani</b><small>Gaming & Electronics</small></span></a><a className="back-home" href="/">← Back to Home</a><div className="header-actions"><a href="tel:+962790874943">Call us</a><a className="cart" href="https://wa.me/962790874943">WhatsApp</a></div></header>
  <nav className="nav"><a href="/shop/ps5">PS5</a><a href="/shop/ps4">PS4</a><a href="/shop/xbox">Xbox</a><a href="/shop/games">Games</a><a href="/shop/accessories">Accessories</a><a href="/shop/pre-owned">Pre-Owned</a></nav>
  <section className="department-hero" style={{"--department-accent":department.accent} as React.CSSProperties}><div className="wrap"><span>{department.eyebrow}</span><h1>{department.title}</h1><p>{department.description}</p><div className="crumbs"><a href="/">Home</a><b>›</b><span>{department.title}</span></div></div></section>
  <section className="department-products wrap"><ShopClient products={catalog[slug]}/></section>
  <section className="services"><div className="wrap service-grid"><div><span><strong>Delivery Across Jordan</strong><small>Fast and secure</small></span></div><div><span><strong>Dependable Warranty</strong><small>On new and pre-owned products</small></span></div><div><span><strong>Expert Support</strong><small>We are ready to help</small></span></div></div></section>
  <footer><div className="copyright wrap">© 2026 Al Afghani Gaming. All rights reserved.</div></footer>
  <a className="whatsapp" href="https://wa.me/962790874943" aria-label="Chat on WhatsApp">WA</a>
 </main>;
}
