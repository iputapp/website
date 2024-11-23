import { describe, expect, test } from "vitest";

import { sleep } from "@/utils";

describe("sleep", () => {
  test("Should resolve after specified time", async () => {
    const startTime = Date.now();
    const sleepDuration = 10; // milliseconds
    await sleep(sleepDuration);
    const elapsedTime = Date.now() - startTime;
    expect(elapsedTime).toBeGreaterThanOrEqual(sleepDuration);
  });
});
