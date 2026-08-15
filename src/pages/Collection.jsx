import React, { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { collections } from '../data'

export default function Collection() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(collections.map(x => x.category))]
  const shown = useMemo(() => filter === 'All' ? collections : collections.filter(x => x.category === filter), [filter])
  return <main className="inner-page"><section className="page-hero page-width"><div className="section-kicker">The collection</div><h1>Made for the <em>modern heirloom.</em></h1><p>Our collection space is ready to be shaped by the products and stories that define Samraadni.</p></section><section className="collection-page section page-width"><div className="filters">{categories.map(c => <button key={c} className={filter === c ? 'selected' : ''} onClick={() => setFilter(c)}>{c}</button>)}</div><div className="product-grid">{shown.map(item => <ProductCard key={item.id} item={item}/>)}</div><div className="content-note"><strong>Samraadni visual collection.</strong><span>These cards use the supplied campaign photographs. Product names can be replaced with the final catalogue names when you provide them.</span></div></section></main>
}
