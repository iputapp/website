/**
 * 文字列の文字数を正確にカウント (絵文字やサロゲートペアに対応)
 * @param str - 文字列
 * @returns 文字数
 */
export function countGraphemes(
  str: string,
  { locales }: { locales?: string } = { locales: "ja-JP" }
): number {
  const segmenter = new Intl.Segmenter(locales, { granularity: "grapheme" });
  return [...segmenter.segment(str)].length;
}
