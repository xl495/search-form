import { reactive } from "vue";
import { type FileItemType, FileItem } from "./file-item";

interface FileList {
  files: FileItemType[];
  add(file: File): void;
  remove(index: number): void;
  getFiles(): number;
}

class FileList {
  public files: FileItemType[] = reactive([]);

  add(file: File): void {
    this.files.unshift(new FileItem(file));
  }

  remove(index: number): void {
    this.files = this.files.filter((_, i) => i !== index);
  }

  getFiles(): number {
    return this.files.length;
  }

  clear(): void {
    this.files = reactive([]);
  }
}

export default new FileList();
