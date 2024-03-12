export type FileStatus = "ready" | "uploading" | "success" | "error";

export interface UploadFile extends File {
  url?: string;
  status?: FileStatus;
}
