import {describe, it} from "@jest/globals";
import {getPercent} from "./getPercent";

describe("Percent function test", () => {
  it("should be 10 for 10% from 100", () => {
    expect(getPercent(10, 100)).toBe(10);
  });
  it("should be 20 for 200% from 10", () => {
    expect(getPercent(200, 10)).toBe(20);
  });
  it("should be 0 for 0% from 50", () => {
    expect(getPercent(0, 50)).toBe(0);
  });
});

describe("NaN in function", () => {
  it('Any arg is NaN', () => {
    expect(getPercent("test", 100)).toBeNaN();
    expect(getPercent("test", null)).toBeNaN();
  });
  it("should be Infinity if any arg is Infinity", () => {
    expect(getPercent(Infinity, 100)).toBe(Infinity);
    expect(getPercent(100, Infinity)).toBe(Infinity);
  })
});