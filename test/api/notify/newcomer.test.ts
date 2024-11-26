import { testApiHandler } from "next-test-api-route-handler";
import { describe, expect, it } from "vitest";

import * as appHandler from "@/app/api/v1/notify/newcomer/route";
import type { Newcomer } from "@/models";
import { createAPIResponse } from "@/server";

describe("POST /api/v1/notify/newcomer", () => {
  it("正常なリクエストを処理できる", async () => {
    const validBody: Newcomer = {
      name: "foobar",
      occupationalStatus: "STUDENT",
      contactTool: "DISCORD",
      contactDetail: "foobar#1234",
    };

    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        const response = await fetch({
          method: "POST",
          body: JSON.stringify(validBody),
        });

        expect(response.status).toBe(200);
        expect(await response.json()).toMatchObject(
          createAPIResponse(validBody)
        );
      },
    });
  });

  it("不正なメールアドレスの場合エラーを返す", async () => {
    const invalidBody: Newcomer = {
      name: "foobar",
      occupationalStatus: "STUDENT",
      contactTool: "EMAIL",
      contactDetail: "invalid-email",
    };

    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        const response = await fetch({
          method: "POST",
          body: JSON.stringify(invalidBody),
        });

        expect(response.status).toBe(400);
        const json = await response.json();
        expect(json.error).toBeDefined();
      },
    });
  });

  it("学籍番号が必要な場合にエラーを返す", async () => {
    const invalidBody: Newcomer = {
      name: "foobar",
      occupationalStatus: "IPUT_TOKYO_STUDENT",
      contactTool: "DISCORD",
      contactDetail: "foobar#1234",
    };

    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        const response = await fetch({
          method: "POST",
          body: JSON.stringify(invalidBody),
        });

        expect(response.status).toBe(400);
        const json = await response.json();
        expect(json.error).toBeDefined();
      },
    });
  });
});
