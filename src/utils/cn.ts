import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * クラス名を結合
 * * 重複するクラス名のマージ
 * * 同タイプのTailwind CSSをマージ (上書き/右辺優先)
 * @param classNames - 結合するクラス名
 * @returns 結合されたクラス名
 */
export function cn(
  ...classNames: Parameters<typeof clsx> & Parameters<typeof twMerge>
): string {
  return twMerge(clsx(classNames));
}
