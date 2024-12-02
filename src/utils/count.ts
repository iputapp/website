/**
 * 文字列の文字数を正確にカウント (絵文字やサロゲートペアに対応)
 * @param str - 文字列
 * @param locales - ロケール (デフォルト: `ja-JP`)
 * @returns 文字数
 */
export function countGraphemes(
  str: string,
  options: {
    locales?: string;
  } = {}
): number {
  const { locales = "ja-JP" } = options;
  const segmenter = new Intl.Segmenter(locales, { granularity: "grapheme" });
  return [...segmenter.segment(str)].length;
}
