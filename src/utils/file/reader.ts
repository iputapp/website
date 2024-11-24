import { readFileSync } from "fs";
import { join } from "path";

/**
 * ファイルの内容を取得する
 * @param filePath - 検索対象のファイルパス (相対パス)
 * @returns ファイルの内容
 */
export function readFileByPath({
  filePath,
}: {
  filePath: string;
}): string | null {
  try {
    const absoluteFilePath = join(process.cwd(), filePath);
    // ファイルの内容を取得
    const fileContent = readFileSync(absoluteFilePath, {
      encoding: "utf-8",
      flag: "r",
    });

    return fileContent;
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return null;
  }
}
