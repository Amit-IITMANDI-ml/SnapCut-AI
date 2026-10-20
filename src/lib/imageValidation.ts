import type { SelectedImage } from '../types/image'

const MAX_BYTES = 10 * 1024 * 1024
const MAX_DIMENSION = 5000
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export const formatBytes = (bytes: number) => {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export async function validateImage(file?: File): Promise<SelectedImage> {
  if (!file) throw new Error('Choose an image to continue.')
  if (!ACCEPTED_TYPES.includes(file.type)) throw new Error('Please choose a JPG, PNG, or WEBP image.')
  if (file.size > MAX_BYTES) throw new Error('This image is larger than 10 MB. Choose a smaller file.')

  const url = URL.createObjectURL(file)
  try {
    const dimensions = await new Promise<{ width: number; height: number }>((resolve, reject) => {
      const image = new Image()
      image.onload = () => resolve({ width: image.naturalWidth, height: image.naturalHeight })
      image.onerror = () => reject(new Error('This image could not be read. Try another file.'))
      image.src = url
    })
    if (dimensions.width > MAX_DIMENSION || dimensions.height > MAX_DIMENSION) {
      throw new Error('Image dimensions must be no more than 5000 × 5000 pixels.')
    }
    return { file, url, name: file.name, size: file.size, ...dimensions }
  } catch (error) {
    URL.revokeObjectURL(url)
    throw error
  }
}
