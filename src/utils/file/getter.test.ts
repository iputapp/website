import { describe, expect, it } from "vitest";

import { MARKDOWN_DIR_PATH, MARKDOWN_FILE_EXTENSION } from "@/constants";
import { getFilenames } from "@/utils";

describe("getFilenames", () => {
  it("should contain 'test' file", () => {
    const files = getFilenames({
      directoryPath: MARKDOWN_DIR_PATH,
      extension: MARKDOWN_FILE_EXTENSION,
    });
    expect(files).toContain("test");
  });
  it("should contain 'test.md' file with extension option", () => {
    const files = getFilenames({
      directoryPath: MARKDOWN_DIR_PATH,
      extension: MARKDOWN_FILE_EXTENSION,
      withExtension: true,
    });
    expect(files).toContain("test.md");
  });
  it("should return empty array for non-existing directory", () => {
    const files = getFilenames({
      directoryPath: `${MARKDOWN_DIR_PATH}/non-existing`,
      extension: MARKDOWN_FILE_EXTENSION,
    });
    expect(files).toHaveLength(0);
  });
});
