import matter from "gray-matter";

import { type Article, ArticleSchema } from "./schema";

/**
 * Markdown からメタ情報とコンテンツをパース
 * @param markdown - Front matter 付きの Markdown 文字列
 * @returns メタ情報と Markdown 文字列
 */
export async function parseMarkdown(markdown: string): Promise<Article> {
  try {
    // Front matter の解析
    const { data, content } = matter(markdown);

    // 記事のパース
    const article = ArticleSchema.parse({
      ...data,
      content,
    });

    return article;
  } catch (error) {
    console.error("Markdown パースエラー:", error);
    return ArticleSchema.parse({
      title: "パースエラー",
    });
  }
}
