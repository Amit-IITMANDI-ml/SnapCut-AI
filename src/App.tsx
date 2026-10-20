import { Route, Routes } from 'react-router-dom'
import { ComingSoonPage } from './pages/ComingSoonPage'
import { HomePage } from './pages/HomePage'
import { WorkspacePage } from './pages/WorkspacePage'
export default function App() { return <Routes><Route path="/" element={<HomePage />} /><Route path="/app" element={<WorkspacePage />} /><Route path="/privacy" element={<ComingSoonPage />} /><Route path="/terms" element={<ComingSoonPage />} /><Route path="*" element={<HomePage />} /></Routes> }
