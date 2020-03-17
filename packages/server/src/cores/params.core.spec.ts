import chai from "chai";
import { param } from "./params.core";

const { expect } = chai;

describe("cores/params.core Test", () => {
  it("basic param", () => {
    const body = {
      test: 1,
    };
    const result = param(body, "test");
    expect(result).equal(1);
  });
});
