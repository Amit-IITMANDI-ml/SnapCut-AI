import { Link } from 'react-router-dom'
import { Brand } from './Brand'

export function SiteFooter() { return <footer className="footer"><div className="footer__top"><div><Brand /><p>Clean image cutouts, starting with a simple local-first workflow.</p></div><div className="footer__links"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div></div><div className="footer__bottom">© {new Date().getFullYear()} SnapCut AI. Phase 1 frontend prototype.</div></footer> }
