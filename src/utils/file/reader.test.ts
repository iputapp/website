import { describe, expect, test } from "vitest";

import { MARKDOWN_DIR_PATH, MARKDOWN_FILE_EXTENSION } from "@/constants";
import { readFileContent } from "@/utils";

describe("readFileContent", () => {
  test("Should read 'test' file content", () => {
    const content = readFileContent({
      filePath: `${MARKDOWN_DIR_PATH}/test.${MARKDOWN_FILE_EXTENSION}`,
    });
    expect(content).toBe(
      "ファイル名および内容を変更する場合は`@/utils/file/*`のテストも変更すること。\n"
    );
  });
  test("Should return null for non-existing file", () => {
    const content = readFileContent({
      filePath: `${MARKDOWN_DIR_PATH}/non-existing.${MARKDOWN_FILE_EXTENSION}`,
    });
    expect(content).toBe(null);
  });
});
