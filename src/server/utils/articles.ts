import { notFound } from "next/navigation";

import {
  type Article,
  getFileCreationDate,
  getFilenames,
  parseMarkdown,
  readFileContent,
} from "@/server";

type ArticleWithSlug = {
  slug: string;
  data: Article & { creationDate: Date };
};

/**
 * ディレクトリ内の記事を全て取得
 * @param directoryPath - ディレクトリパス (相対パス)
 * @param ascending - 作成日時の昇順ソート (デフォルト: 降順)
 * @returns 記事のリスト
 */
export async function getArticles(
  directoryPath: string,
  options: {
    ascending?: boolean;
  } = {}
): Promise<ArticleWithSlug[]> {
  const { ascending = false } = options;

  const filenames = getFilenames({
    directoryPath: directoryPath,
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
        filePath: `${directoryPath}/${filename}`,
      });
      const creationDate = getFileCreationDate({
        filePath: `${directoryPath}/${filename}`,
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
      } satisfies ArticleWithSlug;
    })
  );

  /**
   * 公開記事のみ
   * * `null`は除外
   */
  const filteredArticles = articles.filter(
    (article): article is ArticleWithSlug =>
      article !== null && article.data.status === "public"
  );

  /**
   * 作成日時で昇順ソート (古い順)
   */
  if (ascending) {
    return filteredArticles
      .slice()
      .sort(
        (a, b) => a.data.creationDate.getTime() - b.data.creationDate.getTime()
      );
  }
  /**
   * 作成日時で降順ソート (新しい順)
   */
  return filteredArticles
    .slice()
    .sort(
      (a, b) => b.data.creationDate.getTime() - a.data.creationDate.getTime()
    );
}
