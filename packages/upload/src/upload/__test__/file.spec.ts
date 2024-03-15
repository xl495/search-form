import { beforeEach, describe, expect, it } from "vitest";
import fileSystem from "../file";

describe("should add file to list", () => {
  beforeEach(() => {
    fileSystem.clear();
  });

  it("should add file to list", () => {
    const file = new File([""], "file.txt");
    fileSystem.add(file);
    expect(fileSystem.files).toContain(file);
  });

  it("should remove file from list", () => {
    const file = new File([""], "file.txt");
    fileSystem.add(file);
    fileSystem.remove(0);
    expect(fileSystem.files).not.toContain(file);
  });

  it("should get files count", () => {
    const file = new File([""], "file.txt");
    fileSystem.add(file);
    fileSystem.add(file);
    expect(fileSystem.getFiles()).toBe(2);
  });
});
