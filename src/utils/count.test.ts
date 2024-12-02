import { describe, expect, it } from "vitest";

import { countGraphemes } from "./count";

describe("countGraphemes", () => {
  it("通常のASCII文字の場合、通常のlengthと同じ結果を返す", () => {
    const text = "foo";
    expect(countGraphemes(text)).toBe(3);
    expect(countGraphemes(text)).toBe(text.length);
  });

  it("結合文字列を1文字としてカウント", () => {
    const text = "が";
    expect(countGraphemes(text)).toBe(1);
    expect(text.length).toBe(1);
  });

  it("スペースも1文字としてカウント", () => {
    const halfSpace = " ";
    const fullSpace = "　";
    expect(countGraphemes(halfSpace)).toBe(1);
    expect(countGraphemes(fullSpace)).toBe(1);
  });

  it("絵文字を1文字としてカウント", () => {
    const text = "🧸";
    expect(countGraphemes(text)).toBe(1);
    expect(text.length).toBe(2); // 絵文字は2バイト
  });

  it("ZWJシーケンスを使用した絵文字を1文字としてカウント", () => {
    const text = "👨‍👩‍👧‍👦";
    expect(countGraphemes(text)).toBe(1);
    expect(text.length).toBe(11); // ZWJシーケンスを使用した絵文字は11バイト
  });

  it("複数の文字タイプが混在する文字列", () => {
    const text = "Foobarと🧸の物語　feat. 👨‍👩‍👧‍👦";
    expect(countGraphemes(text)).toBe(19);
  });

  it("空文字列の場合は0を返す", () => {
    const text = "";
    expect(countGraphemes(text)).toBe(0);
  });
});
