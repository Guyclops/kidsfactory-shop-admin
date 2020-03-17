import chai from "chai";
import { authToken, util } from "./misc.core";
const { expect } = chai;

describe("cores/misc.core Test", () => {
  let token = null;
  it("authToken.encodeToken", () => {
    token = authToken.encodeToken({ no: 1 });
    expect(token).is.not.null;
  });

  it("authToken.decodeToken", () => {
    const decode = authToken.decodeToken(token);
    expect(decode)
      .has.property("no")
      .equals(1);
  });

  const phone = "01012345678";
  it("util.hypenPhone", () => {
    const hyphen = util.hyphenPhone(phone);
    expect(hyphen).is.equals("010-1234-5678");
  });

  it("util.hypenPhone masking", () => {
    const masking = util.hyphenPhone(phone, true);
    expect(masking).is.equals("010-****-5678");
  });
});
