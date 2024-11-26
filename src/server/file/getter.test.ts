import { describe, expect, it } from "vitest";

import { MARKDOWN_DIR_PATH, MARKDOWN_FILE_EXTENSION } from "@/constants";

import { getFilenames } from "./";
import type { FileExtension } from "./types";

describe("getFilenames", () => {
  const TEST_DIR = MARKDOWN_DIR_PATH;
  const TEST_INVALID_DIR = "invalid-dir";
  const TEST_EXTENSION: FileExtension = MARKDOWN_FILE_EXTENSION;

  it("should return all files in directory when no extension is specified", () => {
    const result = getFilenames({ directoryPath: TEST_DIR });

    expect(result.success).toBe(true);
    expect(result.data).toContain("test.md");
    expect(result.data).toContain("test.txt");
    expect(result.error).toBeUndefined();
  });

  it("should return only files with specified extension (with extension)", () => {
    const result = getFilenames({
      directoryPath: TEST_DIR,
      extension: TEST_EXTENSION,
      withExtension: true,
    });

    expect(result.success).toBe(true);
    expect(result.data).toContain("test.md");
    expect(result.data).not.toContain("test.txt");
    expect(result.error).toBeUndefined();
  });

  it("should return only files with specified extension (without extension)", () => {
    const result = getFilenames({
      directoryPath: TEST_DIR,
      extension: TEST_EXTENSION,
      withExtension: false,
    });

    expect(result.success).toBe(true);
    expect(result.data).toContain("test");
    expect(result.data).not.toContain("test.md");
    expect(result.error).toBeUndefined();
  });

  it("should handle invalid directory path", () => {
    const result = getFilenames({ directoryPath: TEST_INVALID_DIR });

    expect(result.success).toBe(false);
    expect(result.data).toBeUndefined();
    expect(result.error?.message).toContain("Failed to read directory");
  });
});
