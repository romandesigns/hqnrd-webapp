"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { clsx } from "clsx";
import { useMutation, useQuery } from "convex/react";
import type React from "react";
import { useRef, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";

import {
  IconCrop,
  IconPhotoPlus,
  IconRotate,
  IconRotateClockwise,
  IconTrash,
  IconZoomCancel,
  IconZoomOut,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { HQNRD } from "@/constants";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { dataURLtoFile, getCroppedImg } from "./utils";

type FileToUploadProps = {
  fileId: Id<"_storage"> | null;
};

export const ImageUpload = ({
  labelStyle,
  fileName = "media",
  placeholder = "Choose File",
  aspect,
}: {
  labelStyle: string;
  fileName: string;
  placeholder?: string;
  aspect: number;
}) => {
  // Cropper states
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const [file, setFile] = useState<File | null>(null);
  const [imgString, setImageString] = useState<string>("");
  const [croppedImg, setCroppedImg] = useState<string | null>(null);

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const croppedAreaPixelsRef = useRef<Area | null>(null);

  const [fileDetails, setFileDetails] = useState<FileToUploadProps>({
    fileId: null,
  });

  const generatedUploadUrl = useMutation(api.upload.generateUploadUrl);
  const deleteFileFromDb = useMutation(api.upload.deleteFileFromStorage);

  const fileUrl = useQuery(
    api.upload.getFileUrl,
    fileDetails.fileId ? { storageId: fileDetails.fileId } : "skip",
  );

  // File Selected
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const localFile = e.target.files?.[0];
    if (!localFile) return;

    setFile(localFile);
    setDialogOpen(true);

    const reader = new FileReader();
    reader.onload = () => setImageString(reader.result as string);
    reader.readAsDataURL(localFile);
  };

  // Cropping
  const onCropComplete = (_: Area, area: Area) => {
    croppedAreaPixelsRef.current = area;
  };

  // Apply crop + upload
  const handleCrop = async () => {
    if (!imgString || !file || !croppedAreaPixelsRef.current) return;

    setLoading(true);

    const croppedBase64 = await getCroppedImg({
      imageSrc: imgString,
      pixelCrop: croppedAreaPixelsRef.current,
      rotation,
      mimeType: "image/webp",
      quality: 0.9,
      resizeFactor: 0.6,
    });

    setCroppedImg(croppedBase64);

    const croppedFile = dataURLtoFile(
      croppedBase64,
      file.name.replace(/\.[^/.]+$/, "") + ".webp",
      "image/webp",
    );

    const uploadUrl = await generatedUploadUrl();

    const res = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": "image/webp" },
      body: croppedFile,
    });

    const json = await res.json();

    if (json.storageId) {
      setFileDetails({ fileId: json.storageId });
    }

    setDialogOpen(false);
    setLoading(false);
  };

  // Clear image
  const handleClearCrop = async () => {
    if (fileDetails.fileId) {
      await deleteFileFromDb({ storageId: fileDetails.fileId });
    }

    setFileDetails({ fileId: null });
    setCroppedImg(null);
    setImageString("");
    setFile(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  // Loading overlay
  if (loading) {
    return (
      <div
        className={clsx(
          "h-full w-full flex flex-col gap-2 items-center justify-center rounded-md",
          labelStyle,
        )}
      >
        <Spinner className="h-5 w-5" />
        <p className="text-xs text-muted-foreground">Uploading...</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-hidden rounded-md">
      {/* INPUT BUTTON */}
      {!imgString && !croppedImg && !fileDetails.fileId && (
        <Label
          className={clsx(
            "w-full p-2 border flex items-center justify-center relative cursor-pointer",
            labelStyle,
          )}
          htmlFor={fileName}
        >
          <Button
            className="absolute right-2 bottom-2 pointer-events-none"
            size="icon"
            variant="default"
          >
            <IconPhotoPlus size={18} />
          </Button>

          <p className="text-xs text-muted-foreground">{placeholder}</p>

          <input
            type="file"
            id={fileName}
            accept="image/*"
            multiple={false}
            className="hidden"
            onChange={handleFileChange}
          />
        </Label>
      )}

      {/* CROPPER DIALOG */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <VisuallyHidden>
            <DialogHeader>
              <DialogTitle>Edit Image</DialogTitle>
            </DialogHeader>
          </VisuallyHidden>

          <div className="relative w-full h-[400px] bg-black">
            <Cropper
              image={imgString}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={aspect}
              showGrid
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>

          <div className="p-1 gap-2 flex items-center justify-center pt-6">
            <Button size="icon" variant="outline" onClick={handleCrop}>
              <IconCrop size={18} />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setRotation(rotation + 90)}
            >
              <IconRotateClockwise />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setRotation(rotation - 90)}
            >
              <IconRotate />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setZoom(zoom + 0.1)}
            >
              <IconZoomCancel />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setZoom(zoom - 0.1)}
            >
              <IconZoomOut />
            </Button>
            <Button
              size="icon"
              className="bg-red-800 border border-red-500 hover:bg-red-400"
              onClick={handleClearCrop}
            >
              <IconTrash size={18} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* PREVIEW */}
      {croppedImg && (
        <div className="relative overflow-hidden">
          <img
            src={fileUrl}
            alt="Cropped"
            className="rounded-md w-full h-full object-cover block"
          />

          <input
            className="hidden"
            name={fileName}
            value={fileDetails.fileId ?? ""}
            readOnly
          />

          <div className="absolute right-1 top-1">
            <Button
              size="icon"
              className="bg-red-800 border border-red-500 hover:bg-red-400 rounded-md"
              onClick={handleClearCrop}
            >
              <IconTrash size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
