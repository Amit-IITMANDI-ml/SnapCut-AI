import { FileImage, ImageUp } from 'lucide-react'
import { useRef, useState } from 'react'

interface Props { onFile: (file?: File) => void; disabled?: boolean }
export function ImageUploader({ onFile, disabled }: Props) {
  const input = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const accept = (files?: FileList | null) => onFile(files?.[0])
  return <section className={`upload-zone ${dragging ? 'upload-zone--dragging' : ''}`} onDragOver={e => { e.preventDefault(); setDragging(true) }} onDragLeave={() => setDragging(false)} onDrop={e => { e.preventDefault(); setDragging(false); accept(e.dataTransfer.files) }}>
    <input ref={input} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" onChange={e => { accept(e.target.files); e.currentTarget.value = '' }} disabled={disabled} />
    <div className="upload-zone__icon"><ImageUp /></div><h2>Drop your image here</h2><p>or choose a file from your device</p><button className="btn btn--primary" onClick={() => input.current?.click()} disabled={disabled}>Choose an image</button>
    <div className="upload-zone__rules"><span><FileImage size={15} /> JPG, PNG, or WEBP</span><span>Up to 10 MB</span><span>Max 5000 × 5000 px</span></div>
  </section>
}
