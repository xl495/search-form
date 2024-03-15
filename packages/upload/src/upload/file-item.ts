export type FileItemStatus = "ready" | "uploading" | "success" | "error";

export interface FileItemType {
  file: File;
  progress: number;
  error?: string;
  url?: string;
  size?: number;
  uid: number;
  previewUrl: string;
  status: FileItemStatus
}

export class FileItem {
  public file: File;
  public progress: number;
  public error?: string;
  public url?: string;
  public uid: number;
  public previewUrl: string;
  public status: FileItemStatus;

  constructor(file: File) {
    this.file = file;
    this.progress = 0;
    this.error = "";
    this.url = "";
    this.previewUrl = "";
    this.uid = Date.now() + Math.ceil(Math.random() * 1000);
    this.status = "ready";
    
    if (file.type.includes("image")) {
      this.previewUrl = URL.createObjectURL(file);
    }

    return this;
  }
}
