import { describe, expect, test } from "vitest";

import { MARKDOWN_DIR_PATH, MARKDOWN_FILE_EXTENSION } from "@/constants";
import { getFilesByExtension } from "@/utils";

describe("getFilesByExtension", () => {
  test("Should contain 'test' file", () => {
    const files = getFilesByExtension({
      directoryPath: MARKDOWN_DIR_PATH,
      extension: MARKDOWN_FILE_EXTENSION,
    });
    expect(files).toContain("test");
  });
});
