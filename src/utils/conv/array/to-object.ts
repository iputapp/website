/**
 * 配列の値をキーとして、任意の値にしたオブジェクトを作成
 * @param array - キーとなる配列
 * @param value - キーに対応する値 (デフォルト: `undefined`)
 * @returns 変換されたオブジェクト
 */
export function arrayToObject<T extends string | number | symbol, V>(
  array: T[],
  { value }: { value?: V } = {}
): Record<T, V> {
  return Object.fromEntries(array.map((key) => [key, value])) as Record<T, V>;
}

/**
 * 配列の値をキーとして、インデックスを値にしたオブジェクトを作成
 * @param array - キーとなる配列
 * @returns 変換されたオブジェクト
 */
export function arrayToIndexMap<T extends string | number | symbol>(
  array: T[]
): Record<T, number> {
  return Object.fromEntries(array.map((key, index) => [key, index])) as Record<
    T,
    number
  >;
}

/**
 * 配列の値をキーとして、カスタム値を設定できるオブジェクトを作成
 * @param array - キーとなる配列
 * @param getValue - キーに対応する値を取得する関数
 * @returns 変換されたオブジェクト
 */
export function arrayToValueMap<T extends string | number | symbol, V>(
  array: T[],
  getValue: (item: T, index: number) => V
): Record<T, V> {
  return Object.fromEntries(
    array.map((key, index) => [key, getValue(key, index)])
  ) as Record<T, V>;
}
