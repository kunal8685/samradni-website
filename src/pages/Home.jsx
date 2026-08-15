import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from '../components/Icons'
import SahyadriArt from '../components/SahyadriArt'
import ProductCard from '../components/ProductCard'
import { collections } from '../data'

export default function Home() {
  return <main>
    <section className="hero">
      <img className="hero-photo" src="/assets/products/hero-teal.jpeg" alt="Samraadni heritage collection" />
      <SahyadriArt/>
      <div className="hero-photo-overlay"/>
      <div className="hero-overlay"/>
      <div className="hero-content page-width">
        <p className="eyebrow">A Maharashtrian heritage house</p>
        <img className="hero-logo" src="/assets/samraadni-logo.png" alt="सम्राज्ञी — Samraadni"/>
        <p className="hero-tagline">The Royal Weaves of Sahyadri</p>
        <p className="hero-copy">Where the spirit of Swarajya meets the quiet poetry of the Sahyadri — interpreted through timeless craft.</p>
        <div className="hero-actions"><Link className="button button-gold" to="/collection">Explore the collection <ArrowRight size={18}/></Link><Link className="text-link" to="/story">Discover our story <ArrowUpRight size={17}/></Link></div>
      </div>
      <div className="hero-scroll"><span>Scroll to discover</span><i/></div>
    </section>

    <div className="heritage-marquee"><div>SWARAJYA <b>✦</b> SAHYADRI <b>✦</b> GADKILLE <b>✦</b> PARAMPARA <b>✦</b> SWARAJYA <b>✦</b> SAHYADRI <b>✦</b></div></div>

    <section className="intro section page-width">
      <div className="section-kicker">01 / The beginning</div>
      <div className="intro-grid"><h2>Born from the <em>spirit</em> of a land that remembers.</h2><div><p className="lead">Samraadni is a conceptual Maharashtrian brand inspired by the courage, culture and visual poetry of Swarajya.</p><p>Our world is shaped by the Sahyadri — by stone forts standing against the sky, by winding mountain paths, by the richness of handcraft, and by traditions passed from one generation to the next.</p><Link className="circle-link" to="/story">Read the Samraadni story <ArrowUpRight size={18}/></Link></div></div>
    </section>

    <section className="collection-preview section page-width">
      <div className="section-head"><div><div className="section-kicker">02 / The collection</div><h2>Objects with a <em>legacy</em>.</h2></div><Link className="text-link dark" to="/collection">View all <ArrowRight size={18}/></Link></div>
      <div className="product-grid">{collections.slice(0, 4).map(item => <ProductCard key={item.id} item={item}/>)}</div>
    </section>

    <section className="fort-section section"><SahyadriArt variant="fort"/><div className="fort-content page-width"><div className="section-kicker light">03 / From the Sahyadri</div><h2>More than a mountain.<br/><em>A state of mind.</em></h2><p>Every Samraadni expression carries a little of the landscape that inspired it — grounded, resilient, regal and unmistakably Maharashtrian.</p><Link className="button button-outline" to="/story">Enter our world <ArrowUpRight size={18}/></Link></div></section>

    <section className="craft section page-width"><div className="craft-grid"><div className="craft-art"><div className="loom-line l1"/><div className="loom-line l2"/><div className="loom-line l3"/><span>परंपरा</span></div><div className="craft-copy"><div className="section-kicker">04 / The craft</div><h2>Tradition, <em>reimagined.</em></h2><p className="lead">A modern expression can still carry the weight of generations.</p><p>Samraadni brings together the visual language of Maharashtrian heritage and an editorial, contemporary sensibility. The result is a brand world designed to feel ceremonial yet effortless.</p><Link className="circle-link" to="/story">Explore the philosophy <ArrowUpRight size={18}/></Link></div></div></section>

    <section className="quote-section"><div className="quote-mark">“</div><blockquote>From the stone of the forts to the folds of the weave, every story deserves to be carried forward.</blockquote><span>— Samraadni</span></section>

    <section className="instagram-section section page-width"><div className="section-head"><div><div className="section-kicker">05 / From our world</div><h2>Follow the <em>journey.</em></h2></div><a className="text-link dark" href="https://www.instagram.com/_samraadni_/" target="_blank" rel="noreferrer">@_samraadni_ <ArrowUpRight size={17}/></a></div><div className="ig-grid"><div className="ig-card"><img src="/assets/products/hero-shivaji.jpeg" alt="Samraadni heritage setting"/><span>SWARAJYA</span></div><div className="ig-card"><img src="/assets/products/pink-detail.jpeg" alt="Samraadni pink velvet detail"/><span>राजवैभव</span></div><div className="ig-card"><img src="/assets/products/green-detail.jpeg" alt="Samraadni green floral detail"/><span>SAHYADRI</span></div><div className="ig-card"><img src="/assets/products/cream-detail.jpeg" alt="Samraadni cream embroidery detail"/><span>परंपरा</span></div></div></section>

    <section className="newsletter"><div className="page-width newsletter-inner"><div><div className="section-kicker light">06 / Stay close</div><h2>Letters from the <em>Sahyadri.</em></h2><p>New collections, stories and glimpses from the Samraadni world.</p></div><form onSubmit={e => e.preventDefault()}><input type="email" placeholder="Your email address" aria-label="Your email address"/><button type="submit">Join the circle <ArrowRight size={18}/></button></form></div></section>
  </main>
}
