import { join } from "path";
import { describe, expect, it } from "vitest";

import { MARKDOWN_DIR_PATH } from "@/constants";

import { readFileContent } from "./";

describe("readFileContent", () => {
  const TEST_FILE_PATH = join(MARKDOWN_DIR_PATH, "test.md");
  const TEST_INVALID_FILE_PATH = join(MARKDOWN_DIR_PATH, "nonexistent.md");
  const TEST_FILE_CONTENT =
    "ファイル名および内容を変更する場合は`@/utils/file/*`のテストも変更すること。\n";

  it("should successfully read file content", () => {
    const result = readFileContent({ filePath: TEST_FILE_PATH });

    expect(result.success).toBe(true);
    expect(result.data).toBe(TEST_FILE_CONTENT);
    expect(result.error).toBeUndefined();
  });

  it("should handle non-existent file", () => {
    const result = readFileContent({ filePath: TEST_INVALID_FILE_PATH });

    expect(result.success).toBe(false);
    expect(result.data).toBeUndefined();
    expect(result.error?.message).toContain("Failed to read file");
  });
});
