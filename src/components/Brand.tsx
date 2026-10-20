import { Link } from 'react-router-dom'

export function Brand({ compact = false }: { compact?: boolean }) {
  return <Link className={`brand ${compact ? 'brand--compact' : ''}`} to="/" aria-label="SnapCut AI home">
    <span className={compact ? 'brand__crop' : 'brand__wordmark'} aria-hidden="true" />
  </Link>
}
