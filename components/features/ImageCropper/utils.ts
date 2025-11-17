function getRadianAngle(deg: number) {
  return (deg * Math.PI) / 180
}

function rotateSize(width: number, height: number, rotation: number) {
  const rotRad = getRadianAngle(rotation)
  return {
    width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  }
}

export async function getCroppedImg(
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number },
  rotation = 0,
  mimeType: string
): Promise<string> {
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    // if you ever pass non‑data URLs, keep this so canvas isn’t tainted
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = imageSrc
  })

  const rotRad = getRadianAngle(rotation)

  // canvas that holds the rotated full image
  const { width: bW, height: bH } = rotateSize(image.width, image.height, rotation)
  const off = document.createElement('canvas')
  off.width = Math.floor(bW)
  off.height = Math.floor(bH)
  const octx = off.getContext('2d')!
  octx.translate(off.width / 2, off.height / 2)
  octx.rotate(rotRad)
  octx.drawImage(image, -image.width / 2, -image.height / 2)

  // canvas for the final crop
  const out = document.createElement('canvas')
  out.width = Math.round(pixelCrop.width)
  out.height = Math.round(pixelCrop.height)
  const ctx = out.getContext('2d')!

  // copy the crop area from the rotated canvas
  ctx.drawImage(
    off,
    Math.round(pixelCrop.x),
    Math.round(pixelCrop.y),
    Math.round(pixelCrop.width),
    Math.round(pixelCrop.height),
    0,
    0,
    Math.round(pixelCrop.width),
    Math.round(pixelCrop.height)
  )

  return out.toDataURL(mimeType, 1)
}

export function dataURLtoFile(dataUrl: string, filename = 'cropped.png', mimetype: string): File {
  const arr = dataUrl.split(',')
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) u8arr[n] = bstr.charCodeAt(n)
  return new File([u8arr], filename, { type: mimetype, lastModified: Date.now() })
}
