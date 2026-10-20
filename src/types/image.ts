export interface SelectedImage {
  file: File
  url: string
  name: string
  size: number
  width: number
  height: number
}

export interface ProcessingResult {
  url: string
  createdAt: Date
}
