import { describe, expect, test } from "vitest";

import { cn } from "@/utils";

describe("cn", () => {
  test("Should return a merged string with multiple classes", () => {
    expect(cn("foo", "bar", "baz")).toBe("foo bar baz");
  });

  test("Should return an empty string if invalid classes are passed", () => {
    expect(cn(undefined, null, false, 0)).toBe("");
  });
});
