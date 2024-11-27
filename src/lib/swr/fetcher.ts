/**
 * Fetcher function for SWR
 * @param key - URL to fetch data from
 * @see {@link https://swr.vercel.app}
 */
export async function fetcher(key: string, init?: RequestInit) {
  return fetch(key, init).then((res) => res.json());
}
