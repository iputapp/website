/* eslint-disable @typescript-eslint/no-namespace */

import * as webhook from "./webhook";

/**
 * Discord 関連のユーティリティ
 * @example
 * ```ts
 * import { Discord } from "@/lib";
 * Discord.Webhook.executeWebhook();
 * ```
 */
export namespace Discord {
  export import Webhook = webhook;
}
