import type { Area } from "react-easy-crop";
import { HQNRD } from "@/constants";

// Convert degrees → radians
function getRadianAngle(deg: number) {
  return (deg * Math.PI) / 180;
}

// Handle canvas rotation dimensions
function rotateSize(width: number, height: number, rotation: number) {
  const rotRad = getRadianAngle(rotation);
  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
}

// Main crop function (returns BASE64)
export async function getCroppedImg({
  imageSrc,
  pixelCrop,
  rotation = 0,
  mimeType = HQNRD.MIMETYPE.image.AVIF,
  quality = 0.8,
  resizeFactor = 0.5,
}: {
  imageSrc: string;
  pixelCrop: Area;
  rotation?: number;
  mimeType?: string;
  quality?: number;
  resizeFactor?: number;
}) {
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc; // No need for crossOrigin on base64 images
    img.onload = () => resolve(img);
    img.onerror = reject;
  });

  const rot = getRadianAngle(rotation);

  // 1. Rotate canvas
  const rotatedCanvas = document.createElement("canvas");
  const rCtx = rotatedCanvas.getContext("2d")!;
  const { width: rW, height: rH } = rotateSize(
    image.width,
    image.height,
    rotation,
  );
  rotatedCanvas.width = rW;
  rotatedCanvas.height = rH;

  rCtx.translate(rW / 2, rH / 2);
  rCtx.rotate(rot);
  rCtx.drawImage(image, -image.width / 2, -image.height / 2);

  // 2. Crop canvas
  const cropCanvas = document.createElement("canvas");
  cropCanvas.width = pixelCrop.width;
  cropCanvas.height = pixelCrop.height;

  const cCtx = cropCanvas.getContext("2d")!;
  cCtx.drawImage(
    rotatedCanvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  );

  // 3. Resize (optional)
  const finalCanvas = document.createElement("canvas");
  finalCanvas.width = Math.floor(pixelCrop.width * resizeFactor);
  finalCanvas.height = Math.floor(pixelCrop.height * resizeFactor);

  const fCtx = finalCanvas.getContext("2d")!;
  fCtx.drawImage(
    cropCanvas,
    0,
    0,
    cropCanvas.width,
    cropCanvas.height,
    0,
    0,
    finalCanvas.width,
    finalCanvas.height,
  );

  // 4. Try AVIF — verify properly
  let base64 = finalCanvas.toDataURL(HQNRD.MIMETYPE.image.AVIF, quality);

  if (!base64.startsWith("data:image/avif")) {
    console.warn("AVIF not supported, falling back to WebP.");
    base64 = finalCanvas.toDataURL("image/webp", quality);
  }

  return base64;
}

// Convert BASE64 → FILE
export function dataURLtoFile(dataUrl: string, filename: string) {
  const mimeType = dataUrl.substring(
    dataUrl.indexOf(":") + 1,
    dataUrl.indexOf(";"),
  );

  const arr = dataUrl.split(",");
  const bstr = atob(arr[1]);
  const u8arr = new Uint8Array(bstr.length);

  for (let i = 0; i < bstr.length; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }

  const isAvif = mimeType === HQNRD.MIMETYPE.image.AVIF;
  const ext = isAvif ? "avif" : "webp";

  return new File([u8arr], `${filename}.${ext}`, {
    type: mimeType,
    lastModified: Date.now(),
  });
}
