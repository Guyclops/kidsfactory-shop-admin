import chai from "chai";
import { success, error } from "./result.core";
import httpStatus from "../configs/httpStatus";

const { expect } = chai;
const { statusCode } = httpStatus;

describe("cores/result.core Test", () => {
  it("success 200", () => {
    const result = success.ok("ok");
    expect(result)
      .has.property("code")
      .is.eq(statusCode.ok);
  });

  it("badRequest 400", () => {
    const result = error.badRequest("400 error");
    expect(result)
      .has.property("code")
      .is.eq(statusCode.badRequest);
  });

  it("unauthorized 401", () => {
    const result = error.unauthorized("401 error");
    expect(result)
      .has.property("code")
      .is.eq(statusCode.unauthorized);
  });

  it("forbidden 403", () => {
    const result = error.forbidden("403 error");
    expect(result)
      .has.property("code")
      .is.eq(statusCode.forbidden);
  });

  it("notFound 404", () => {
    const result = error.notFound("404 error");
    expect(result)
      .has.property("code")
      .is.eq(statusCode.notFound);
  });

  it("internalServerError 500", () => {
    const result = error.internalServerError("500 error");
    expect(result)
      .has.property("code")
      .is.eq(statusCode.internalServerError);
  });

  it("notImplemented 501", () => {
    const result = error.notImplemented("501 error");
    expect(result)
      .has.property("code")
      .is.eq(statusCode.notImplemented);
  });
});
