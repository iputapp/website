import type { NextRequest } from "next/server";

import { handleAPIError, handleAPISuccess } from "@/lib";
import { NewcomerSchema } from "@/models";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = NewcomerSchema.parse(body);

    /**
     * @todo Discord Webhook を実行して申請を通知する
     */

    return handleAPISuccess(validatedData);
  } catch (error) {
    return handleAPIError(error);
  }
}
