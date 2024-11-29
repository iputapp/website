/**
 * SWRのfetcher関数
 * @param url - フェッチするURL
 * @param init - フェッチオプション
 * @see {@link https://swr.vercel.app}
 * @example
 * ```ts
 * import useSWR from "swr";
 * const { data, error, isLoading } = useSWR("/api/data", fetcher);
 * ```
 */
export async function fetcher(url: string, init?: RequestInit) {
  return fetch(url, init).then((res) => res.json());
}
