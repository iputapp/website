import Image from "next/image";
import Link from "next/link";

import { MARKDOWN_DIR_PATH } from "@/constants";
import { getArticles } from "@/server";

export default async function Page() {
  const articles = await getArticles(`${MARKDOWN_DIR_PATH}/sample`);

  return (
    <main className="mx-auto grid w-full max-w-screen-md gap-12 p-12">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            className="grid overflow-hidden rounded-2xl bg-neutral-200 shadow dark:bg-neutral-700"
            href={`/markdown/${article.slug}`}
          >
            <div className="relative aspect-video bg-neutral-300 dark:bg-neutral-600">
              {article.data.eyecatchUrl && (
                <Image
                  className="object-cover"
                  src={article.data.eyecatchUrl}
                  alt="アイキャッチ"
                  fill
                />
              )}
            </div>
            <section className="grid min-h-32 content-start gap-2 p-3 pb-6">
              <time
                dateTime={article.data.creationDate.toISOString()}
                className="text-sm font-semibold"
              >
                {/* 日付のみ */}
                {article.data.creationDate
                  .toISOString()
                  .split("T")[0]
                  .replace(/-/g, "/")}
              </time>
              <span className="line-clamp-3 px-3 text-base font-bold">
                {article.data.title}
              </span>
            </section>
          </Link>
        ))}
      </section>
    </main>
  );
}
