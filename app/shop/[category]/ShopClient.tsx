"use client";
import { useMemo, useState } from "react";
import type { Product } from "../catalog";

export default function ShopClient({products}:{products:Product[]}){
 const [query,setQuery]=useState("");
 const visible=useMemo(()=>products.filter(p=>`${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())),[products,query]);
 return <>
  <div className="shop-tools"><span>{visible.length} products</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search this department..." aria-label="Search this department"/><select aria-label="Sort products"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option></select></div>
  <div className="product-grid">{visible.map(p=><article className="product" key={p.id}><div className="product-image"><img src={p.image} alt={p.name}/><span>{p.tag}</span></div><div className="product-body"><small>{p.category}</small><h3>{p.name}</h3><div className="rating">★★★★★ <span>(12)</span></div><div className="price"><strong>JOD {p.price}</strong><del>JOD {p.old}</del></div></div></article>)}</div>
  {!visible.length&&<p className="empty">No matching products found. Try another search.</p>}
 </>;
}
