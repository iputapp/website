import { z } from "zod";

/**
 * 基本原則: Parse, don’t validate
 * バリデーションエラーはデフォルト値を返す
 */

/**
 * URLのベース
 * * 絶対URL or 相対URL
 */
const UrlSchema = z
  .string()
  .refine((url) => {
    return url.startsWith("https://") || url.startsWith("/");
  })
  .catch("");

/**
 * 記事の公開状態
 * * public: 公開
 * * private: 非公開
 * * shared: 限定公開 (URLを知っている人のみ)
 */
const StatusSchema = z.enum(["public", "private", "shared"]);

/**
 * タグ
 * * 1文字以上
 */
const TagSchema = z.string().min(1).catch("");
/**
 * タグのリスト
 * * 最大3つまで
 * * 空文字は除外
 */
const TagsSchema = z
  .array(TagSchema)
  .max(3)
  .transform((tags) => tags.filter((tag) => tag !== ""));

/**
 * 記事のスキーマ
 * * title: 記事のタイトル (デフォルト: 無題)
 * * eyecatch: アイキャッチ絵文字 (デフォルト: `undefined`)
 * * eyecatchUrl: アイキャッチ画像のURL (デフォルト: `undefined`)
 * * status: 公開状態 (デフォルト: private)
 * * tags: 関連タグ (デフォルト: `[]`)
 * * content: 記事の本文 (デフォルト: 空文字)
 */
export const ArticleSchema = z
  .object({
    title: z.string().min(1).catch("無題"),
    eyecatch: z
      .string()
      .transform((str) => str?.charAt(0)) // 先頭の文字のみ
      .optional()
      .catch(undefined),
    eyecatchUrl: UrlSchema.optional().catch(undefined),
    status: StatusSchema.catch("private"),
    tags: TagsSchema.catch([]),
    content: z.string().catch(""),
  })
  .transform((data) => {
    // eyecatchとeyecatchUrlの両方が存在する場合、eyecatchUrlを優先
    if (data.eyecatchUrl) {
      data.eyecatch = undefined;
    }
    return data;
  });

/**
 * 記事
 */
export type Article = z.infer<typeof ArticleSchema>;
