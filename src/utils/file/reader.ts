import { readFileSync } from "fs";
import { join } from "path";

export function readFileByPath({ filePath }: { filePath: string }): string {
  const absoluteFilePath = join(process.cwd(), filePath);
  // ファイルの内容を取得
  const fileContent = readFileSync(absoluteFilePath, {
    encoding: "utf-8",
    flag: "r",
  });
  return fileContent;
}
