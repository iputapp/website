/**
 * 指定した時間だけ処理を停止
 * @param ms - 停止する時間 (ミリ秒)
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
