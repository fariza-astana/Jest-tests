import { getMonth } from "../../utils/getMonth.js";

describe("tests for getting Month according the given number function", () => {
    
  it("should return proper Month", () => expect(getMonth("1")).toBe("January"));
  it("should return proper Month", () => expect(getMonth("2")).toBe("February"));
  it("should return proper Month", () => expect(getMonth("3")).toBe("March"));
  it("should return proper Month", () => expect(getMonth("4")).toBe("April"));
  it("should return proper Month", () => expect(getMonth("5")).toBe("May"));
  it("should return proper Month", () => expect(getMonth("6")).toBe("June"));
  it("should return proper Month", () => expect(getMonth("7")).toBe("July"));
  it("should return proper Month", () => expect(getMonth("8")).toBe("August"));
  it("should return proper Month", () => expect(getMonth("9")).toBe("September"));
  it("should return proper Month", () => expect(getMonth("10")).toBe("October"));
  it("should return proper Month", () => expect(getMonth("11")).toBe("November"));
  it("should return proper Month", () => expect(getMonth("12")).toBe("December"));

});