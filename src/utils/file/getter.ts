import { readdirSync } from "fs";
import { extname, join, parse } from "path";

import type { FileExtension } from "./types";

/**
 * 指定されたディレクトリから特定の拡張子のファイル一覧を取得する
 * @param directoryPath - 検索対象のディレクトリパス
 * @param extension - 検索する拡張子（例: '.txt', '.js'）
 * @returns ファイル名の配列
 */
export function getFilesByExtension({
  directoryPath,
  extension,
}: {
  directoryPath: string;
  extension: FileExtension;
}): string[] {
  try {
    const absolutePath = join(process.cwd(), directoryPath);
    // ディレクトリ内のファイル名を全て取得
    const files = readdirSync(absolutePath, {
      encoding: "utf-8",
      withFileTypes: false,
      recursive: false,
    });

    const extensionWithDot = extension.startsWith(".")
      ? extension
      : `.${extension}`;
    // 拡張子が一致するファイル名のみを抽出
    const filteredFiles = files.filter(
      (file) => extname(file).toLowerCase() === extensionWithDot.toLowerCase()
    );

    // 拡張子を除いた文字列に変換
    const onlyNameFiles = filteredFiles.map((file) => parse(file).name);

    return onlyNameFiles;
  } catch (error) {
    console.error(`Error reading directory: ${error}`);
    return [];
  }
}
