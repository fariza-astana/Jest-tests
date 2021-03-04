import { countDown } from "../../utils/countDown.js";

describe("tests for count dowm function", () => {
    it("should count down numbers", () => expect(countDown("123")).toBe("321"));
  });