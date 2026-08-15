import React from 'react'
import { ArrowUpRight } from './Icons'

export default function ProductCard({ item }) {
  return <article className="product-card">
    <div className="product-image-wrap">
      <img src={item.image} alt={item.title} className="product-image" />
      <span className="product-number">{item.number}</span>
      <button className="product-arrow" aria-label={`Explore ${item.title}`}><ArrowUpRight size={18}/></button>
    </div>
    <div className="product-meta"><span>{item.category}</span><h3>{item.title}</h3></div>
  </article>
}
