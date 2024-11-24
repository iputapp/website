import { describe, expect, test } from "vitest";

import { MARKDOWN_DIR_PATH, MARKDOWN_FILE_EXTENSION } from "@/constants";
import { readFileByPath } from "@/utils";

describe("readFileByPath", () => {
  test("Should read 'test' file content", () => {
    const content = readFileByPath({
      filePath: `${MARKDOWN_DIR_PATH}/test.${MARKDOWN_FILE_EXTENSION}`,
    });
    expect(content).toBe(
      "ファイル名および内容を変更する場合は`@/utils/file/*`のテストも変更すること。\n"
    );
  });
});
