import { notFound } from "next/navigation";

import { type Article, parseMarkdown, readFileContent } from "@/server";

/**
 * 記事の取得
 * @param filePath - ファイルパス (相対パス)
 * @returns 記事
 */
export async function getArticle(filePath: string): Promise<Article> {
  const content = readFileContent({
    filePath: filePath,
  });

  // Markdown ファイルの読み込みに失敗した場合
  if (!content.success) {
    return notFound();
  }

  /**
   * Markdown を記事情報にパース
   */
  const article = await parseMarkdown(content.data);

  // 非公開記事の場合は 404 ページを表示
  if (article.status === "private") {
    return notFound();
  }

  return article;
}
