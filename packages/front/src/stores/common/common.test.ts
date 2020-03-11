import Store from "..";

describe("CommonStore test", () => {
  const { common } = new Store();
  it("init value", () => {
    expect(common.count).toEqual(0);
  });

  it("increment value", () => {
    common.increment();
    expect(common.count).toEqual(1);
  });

  it("decrement value", () => {
    common.decrement();
    expect(common.count).toEqual(0);
  });
});
