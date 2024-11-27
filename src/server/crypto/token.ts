/* eslint-disable @typescript-eslint/no-namespace */

import { randomBytes } from "crypto";

/**
 * トークン管理
 */
export namespace TokenManager {
  /**
   * デフォルトの長さ (バイト)
   */
  export const DEFAULT_LENGTH = 32;
  /**
   * デフォルトの有効期限 (秒)
   * @todo アクセスから無効になるまでの最適な時間を検討する
   */
  export const DEFAULT_MAX_AGE = 60 * 5;

  export function generate(length = DEFAULT_LENGTH): string {
    return randomBytes(length).toString("hex");
  }

  export function validate({
    cookieToken,
    headerToken,
    formToken,
  }: {
    cookieToken: string | undefined;
    headerToken: string | null;
    formToken: string | undefined;
  }): boolean {
    if (!formToken) {
      return false;
    }
    if (!cookieToken || !headerToken) {
      return false;
    }
    if (
      cookieToken !== headerToken ||
      cookieToken !== formToken ||
      headerToken !== formToken
    ) {
      return false;
    }
    return true;
  }
}
