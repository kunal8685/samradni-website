import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Mail } from './Icons'

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand"><img src="/assets/samraadni-logo.png" alt="Samraadni"/><p>The Royal Weaves of Sahyadri.</p></div>
      <div className="footer-links"><div><span>Explore</span><Link to="/collection">Collection</Link><Link to="/story">Our Story</Link><Link to="/contact">Contact</Link></div><div><span>Follow</span><a href="https://www.instagram.com/_samraadni_/" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a><a href="mailto:hello@samraadni.in"><Mail size={16}/> Email</a></div></div>
      <div className="footer-note"><small>Rooted in Maharashtra.<br/>Woven for today.</small></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Samraadni. All rights reserved.</span><span>Made with reverence for the Sahyadri.</span></div>
  </footer>
}
