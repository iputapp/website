import { readdirSync, statSync } from "fs";
import { extname, join, parse } from "path";

import { handleFileError } from "./error";
import type { FileExtension, FileOperationResult } from "./types";

/**
 * 全てのファイル名を取得する
 * @param directoryPath - 検索対象のディレクトリパス (相対パス)
 * @param extension - 検索対象の拡張子 (例: `md`, `txt`)
 * @param withExtension - 拡張子を含めたファイル名を取得するかどうか (デフォルト: `false`)
 * @returns ファイル名の配列
 */
export function getFilenames({
  directoryPath,
  extension,
  withExtension = false,
}: {
  directoryPath: string;
  extension?: FileExtension;
  withExtension?: boolean;
}): FileOperationResult<string[]> {
  try {
    const absolutePath = join(process.cwd(), directoryPath);
    // ディレクトリ内のファイル名を全て取得
    const files = readdirSync(absolutePath, {
      encoding: "utf-8",
      withFileTypes: false,
      recursive: false,
    });
    // 全てのファイル名を返す
    if (!extension) {
      return {
        success: true,
        data: files,
      };
    }

    const extensionWithDot = extension.startsWith(".")
      ? extension
      : `.${extension}`;
    // 拡張子が一致するファイル名のみを抽出
    const filteredFiles = files.filter(
      (file) => extname(file).toLowerCase() === extensionWithDot.toLowerCase()
    );
    // 拡張子を含めたファイル名を返す
    if (withExtension) {
      return {
        success: true,
        data: filteredFiles,
      };
    }

    // 拡張子を除いた文字列に変換
    const filteredFilesWithoutExtension = filteredFiles.map(
      (file) => parse(file).name
    );

    return {
      success: true,
      data: filteredFilesWithoutExtension,
    };
  } catch (error) {
    const fileError = handleFileError(error, "read directory");
    console.error(fileError);
    return {
      success: false,
      error: fileError,
    };
  }
}

/**
 * ファイルの作成日時を取得する
 * @param filePath - 検索対象のファイルパス (相対パス)
 * @returns ファイルの作成日時
 */
export function getFileCreationDate({
  filePath,
}: {
  filePath: string;
}): FileOperationResult<Date> {
  try {
    const absoluteFilePath = join(process.cwd(), filePath);
    // ファイルの作成日時を取得
    const { birthtime } = statSync(absoluteFilePath);
    return {
      success: true,
      data: birthtime,
    };
  } catch (error) {
    const fileError = handleFileError(error, "get file creation date");
    console.error(fileError);
    return {
      success: false,
      error: fileError,
    };
  }
}
