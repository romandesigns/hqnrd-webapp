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
  IconPlayerPlayFilled,
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
  DialogDescription,
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

const FILETYPES = ["video", "image"];

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
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const [file, setFile] = useState<Blob | null>(null);
  const [imgString, setImageString] = useState("");
  const [croppedImg, setCroppedImg] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [fileDetails, setFileDetails] = useState<FileToUploadProps>({
    fileId: null,
  });

  const croppedAreaPixelsRef = useRef<Area | null>(null);

  const generatedUploadUrl = useMutation(api.upload.generateUploadUrl);
  const deleteFileFromDb = useMutation(api.upload.deleteFileFromStorage);

  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    croppedAreaPixelsRef.current = croppedAreaPixels;
  };

  // Correct useQuery usage
  const fileUrl = useQuery(
    api.upload.getFileUrl,
    fileDetails.fileId ? { storageId: fileDetails.fileId } : "skip",
  );

  // ✔ HANDLE FILE SELECTION
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const localFile = e.target.files?.[0];
    if (!localFile) return;
    // For IMAGE → load into cropper
    setFile(localFile);
    const reader = new FileReader();
    reader.onload = () => setImageString(reader.result as string);
    reader.readAsDataURL(localFile);
  };

  // ✔ CROP + UPLOAD IMAGE
  const handleCrop = async () => {
    if (!imgString || !croppedAreaPixelsRef.current || !file) return;
    setLoading(true);
    const cropped = await getCroppedImg(
      imgString,
      croppedAreaPixelsRef.current,
      rotation,
      HQNRD.MIMETYPE.image.WEBP,
    );
    setCroppedImg(cropped);
    const croppedBlob = dataURLtoFile(
      cropped,
      file.name.replace(/\.[^/.]+$/, "") + ".webp",
      HQNRD.MIMETYPE.image.WEBP,
    );
    const uploadUrl = await generatedUploadUrl();
    const result = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": croppedBlob.type },
      body: croppedBlob,
    });
    const response = await result.json();
    if (response.storageId) {
      setFileDetails({ fileId: response.storageId });
    }
    setLoading(false);
  };

  // ✔ CLEAR FILE
  const handleClearCrop = async () => {
    if (fileDetails.fileId) {
      await deleteFileFromDb({
        storageId: fileDetails.fileId,
      });
    }
    setFileDetails({ fileId: null });
    setCroppedImg(null);
    setImageString("");
    setFile(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  // ✔ Loading overlay
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
            accept="image/*,video/*"
            multiple={false}
            className="hidden"
            onChange={handleFileChange}
          />
        </Label>
      )}

      {/* IMAGE CROPPER */}
      {imgString && !croppedImg && (
        <Dialog open={true}>
          <DialogContent>
            <VisuallyHidden>
              <DialogHeader>
                <DialogTitle>Edit Image</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
            </VisuallyHidden>

            <div className="relative w-full h-[300px]">
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

            <div className="p-1 gap-2 flex items-center justify-center pt-8">
              <Button size="icon" variant="outline" onClick={handleCrop}>
                <IconCrop size={18} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() =>
                  setRotation(rotation + HQNRD.ORIENTATION.ROTATION.RATIO)
                }
              >
                <IconRotateClockwise />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() =>
                  setRotation(rotation - HQNRD.ORIENTATION.ROTATION.RATIO)
                }
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
      )}

      {/* IMAGE PREVIEW */}
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
