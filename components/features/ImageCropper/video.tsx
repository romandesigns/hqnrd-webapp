"use client";

import { clsx } from "clsx";
import { useMutation, useQuery } from "convex/react";
import type React from "react";
import { useState } from "react";
import { IconPlayerPlayFilled, IconTrash } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

type FileToUploadProps = {
  fileId: Id<"_storage"> | null;
};

export const VideoUpload = ({
  labelStyle,
  fileName = "media",
  placeholder = "Choose File",
}: {
  labelStyle: string;
  fileName: string;
  placeholder?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [uploadedFileDetails, setUploadedFileDetails] =
    useState<FileToUploadProps>({ fileId: null });

  const generatedUploadUrl = useMutation(api.upload.generateUploadUrl);
  const deleteFileFromDb = useMutation(api.upload.deleteFileFromStorage);

  // Correct useQuery usage
  const fileUrl = useQuery(
    api.upload.getFileUrl,
    uploadedFileDetails.fileId
      ? { storageId: uploadedFileDetails.fileId }
      : "skip",
  );

  // ✔ VIDEO UPLOAD
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setLoading(true);
    const localFile = e.target.files[0];
    const uploadUrl = await generatedUploadUrl();
    const result = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": localFile.type },
      body: localFile,
    });
    const { storageId } = await result.json();
    if (storageId) {
      setUploadedFileDetails({ fileId: storageId });
    }
    setLoading(false);
  };
  const handleClear = async () => {
    if (uploadedFileDetails.fileId) {
      await deleteFileFromDb({
        storageId: uploadedFileDetails.fileId,
      });
    }
    setUploadedFileDetails({ fileId: null });
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
      {/* INPUT UI */}
      {!fileUrl && (
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
            <IconPlayerPlayFilled size={18} />
          </Button>

          <p className="text-xs text-muted-foreground">{placeholder}</p>

          <input
            type="file"
            id={fileName}
            accept="video/*"
            multiple={false}
            className="hidden"
            onChange={handleFileChange}
          />
        </Label>
      )}

      {/* VIDEO PREVIEW */}
      {fileUrl && (
        <div className="relative w-full h-full">
          <video
            controls
            className="w-full h-full rounded-md object-cover"
            src={fileUrl}
          />

          {/* Store final fileId into form */}
          <input
            className="hidden"
            name={fileName}
            value={uploadedFileDetails.fileId ?? ""}
            readOnly
          />

          <div className="absolute right-1 top-1">
            <Button
              size="icon"
              className="bg-red-800 border border-red-500 hover:bg-red-400 rounded-md"
              onClick={handleClear}
            >
              <IconTrash size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
