export const MARKDOWN_DIR_PATH = process.env.MARKDOWN_DIR_PATH || "markdowns";
export const MARKDOWN_FILE_EXTENSION = "md";

export const OCCUPATIONAL_STATUS = [
  "IPUT_TOKYO_STUDENT",
  "COCOON_TOWER_STUDENT",
  "STUDENT",
  "OTHER",
] as const;

export const CONTACT_TOOL = ["EMAIL", "DISCORD", "SLACK"] as const;

export const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";
