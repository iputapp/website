import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";

import { POST } from "@/app/api/v1/notify/newcomer/route";
import type { Newcomer } from "@/models";
import { createAPIResponse } from "@/server";

describe("POST /api/v1/notify/newcomer", () => {
  const REQUEST_URL = "http://localhost:3000/api/v1/notify/newcomer";

  it("正常なリクエストを処理できる", async () => {
    const validBody: Newcomer = {
      name: "foobar",
      occupationalStatus: "STUDENT",
      contactTool: "DISCORD",
      contactDetail: "foobar#1234",
      csrfToken: "csrf-token",
    };

    const request = new NextRequest(REQUEST_URL, {
      method: "POST",
      body: JSON.stringify(validBody),
    });

    const response = await POST(request);

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject(createAPIResponse(validBody));
  });

  it("不正なメールアドレスの場合エラーを返す", async () => {
    const invalidBody: Newcomer = {
      name: "foobar",
      occupationalStatus: "STUDENT",
      contactTool: "EMAIL",
      contactDetail: "invalid-email",
      csrfToken: "csrf-token",
    };

    const request = new NextRequest(REQUEST_URL, {
      method: "POST",
      body: JSON.stringify(invalidBody),
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.error).toBeDefined();
  });

  it("学籍番号が必要な場合にエラーを返す", async () => {
    const invalidBody: Newcomer = {
      name: "foobar",
      occupationalStatus: "IPUT_TOKYO_STUDENT",
      contactTool: "DISCORD",
      contactDetail: "foobar#1234",
      csrfToken: "csrf-token",
    };

    const request = new NextRequest(REQUEST_URL, {
      method: "POST",
      body: JSON.stringify(invalidBody),
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json.error).toBeDefined();
  });
});
