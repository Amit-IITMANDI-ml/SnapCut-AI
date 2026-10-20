import { ArrowLeft, CheckCircle2, Info, Sparkles, TriangleAlert } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Brand } from '../components/Brand'
import { ImagePreview } from '../components/ImagePreview'
import { ImageUploader } from '../components/ImageUploader'
import { ResultPreview } from '../components/ResultPreview'
import { validateImage } from '../lib/imageValidation'
import type { SelectedImage } from '../types/image'

export function WorkspacePage() {
  const [image, setImage] = useState<SelectedImage | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const hiddenInput = useRef<HTMLInputElement>(null)
  useEffect(() => () => { if (image) URL.revokeObjectURL(image.url) }, [image])
  const handleFile = async (file?: File) => { setError(null); setNotice(null); try { const selected = await validateImage(file); setImage(previous => { if (previous) URL.revokeObjectURL(previous.url); return selected }) } catch (e) { setError(e instanceof Error ? e.message : 'Unable to select this image.') } }
  const clear = () => { setImage(previous => { if (previous) URL.revokeObjectURL(previous.url); return null }); setNotice(null); setError(null) }
  return <div className="workspace"><header className="workspace-header"><Brand /><div className="workspace-header__center"><h1>Background Remover</h1><p>Upload an image to prepare it for future AI processing.</p></div><Link className="back-link" to="/"><ArrowLeft size={17} /> <span>Back to home</span></Link></header><main className="workspace-main"><section className="workspace-intro"><p className="eyebrow"><span /> Step 1 of 2</p><h2>Upload your image</h2><p>Choose an image to preview it locally. It will not be uploaded or processed in this prototype.</p></section>{error && <div className="alert alert--error" role="alert"><TriangleAlert /> <span>{error}</span><button onClick={() => setError(null)} aria-label="Dismiss error">×</button></div>}{notice && <div className="alert alert--notice" role="status"><CheckCircle2 /> <span>{notice}</span><button onClick={() => setNotice(null)} aria-label="Dismiss message">×</button></div>}<div className="workspace-grid"><div className="workspace-left">{image ? <ImagePreview image={image} onChange={() => hiddenInput.current?.click()} onReset={clear} /> : <ImageUploader onFile={handleFile} />}<input ref={hiddenInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" onChange={e => { handleFile(e.target.files?.[0]); e.currentTarget.value = '' }} /><div className="privacy-note"><Info size={17} /><p><b>Private by default.</b> In this frontend prototype, your image is previewed only in your browser and is not sent to an image-processing service.</p></div>{image && <button className="process-button" onClick={() => setNotice('Your image is ready. Background processing will be available when the AI service is connected.')}><Sparkles size={20} /> Remove Background <span>AI integration coming next</span></button>}</div><ResultPreview image={image} result={null} onReset={clear} /></div></main></div>
}
