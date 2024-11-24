import { describe, expect, test } from "vitest";

import { MARKDOWN_DIR_PATH, MARKDOWN_FILE_EXTENSION } from "@/constants";
import { getFilenames } from "@/utils";

describe("getFilenames", () => {
  test("Should contain 'test' file", () => {
    const files = getFilenames({
      directoryPath: MARKDOWN_DIR_PATH,
      extension: MARKDOWN_FILE_EXTENSION,
    });
    expect(files).toContain("test");
  });
  test("Should contain 'test.md' file with extension option", () => {
    const files = getFilenames({
      directoryPath: MARKDOWN_DIR_PATH,
      extension: MARKDOWN_FILE_EXTENSION,
      withExtension: true,
    });
    expect(files).toContain("test.md");
  });
});
