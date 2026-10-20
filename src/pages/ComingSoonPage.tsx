import { ArrowLeft, FileText } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Brand } from '../components/Brand'
export function ComingSoonPage() { const { pathname } = useLocation(); const page = pathname.includes('privacy') ? 'Privacy' : 'Terms'; return <main className="coming-soon"><Brand /><div><FileText /><p className="eyebrow"><span /> Phase 1</p><h1>{page} information is coming later.</h1><p>This frontend prototype does not collect or transmit selected images. Full legal pages will be added before a public commercial launch.</p><Link className="btn btn--primary" to="/"><ArrowLeft size={18} /> Return home</Link></div></main> }
