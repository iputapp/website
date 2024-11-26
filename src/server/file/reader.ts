import { readFileSync } from "fs";
import { join } from "path";

import { handleFileError } from "./error";
import type { FileOperationResult } from "./types";

/**
 * ファイルの内容を取得する
 * @param filePath - 検索対象のファイルパス (相対パス)
 * @returns ファイルの内容
 */
export function readFileContent({
  filePath,
}: {
  filePath: string;
}): FileOperationResult<string> {
  try {
    const absoluteFilePath = join(process.cwd(), filePath);
    // ファイルの内容を取得
    const fileContent = readFileSync(absoluteFilePath, {
      encoding: "utf-8",
      flag: "r",
    });

    return {
      success: true,
      data: fileContent,
    };
  } catch (error) {
    const fileError = handleFileError(error, "read file");
    console.error(fileError);
    return {
      success: false,
      error: fileError,
    };
  }
}
