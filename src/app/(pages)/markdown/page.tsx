import Image from "next/image";
import Link from "next/link";

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
  if (!filenames.success || !filenames.data || !!filenames.error) {
    return (
      <div className="grid h-dvh w-full place-content-center">
        ディレクトリが見つかりません
      </div>
    );
  }

  // 全ファイルの記事情報を取得
  const articles = await Promise.all(
    filenames.data.map(async (filename) => {
      const content = readFileContent({
        filePath: `${ARTICLE_DIR_PATH}/${filename}`,
      });
      const creationDate = getFileCreationDate({
        filePath: `${ARTICLE_DIR_PATH}/${filename}`,
      });
      if (
        !content.success ||
        !!content.error ||
        !content.data ||
        !creationDate.success ||
        !!creationDate.error ||
        !creationDate.data
      ) {
        return null;
      }
      return {
        slug: filename.replace(/\.md$/, ""), // 拡張子を除去
        data: {
          ...(await parseMarkdown(content.data)),
          creationDate: creationDate.data,
        },
      };
    })
  );

  /**
   * @todo `article.data.status`が`public`の記事のみ表示する
   */

  return (
    <main className="mx-auto grid w-full max-w-screen-md gap-12 p-12">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map(
          (article) =>
            article && (
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
            )
        )}
      </section>
    </main>
  );
}
