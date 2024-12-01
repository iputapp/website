import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MARKDOWN_DIR_PATH } from "@/constants";
import {
  getFileCreationDate,
  getFilenames,
  parseMarkdown,
  readFileContent,
} from "@/server";

export default async function Page() {
  const ARTICLE_DIR_PATH = `${MARKDOWN_DIR_PATH}/sample`;

  const filenames = getFilenames({
    directoryPath: ARTICLE_DIR_PATH,
  });

  // ファイル名の取得に失敗した場合
  if (!filenames.success) {
    return notFound();
  }

  /**
   * 全ファイルの内容を取得
   */
  const articles = await Promise.all(
    filenames.data.map(async (filename) => {
      const content = readFileContent({
        filePath: `${ARTICLE_DIR_PATH}/${filename}`,
      });
      const creationDate = getFileCreationDate({
        filePath: `${ARTICLE_DIR_PATH}/${filename}`,
      });
      // ファイルの読み込みに失敗した場合
      if (!content.success || !creationDate.success) {
        return null;
      }
      // Markdown を記事情報にパース
      const article = await parseMarkdown(content.data);
      return {
        slug: filename.replace(/\.md$/, ""), // 拡張子を除去
        data: {
          ...article,
          creationDate: creationDate.data,
        },
      };
    })
  );

  /**
   * 公開記事のみ
   * * `null`は除外
   */
  const filteredArticles = articles.filter(
    (
      article
    ): article is {
      slug: string;
      data: Awaited<ReturnType<typeof parseMarkdown>> & { creationDate: Date };
    } => article !== null && article.data.status === "public"
  );

  /**
   * 作成日時で降順ソート (新しい順)
   */
  const sortedArticles = filteredArticles.slice().sort((a, b) => {
    return b.data.creationDate.getTime() - a.data.creationDate.getTime();
  });

  return (
    <main className="mx-auto grid w-full max-w-screen-md gap-12 p-12">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {sortedArticles.map((article) => (
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
