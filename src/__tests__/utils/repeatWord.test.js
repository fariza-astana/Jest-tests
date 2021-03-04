import { repeatWord } from "../../utils/repeatWord.js";

describe("tests for repeatWord function", () => {
    const word = "world";
    const count = 5;
  
    it("should count the given word with the given number", () => {
      expect(repeatWord(word, count)).toBe(`${word} * ${count}`);
    });
  });
