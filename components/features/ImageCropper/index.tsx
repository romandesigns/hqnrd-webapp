"use client";

import {
  IconCrop,
  IconPhotoPlus,
  IconRotate,
  IconRotateClockwise,
  IconTrash,
  IconZoomCancel,
  IconZoomOut,
} from "@tabler/icons-react";
import { clsx } from "clsx";
import { useMutation } from "convex/react";
import type React from "react";
import { useRef, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { HQNRD } from "@/constants";
import { api } from "@/convex/_generated/api";
import { generateUploadUrl, updateRecord } from "@/convex/upload";
import { dataURLtoFile, getCroppedImg } from "./utils";

export const ImageCropper = ({
  labelStyle,
  fileName = "image",
  placeholder = "Choose File No File Chosen",
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
  const croppedAreaPixelsRef = useRef<Area | null>(null);

  // Convex stuff
  const generatedUploadUrl = useMutation(api.upload.generateUploadUrl);
  const sendFileStorageId = useMutation(api.upload.updateRecord);

  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    croppedAreaPixelsRef.current = croppedAreaPixels;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageString(fileReader.result as string);
    };
    fileReader.readAsDataURL(selectedFile);
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
      file.name,
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
    await sendFileStorageId({
      fileStorageId: storageId,
      resource: "room",
      fileName: "roomLayout",
      documentId: "13512412",
    });
  };

  const handleClearCrop = () => {
    setCroppedImg(null);
    setImageString("");
    setFile(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  return (
    <div className={"w-[450px]"}>
      {!imgString && (
        <Label
          className={clsx(
            "w-full p-1 py-4 border flex items-center justify-center relative cursor-pointer",
            labelStyle,
          )}
          htmlFor={fileName}
        >
          <div className={"absolute right-2 bottom-2 pointer-events-none"}>
            <Button size={"icon"} variant={"default"} onClick={handleClearCrop}>
              <IconPhotoPlus size={18} />
            </Button>
          </div>
          {placeholder && (
            <p className={"text-xs text-muted-foreground"}>{placeholder}</p>
          )}
          <input
            type="file"
            name={fileName}
            id={fileName}
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </Label>
      )}
      {imgString && !croppedImg && (
        <>
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
                setRotation(rotation + hqnrd.orientation.ROTATION.RATIO)
              }
            >
              <IconRotateClockwise />
            </Button>
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() =>
                setRotation(rotation - hqnrd.orientation.ROTATION.RATIO)
              }
            >
              <IconRotate />
            </Button>
            <span className={"mx-1"} />
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() => setZoom(zoom + hqnrd.orientation.ZOOM.ZOOMRATIO)}
            >
              <IconZoomCancel />
            </Button>
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() => setZoom(zoom - hqnrd.orientation.ZOOM.ZOOMRATIO)}
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
        </>
      )}
      {croppedImg && (
        <div className="mt-4">
          <div className={"relative"}>
            <img src={croppedImg} alt="Cropped" />
            <div className={"absolute right-2 bottom-2"}>
              <Button
                size={"icon"}
                className={
                  "bg-red-800 border border-red-500 hover:bg-red-400 rounded-md"
                }
                onClick={handleClearCrop}
              >
                <IconTrash size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
