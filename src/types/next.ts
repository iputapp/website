/**
 * Next.js の Dynamic Segments に対応する型
 * @example
 * ```tsx
 * import type { DynamicSegments } from "@/types";
 * export default async function Page({ params }: DynamicSegments<"slug">) {
 *   console.log(params.slug);
 *   // => "foo"
 * }
 * ```
 * @see {@link https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes}
 */
export type DynamicSegments<T extends string = "id"> = {
  params: { [K in T]: string };
};

/**
 * Next.js の Query Parameters に対応する型
 * @example
 * ```tsx
 * import type { SearchParams } from "@/types";
 * export default async function Page({ searchParams }: { searchParams: SearchParams }) {
 *   console.log(searchParams.foo);
 *   // => "bar"
 * }
 * ```
 * @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional}
 */
export type SearchParams = { [key: string]: string | string[] | undefined };
