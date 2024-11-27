/**
 * ホストサーバのURL
 */
export const HOST_ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.HOST_ORIGIN_URL || "http://localhost:3000";

/**
 * ホストサーバのドメイン
 */
export const HOST_ORIGIN_DOMAIN = new URL(HOST_ORIGIN_URL).hostname;

/**
 * Markdown ファイルのディレクトリパス (相対パス)
 */
export const MARKDOWN_DIR_PATH = process.env.MARKDOWN_DIR_PATH || "markdowns";
/**
 * Markdown ファイルの拡張子
 */
export const MARKDOWN_FILE_EXTENSION = "md";

/**
 * 職業ステータス
 */
export const OCCUPATIONAL_STATUS = [
  "IPUT_TOKYO_STUDENT",
  "COCOON_TOWER_STUDENT",
  "STUDENT",
  "OTHER",
] as const;

/**
 * 連絡ツール
 */
export const CONTACT_TOOL = ["EMAIL", "DISCORD", "SLACK"] as const;

/**
 * 正規リクエスト検証トークンの設定
 */
export const API_NOTIFY_NEWCOMER = {
  TOKEN_COOKIE_NAME: "xy-csrf-token",
  TOKEN_HEADER_NAME: "XY-CSRF-Token",
};
