"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { clsx } from "clsx";
import { useMutation } from "convex/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import {
  IconCrop,
  IconPhoto,
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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { HQNRD } from "@/constants";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import {
  deleteFileFromStorage,
  generateUploadUrl,
  updateRecord,
} from "@/convex/upload";
import { uploadWithProgress } from "@/lib/uploadWithProgress";
import { HiddenInput } from "../Form";
import HiddenDialogItem from "../HiddenDialogItem";
import { dataURLtoFile, getCroppedImg } from "./utils";

type FileToUploadProps = {
  fileId: Id<"_storage"> | null;
};

const FILETYPES = ["video", "image"];

export const ImageCropper = ({
  labelStyle,
  fileName = "image",
  placeholder = "Choose File No File Chosen",
  aspect,
  fileType,
}: {
  labelStyle: string;
  fileName: string;
  placeholder?: string;
  aspect: number;
  fileType: "image" | "video";
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [file, setFile] = useState<Blob | null>(null);
  const [imgString, setImageString] = useState("");
  const [currentFile, setCurrentFile] = useState<Blob | null>(null);
  const [croppedImg, setCroppedImg] = useState<string | null>(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const croppedAreaPixelsRef = useRef<Area | null>(null);
  const [uploadedFileDetails, setUploadedFileDetails] =
    useState<FileToUploadProps>({ fileId: null });

  // Convex stuff
  const generatedUploadUrl = useMutation(api.upload.generateUploadUrl);
  const deleteFileFromDb = useMutation(api.upload.deleteFileFromStorage);

  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    croppedAreaPixelsRef.current = croppedAreaPixels;
  };

  const onVideoFileChange = async (videoFile: Blob) => {
    const uploadUrl = await generatedUploadUrl();
    // Step 2: POST the file to the URL
    const result = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": videoFile.type },
      body: videoFile,
    });
    const { storageId } = await result.json();
    if (storageId) {
      setUploadedFileDetails({ fileId: storageId });
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const localFile = e.target.files?.[0];
    if (!localFile) return;
    setCurrentFile(localFile);
    if (HQNRD.MIMETYPE.video.MP4 === localFile.type) {
      await onVideoFileChange(localFile);
      return;
    }
    setFile(localFile);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageString(fileReader.result as string);
    };
    fileReader.readAsDataURL(localFile);
  };

  const handleCrop = async () => {
    if (!imgString || !croppedAreaPixelsRef.current || !file) return;
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
    // Step 1: Get a short-lived upload URL
    const uploadUrl = await generatedUploadUrl();
    // Step 2: POST the file to the URL
    const result = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": croppedBlob.type },
      body: croppedBlob,
    });
    const { storageId } = await result.json();
    if (storageId) {
      setUploadedFileDetails({ fileId: storageId });
    }
  };

  const handleClearCrop = async () => {
    // Reset cropping values
    setCroppedImg(null);
    setImageString("");
    setFile(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    // Delete file from database if needed
    if (uploadedFileDetails.fileId) {
      await deleteFileFromDb({
        storageId: uploadedFileDetails.fileId,
      });
    }
  };

  return (
    <div className={"h-full w-full overflow-hidden rounded-md"}>
      {!imgString && !loading && (
        <Label
          className={clsx(
            "w-full p-2 border flex items-center justify-center relative cursor-pointer",
            labelStyle,
          )}
          htmlFor={fileName}
        >
          <Button
            className={"absolute right-2 bottom-2 pointer-events-none"}
            size={"icon"}
            variant={"default"}
            onClick={handleClearCrop}
          >
            {fileType === FILETYPES[1] ? (
              <IconPhotoPlus size={18} />
            ) : (
              <IconPlayerPlayFilled size={18} />
            )}
          </Button>
          {showSpinner ? (
            <div>
              <Spinner /> Uploading File
            </div>
          ) : (
            <p className={"text-xs text-muted-foreground"}>{placeholder}</p>
          )}
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

      {imgString && fileType !== FILETYPES[1] && !croppedImg && (
        <Dialog open={croppedImg === null}>
          <DialogContent>
            <VisuallyHidden>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Are you sure you want to
                  permanently delete this file from our servers?
                </DialogDescription>
              </DialogHeader>
            </VisuallyHidden>
            <div className={"relative w-full h-[300px]"}>
              <Cropper
                image={imgString}
                crop={crop}
                zoom={zoom}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                showGrid
                rotation={rotation}
                aspect={aspect}
              />
            </div>
            <div className={"p-1 gap-2 flex items-center justify-center pt-8"}>
              <Button size={"icon"} variant={"outline"} onClick={handleCrop}>
                <IconCrop size={18} />
              </Button>
              <span className={"mx-1"} />
              <Button
                size={"icon"}
                variant={"outline"}
                onClick={() =>
                  setRotation(rotation + HQNRD.ORIENTATION.ROTATION.RATIO)
                }
              >
                <IconRotateClockwise />
              </Button>
              <Button
                size={"icon"}
                variant={"outline"}
                onClick={() =>
                  setRotation(rotation - HQNRD.ORIENTATION.ROTATION.RATIO)
                }
              >
                <IconRotate />
              </Button>
              <span className={"mx-1"} />
              <Button
                size={"icon"}
                variant={"outline"}
                onClick={() => setZoom(zoom + HQNRD.ORIENTATION.ZOOM.ZOOMRATIO)}
              >
                <IconZoomCancel />
              </Button>
              <Button
                size={"icon"}
                variant={"outline"}
                onClick={() => setZoom(zoom - HQNRD.ORIENTATION.ZOOM.ZOOMRATIO)}
              >
                <IconZoomOut />
              </Button>
              <span className={"mx-1"} />
              <Button
                size={"icon"}
                className={"bg-red-800 border border-red-500 hover:bg-red-400"}
                onClick={handleClearCrop}
              >
                <IconTrash size={18} />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* {croppedImg && fileType === FILETYPES[0] && (
        <div>
          <div className="relative overflow-hidden">
            <img
              src={croppedImg}
              alt="Cropped"
              className="rounded-md overflow-hidden"
            />

            <input
              className="hidden"
              name={fileName}
              defaultValue={uploadedFileDetails.fileId ?? ""}
            />

            {posterDetails.fileId && (
              <input
                className="hidden"
                name={fileName + "_poster"}
                defaultValue={posterDetails.fileId ?? ""}
              />
            )}

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
        </div>
      )} */}
    </div>
  );
};
