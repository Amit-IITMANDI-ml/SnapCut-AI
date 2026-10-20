import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Brand } from './Brand'

const nav = [{ label: 'Features', id: 'features' }, { label: 'How it works', id: 'how-it-works' }, { label: 'Pricing', id: 'pricing' }]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const goToSection = (id: string) => { setOpen(false); if (pathname === '/') document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <header className="site-header"><div className="nav-wrap">
    <Brand />
    <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Main navigation">
      {nav.map(item => pathname === '/' ? <button key={item.id} onClick={() => goToSection(item.id)}>{item.label}</button> : <Link key={item.id} to={`/#${item.id}`}>{item.label}</Link>)}
      <Link className="btn btn--nav mobile-only" to="/app" onClick={() => setOpen(false)}>Remove Background</Link>
    </nav>
    <Link className="btn btn--nav desktop-only" to="/app">Remove Background</Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
  </div></header>
}
