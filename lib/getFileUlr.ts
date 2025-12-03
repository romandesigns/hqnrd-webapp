import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

type FileToUploadProps = {
  fileId: Id<"_storage"> | null;
};

export function getFileUlr({ fileId }: FileToUploadProps) {
  const url = useQuery(
    api.upload.getFileUrl,
    fileId ? { storageId: fileId } : "skip",
  );
  return url;
}
