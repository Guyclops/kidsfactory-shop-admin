import CommonStore from "./common/common";

class Store {
  public common: CommonStore;

  constructor() {
    this.common = new CommonStore(this);
  }
}

export default Store;
