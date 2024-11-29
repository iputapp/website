import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * クラス名を結合
 * * 重複するクラス名のマージ
 * * 同タイプのTailwind CSSをマージ (上書き/右辺優先)
 * @param classNames - 結合するクラス名
 * @returns 結合されたクラス名
 * @example
 * ```tsx
 * <div className={cn("foo", "bar")}>Hello, world!</div>
 * // => <div class="foo bar">Hello, world!</div>
 *
 * <div className={cn("text-red-500 text-blue-500")}>Hello, world!</div>
 * // => <div class="text-blue-500">Hello, world!</div>
 *
 * const [isLoading, setIsLoading] = useState(false);
 * <div className={cn("foo", isLoading ? "bar", "")}>Hello, world!</div>
 * // isLoading=`true` => <div class="foo bar">Hello, world!</div>
 * // isLoading=`false` => <div class="foo">Hello, world!</div>
 * ```
 */
export function cn(
  ...classNames: Parameters<typeof clsx> & Parameters<typeof twMerge>
): string {
  return twMerge(clsx(classNames));
}
