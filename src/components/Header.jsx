import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Close, Instagram, Menu } from './Icons'
import { navItems } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="header-inner">
      <Link to="/" className="brand-lockup" onClick={() => setOpen(false)}>
        <img src="/assets/samraadni-logo.png" alt="Samraadni" />
        <span>The Royal Weaves of Sahyadri</span>
      </Link>
      <nav className="desktop-nav">{navItems.map(n => <NavLink key={n.to} to={n.to} className={({isActive}) => isActive ? 'active' : ''}>{n.label}</NavLink>)}</nav>
      <a className="header-social" href="https://www.instagram.com/_samraadni_/" target="_blank" rel="noreferrer" aria-label="Samraadni Instagram"><Instagram size={18}/></a>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">{open ? <Close/> : <Menu/>}</button>
    </div>
    <div className={`mobile-panel ${open ? 'open' : ''}`}>
      {navItems.map(n => <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</NavLink>)}
      <a href="https://www.instagram.com/_samraadni_/" target="_blank" rel="noreferrer">Instagram ↗</a>
    </div>
  </header>
}
